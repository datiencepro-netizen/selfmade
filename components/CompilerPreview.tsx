import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Mark } from "./Mark";
import { CTA, Arrow } from "./Button";

/* Token colors for the mock editor (warm-dark theme) */
const kw = "text-[#d9a8ff]";
const fn = "text-[#82aaff]";
const str = "text-[#c3e88d]";
const pn = "text-[#efeadc]/40";
const vr = "text-[#efeadc]/90";

function Line({ n, indent = 0, children }: { n: number; indent?: number; children: ReactNode }) {
  return (
    <div className="flex">
      <span className="w-9 shrink-0 select-none pr-4 text-right text-[#efeadc]/20">{n}</span>
      <span style={{ paddingLeft: indent * 18 }}>{children}</span>
    </div>
  );
}

const FEATURES = [
  { t: "Ejecución en tiempo real", d: "Corre tu código en la misma interfaz. Sin instalar nada." },
  { t: "Feedback automático", d: "Qué está bien, qué no y por qué — en cada intento." },
  { t: "Dificultad adaptativa", d: "El nivel sube o baja según tu desempeño real." },
];

export function CompilerPreview() {
  return (
    <section id="plataforma" className="border-b border-line py-24 md:py-32">
      <div className="shell">
        <div className="grid items-end gap-7 md:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div>
              <p className="eyebrow text-ink-faint">La plataforma</p>
              <h2 className="text-display-sm mt-5 max-w-[16ch] font-semibold">
                Aprende escribiendo código. No viéndolo.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="leading-relaxed text-ink-soft md:pb-2 md:text-lg">
              Lecciones paso a paso, ejercicios tipo LeetCode y un compilador
              integrado. Escribes, ejecutas y recibes feedback — todo en la misma
              pantalla, sin fricción.
            </p>
          </Reveal>
        </div>

        {/* Editor mock */}
        <Reveal delay={120}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-ink/12 bg-[#15140e] shadow-[0_50px_90px_-50px_rgba(22,20,16,0.6)]">
            {/* Title bar */}
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <span className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </span>
              <span className="ml-2 font-mono text-xs text-[#efeadc]/50">two_sum.py</span>
              <span className="ml-auto hidden rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-[#efeadc]/60 sm:inline">
                Python 3.12
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-medium text-white">
                <span className="text-[8px]">▶</span> Run
              </span>
            </div>

            {/* Problem + code */}
            <div className="grid md:grid-cols-[0.85fr_1.5fr]">
              {/* Problem */}
              <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
                <span className="rounded-full bg-[#c3e88d]/15 px-2.5 py-0.5 font-mono text-[11px] text-[#c3e88d]">
                  Fácil
                </span>
                <h4 className="mt-3 font-display text-base font-semibold text-[#efeadc]">Two Sum</h4>
                <p className="mt-2 text-[13px] leading-relaxed text-[#efeadc]/55">
                  Dado un arreglo y un objetivo, devuelve los índices de los dos
                  números que suman el objetivo.
                </p>
                <div className="mt-4 rounded-lg bg-white/[0.04] p-3 font-mono text-[12px] leading-relaxed text-[#efeadc]/70">
                  nums = [2, 7, 11, 15]
                  <br />
                  target = 9
                  <br />
                  <span className="text-[#c3e88d]"># → [0, 1]</span>
                </div>
              </div>

              {/* Code */}
              <div className="overflow-x-auto p-4 font-mono text-[13px] leading-[1.75]">
                <Line n={1}>
                  <span className={kw}>def</span> <span className={fn}>two_sum</span>
                  <span className={pn}>(</span>
                  <span className={vr}>nums</span>
                  <span className={pn}>,</span> <span className={vr}>target</span>
                  <span className={pn}>):</span>
                </Line>
                <Line n={2} indent={1}>
                  <span className={vr}>seen</span> <span className={pn}>=</span>{" "}
                  <span className={pn}>{"{}"}</span>
                </Line>
                <Line n={3} indent={1}>
                  <span className={kw}>for</span> <span className={vr}>i</span>
                  <span className={pn}>,</span> <span className={vr}>n</span>{" "}
                  <span className={kw}>in</span> <span className={fn}>enumerate</span>
                  <span className={pn}>(</span>
                  <span className={vr}>nums</span>
                  <span className={pn}>):</span>
                </Line>
                <Line n={4} indent={2}>
                  <span className={vr}>need</span> <span className={pn}>=</span>{" "}
                  <span className={vr}>target</span> <span className={pn}>-</span>{" "}
                  <span className={vr}>n</span>
                </Line>
                <Line n={5} indent={2}>
                  <span className={kw}>if</span> <span className={vr}>need</span>{" "}
                  <span className={kw}>in</span> <span className={vr}>seen</span>
                  <span className={pn}>:</span>
                </Line>
                <Line n={6} indent={3}>
                  <span className={kw}>return</span> <span className={pn}>[</span>
                  <span className={vr}>seen</span>
                  <span className={pn}>[</span>
                  <span className={vr}>need</span>
                  <span className={pn}>],</span> <span className={vr}>i</span>
                  <span className={pn}>]</span>
                </Line>
                <Line n={7} indent={2}>
                  <span className={vr}>seen</span>
                  <span className={pn}>[</span>
                  <span className={vr}>n</span>
                  <span className={pn}>]</span> <span className={pn}>=</span>{" "}
                  <span className={vr}>i</span>
                </Line>
                <Line n={8} indent={1}>
                  <span className={kw}>return</span> <span className={pn}>[]</span>
                  <span className="caret ml-0.5 inline-block h-[15px] w-[7px] translate-y-[3px] bg-[#efeadc]/80" />
                </Line>
              </div>
            </div>

            {/* Result + tutor feedback */}
            <div className="border-t border-white/10 bg-white/[0.03] px-5 py-4">
              <div className="flex flex-wrap items-center gap-2 text-[13px]">
                <span className="font-medium text-[#c3e88d]">✓ 4/4 casos superados</span>
                <span className="text-[#efeadc]/25">·</span>
                <span className="font-mono text-[#efeadc]/50">12 ms · O(n)</span>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-[#efeadc]/70">
                <span className="font-medium text-accent-soft">Tutor · </span>
                Resuelto en O(n): cambiaste la búsqueda anidada por un diccionario.
                ¿Sabrías explicar por qué eso baja la complejidad de O(n²) a O(n)?
              </p>
            </div>
          </div>
        </Reveal>

        {/* Feature captions */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.t} delay={i * 90}>
              <div className="flex gap-3">
                <span className="mt-1 text-accent">
                  <Mark className="h-3.5 w-3.5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold">{f.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{f.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-12 flex flex-col items-start gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-ink-soft">
              Esto no es una maqueta. Abre el compilador, escribe Python y ejecútalo de verdad —
              en tu navegador.
            </p>
            <CTA href="/practica">
              Abre el compilador <Arrow />
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
