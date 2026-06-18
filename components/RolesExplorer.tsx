"use client";

import { useState, type CSSProperties } from "react";
import { ROLES } from "@/lib/roles";
import { Reveal } from "./Reveal";
import { Mark } from "./Mark";
import { CTA, Arrow } from "./Button";

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card px-5 py-4">
      <p className="eyebrow text-ink-faint">{label}</p>
      <p className="mt-1.5 text-sm font-medium text-ink">{value}</p>
    </div>
  );
}

export function RolesExplorer() {
  const [active, setActive] = useState(0);
  const role = ROLES[active];

  return (
    <section id="roles" className="border-b border-line py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-ink-faint">Tu ruta personalizada</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-display-sm mt-5 max-w-[22ch] font-semibold">
            Elige el rol. Trazamos la ruta sobre la demanda real.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-[0.85fr_1.55fr]">
          {/* Selector */}
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {ROLES.map((r, i) => {
              const isActive = i === active;
              return (
                <button
                  key={r.id}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group flex min-w-[230px] flex-1 items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:min-w-0 ${
                    isActive
                      ? "border-ink/80 bg-card shadow-[0_20px_46px_-30px_rgba(22,20,16,0.5)]"
                      : "border-line bg-paper hover:border-ink/30 hover:bg-card/60"
                  }`}
                >
                  <span
                    className="mt-0.5 transition-colors duration-300"
                    style={{ color: isActive ? r.accent : "var(--color-line-strong)" }}
                  >
                    <Mark className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-lg font-semibold tracking-tight">
                      {r.short}
                    </span>
                    <span
                      className={`mt-0.5 block truncate text-sm text-ink-soft transition-opacity ${
                        isActive ? "opacity-100" : "opacity-60"
                      }`}
                    >
                      {r.name}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel — remounts on role change to replay entrance */}
          <div
            key={role.id}
            className="panel-in rounded-3xl border border-line bg-card p-7 md:p-10"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight md:text-[2rem]">
                  {role.name}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink-soft">{role.blurb}</p>
              </div>
              <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs text-ink-soft">
                {role.postingsAnalyzed} ofertas analizadas
              </span>
            </div>

            {/* Languages */}
            <div className="mt-8">
              <p className="eyebrow text-ink-faint">Lenguajes núcleo · frecuencia en ofertas</p>
              <div className="mt-4 space-y-3.5">
                {role.languages.map((l) => (
                  <div key={l.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{l.name}</span>
                      <span className="tabular-nums text-ink-faint">{l.freq}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-paper-soft">
                      <div
                        className="bar-grow h-full rounded-full"
                        style={{ "--w": `${l.freq}%`, backgroundColor: role.accent } as CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mt-8">
              <p className="eyebrow text-ink-faint">Herramientas clave</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {role.tools.map((t) => (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1.5 text-sm"
                  >
                    {t.name}
                    <span className="tabular-nums text-xs text-ink-faint">{t.freq}%</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Meta */}
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              <Meta label="Experiencia típica" value={role.seniority} />
              <Meta label="Rango salarial (USD)" value={role.salaryUsd} />
            </div>

            {/* Trend + soft skills */}
            <div className="mt-6 rounded-2xl bg-paper-soft/70 p-5">
              <p className="text-sm leading-relaxed text-ink">
                <span className="font-medium">Tendencia · </span>
                {role.trend}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {role.softSkills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-ink/[0.06] px-3 py-1 text-xs text-ink-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <CTA href="#empieza">
                Generar mi plan de {role.short} <Arrow />
              </CTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
