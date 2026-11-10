import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "start" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
  align = "start",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-sans text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-display text-3xl leading-tight text-[var(--color-deep-green)] sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-[var(--color-dark-text)]/80 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
