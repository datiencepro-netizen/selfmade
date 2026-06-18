import { Reveal } from "./Reveal";

const COMPONENTS = [
  {
    n: "01",
    t: "Investigador de mercado laboral",
    d: "Analiza 100+ ofertas por rol y extrae lenguajes, herramientas y soft skills con su frecuencia de aparición.",
  },
  {
    n: "02",
    t: "Planes de estudio personalizados",
    d: "Currículo priorizado por demanda real: fundamentos primero, especialización después, con hitos medibles.",
  },
  {
    n: "03",
    t: "Plataforma con compilador integrado",
    d: "Lecciones paso a paso y ejercicios con ejecución de código en tiempo real y feedback automático.",
  },
  {
    n: "04",
    t: "Feedback adaptativo en tiempo real",
    d: "Chat que analiza tu código, explica tu error conceptual y genera mini-tests sobre lo que no entendiste.",
  },
  {
    n: "05",
    t: "Soft skills y entrevistas",
    d: "Simulaciones de entrevista técnica y code reviews que imitan la crítica real de equipos profesionales.",
  },
  {
    n: "06",
    t: "Portfolio building guiado",
    d: "Proyectos reales documentados y publicados en GitHub con READMEs que el mercado entiende y valora.",
  },
  {
    n: "07",
    t: "Ciencia cognitiva aplicada",
    d: "Repetición espaciada, intercalación, elaboración, feedback inmediato y andamiaje progresivo en cada módulo.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="border-b border-line py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <Reveal>
            <div>
              <p className="eyebrow text-ink-faint">El sistema</p>
              <h2 className="text-display-sm mt-5 max-w-[14ch] font-semibold">
                Un sistema. Siete componentes. Cero huecos.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="leading-relaxed text-ink-soft md:pb-2 md:text-lg">
              Cada pieza encadena con la siguiente: el mercado define el plan, el
              plan se practica en el compilador, el feedback cierra tus lagunas y
              el portfolio lo demuestra ante un equipo real.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-line">
          {COMPONENTS.map((c, i) => (
            <Reveal key={c.n} delay={(i % 4) * 55}>
              <div className="group grid grid-cols-[3rem_1fr] items-start gap-4 border-b border-line py-7 transition-colors duration-300 hover:bg-card md:grid-cols-[5rem_1.1fr_1.3fr] md:gap-8 md:px-4">
                <span className="font-display text-2xl font-semibold text-line-strong transition-colors duration-300 group-hover:text-accent md:text-[2rem]">
                  {c.n}
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight md:text-2xl">
                  {c.t}
                </h3>
                <p className="col-span-2 leading-relaxed text-ink-soft md:col-span-1 md:text-[15px]">
                  {c.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
