"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/academia",
    label: "Inicio",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    href: "/academia/sprints",
    label: "Sprints",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
  },
  {
    href: "/academia/buscar",
    label: "Buscar",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
];

export default function AcademiaSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-14 flex flex-col items-center py-4 border-r border-line bg-card gap-2 sticky top-0 h-screen">
      {/* Logo mark */}
      <Link href="/" className="mb-4 w-8 h-8 rounded-lg bg-ink flex items-center justify-center flex-shrink-0">
        <span className="text-paper font-display font-bold text-xs">SM</span>
      </Link>

      {navItems.map((item) => {
        const active = pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link
            key={item.href}
            href={item.href}
            title={item.label}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
              active
                ? "bg-ink text-paper"
                : "text-ink-faint hover:text-ink hover:bg-paper-soft"
            }`}
          >
            {item.icon}
          </Link>
        );
      })}
    </aside>
  );
}
