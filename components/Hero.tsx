import { CTA, Arrow } from "./Button";
import { Reveal } from "./Reveal";
import { Mark } from "./Mark";
import { ROLES } from "@/lib/roles";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Oversized editorial watermark */}
      <div
        className="pointer-events-none absolute -right-16 top-24 text-line-strong/30 md:right-0 md:top-28"
        aria-hidden="true"
      >
        <Mark className="h-48 w-48 md:h-80 md:w-80" />
      </div>

      <div className="shell relative z-10 pb-20 pt-32 md:pb-28 md:pt-44">
        <Reveal>
          <p className="eyebrow flex items-center gap-2.5 text-ink-soft">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Bootcamp inteligente · Preparación laboral IT
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="text-display mt-7 max-w-[15ch] font-semibold">
            El talento no se
            <br className="hidden sm:block" /> encuentra.{" "}
            <span className="text-accent">Se hace.</span>
          </h1>
        </Reveal>

        <Reveal delay={170}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Self-made transforma a alguien sin experiencia específica en un
            candidato competitivo y empleable para los roles de IT de mayor
            demanda — en el menor tiempo posible.
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <CTA href="#roles">
              Elige tu rol <Arrow />
            </CTA>
            <CTA href="#metodo" variant="ghost" className="text-ink-soft">
              Ver el método <Arrow />
            </CTA>
          </div>
        </Reveal>

        <Reveal delay={330}>
          <div className="mt-16 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-6">
            <span className="eyebrow text-ink-faint">Diseñado para futuros</span>
            {ROLES.map((r, i) => (
              <span key={r.id} className="flex items-center gap-4 text-sm">
                <a
                  href="#roles"
                  className="link-underline text-ink-soft transition-colors hover:text-ink"
                >
                  {r.short}
                </a>
                {i < ROLES.length - 1 && (
                  <span className="text-line-strong" aria-hidden="true">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
