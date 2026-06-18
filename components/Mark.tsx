/** Self-made glyph — a six-spoke asterisk: the "*" of "made with method". */
export function Mark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M12 3.2V20.8" />
        <path d="M4.3 7.6 19.7 16.4" />
        <path d="M19.7 7.6 4.3 16.4" />
      </g>
    </svg>
  );
}
