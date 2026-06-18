import { curriculum, formatDuration } from "@/lib/curriculum";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return curriculum.flatMap((sprint) =>
    sprint.chapters.map((chapter) => ({ id: sprint.id, chapterId: chapter.id }))
  );
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ id: string; chapterId: string }>;
}) {
  const { id, chapterId } = await params;
  const sprint = curriculum.find((s) => s.id === id);
  if (!sprint) notFound();

  const chapterIndex = sprint.chapters.findIndex((c) => c.id === chapterId);
  if (chapterIndex === -1) notFound();
  const chapter = sprint.chapters[chapterIndex];

  // Each chapter has a single lesson for now (the chapter itself is the lesson)
  const lessons = chapter.lessons ?? [
    { id: chapter.id, title: chapter.title, durationMin: chapter.durationMin, type: "chat" },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-ink-faint flex-wrap">
        <Link href="/academia" className="hover:text-ink transition-colors">Contenido</Link>
        <span>/</span>
        <Link href={`/academia/sprints/${id}`} className="hover:text-ink transition-colors">
          {sprint.label || sprint.title}
        </Link>
        <span>/</span>
        <span className="text-ink">Capítulo {chapterIndex + 1}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-medium text-ink-faint uppercase tracking-wider mb-1">
          Capítulo {chapterIndex + 1} / {sprint.chapters.length}
        </p>
        <h1 className="font-display font-semibold text-2xl text-ink">{chapter.title}</h1>
        <p className="text-sm text-ink-faint mt-1">{formatDuration(chapter.durationMin)}</p>
      </div>

      {/* Progress bar */}
      <div className="flex gap-1 mb-8">
        {lessons.map((_, i) => (
          <div key={i} className={`flex-1 h-1 rounded-full ${i === 0 ? "bg-accent" : "bg-line"}`} />
        ))}
      </div>

      {/* Lessons list */}
      <div className="space-y-2">
        {lessons.map((lesson, idx) => (
          <Link
            key={lesson.id}
            href={`/academia/sprints/${id}/${chapterId}/${lesson.id}`}
            className="group flex items-center gap-4 bg-card border border-line rounded-xl px-5 py-4 hover:border-line-strong hover:shadow-sm transition-all"
          >
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
              lesson.completed ? "border-green-500 bg-green-500" : "border-line-strong"
            }`}>
              {lesson.completed && (
                <svg className="text-white" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs text-ink-faint mr-2">{idx + 1}.</span>
              <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                {lesson.title}
              </span>
              <span className="ml-2 text-xs text-ink-faint capitalize">{lesson.type}</span>
            </div>
            <span className="text-xs text-ink-faint flex-shrink-0">{formatDuration(lesson.durationMin)}</span>
            <svg className="text-ink-faint group-hover:text-ink transition-colors flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
