import { cn } from "@/lib/cn";

type GeometricAccentProps = {
  className?: string;
  tone?: "gold" | "ivory" | "emerald";
};

const toneClass: Record<NonNullable<GeometricAccentProps["tone"]>, string> = {
  gold: "text-[var(--color-gold)]",
  ivory: "text-[var(--color-ivory)]",
  emerald: "text-[var(--color-emerald)]",
};

/** Subtle Moorish-inspired star motif for decorative accents. */
export function GeometricAccent({
  className,
  tone = "gold",
}: GeometricAccentProps) {
  return (
    <svg
      className={cn("h-10 w-10 shrink-0", toneClass[tone], className)}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M32 4 L38 22 L56 22 L42 34 L47 52 L32 42 L17 52 L22 34 L8 22 L26 22 Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
