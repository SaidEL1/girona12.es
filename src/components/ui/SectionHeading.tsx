import { cn } from "@/lib/cn";
import { GeometricAccent } from "./GeometricAccent";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "start" | "center";
  tone?: "light" | "dark";
  showAccent?: boolean;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
  align = "start",
  tone = "light",
  showAccent = true,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl space-y-5",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {showAccent ? (
        <GeometricAccent
          className={cn(align === "center" && "mx-auto")}
          tone={isDark ? "gold" : "gold"}
        />
      ) : null}
      {eyebrow ? (
        <p
          className={cn(
            "font-sans text-xs uppercase tracking-[0.32em]",
            isDark ? "text-[var(--color-gold)]" : "text-[var(--color-emerald)]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-display text-3xl leading-[1.15] sm:text-4xl md:text-[2.75rem]",
          isDark ? "text-[var(--color-ivory)]" : "text-[var(--color-deep-green)]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base leading-relaxed sm:text-lg",
            isDark
              ? "text-[var(--color-ivory)]/80"
              : "text-[var(--color-dark-text)]/80",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
