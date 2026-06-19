import { curriculum, formatDuration } from "@/lib/curriculum";
import { getSprintProgress } from "@/app/actions/progress";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return curriculum.map((s) => ({ id: s.id }));
}

export default async function SprintPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sprint = curriculum.find((s) => s.id === id);
  const { completedChapters } = await getSprintProgress(id);
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
        {sprint.chapters.map((chapter, idx) => {
          const isDone = completedChapters.includes(chapter.id);
          const isUnlocked = idx === 0 || completedChapters.includes(sprint.chapters[idx - 1].id);

          const inner = (
            <>
              {/* Status circle */}
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  isDone
                    ? "border-green-500 bg-green-500"
                    : !isUnlocked
                    ? "border-line bg-paper-soft"
                    : "border-line-strong"
                }`}
              >
                {isDone ? (
                  <svg className="text-white" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : !isUnlocked ? (
                  <svg className="text-ink-faint" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                ) : null}
              </div>

              {/* Number + title */}
              <div className="flex-1 min-w-0">
                <span className="text-xs text-ink-faint mr-2">{idx + 1}.</span>
                <span className={`text-sm font-medium transition-colors ${isUnlocked ? "text-ink group-hover:text-accent" : "text-ink-faint"}`}>
                  {chapter.title}
                </span>
              </div>

              {/* Duration */}
              <span className="text-xs text-ink-faint flex-shrink-0">
                {formatDuration(chapter.durationMin)}
              </span>

              {/* Arrow or lock label */}
              {isUnlocked ? (
                <svg className="text-ink-faint group-hover:text-ink transition-colors flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              ) : (
                <span className="text-xs text-ink-faint flex-shrink-0">Bloqueado</span>
              )}
            </>
          );

          const lessonId = chapter.lessons?.[0]?.id ?? chapter.id;
          const singleLesson = !chapter.lessons || chapter.lessons.length === 1 ? { id: lessonId } : null;
          const chapterHref = singleLesson
            ? `/academia/sprints/${sprint.id}/${chapter.id}/${singleLesson.id}`
            : `/academia/sprints/${sprint.id}/${chapter.id}`;

          return isUnlocked ? (
            <Link
              key={chapter.id}
              href={chapterHref}
              className="group flex items-center gap-4 bg-card border border-line rounded-xl px-5 py-4 hover:border-line-strong hover:shadow-sm transition-all"
            >
              {inner}
            </Link>
          ) : (
            <div
              key={chapter.id}
              className="flex items-center gap-4 bg-paper-soft border border-line rounded-xl px-5 py-4 opacity-60 cursor-not-allowed"
            >
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}
