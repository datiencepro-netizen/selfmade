import { Reveal } from "./Reveal";
import { Mark } from "./Mark";
import { Arrow } from "./Button";

const GRADUATION = [
  "Explicas cada concepto clave, paso a paso, sin ayuda.",
  "Resuelves problemas reales de complejidad laboral.",
  "Pasas simulaciones de entrevista técnica con feedback positivo.",
  "Muestras 3–5 proyectos profesionales en GitHub.",
];

export function FinalCTA() {
  return (
    <section id="empieza" className="bg-ink text-paper">
      <div className="shell py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <Reveal>
              <p className="eyebrow text-accent-soft">Graduación</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-display mt-5 font-semibold text-paper">
                Empieza tu transformación.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/65">
                Elige tu rol y deja que el bootcamp lea el mercado, trace tu ruta
                y cierre cada hueco hasta que estés listo para aplicar con
                confianza comprobada.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="#roles"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-paper px-6 py-3 text-[15px] font-medium text-ink transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] hover:bg-accent hover:text-white"
                >
                  Elige tu rol <Arrow />
                </a>
                <a
                  href="#mercado"
                  className="group inline-flex items-center gap-2 text-[15px] font-medium text-paper/80 transition-colors hover:text-paper"
                >
                  Ver cómo funciona <Arrow />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="rounded-3xl border border-paper/15 bg-paper/[0.04] p-7 md:p-9">
              <p className="eyebrow text-paper/50">Te gradúas cuando</p>
              <ul className="mt-5 space-y-4">
                {GRADUATION.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-paper/85">
                    <span className="mt-1 shrink-0 text-accent-soft">
                      <Mark className="h-3.5 w-3.5" />
                    </span>
                    <span className="leading-relaxed">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
