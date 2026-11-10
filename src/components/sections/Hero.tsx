import { PatternBackdrop, ZelligeBorder } from "@/components/brand";
import { Button, Container, GeometricAccent } from "@/components/ui";
import { SECTION_IDS } from "@/lib/constants";
import { localizedPath, originalMenuPath } from "@/lib/i18n";
import type { Dictionary, LocaleCode } from "@/types";

type HeroProps = {
  locale: LocaleCode;
  dictionary: Dictionary;
};

/**
 * Full-bleed Zellige hero — emerald geometric field, brand first, CTA group.
 * No photographic imagery.
 */
export function Hero({ locale, dictionary }: HeroProps) {
  const menuHref = originalMenuPath(locale);

  return (
    <section
      id={SECTION_IDS.home}
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[var(--color-deep-green)] text-[var(--color-ivory)]"
    >
      <PatternBackdrop variant="zellige-emerald" intensity="medium" tone="deep" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[var(--color-deep-green)]/90 via-[var(--color-deep-green)]/55 to-[var(--color-deep-green)]/25 rtl:bg-gradient-to-l"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-green)] via-[var(--color-deep-green)]/35 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-10 top-10 hidden h-px bg-[var(--color-gold)]/30 sm:block lg:inset-x-16"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-10 start-10 hidden w-px bg-[var(--color-gold)]/20 sm:block lg:start-16"
      />

      <Container className="relative z-10 w-full pb-14 pt-32 sm:pb-20 sm:pt-40 lg:pb-24">
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

          <div className="h-px w-16 origin-left bg-[var(--color-gold)]/70 animate-rule-grow rtl:origin-right" />

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
            <Button href={menuHref}>{dictionary.home.ctaMenu}</Button>
            <Button href={localizedPath(locale, "/restaurante")} variant="onDark">
              {dictionary.home.ctaDiscover}
            </Button>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <ZelligeBorder variant="girih-emerald" />
      </div>
    </section>
  );
}
