import Image from "next/image";
import { Button, Container, GeometricAccent } from "@/components/ui";
import { siteImages } from "@/data/images";
import { getDictionary } from "@/lib/i18n";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Full-bleed cinematic hero — brand first, one headline, support, CTA group.
 */
export function Hero() {
  const dictionary = getDictionary();
  const image = siteImages.hero;

  return (
    <section
      id={SECTION_IDS.home}
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[var(--color-deep-green)] text-[var(--color-ivory)]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center animate-hero-zoom"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[var(--color-deep-green)]/92 via-[var(--color-deep-green)]/72 to-[var(--color-deep-green)]/35"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-green)] via-[var(--color-deep-green)]/25 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.055] moorish-pattern"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/55 to-transparent"
      />

      <Container className="relative z-10 w-full pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-24">
        <div className="max-w-2xl space-y-8 animate-fade-rise">
          <div className="space-y-4">
            <GeometricAccent tone="gold" className="animate-fade-rise-delay" />
            <p className="font-display text-4xl leading-none uppercase tracking-[0.12em] text-[var(--color-gold)] sm:text-5xl md:text-6xl">
              {dictionary.brand.wordmark}
            </p>

            <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-ivory)]/75">
              {dictionary.brand.name}
            </p>
          </div>

          <div className="h-px w-16 bg-[var(--color-gold)]/70 animate-rule-grow origin-left" />

          <div className="space-y-5">
            <h1
              id="hero-heading"
              className="max-w-xl font-display text-[2.15rem] leading-[1.12] text-[var(--color-ivory)] sm:text-5xl md:text-[3.35rem]"
            >
              {dictionary.home.headline}
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-[var(--color-ivory)]/80 sm:text-lg">
              {dictionary.home.support}
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <Button href={`#${SECTION_IDS.menu}`}>{dictionary.home.ctaMenu}</Button>
            <Button href={`#${SECTION_IDS.intro}`} variant="onDark">
              {dictionary.home.ctaDiscover}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
