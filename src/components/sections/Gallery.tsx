import { GeometricSeparator, PatternBackdrop, SectionFrame } from "@/components/brand";
import { Container, GeometricAccent, SectionHeading } from "@/components/ui";
import { SECTION_IDS } from "@/lib/constants";
import type { Dictionary } from "@/types";

type GalleryProps = {
  dictionary: Dictionary;
};

/**
 * Designed placeholder until the owner supplies real restaurant photographs.
 * Never invents or embeds stock photography.
 */
export function Gallery({ dictionary }: GalleryProps) {
  const copy = dictionary.sections.gallery;

  return (
    <section
      id={SECTION_IDS.gallery}
      aria-labelledby="gallery-heading"
      className="relative overflow-hidden bg-[var(--color-ivory)] py-20 sm:py-28"
    >
      <Container className="space-y-12">
        <SectionHeading
          id="gallery-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.body}
        />

        <SectionFrame tone="gold" className="bg-[var(--color-deep-green)]">
          <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[22rem]">
            <PatternBackdrop
              variant="girih-tile"
              intensity="soft"
              tone="deep"
            />
            <div className="relative z-10 flex min-h-[18rem] flex-col items-center justify-center gap-5 px-6 py-16 text-center text-[var(--color-ivory)] sm:min-h-[22rem]">
              <GeometricAccent tone="gold" />
              <p className="font-display text-3xl tracking-[0.08em] text-[var(--color-gold)] sm:text-4xl">
                {dictionary.brand.wordmark}
              </p>
              <GeometricSeparator tone="gold" className="max-w-xs" />
              <p className="max-w-md text-sm leading-relaxed text-[var(--color-ivory)]/80 sm:text-base">
                {copy.placeholder}
              </p>
            </div>
          </div>
        </SectionFrame>
      </Container>
    </section>
  );
}
