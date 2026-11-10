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

/**
 * 8-point girih star accent aligned with the original menu geometric language.
 * Decorative only (aria-hidden).
 */
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
        d="M32 4 L36.5 20.5 L52 12 L43.5 27.5 L60 32 L43.5 36.5 L52 52 L36.5 43.5 L32 60 L27.5 43.5 L12 52 L20.5 36.5 L4 32 L20.5 27.5 L12 12 L27.5 20.5 Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="miter"
      />
      <path
        d="M32 16 L35 26 L45 23 L38 32 L45 41 L35 38 L32 48 L29 38 L19 41 L26 32 L19 23 L29 26 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.75"
      />
      <circle cx="32" cy="32" r="2.25" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
