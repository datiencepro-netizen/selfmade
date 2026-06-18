import { Reveal } from "./Reveal";
import { Mark } from "./Mark";

export function Manifesto() {
  return (
    <section className="border-b border-line py-28 md:py-40">
      <div className="shell">
        <Reveal>
          <span className="inline-block text-accent">
            <Mark className="h-8 w-8" />
          </span>
        </Reveal>
        <Reveal delay={90}>
          <blockquote className="mt-8 max-w-[18ch] font-display text-3xl font-medium leading-[1.06] tracking-tight md:text-6xl">
            No te enseñamos a aprobar un curso. Te preparamos para que un equipo
            real te diga <span className="text-accent">que sí.</span>
          </blockquote>
        </Reveal>
        <Reveal delay={170}>
          <p className="eyebrow mt-9 text-ink-faint">El método Self-made</p>
        </Reveal>
      </div>
    </section>
  );
}
