"use client";

export default function VideoCard({
  youtubeId,
  title,
  caption,
  timestamp,
}: {
  youtubeId: string;
  title: string;
  caption?: string;
  timestamp?: number;
}) {
  const src = `https://www.youtube.com/embed/${youtubeId}${timestamp ? `?start=${timestamp}` : ""}`;

  return (
    <div className="my-2 max-w-[560px]">
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded-full">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
            <polygon points="3,1 9,5 3,9" />
          </svg>
          Video
        </span>
        <span className="text-xs text-ink font-medium truncate">{title}</span>
      </div>
      <div className="relative w-full rounded-xl overflow-hidden border border-line" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
      {caption && (
        <p className="mt-1.5 text-xs text-ink-faint">{caption}</p>
      )}
    </div>
  );
}
