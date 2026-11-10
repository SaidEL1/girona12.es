import Image from "next/image";
import { cn } from "@/lib/cn";

type ZelligeBorderProps = {
  variant?: "girih-emerald" | "zellige-mix" | "zellige-ivory";
  className?: string;
};

const srcMap = {
  "girih-emerald": {
    path: "/brand/zellige/border-girih-emerald.jpg",
    width: 1200,
    height: 80,
  },
  "zellige-mix": {
    path: "/brand/zellige/border-zellige-mix.jpg",
    width: 1200,
    height: 80,
  },
  "zellige-ivory": {
    path: "/brand/zellige/border-zellige-ivory.jpg",
    width: 1200,
    height: 80,
  },
} as const;

/** Horizontal zellige/girih strip — decorative only. */
export function ZelligeBorder({
  variant = "girih-emerald",
  className,
}: ZelligeBorderProps) {
  const asset = srcMap[variant];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none relative w-full overflow-hidden",
        className,
      )}
    >
      <Image
        src={asset.path}
        alt=""
        width={asset.width}
        height={asset.height}
        className="h-[var(--brand-border-strip-height)] w-full select-none object-cover"
        sizes="100vw"
      />
    </div>
  );
}
