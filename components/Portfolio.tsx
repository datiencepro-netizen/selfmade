import { Reveal } from "./Reveal";
import { CTA, Arrow } from "./Button";

const PROJECTS = [
  {
    repo: "churn-predictor",
    role: "Data Scientist",
    desc: "Modelo de propensión al abandono con pipeline reproducible y dashboard de impacto.",
    lang: "Python",
    color: "#3572A5",
  },
  {
    repo: "rag-docs-assistant",
    role: "AI Engineer",
    desc: "Asistente RAG sobre documentación con evaluación automática de respuestas.",
    lang: "Python",
    color: "#7c3aed",
  },
  {
    repo: "vision-defect-api",
    role: "ML Engineer",
    desc: "Detección de defectos servida como API con Docker, FastAPI y suite de tests.",
    lang: "PyTorch",
    color: "#ee4c2c",
  },
  {
    repo: "devboard",
    role: "Developer",
    desc: "App full-stack de gestión con autenticación, CI/CD y cobertura de tests.",
    lang: "TypeScript",
    color: "#3178c6",
  },
];

function RepoIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 text-ink-faint" fill="currentColor" aria-hidden="true">
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H4.5a1 1 0 0 0 0 2h8.75a.75.75 0 0 1 0 1.5H4.5A2.5 2.5 0 0 1 2 14.5zm2.5-1A1 1 0 0 0 3.5 2.5v9.05A2.5 2.5 0 0 1 4.5 11h8V1.5z" />
    </svg>
  );
}

export function Portfolio() {
  return (
    <section className="border-b border-line py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <Reveal>
            <div>
              <p className="eyebrow text-ink-faint">Tu prueba</p>
              <h2 className="text-display-sm mt-5 max-w-[16ch] font-semibold">
                Sales con pruebas, no con promesas.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="leading-relaxed text-ink-soft md:pb-2 md:text-lg">
              Mientras aprendes, construyes 3 a 5 proyectos reales. Documentas
              decisiones y trade-offs, publicas en GitHub con READMEs
              profesionales y preparas cómo los explicarás en una entrevista.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.repo} delay={(i % 2) * 90}>
              <div className="group h-full rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_24px_50px_-32px_rgba(22,20,16,0.4)]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <RepoIcon />
                    <span className="font-mono text-[15px] font-medium text-ink group-hover:text-accent">
                      {p.repo}
                    </span>
                  </span>
                  <span className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-ink-faint">
                    {p.role}
                  </span>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.desc}</p>
                <div className="mt-5 flex items-center gap-5 text-xs text-ink-faint">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                    {p.lang}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#1b9e74]">✓</span> README documentado
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10">
            <CTA href="#empieza" variant="outline">
              Empieza tu portfolio <Arrow />
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
