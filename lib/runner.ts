import { loadEngine } from "./pyodide";
import type { Exercise } from "./exercises";

export type CaseResult = {
  ok: boolean;
  args: unknown[];
  expected: unknown;
  got?: unknown;
  error?: string;
  stdout?: string;
};

export type RunResult =
  | { kind: "exec"; error: string; stdout?: string }
  | { kind: "missing"; error: string }
  | { kind: "run"; passed: number; total: number; results: CaseResult[] };

/**
 * Python harness. Reads three globals injected from JS (USER_CODE, TESTS_JSON,
 * FUNC_NAME), executes the learner's code in an isolated namespace, calls the
 * target function on each test (with deep-copied args so mutation can't leak
 * between cases) and returns a JSON report. Stdout is captured per case.
 */
const HARNESS = `
import json, sys, io, traceback, copy

def _safe(v):
    try:
        json.dumps(v)
        return v
    except Exception:
        return repr(v)

def _run():
    tests = json.loads(TESTS_JSON)
    ns = {}
    buf = io.StringIO()
    real = sys.stdout
    try:
        sys.stdout = buf
        exec(USER_CODE, ns)
    except Exception:
        sys.stdout = real
        return json.dumps({"kind": "exec", "error": traceback.format_exc(), "stdout": buf.getvalue()})
    finally:
        sys.stdout = real

    fn = ns.get(FUNC_NAME)
    if not callable(fn):
        return json.dumps({"kind": "missing",
            "error": "No se encontró la función '" + FUNC_NAME + "(...)'. Revisa el nombre de tu función."})

    results = []
    passed = 0
    for t in tests:
        args = t["args"]
        expected = t["expected"]
        cap = io.StringIO()
        try:
            sys.stdout = cap
            got = fn(*[copy.deepcopy(a) for a in args])
            sys.stdout = real
            ok = (got == expected)
            if ok:
                passed += 1
            results.append({"ok": ok, "args": args, "expected": expected,
                            "got": _safe(got), "stdout": cap.getvalue()})
        except Exception:
            sys.stdout = real
            results.append({"ok": False, "args": args, "expected": expected,
                            "got": None, "error": traceback.format_exc(limit=2),
                            "stdout": cap.getvalue()})

    return json.dumps({"kind": "run", "passed": passed, "total": len(tests), "results": results})

_run()
`;

export async function runExercise(exercise: Exercise, code: string): Promise<RunResult> {
  const pyodide = await loadEngine();
  pyodide.globals.set("USER_CODE", code);
  pyodide.globals.set("TESTS_JSON", JSON.stringify(exercise.tests));
  pyodide.globals.set("FUNC_NAME", exercise.functionName);
  const output = await pyodide.runPythonAsync(HARNESS);
  return JSON.parse(output as string) as RunResult;
}
