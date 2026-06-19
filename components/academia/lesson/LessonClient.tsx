"use client";

import { useState } from "react";
import Link from "next/link";
import ChatLesson from "./ChatLesson";
import AIConsultButton from "./AIConsultButton";
import type { LessonBlock } from "@/lib/lessons";
import type { QuizResult } from "@/app/actions/progress";
import { markLessonComplete, markChapterComplete } from "@/app/actions/progress";

interface Props {
  blocks: LessonBlock[];
  lessonId: string;
  chapterId: string;
  sprintId: string;
  isLastLesson: boolean;
  nextHref: string | null;
  nextLabel: string;
  lessonTitle: string;
  sprintTitle: string;
  chapterTitle: string;
}

export default function LessonClient({
  blocks,
  lessonId,
  chapterId,
  sprintId,
  isLastLesson,
  nextHref,
  nextLabel,
  lessonTitle,
  sprintTitle,
  chapterTitle,
}: Props) {
  const [completed, setCompleted] = useState(false);

  async function handleComplete(quizResults: QuizResult[]) {
    setCompleted(true);
    await markLessonComplete(lessonId, chapterId, sprintId, quizResults);
    if (isLastLesson) {
      await markChapterComplete(chapterId, sprintId);
    }
  }

  return (
    <>
      <div className="flex-1 max-w-2xl mx-auto w-full">
        <ChatLesson
          blocks={blocks}
          onComplete={handleComplete}
          sprintId={sprintId}
          lessonId={lessonId}
        />
      </div>

      <div className="sticky bottom-0 bg-paper/90 backdrop-blur border-t border-line mt-8 px-4 py-3 flex items-center justify-center gap-3 flex-wrap">
        <AIConsultButton
          lessonTitle={lessonTitle}
          sprintTitle={sprintTitle}
          chapterTitle={chapterTitle}
        />
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-paper-soft border border-line text-sm text-ink-soft hover:text-ink hover:border-line-strong transition-colors">
          <span>⭐</span> Valorar lección
        </button>

        {nextHref ? (
          completed ? (
            <Link
              href={nextHref}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-ink text-paper text-sm font-medium hover:bg-ink/90 transition-colors"
            >
              {nextLabel} <span>→</span>
            </Link>
          ) : (
            <button
              disabled
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-ink/30 text-paper/60 text-sm font-medium cursor-not-allowed"
              title="Completa la lección para continuar"
            >
              {nextLabel} <span>→</span>
            </button>
          )
        ) : (
          completed && (
            <Link
              href={`/academia/sprints/${sprintId}`}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-accent text-paper text-sm font-medium hover:bg-accent-ink transition-colors"
            >
              ¡Sprint completado! 🎉
            </Link>
          )
        )}
      </div>
    </>
  );
}
