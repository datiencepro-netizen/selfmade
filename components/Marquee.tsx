import { Mark } from "./Mark";

const STACK = [
  "Python", "PyTorch", "SQL", "React", "Docker", "TypeScript",
  "scikit-learn", "AWS", "LangChain", "Kubernetes", "FastAPI",
  "Postgres", "Git", "Spark", "RAG", "Vector DBs", "MLflow",
  "pandas", "Node.js", "Claude API",
];

function Item({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-10">
      <span className="text-[15px] font-medium tracking-tight text-ink-soft">
        {label}
      </span>
      <span className="text-accent/45">
        <Mark className="h-3 w-3" />
      </span>
    </span>
  );
}

export function Marquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-line bg-paper-soft/70 py-5"
      aria-label="Tecnologías más solicitadas por el mercado"
    >
      <div className="marquee-group flex">
        <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
          {[...STACK, ...STACK].map((s, i) => (
            <Item key={i} label={s} />
          ))}
        </div>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-paper-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-paper-soft to-transparent" />
    </section>
  );
}
