import { OrnamentBand, PatternBackdrop } from "@/components/brand";
import { Button, Container, SectionHeading } from "@/components/ui";
import { ORIGINAL_MENU_PREVIEW } from "@/data/menu-pages";
import { SECTION_IDS } from "@/lib/constants";
import { originalMenuPath } from "@/lib/i18n";
import type { Dictionary, LocaleCode } from "@/types";

type DigitalMenuCtaProps = {
  locale: LocaleCode;
  dictionary: Dictionary;
};

/**
 * Landing teaser for the exact PDF image menu.
 * Uses the approved original cover preview — no redesigned mock, no stock photos.
 */
export function DigitalMenuCta({ locale, dictionary }: DigitalMenuCtaProps) {
  const copy = dictionary.sections.digitalMenu;
  const preview = ORIGINAL_MENU_PREVIEW;

  return (
    <section
      id={SECTION_IDS.digitalMenu}
      aria-labelledby="digital-menu-heading"
      className="relative overflow-hidden bg-[var(--color-deep-green)] py-20 text-[var(--color-ivory)] sm:py-28"
    >
      <PatternBackdrop variant="girih-tile" intensity="whisper" tone="deep" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/50 to-transparent"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-8 lg:col-span-5">
            <SectionHeading
              id="digital-menu-heading"
              tone="dark"
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.body}
            />
            <Button href={originalMenuPath(locale)}>{copy.cta}</Button>
          </div>

          <div className="lg:col-span-7">
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden
                className="absolute -inset-3 border border-[var(--color-gold)]/45 sm:-inset-5"
              />
              <div
                aria-hidden
                className="absolute -inset-1.5 border border-[var(--color-gold)]/25 sm:-inset-2.5"
              />
              <div className="relative overflow-hidden bg-[var(--color-emerald)]">
                <OrnamentBand
                  placement="top"
                  className="max-h-14 opacity-90 sm:max-h-16"
                />
                {/* Native img — original JPEG bytes, no optimizer recompression */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview.src}
                  alt={copy.previewAlt}
                  width={preview.width}
                  height={preview.height}
                  decoding="async"
                  loading="lazy"
                  className="block h-auto w-full"
                />
                <OrnamentBand
                  placement="bottom"
                  className="max-h-14 opacity-90 sm:max-h-16"
                />
              </div>
              <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]/80">
                {dictionary.brand.wordmark}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
