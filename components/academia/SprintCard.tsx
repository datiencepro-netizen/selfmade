import Link from "next/link";
import { Sprint, completedChapters, formatDuration, totalMinutes } from "@/lib/curriculum";

export default function SprintCard({ sprint }: { sprint: Sprint }) {
  const done = completedChapters(sprint.chapters);
  const total = sprint.chapters.length;
  const allDone = done === total;
  const started = done > 0;
  const remaining = total - done;
  const remainingMin = sprint.chapters
    .filter((c) => !c.completed)
    .reduce((acc, c) => acc + c.durationMin, 0);

  return (
    <Link
      href={`/academia/sprints/${sprint.id}`}
      className="group block bg-card border border-line rounded-2xl p-5 hover:border-line-strong hover:shadow-sm transition-all"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-ink flex items-center justify-center text-2xl flex-shrink-0">
          {sprint.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {sprint.label && (
            <p className="text-xs font-medium text-ink-faint uppercase tracking-wider mb-0.5">
              {sprint.label}
            </p>
          )}
          <h3 className="font-display font-semibold text-ink text-base leading-snug group-hover:text-accent transition-colors">
            {sprint.title}
          </h3>

          <div className="mt-2 flex items-center gap-1.5 text-sm text-ink-faint">
            {/* Status icon */}
            {allDone ? (
              <svg className="text-green-600" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            ) : started ? (
              <svg className="text-accent" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            ) : null}

            <span>
              {allDone
                ? `${total} capítulos · ${formatDuration(totalMinutes(sprint.chapters))}`
                : started
                ? `Falta${remaining > 1 ? "n" : ""} ${remaining} lección${remaining > 1 ? "es" : ""} · ${formatDuration(remainingMin)}`
                : `${total} capítulos · ${formatDuration(totalMinutes(sprint.chapters))}`}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
