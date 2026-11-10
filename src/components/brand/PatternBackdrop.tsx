import { cn } from "@/lib/cn";

export type PatternBackdropVariant =
  | "girih-tile"
  | "girih-field"
  | "cover-corner";

type PatternBackdropProps = {
  variant?: PatternBackdropVariant;
  /** Visual strength — keep low so text stays readable */
  intensity?: "whisper" | "soft" | "medium";
  tone?: "emerald" | "deep" | "ivory";
  className?: string;
};

const variantSrc: Record<PatternBackdropVariant, string> = {
  "girih-tile": "/brand/patterns/emerald-girih-tile.jpg",
  "girih-field": "/brand/patterns/emerald-girih-field.jpg",
  "cover-corner": "/brand/patterns/cover-girih-corner.jpg",
};

const intensityClass: Record<
  NonNullable<PatternBackdropProps["intensity"]>,
  string
> = {
  whisper: "opacity-[0.08]",
  soft: "opacity-[0.14]",
  medium: "opacity-[0.22]",
};

const toneClass: Record<NonNullable<PatternBackdropProps["tone"]>, string> = {
  emerald: "bg-[var(--color-emerald)]",
  deep: "bg-[var(--color-deep-green)]",
  ivory: "bg-[var(--color-ivory)]",
};

/**
 * Decorative menu-derived pattern layer. Always aria-hidden; never carries content.
 * Keep intensity low over text regions for contrast.
 */
export function PatternBackdrop({
  variant = "girih-tile",
  intensity = "soft",
  tone = "emerald",
  className,
}: PatternBackdropProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        toneClass[tone],
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-repeat",
          intensityClass[intensity],
          variant === "girih-field" ? "bg-cover bg-center bg-no-repeat" : "",
        )}
        style={{
          backgroundImage: `url(${variantSrc[variant]})`,
          backgroundSize:
            variant === "girih-field" ? "cover" : "min(22rem, 70vw)",
        }}
      />
    </div>
  );
}
