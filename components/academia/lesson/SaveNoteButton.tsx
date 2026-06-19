"use client";

import { useState } from "react";
import { saveNote } from "@/app/actions/notes";

interface Props {
  sprintId: string;
  lessonId: string;
  blockIndex: number;
  blockPreview: string;
}

export default function SaveNoteButton({ sprintId, lessonId, blockIndex, blockPreview }: Props) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  async function handleSave() {
    if (!content.trim()) return;
    setSaving(true);
    await saveNote(sprintId, lessonId, blockIndex, blockPreview, content.trim());
    setSaving(false);
    setSaved(true);
    setContent("");
    setTimeout(() => {
      setOpen(false);
      setSaved(false);
    }, 1200);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-ink-faint hover:text-accent text-sm"
        title="Guardar nota al cuaderno"
      >
        📝
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/30 backdrop-blur-sm">
          <div className="bg-paper rounded-2xl shadow-xl w-full max-w-md p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display font-semibold text-ink text-lg">Guardar al cuaderno</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-ink-faint hover:text-ink text-xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Preview del bloque */}
            <div className="bg-paper-soft rounded-xl px-4 py-3 text-xs text-ink-soft border border-line">
              <span className="font-medium text-ink-faint uppercase tracking-wider text-[10px]">Contexto del bloque</span>
              <p className="mt-1 line-clamp-2">{blockPreview}</p>
            </div>

            {saved ? (
              <div className="text-center py-4 text-green-600 font-medium">
                ✓ Nota guardada en tu cuaderno
              </div>
            ) : (
              <>
                <textarea
                  autoFocus
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="¿Qué aprendiste? Pega la respuesta del AI o escribe tu insight..."
                  className="w-full h-32 px-4 py-3 rounded-xl border border-line bg-paper-soft text-sm text-ink placeholder:text-ink-faint resize-none focus:outline-none focus:border-accent transition-colors"
                />
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm text-ink-soft hover:text-ink transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={!content.trim() || saving}
                    className="px-5 py-2 rounded-xl bg-ink text-paper text-sm font-medium hover:bg-ink/90 transition-colors disabled:opacity-40"
                  >
                    {saving ? "Guardando..." : "Guardar nota"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
