import { Mark } from "./Mark";

const COLS: { title: string; links: { l: string; href: string }[] }[] = [
  {
    title: "Roles",
    links: [
      { l: "Machine Learning Engineer", href: "#roles" },
      { l: "Data Scientist", href: "#roles" },
      { l: "Developer", href: "#roles" },
      { l: "AI Engineer", href: "#roles" },
    ],
  },
  {
    title: "Sistema",
    links: [
      { l: "Inteligencia de mercado", href: "#mercado" },
      { l: "Plan personalizado", href: "#roles" },
      { l: "Plataforma", href: "#plataforma" },
      { l: "Método", href: "#metodo" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { l: "Cómo funciona", href: "#mercado" },
      { l: "Ciencia cognitiva", href: "#metodo" },
      { l: "Portfolio", href: "#empieza" },
      { l: "FAQ", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="shell py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="text-accent">
                <Mark className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">Self-made</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              El bootcamp inteligente que te lleva de cero a contratable en los
              roles de IT de mayor demanda.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-ink-faint">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.l}>
                    <a
                      href={link.href}
                      className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      {link.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Self-made — El talento no se encuentra. Se hace.</span>
          <span className="flex gap-5">
            <a href="#" className="transition-colors hover:text-ink">GitHub</a>
            <a href="#" className="transition-colors hover:text-ink">LinkedIn</a>
            <a href="#" className="transition-colors hover:text-ink">Privacidad</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
