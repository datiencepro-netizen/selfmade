import { curriculum, formatDuration } from "@/lib/curriculum";
import { sprint1Lessons } from "@/lib/lessons/sprint-1";
import ChapterProgressBar from "@/components/academia/lesson/ChapterProgressBar";
import ChatLesson from "@/components/academia/lesson/ChatLesson";
import Link from "next/link";
import { notFound } from "next/navigation";

const allLessons = [...sprint1Lessons];

function getLessonData(id: string) {
  return allLessons.find((l) => l.id === id);
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string; chapterId: string; lessonId: string }>;
}) {
  const { id, chapterId, lessonId } = await params;
  const sprint = curriculum.find((s) => s.id === id);
  if (!sprint) notFound();

  const chapterIndex = sprint.chapters.findIndex((c) => c.id === chapterId);
  if (chapterIndex === -1) notFound();
  const chapter = sprint.chapters[chapterIndex];

  const lesson = getLessonData(lessonId) ?? {
    id: lessonId,
    sprintId: id,
    chapterId: chapterId,
    title: chapter.title,
    durationMin: chapter.durationMin,
    type: "chat" as const,
    blocks: [
      {
        type: "instructor" as const,
        text: "Esta lección estará disponible pronto. ¡El contenido se está preparando! 🚀",
      },
    ],
  };

  const lessons = chapter.lessons ?? [
    { id: chapter.id, title: chapter.title, durationMin: chapter.durationMin, type: "chat" },
  ];
  const lessonIndex = lessons.findIndex((l) => l.id === lessonId);
  const nextLesson = lessons[lessonIndex + 1];
  const nextChapter = sprint.chapters[chapterIndex + 1];

  const progressSegments = lessons.map((l, i) => ({
    id: l.id,
    completed: i < lessonIndex,
    current: i === lessonIndex,
  }));

  return (
    <div className="flex flex-col min-h-full">
      {/* Breadcrumb */}
      <nav className="mb-5 flex items-center gap-2 text-xs text-ink-faint flex-wrap">
        <Link href="/academia" className="hover:text-ink transition-colors">Contenido</Link>
        <span>/</span>
        <Link href={`/academia/sprints/${sprint.id}`} className="hover:text-ink transition-colors">
          {sprint.label}
        </Link>
        <span>/</span>
        <Link href={`/academia/sprints/${sprint.id}/${chapter.id}`} className="hover:text-ink transition-colors">
          Cap. {chapterIndex + 1}
        </Link>
        <span>/</span>
        <span className="text-ink truncate max-w-[180px]">{lesson.title}</span>
      </nav>

      {/* Progress bar */}
      <ChapterProgressBar
        chapterTitle={chapter.title}
        chapterIndex={chapterIndex + 1}
        totalChapters={sprint.chapters.length}
        segments={progressSegments}
      />

      {/* Lesson meta */}
      <div className="mt-8 mb-6 max-w-2xl mx-auto w-full">
        <p className="text-xs text-ink-faint mb-1">{formatDuration(lesson.durationMin)}</p>
        <h1 className="font-display font-bold text-2xl text-ink leading-snug">{lesson.title}</h1>
      </div>

      {/* Chat content */}
      <div className="flex-1 max-w-2xl mx-auto w-full">
        <ChatLesson blocks={lesson.blocks} />
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 bg-paper/90 backdrop-blur border-t border-line mt-8 px-4 py-3 flex items-center justify-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-paper-soft border border-line text-sm text-ink-soft hover:text-ink hover:border-line-strong transition-colors">
          <span>⭐</span> Valorar lección
        </button>
        {nextLesson ? (
          <Link
            href={`/academia/sprints/${sprint.id}/${chapter.id}/${nextLesson.id}`}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-ink text-paper text-sm font-medium hover:bg-ink/90 transition-colors"
          >
            Siguiente <span>→</span>
          </Link>
        ) : nextChapter ? (
          <Link
            href={`/academia/sprints/${sprint.id}/${nextChapter.id}`}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-ink text-paper text-sm font-medium hover:bg-ink/90 transition-colors"
          >
            Siguiente capítulo <span>→</span>
          </Link>
        ) : (
          <Link
            href={`/academia/sprints/${sprint.id}`}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-accent text-paper text-sm font-medium hover:bg-accent-ink transition-colors"
          >
            ¡Sprint completado! 🎉
          </Link>
        )}
      </div>
    </div>
  );
}
