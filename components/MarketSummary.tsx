import { Reveal } from "./Reveal";
import { Mark } from "./Mark";
import { ROLES, MARKET_SUMMARY } from "@/lib/roles";

const totalPostings = ROLES.reduce((acc, r) => acc + r.postingsAnalyzed, 0);

const METRICS = [
  { value: String(totalPostings), label: "Ofertas reales analizadas" },
  { value: "4", label: "Roles de alta demanda" },
  { value: "3", label: "Lenguajes que dominan" },
  { value: "100%", label: "Currículo guiado por datos" },
];

const COLUMNS = [
  { tag: "Top 3", title: "Lenguajes que mandan", items: MARKET_SUMMARY.topLanguages },
  { tag: "5 críticas", title: "Herramientas imprescindibles", items: MARKET_SUMMARY.criticalTools },
  { tag: "No negociables", title: "Soft skills decisivas", items: MARKET_SUMMARY.nonNegotiableSoftSkills },
];

export function MarketSummary() {
  return (
    <section id="mercado" className="border-b border-line py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-ink-faint">Inteligencia de mercado</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-display-sm mt-5 max-w-[20ch] font-semibold">
            Leemos el mercado para que tú no tengas que adivinar.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Analizamos más de 100 postulaciones reales por rol en LinkedIn,
            Indeed, OCC y Wellfound. Extraemos cada lenguaje, framework y soft
            skill — con su frecuencia de aparición — y construimos tu currículo
            sobre la demanda real, no sobre modas.
          </p>
        </Reveal>

        {/* Metrics strip */}
        <Reveal delay={200}>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label} className="bg-paper px-6 py-8">
                <div className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  {m.value}
                </div>
                <div className="mt-2 text-sm text-ink-soft">{m.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Generalised patterns */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {COLUMNS.map((col, i) => (
            <Reveal key={col.title} delay={120 + i * 90}>
              <div className="h-full rounded-2xl border border-line bg-card p-7">
                <p className="eyebrow text-accent">{col.tag}</p>
                <h3 className="mt-3 font-display text-xl font-semibold">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px] text-ink-soft">
                      <span className="text-accent/60">
                        <Mark className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
