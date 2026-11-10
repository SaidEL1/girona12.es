import Image from "next/image";
import { cn } from "@/lib/cn";

type OrnamentBandProps = {
  placement: "top" | "bottom";
  className?: string;
};

const src = {
  top: {
    path: "/brand/patterns/ornament-band-top.jpg",
    width: 1250,
    height: 248,
  },
  bottom: {
    path: "/brand/patterns/ornament-band-bottom.jpg",
    width: 1250,
    height: 249,
  },
} as const;

/**
 * Menu-derived ornamental frame band (page-02 top/bottom). Decorative only.
 */
export function OrnamentBand({ placement, className }: OrnamentBandProps) {
  const asset = src[placement];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none relative w-full overflow-hidden",
        placement === "top" ? "origin-top" : "origin-bottom",
        className,
      )}
    >
      <Image
        src={asset.path}
        alt=""
        width={asset.width}
        height={asset.height}
        className="h-auto w-full select-none object-cover object-center"
        sizes="100vw"
        priority={false}
      />
    </div>
  );
}
