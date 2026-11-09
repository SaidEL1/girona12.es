import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
} & (
  | ({ href: string } & ComponentPropsWithoutRef<"a">)
  | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
);

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-emerald)] text-[var(--color-ivory)] hover:bg-[var(--color-deep-green)] focus-visible:outline-[var(--color-gold)]",
  secondary:
    "border border-[var(--color-gold)]/70 text-[var(--color-deep-green)] hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 focus-visible:outline-[var(--color-emerald)]",
  ghost:
    "text-[var(--color-deep-green)] underline-offset-4 hover:underline focus-visible:outline-[var(--color-emerald)]",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 px-6 py-2.5 text-sm tracking-[0.08em] uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    variantClasses[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ComponentPropsWithoutRef<"button">;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
