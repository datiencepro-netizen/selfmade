"use client";

import { useEffect, useState } from "react";
import { Mark } from "./Mark";
import { CTA, Arrow } from "./Button";

const LINKS = [
  { href: "#mercado", label: "Mercado" },
  { href: "#roles", label: "Roles" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#metodo", label: "Método" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line/70 bg-paper/75 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="shell relative z-50 flex h-16 items-center justify-between md:h-[4.5rem]">
          <a href="#top" className="flex items-center gap-2 text-ink" aria-label="Self-made — inicio">
            <span className="text-accent transition-transform duration-500 hover:rotate-90">
              <Mark className="h-[18px] w-[18px]" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">Self-made</span>
          </a>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/login"
              className="hidden md:inline-flex items-center text-sm font-medium text-ink-soft hover:text-ink transition-colors px-3 py-2"
            >
              Iniciar sesión
            </a>
            <span className="hidden md:inline-flex">
              <CTA href="/practica">
                Empieza <Arrow />
              </CTA>
            </span>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 md:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-[1.5px] w-4 bg-ink transition-all duration-300 ${
                    open ? "top-[5px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[5px] block h-[1.5px] w-4 bg-ink transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[1.5px] w-4 bg-ink transition-all duration-300 ${
                    open ? "top-[5px] -rotate-45" : "top-[10px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay — rendered outside <header> to avoid backdrop-filter stacking context */}
      <div
        className={`fixed inset-0 z-[200] bg-paper transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? "translate-y-0" : "pointer-events-none -translate-y-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-24">
          <div className="flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-5 font-display text-3xl font-medium tracking-tight text-ink transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <a
              href="/login"
              onClick={() => setOpen(false)}
              className="w-full text-center py-3 rounded-full border border-ink/15 font-medium text-ink transition-colors hover:bg-paper-soft"
            >
              Iniciar sesión
            </a>
            <CTA href="/practica" className="w-full">
              Empieza ahora <Arrow />
            </CTA>
          </div>
        </div>
      </div>
    </>
  );
}
