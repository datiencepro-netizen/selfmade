"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { EXERCISES, type Exercise } from "@/lib/exercises";
import { runExercise, type RunResult } from "@/lib/runner";
import { Mark } from "@/components/Mark";

const CodeMirror = dynamic(() => import("@uiw/react-codemirror"), { ssr: false });

/* ---------- helpers ---------- */

function fmt(v: unknown): string {
  if (v === true) return "True";
  if (v === false) return "False";
  if (v === null || v === undefined) return "None";
  return JSON.stringify(v);
}

function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split("`").map((part, i) =>
        i % 2 === 1 ? (
          <code key={i} className="rounded bg-ink/[0.07] px-1.5 py-0.5 font-mono text-[0.85em]">
            {part}
          </code>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

const DIFF_STYLES: Record<Exercise["difficulty"], string> = {
  Fácil: "bg-[#1b9e74]/12 text-[#16855f]",
  Medio: "bg-[#d2691e]/12 text-[#b4560f]",
  Difícil: "bg-[#d6452b]/12 text-[#c23a22]",
};

/* ---------- engine status ---------- */

function EngineStatus({ state, error }: { state: "loading" | "ready" | "error"; error: string }) {
  if (state === "loading")
    return (
      <span className="flex items-center gap-2 text-sm text-ink-soft">
        <span className="h-3 w-3 animate-spin rounded-full border-[1.5px] border-ink/25 border-t-accent" />
        Cargando motor de Python…
      </span>
    );
  if (state === "error")
    return (
      <span className="flex items-center gap-2 text-sm text-[#c23a22]">
        <span className="h-2 w-2 rounded-full bg-[#c23a22]" />
        {error || "Error al cargar el motor"}
      </span>
    );
  return (
    <span className="flex items-center gap-2 text-sm text-ink-soft">
      <span className="h-2 w-2 rounded-full bg-[#1b9e74]" />
      Motor listo · Python 3.12
    </span>
  );
}

/* ---------- results ---------- */

function ResultsPanel({ ex, result }: { ex: Exercise; result: RunResult | undefined }) {
  if (!result)
    return (
      <p className="text-sm text-ink-faint">
        Escribe tu solución y pulsa{" "}
        <kbd className="rounded border border-line bg-paper px-1.5 py-0.5 font-mono text-[11px]">
          ⌘/Ctrl + ↵
        </kbd>{" "}
        para ejecutar contra los casos de prueba.
      </p>
    );

  if (result.kind === "exec")
    return (
      <div>
        <p className="text-sm font-medium text-[#c23a22]">Tu código no se pudo ejecutar</p>
        <pre className="mt-3 overflow-x-auto rounded-lg bg-ink/[0.04] p-3 font-mono text-[12px] leading-relaxed text-ink-soft">
          {result.error.trim()}
        </pre>
      </div>
    );

  if (result.kind === "missing")
    return <p className="text-sm font-medium text-[#b4560f]">{result.error}</p>;

  const allPassed = result.passed === result.total;
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className={`text-sm font-semibold ${allPassed ? "text-[#16855f]" : "text-[#b4560f]"}`}>
          {allPassed ? "✓" : "✗"} {result.passed}/{result.total} casos superados
        </p>
      </div>

      <ul className="mt-4 space-y-2">
        {result.results.map((c, i) => (
          <li
            key={i}
            className={`rounded-lg border px-3 py-2.5 font-mono text-[12.5px] ${
              c.ok ? "border-[#1b9e74]/25 bg-[#1b9e74]/[0.05]" : "border-[#d6452b]/25 bg-[#d6452b]/[0.05]"
            }`}
          >
            <div className="flex items-start gap-2">
              <span className={c.ok ? "text-[#16855f]" : "text-[#c23a22]"}>{c.ok ? "✓" : "✗"}</span>
              <div className="min-w-0 flex-1 break-words text-ink-soft">
                <span className="text-ink">
                  {ex.functionName}({c.args.map(fmt).join(", ")})
                </span>
                {!c.ok && (
                  <>
                    {" "}→ esperaba <span className="text-[#16855f]">{fmt(c.expected)}</span>, obtuviste{" "}
                    <span className="text-[#c23a22]">{c.error ? "error" : fmt(c.got)}</span>
                  </>
                )}
                {c.error && (
                  <pre className="mt-1.5 whitespace-pre-wrap text-[11px] text-[#c23a22]/80">
                    {c.error.trim()}
                  </pre>
                )}
                {c.stdout && c.stdout.trim() && (
                  <pre className="mt-1.5 whitespace-pre-wrap text-[11px] text-ink-faint">
                    stdout: {c.stdout.trim()}
                  </pre>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div
        className={`mt-4 rounded-xl p-4 text-sm leading-relaxed ${
          allPassed ? "bg-[#1b9e74]/[0.08] text-ink" : "bg-paper-soft text-ink-soft"
        }`}
      >
        {allPassed ? (
          <>
            <span className="font-medium text-[#16855f]">¡Resuelto! </span>
            Ahora consolídalo:{" "}
            <span className="text-ink">
              <RichText text={ex.conceptQuestion} />
            </span>
          </>
        ) : (
          <>
            <span className="font-medium text-ink">Casi. </span>
            Cada caso fallido muestra qué esperaba el sistema. Compara tu salida, ajusta y vuelve a
            ejecutar. Si te atascas, revela una pista.
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- main ---------- */

export function Playground() {
  const [exIndex, setExIndex] = useState(0);
  const ex = EXERCISES[exIndex];

  const [codeById, setCodeById] = useState<Record<string, string>>(() =>
    Object.fromEntries(EXERCISES.map((e) => [e.id, e.starterCode]))
  );
  const code = codeById[ex.id];
  const setCode = (val: string) => setCodeById((m) => ({ ...m, [ex.id]: val }));

  const [resultById, setResultById] = useState<Record<string, RunResult | undefined>>({});
  const result = resultById[ex.id];

  const [hintsById, setHintsById] = useState<Record<string, number>>({});
  const hintsShown = hintsById[ex.id] ?? 0;

  const [engine, setEngine] = useState<"loading" | "ready" | "error">("loading");
  const [engineError, setEngineError] = useState("");
  const [running, setRunning] = useState(false);

  const extensions = useMemo(() => [python()], []);

  useEffect(() => {
    let alive = true;
    import("@/lib/pyodide")
      .then((m) => m.loadEngine())
      .then(() => alive && setEngine("ready"))
      .catch((e) => {
        if (alive) {
          setEngine("error");
          setEngineError(e instanceof Error ? e.message : String(e));
        }
      });
    return () => {
      alive = false;
    };
  }, []);

  async function handleRun() {
    if (engine !== "ready" || running) return;
    setRunning(true);
    try {
      const r = await runExercise(ex, codeById[ex.id]);
      setResultById((m) => ({ ...m, [ex.id]: r }));
    } catch (e) {
      setResultById((m) => ({
        ...m,
        [ex.id]: { kind: "exec", error: e instanceof Error ? e.message : String(e) },
      }));
    } finally {
      setRunning(false);
    }
  }

  const runRef = useRef(handleRun);
  runRef.current = handleRun;
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        runRef.current();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-line bg-paper/80 backdrop-blur-xl">
        <div className="shell flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-accent">
              <Mark className="h-[18px] w-[18px]" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">Self-made</span>
            <span className="text-ink-faint">/ Práctica</span>
          </a>
          <EngineStatus state={engine} error={engineError} />
        </div>
      </header>

      {/* Exercise tabs */}
      <div className="shell pt-8">
        <p className="eyebrow text-ink-faint">Compilador integrado · dificultad progresiva</p>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {EXERCISES.map((e, i) => (
            <button
              key={e.id}
              onClick={() => setExIndex(i)}
              className={`flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-2 text-sm transition-colors ${
                i === exIndex
                  ? "border-ink/70 bg-ink text-paper"
                  : "border-line bg-paper text-ink-soft hover:border-ink/30"
              }`}
            >
              {e.title}
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] ${
                  i === exIndex ? "bg-paper/15 text-paper" : DIFF_STYLES[e.difficulty]
                }`}
              >
                {e.difficulty}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="shell grid gap-6 py-8 lg:grid-cols-[0.92fr_1.4fr]">
        {/* Problem */}
        <section className="rounded-2xl border border-line bg-card p-6 md:p-7">
          <div className="flex items-center gap-2">
            <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${DIFF_STYLES[ex.difficulty]}`}>
              {ex.difficulty}
            </span>
            <span className="text-xs text-ink-faint">{ex.track}</span>
          </div>
          <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight">{ex.title}</h1>
          <p className="mt-4 leading-relaxed text-ink-soft">
            <RichText text={ex.prompt} />
          </p>

          <div className="mt-5 space-y-2">
            {ex.examples.map((ex2, i) => (
              <div key={i} className="rounded-lg bg-paper-soft/70 p-3 font-mono text-[12.5px]">
                <span className="text-ink-faint">in </span>
                <span className="text-ink">{ex2.in}</span>
                <br />
                <span className="text-ink-faint">out </span>
                <span className="text-accent">{ex2.out}</span>
              </div>
            ))}
          </div>

          {/* Hints */}
          <div className="mt-6 border-t border-line pt-5">
            <div className="flex items-center justify-between">
              <p className="eyebrow text-ink-faint">Pistas</p>
              {hintsShown < ex.hints.length && (
                <button
                  onClick={() => setHintsById((m) => ({ ...m, [ex.id]: hintsShown + 1 }))}
                  className="text-sm text-accent hover:underline"
                >
                  Revelar pista {hintsShown + 1}/{ex.hints.length}
                </button>
              )}
            </div>
            {hintsShown === 0 ? (
              <p className="mt-2 text-sm text-ink-faint">
                Intenta primero por tu cuenta. Las pistas se revelan una a una.
              </p>
            ) : (
              <ol className="mt-3 space-y-2">
                {ex.hints.slice(0, hintsShown).map((h, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                    <span className="text-accent">{i + 1}.</span>
                    <span>
                      <RichText text={h} />
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>

        {/* Editor + results */}
        <section className="flex flex-col gap-5">
          <div className="overflow-hidden rounded-2xl border border-ink/12 bg-[#282c34] shadow-[0_40px_80px_-50px_rgba(22,20,16,0.6)]">
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
              <span className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </span>
              <span className="ml-2 font-mono text-xs text-white/50">solucion.py</span>
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => {
                    setCode(ex.starterCode);
                    setResultById((m) => ({ ...m, [ex.id]: undefined }));
                  }}
                  className="rounded-full px-3 py-1 text-[12px] text-white/55 transition-colors hover:text-white"
                >
                  Reiniciar
                </button>
                <button
                  onClick={handleRun}
                  disabled={engine !== "ready" || running}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-[12px] font-medium text-white transition-all hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {running ? (
                    <>
                      <span className="h-3 w-3 animate-spin rounded-full border-[1.5px] border-white/40 border-t-white" />
                      Ejecutando
                    </>
                  ) : (
                    <>
                      <span className="text-[8px]">▶</span> Ejecutar
                    </>
                  )}
                </button>
              </div>
            </div>
            <CodeMirror
              value={code}
              onChange={(v) => setCode(v)}
              theme={oneDark}
              extensions={extensions}
              height="380px"
              basicSetup={{
                lineNumbers: true,
                highlightActiveLine: true,
                foldGutter: false,
                autocompletion: false,
                indentOnInput: true,
              }}
            />
          </div>

          <div className="rounded-2xl border border-line bg-card p-5 md:p-6">
            <p className="eyebrow mb-4 text-ink-faint">Resultado · feedback automático</p>
            <ResultsPanel ex={ex} result={result} />
          </div>
        </section>
      </div>

      <footer className="shell pb-16 pt-4">
        <p className="text-xs text-ink-faint">
          El código se ejecuta 100% en tu navegador con Pyodide (Python compilado a WebAssembly).
          Nada se envía a un servidor.
        </p>
      </footer>
    </div>
  );
}
