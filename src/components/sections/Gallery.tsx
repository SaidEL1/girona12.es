import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui";
import { siteImages } from "@/data/images";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/cn";
import type { Dictionary } from "@/types";

const layoutClass = [
  "sm:col-span-2 sm:row-span-2 aspect-[4/5] sm:aspect-auto sm:min-h-[28rem]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "sm:col-span-2 aspect-[16/9]",
  "aspect-[3/4]",
  "aspect-[4/3]",
] as const;

type GalleryProps = {
  dictionary: Dictionary;
};

export function Gallery({ dictionary }: GalleryProps) {
  const copy = dictionary.sections.gallery;
  const images = siteImages.gallery;

  return (
    <section
      id={SECTION_IDS.gallery}
      aria-labelledby="gallery-heading"
      className="bg-[var(--color-ivory)] py-20 sm:py-28"
    >
      <Container className="space-y-12">
        <SectionHeading
          id="gallery-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.body}
        />

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {images.map((image, index) => (
            <li
              key={image.src}
              className={cn("group relative overflow-hidden", layoutClass[index])}
            >
              <Image
                src={image.src}
                alt={dictionary.imageAlts.gallery[index] ?? ""}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[var(--color-deep-green)]/0 transition-colors duration-500 group-hover:bg-[var(--color-deep-green)]/20"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-3 border border-[var(--color-gold)]/0 transition-colors duration-500 group-hover:border-[var(--color-gold)]/50"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
