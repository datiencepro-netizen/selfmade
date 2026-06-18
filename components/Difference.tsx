import { Reveal } from "./Reveal";
import { Mark } from "./Mark";

const PILLARS = [
  {
    k: "Más profundo en el feedback",
    d: "Análisis línea por línea de tu propio código. Te decimos qué está mal, por qué, y dónde está el error conceptual — no respuestas genéricas de manual.",
  },
  {
    k: "Más profundo en la práctica",
    d: "Si repites una duda sobre un tema, el sistema detecta el patrón y añade ejercicios progresivos extra antes de dejarte avanzar.",
  },
  {
    k: "Más profundo en la comprensión",
    d: "Accedes al proceso cognitivo completo: no solo el resultado, sino el razonamiento paso a paso y cómo conecta con lo que ya sabes.",
  },
  {
    k: "Amplificado por IA",
    d: "Un tutor que detecta tus lagunas en tiempo real, genera mini-tests sobre lo que dijiste no entender y se adapta a tu ritmo.",
  },
];

export function Difference() {
  return (
    <section className="bg-ink text-paper">
      <div className="shell py-24 md:py-36">
        <Reveal>
          <p className="eyebrow text-accent-soft">Feedback adaptativo en tiempo real</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-display-sm mt-5 max-w-[20ch] font-semibold text-paper">
            ¿Nuestra diferencia?{" "}
            <span className="text-paper/55">No avanzas con huecos.</span>
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-paper/15">
          {PILLARS.map((p, i) => (
            <Reveal key={p.k} delay={i * 70}>
              <div className="grid items-baseline gap-3 border-b border-paper/15 py-8 md:grid-cols-[0.55fr_1fr] md:gap-12">
                <div className="flex items-center gap-4">
                  <span className="text-accent-soft">
                    <Mark className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-2xl font-medium tracking-tight text-paper md:text-[1.85rem]">
                    {p.k}
                  </h3>
                </div>
                <p className="leading-relaxed text-paper/65 md:text-lg">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
