import { cn } from "@/lib/cn";

export type PatternBackdropVariant =
  | "girih-tile"
  | "girih-field"
  | "cover-corner"
  | "zellige-emerald"
  | "zellige-ivory"
  | "zellige-multi";

type PatternBackdropProps = {
  variant?: PatternBackdropVariant;
  intensity?: "whisper" | "soft" | "medium";
  tone?: "emerald" | "deep" | "ivory";
  className?: string;
};

const variantSrc: Record<PatternBackdropVariant, string> = {
  "girih-tile": "/brand/patterns/emerald-girih-tile.jpg",
  "girih-field": "/brand/patterns/emerald-girih-field.jpg",
  "cover-corner": "/brand/patterns/cover-girih-corner.jpg",
  "zellige-emerald": "/brand/zellige/texture-emerald.jpg",
  "zellige-ivory": "/brand/zellige/texture-ivory.jpg",
  "zellige-multi": "/brand/zellige/texture-zellige-multicolor.jpg",
};

const intensityClass: Record<
  NonNullable<PatternBackdropProps["intensity"]>,
  string
> = {
  whisper: "opacity-[0.09]",
  soft: "opacity-[0.16]",
  medium: "opacity-[0.24]",
};

const toneClass: Record<NonNullable<PatternBackdropProps["tone"]>, string> = {
  emerald: "bg-[var(--color-emerald)]",
  deep: "bg-[var(--color-deep-green)]",
  ivory: "bg-[var(--color-ivory)]",
};

/**
 * Decorative pattern layer from menu crops or Zellige pack textures.
 * Always aria-hidden; keep intensity low over copy.
 */
export function PatternBackdrop({
  variant = "zellige-emerald",
  intensity = "soft",
  tone = "emerald",
  className,
}: PatternBackdropProps) {
  const coverLike = variant === "girih-field";

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
          "absolute inset-0",
          intensityClass[intensity],
          coverLike ? "bg-cover bg-center bg-no-repeat" : "bg-repeat",
        )}
        style={{
          backgroundImage: `url(${variantSrc[variant]})`,
          backgroundSize: coverLike ? "cover" : "var(--brand-pattern-tile)",
        }}
      />
    </div>
  );
}
