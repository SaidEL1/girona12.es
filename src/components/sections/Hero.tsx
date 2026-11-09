import { Button, Container } from "@/components/ui";
import { getDictionary } from "@/lib/i18n";
import { SECTION_IDS } from "@/lib/constants";
import { siteConfig } from "@/data/site";

/**
 * Phase 01 homepage hero shell: brand, one headline, short support, CTA group.
 * Full marketing sections arrive later.
 */
export function Hero() {
  const dictionary = getDictionary();

  return (
    <section
      id={SECTION_IDS.home}
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[var(--color-deep-green)] text-[var(--color-ivory)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 20%, var(--color-emerald) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 10% 90%, var(--color-gold) 0%, transparent 45%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/50 to-transparent"
      />

      <Container className="relative flex min-h-[min(88vh,52rem)] flex-col justify-center py-20 sm:py-28">
        <div className="max-w-3xl animate-fade-rise space-y-8">
          <p className="font-display text-4xl leading-none tracking-wide text-[var(--color-gold)] sm:text-5xl md:text-6xl">
            {siteConfig.brandName}
          </p>

          <div className="space-y-5">
            <h1
              id="hero-heading"
              className="max-w-2xl font-display text-3xl leading-[1.15] text-[var(--color-ivory)] sm:text-4xl md:text-5xl"
            >
              {dictionary.home.headline}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--color-ivory)]/80 sm:text-lg">
              {dictionary.home.support}
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <Button
              href={`#${SECTION_IDS.menu}`}
              className="bg-[var(--color-gold)] text-[var(--color-deep-green)] hover:bg-[var(--color-ivory)] hover:text-[var(--color-deep-green)]"
            >
              {dictionary.home.ctaMenu}
            </Button>
            <Button
              href={`#${SECTION_IDS.reservation}`}
              variant="secondary"
              className="border-[var(--color-ivory)]/40 text-[var(--color-ivory)] hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10"
            >
              {dictionary.home.ctaReserve}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
