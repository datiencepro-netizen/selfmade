import { curriculum, formatDuration } from "@/lib/curriculum";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return curriculum.map((s) => ({ id: s.id }));
}

export default function SprintPage({ params }: { params: { id: string } }) {
  const sprint = curriculum.find((s) => s.id === params.id);
  if (!sprint) notFound();

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-ink-faint">
        <Link href="/academia" className="hover:text-ink transition-colors">
          Contenido
        </Link>
        <span>/</span>
        <span className="text-ink">{sprint.label || sprint.title}</span>
      </nav>

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-2xl bg-ink flex items-center justify-center text-3xl flex-shrink-0">
          {sprint.icon}
        </div>
        <div>
          {sprint.label && (
            <p className="text-xs font-medium text-ink-faint uppercase tracking-wider mb-0.5">
              {sprint.label}
            </p>
          )}
          <h1 className="font-display font-semibold text-2xl text-ink">{sprint.title}</h1>
          <p className="text-sm text-ink-faint mt-0.5">
            {sprint.chapters.length} capítulos
          </p>
        </div>
      </div>

      {/* Chapters list */}
      <div className="space-y-2">
        {sprint.chapters.map((chapter, idx) => (
          <Link
            key={chapter.id}
            href={`/academia/sprints/${sprint.id}/${chapter.id}`}
            className="group flex items-center gap-4 bg-card border border-line rounded-xl px-5 py-4 hover:border-line-strong hover:shadow-sm transition-all"
          >
            {/* Status circle */}
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                chapter.completed
                  ? "border-green-500 bg-green-500"
                  : "border-line-strong"
              }`}
            >
              {chapter.completed && (
                <svg className="text-white" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>

            {/* Number + title */}
            <div className="flex-1 min-w-0">
              <span className="text-xs text-ink-faint mr-2">{idx + 1}.</span>
              <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                {chapter.title}
              </span>
            </div>

            {/* Duration */}
            <span className="text-xs text-ink-faint flex-shrink-0">
              {formatDuration(chapter.durationMin)}
            </span>

            {/* Arrow */}
            <svg className="text-ink-faint group-hover:text-ink transition-colors flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
