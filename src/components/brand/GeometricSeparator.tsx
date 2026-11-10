import { cn } from "@/lib/cn";

type GeometricSeparatorProps = {
  className?: string;
  tone?: "gold" | "ivory" | "emerald";
};

const toneClass: Record<
  NonNullable<GeometricSeparatorProps["tone"]>,
  string
> = {
  gold: "text-[var(--color-gold)]",
  ivory: "text-[var(--color-ivory)]",
  emerald: "text-[var(--color-emerald)]",
};

/**
 * Horizontal geometric separator with an 8-point girih center motif.
 */
export function GeometricSeparator({
  className,
  tone = "gold",
}: GeometricSeparatorProps) {
  return (
    <div
      role="separator"
      aria-hidden
      className={cn(
        "flex w-full max-w-md items-center justify-center",
        toneClass[tone],
        className,
      )}
    >
      <svg
        className="h-6 w-full"
        viewBox="0 0 240 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M8 12 H96"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.85"
        />
        <path
          d="M144 12 H232"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.85"
        />
        <path
          d="M120 2 L123.5 9.5 L132 6 L126.5 12.5 L132 18 L123.5 14.5 L120 22 L116.5 14.5 L108 18 L113.5 12.5 L108 6 L116.5 9.5 Z"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="miter"
        />
        <circle cx="120" cy="12" r="1.6" fill="currentColor" opacity="0.75" />
      </svg>
    </div>
  );
}
