import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionFrameProps = {
  children: ReactNode;
  className?: string;
  /** Outer padding for the framed content */
  padded?: boolean;
  tone?: "gold" | "gold-on-dark" | "emerald";
};

const toneClass: Record<NonNullable<SectionFrameProps["tone"]>, string> = {
  gold: "border-[var(--color-gold)]/45",
  "gold-on-dark": "border-[var(--color-gold)]/55",
  emerald: "border-[var(--color-emerald)]/35",
};

/**
 * Elegant double-line section frame in the menu gold/emerald language.
 * Content remains in normal document flow for accessibility.
 */
export function SectionFrame({
  children,
  className,
  padded = true,
  tone = "gold",
}: SectionFrameProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 border",
          toneClass[tone],
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-[0.4rem] border sm:inset-2",
          toneClass[tone],
          "opacity-70",
        )}
      />
      <div className={cn("relative", padded && "p-6 sm:p-8 lg:p-10")}>
        {children}
      </div>
    </div>
  );
}
