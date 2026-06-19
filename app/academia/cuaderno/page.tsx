import { getAllNotes } from "@/app/actions/notes";
import { curriculum } from "@/lib/curriculum";
import { deleteNote } from "@/app/actions/notes";
import Link from "next/link";

function getSprintLabel(sprintId: string) {
  return curriculum.find((s) => s.id === sprintId)?.label ?? sprintId;
}

function getChapterId(lessonId: string) {
  // lesson id format: s1-1 → chapter s1-1, sprint sprint-1
  // We derive sprint from lessonId prefix
  return lessonId;
}

export default async function CuadernoPage() {
  const notes = await getAllNotes();

  // Group by sprint
  const grouped = notes.reduce<Record<string, typeof notes>>((acc, note) => {
    if (!acc[note.sprint_id]) acc[note.sprint_id] = [];
    acc[note.sprint_id].push(note);
    return acc;
  }, {});

  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="font-display font-bold text-2xl text-ink mb-1">Mi Cuaderno</h1>
        <p className="text-sm text-ink-faint">
          Tus notas de estudio — guarda insights de las lecciones y respuestas del AI tutor.
        </p>
      </div>

      {notes.length === 0 ? (
        <div className="text-center py-16 text-ink-faint">
          <p className="text-4xl mb-4">📓</p>
          <p className="font-medium text-ink">Aún no tienes notas</p>
          <p className="text-sm mt-1">Haz clic en 📝 junto a cualquier bloque de una lección para guardar tu primer insight.</p>
          <Link
            href="/academia"
            className="inline-flex mt-6 px-5 py-2 rounded-xl bg-ink text-paper text-sm font-medium hover:bg-ink/90 transition-colors"
          >
            Ir al contenido
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(grouped).map(([sprintId, sprintNotes]) => (
            <section key={sprintId}>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="font-display font-semibold text-lg text-ink">
                  {getSprintLabel(sprintId)}
                </h2>
                <span className="px-2 py-0.5 bg-paper-soft border border-line rounded-full text-xs text-ink-faint">
                  {sprintNotes.length} nota{sprintNotes.length !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="space-y-3">
                {sprintNotes.map((note) => (
                  <div
                    key={note.id}
                    className="bg-card border border-line rounded-xl p-5 group"
                  >
                    {note.block_preview && (
                      <p className="text-xs text-ink-faint bg-paper-soft rounded-lg px-3 py-2 mb-3 line-clamp-1">
                        📌 {note.block_preview}
                      </p>
                    )}
                    <p className="text-sm text-ink leading-relaxed whitespace-pre-wrap">
                      {note.content}
                    </p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-line">
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/academia/sprints/${sprintId}/${note.lesson_id}/${note.lesson_id}`}
                          className="text-xs text-ink-faint hover:text-accent transition-colors"
                        >
                          Volver a la lección →
                        </Link>
                        <span className="text-xs text-ink-faint">
                          {new Date(note.created_at).toLocaleDateString("es-MX", {
                            day: "numeric",
                            month: "short",
                          })}
                        </span>
                      </div>
                      <form
                        action={async () => {
                          "use server";
                          await deleteNote(note.id);
                        }}
                      >
                        <button
                          type="submit"
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-ink-faint hover:text-red-500"
                        >
                          Eliminar
                        </button>
                      </form>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
