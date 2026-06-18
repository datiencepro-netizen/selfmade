"use client";

import Link from "next/link";

export default function AcademiaTopbar() {
  return (
    <header className="h-14 border-b border-line bg-card px-6 flex items-center justify-between sticky top-0 z-10">
      <div />

      <div className="flex items-center gap-3">
        {/* Invite */}
        <button className="text-sm text-ink-soft hover:text-ink transition-colors hidden sm:block">
          Invitar amigos
        </button>

        {/* Help */}
        <button
          title="Ayuda"
          className="w-8 h-8 rounded-lg border border-line flex items-center justify-center text-ink-faint hover:text-ink hover:border-line-strong transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        </button>

        {/* Notifications */}
        <button
          title="Notificaciones"
          className="w-8 h-8 rounded-lg border border-line flex items-center justify-center text-ink-faint hover:text-ink hover:border-line-strong transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </button>

        {/* Avatar */}
        <Link href="/academia/perfil" title="Perfil">
          <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center">
            <span className="text-paper text-xs font-medium">U</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
