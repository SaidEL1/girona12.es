import {
  PatternBackdrop,
  SectionFrame,
  ZelligeBorder,
} from "@/components/brand";
import { Container, GeometricAccent, SectionHeading } from "@/components/ui";
import { getOwnerBannerPages } from "@/data/banner";
import { SECTION_IDS } from "@/lib/constants";
import type { Dictionary, LocaleCode } from "@/types";

type GalleryProps = {
  locale: LocaleCode;
  dictionary: Dictionary;
  /** Use h1 on the dedicated /galeria page; keep h2 on the homepage. */
  headingAs?: "h1" | "h2";
};

/**
 * Gallery — owner banners matched to the active locale (AR / ES; EN uses ES until supplied).
 * Additional restaurant photographs remain pending until supplied.
 */
export function Gallery({
  locale,
  dictionary,
  headingAs = "h2",
}: GalleryProps) {
  const copy = dictionary.sections.gallery;
  const pages = getOwnerBannerPages(locale);

  return (
    <section
      id={SECTION_IDS.gallery}
      aria-labelledby="gallery-heading"
      className="relative overflow-hidden bg-[var(--color-ivory)] py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4] zellige-ivory"
      />
      <Container className="relative space-y-12">
        <SectionHeading
          id="gallery-heading"
          as={headingAs}
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.body}
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {pages.map((page, index) => (
            <figure key={page.id} className="m-0">
              <SectionFrame
                tone="gold"
                className="overflow-hidden bg-[var(--color-deep-green)]"
              >
                <ZelligeBorder variant="zellige-ivory" />
                <div className="relative px-3 py-3 sm:px-4 sm:py-4">
                  <PatternBackdrop
                    variant="zellige-emerald"
                    intensity="whisper"
                    tone="deep"
                  />
                  <div className="relative overflow-hidden border border-[var(--color-gold)]/35 bg-[var(--color-deep-green)]">
                    {/* Native img — owner JPEG bytes, no optimizer recompression */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={page.src}
                      alt={
                        index === 0
                          ? copy.bannerAltPrimary
                          : copy.bannerAltSecondary
                      }
                      width={page.width}
                      height={page.height}
                      decoding="async"
                      loading={index === 0 ? "eager" : "lazy"}
                      className="block h-auto w-full"
                    />
                  </div>
                </div>
                <ZelligeBorder variant="girih-emerald" />
              </SectionFrame>
              <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.18em] text-[var(--color-emerald)]/70">
                {copy.bannerCaption} · {index + 1}/{pages.length}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <GeometricAccent tone="emerald" className="mx-auto" />
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-dark-text)]/70 sm:text-base">
            {copy.placeholder}
          </p>
        </div>
      </Container>
    </section>
  );
}
