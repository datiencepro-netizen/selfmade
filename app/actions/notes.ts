"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function saveNote(
  sprintId: string,
  lessonId: string,
  blockIndex: number,
  blockPreview: string,
  content: string
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "No autenticado" };

  const { error } = await supabase.from("user_notes").insert({
    user_id: user.id,
    sprint_id: sprintId,
    lesson_id: lessonId,
    block_index: blockIndex,
    block_preview: blockPreview.slice(0, 120),
    content,
  });

  if (error) return { error: error.message };
  revalidatePath("/academia/cuaderno");
  return { success: true };
}

export async function deleteNote(noteId: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "No autenticado" };

  const { error } = await supabase
    .from("user_notes")
    .delete()
    .eq("id", noteId)
    .eq("user_id", user.id);

  if (error) return { error: error.message };
  revalidatePath("/academia/cuaderno");
  return { success: true };
}

export async function getAllNotes() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data } = await supabase
    .from("user_notes")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return data ?? [];
}

export async function getNotesBySprint(sprintId: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data } = await supabase
    .from("user_notes")
    .select("*")
    .eq("user_id", user.id)
    .eq("sprint_id", sprintId)
    .order("created_at", { ascending: true });

  return data ?? [];
}

export async function getNoteCountBySprint(sprintId: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return 0;

  const { count } = await supabase
    .from("user_notes")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id)
    .eq("sprint_id", sprintId);

  return count ?? 0;
}
