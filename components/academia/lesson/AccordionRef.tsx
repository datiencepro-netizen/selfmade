"use client";

import { useState } from "react";

function parseBody(text: string) {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/(`[^`]+`)/g);
    return (
      <span key={i}>
        {parts.map((part, j) =>
          part.startsWith("`") && part.endsWith("`") ? (
            <code key={j} className="font-mono text-xs bg-line/60 px-1 py-0.5 rounded text-ink">
              {part.slice(1, -1)}
            </code>
          ) : (
            <span key={j}>{part}</span>
          )
        )}
        {i < text.split("\n").length - 1 && <br />}
      </span>
    );
  });
}

function AccordionItem({ heading, body }: { heading: string; body: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-paper-soft transition-colors"
      >
        <span className="text-sm font-medium text-ink">{heading}</span>
        <svg
          className={`flex-shrink-0 text-ink-faint transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-3 text-sm text-ink-faint leading-relaxed">
          {parseBody(body)}
        </div>
      )}
    </div>
  );
}

export default function AccordionRef({
  title,
  items,
}: {
  title: string;
  items: { heading: string; body: string }[];
}) {
  return (
    <div className="my-2 border border-line rounded-xl overflow-hidden bg-card">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-paper-soft">
        <svg className="text-ink-faint" width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
        <span className="text-xs font-semibold text-ink uppercase tracking-wider">{title}</span>
      </div>
      {items.map((item, i) => (
        <AccordionItem key={i} heading={item.heading} body={item.body} />
      ))}
    </div>
  );
}
