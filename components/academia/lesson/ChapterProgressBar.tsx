type Segment = { id: string; completed: boolean; current: boolean };

export default function ChapterProgressBar({
  chapterTitle,
  chapterIndex,
  totalChapters,
  segments,
}: {
  chapterTitle: string;
  chapterIndex: number;
  totalChapters: number;
  segments: Segment[];
}) {
  return (
    <div className="bg-paper-soft rounded-2xl px-5 py-4 max-w-2xl mx-auto w-full">
      <p className="text-xs font-medium text-ink-faint uppercase tracking-wider mb-0.5">
        Capítulo {chapterIndex} / {totalChapters}
      </p>
      <p className="text-sm font-medium text-ink mb-3 truncate">{chapterTitle}</p>
      <div className="flex gap-1">
        {segments.map((seg) => (
          <div
            key={seg.id}
            className={`flex-1 h-1 rounded-full transition-colors ${
              seg.completed
                ? "bg-ink"
                : seg.current
                ? "bg-accent"
                : "bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
