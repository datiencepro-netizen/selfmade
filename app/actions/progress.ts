"use server";

import { createClient } from "@/lib/supabase/server";

export type QuizResult = {
  quiz_index: number;
  passed: boolean;
  attempts: number;
};

export async function markLessonComplete(
  lessonId: string,
  chapterId: string,
  sprintId: string,
  quizResults: QuizResult[]
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  const { error } = await supabase.from("lesson_progress").upsert(
    {
      user_id: user.id,
      lesson_id: lessonId,
      chapter_id: chapterId,
      sprint_id: sprintId,
      completed: true,
      completed_at: new Date().toISOString(),
      quiz_results: quizResults,
    },
    { onConflict: "user_id,lesson_id" }
  );

  return { error: error?.message };
}

export async function markChapterComplete(chapterId: string, sprintId: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  const { error } = await supabase.from("chapter_progress").upsert(
    {
      user_id: user.id,
      chapter_id: chapterId,
      sprint_id: sprintId,
      completed: true,
      completed_at: new Date().toISOString(),
    },
    { onConflict: "user_id,chapter_id" }
  );

  return { error: error?.message };
}

export async function getSprintProgress(sprintId: string): Promise<{
  completedChapters: string[];
  completedLessons: string[];
}> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { completedChapters: [], completedLessons: [] };

  const [chaptersRes, lessonsRes] = await Promise.all([
    supabase
      .from("chapter_progress")
      .select("chapter_id")
      .eq("user_id", user.id)
      .eq("sprint_id", sprintId)
      .eq("completed", true),
    supabase
      .from("lesson_progress")
      .select("lesson_id")
      .eq("user_id", user.id)
      .eq("sprint_id", sprintId)
      .eq("completed", true),
  ]);

  return {
    completedChapters: chaptersRes.data?.map((r) => r.chapter_id) ?? [],
    completedLessons: lessonsRes.data?.map((r) => r.lesson_id) ?? [],
  };
}
