import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  solid:
    "bg-ink text-paper px-6 py-3 hover:bg-accent hover:-translate-y-[2px] hover:shadow-[0_14px_34px_-14px_rgba(36,56,245,0.65)]",
  outline:
    "border border-ink/15 text-ink px-6 py-3 hover:border-ink/55 hover:-translate-y-[2px]",
  ghost: "text-ink px-1.5 py-1 hover:text-accent",
};

export function CTA({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full text-[15px] font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

/** An arrow that nudges right on hover of its parent `group`. */
export function Arrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M2 8h11M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
