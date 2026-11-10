import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type ArchFrameProps = {
  children?: ReactNode;
  variant?: "emerald" | "ivory" | "mix" | "scalloped";
  className?: string;
  /** When true, show arch image as decorative silhouette only */
  silhouette?: boolean;
};

const srcMap = {
  emerald: "/brand/zellige/arch-ornament-emerald.jpg",
  ivory: "/brand/zellige/arch-ornament-ivory.jpg",
  mix: "/brand/zellige/arch-ornament-mix.jpg",
  scalloped: "/brand/zellige/arch-scalloped-emerald.jpg",
} as const;

/**
 * Andalusian arch ornament from the Zellige pack.
 * Use as a decorative panel or silhouette behind content.
 */
export function ArchFrame({
  children,
  variant = "emerald",
  className,
  silhouette = false,
}: ArchFrameProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none relative mx-auto",
          silhouette ? "opacity-90" : "",
        )}
      >
        <Image
          src={srcMap[variant]}
          alt=""
          width={640}
          height={800}
          className="mx-auto h-auto w-full max-w-md select-none object-contain"
          sizes="(max-width: 768px) 80vw, 28rem"
        />
      </div>
      {children ? (
        <div className="relative z-10 -mt-8 text-center sm:-mt-12">{children}</div>
      ) : null}
    </div>
  );
}
