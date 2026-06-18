import { Reveal } from "./Reveal";

const PRINCIPLES = [
  { n: "01", t: "Repetición espaciada", d: "Refuerza conceptos a intervalos óptimos para que no se olviden." },
  { n: "02", t: "Intercalación", d: "Mezcla ejercicios de temas distintos para mejorar la transferencia." },
  { n: "03", t: "Elaboración", d: "Te obliga a explicar cada concepto con tus propias palabras." },
  { n: "04", t: "Feedback inmediato", d: "Sabes qué está mal antes de cementar el error." },
  { n: "05", t: "Andamiaje progresivo", d: "Empieza simple y sube la complejidad de forma gradual." },
];

export function CognitiveScience() {
  return (
    <section className="border-b border-line py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-ink-faint">Ciencia cognitiva aplicada</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-display-sm mt-5 max-w-[18ch] font-semibold">
            Diseñado como aprende el cerebro.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            No es fuerza de voluntad. Es método. Cada módulo aplica principios
            probados de la ciencia del aprendizaje para que lo que estudias se
            quede de verdad.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={(i % 3) * 70}>
              <div className="h-full bg-paper p-7 transition-colors duration-300 hover:bg-card">
                <span className="font-mono text-xs text-accent">{p.n}</span>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{p.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.d}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={140}>
            <div className="flex h-full flex-col justify-center bg-ink p-7 text-paper">
              <p className="font-display text-xl font-medium leading-snug tracking-tight">
                No memorizas. Entiendes. Y lo que entiendes, se queda.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
