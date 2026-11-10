import { notFound } from "next/navigation";
import {
  GeometricSeparator,
  OrnamentBand,
  PatternBackdrop,
  SectionFrame,
} from "@/components/brand";
import { Container, GeometricAccent } from "@/components/ui";
import { getDictionary, isLocaleCode } from "@/lib/i18n";
import type { LocaleCode } from "@/types";

const swatches = [
  { name: "Emerald", varName: "--brand-emerald", sample: "#064d40" },
  { name: "Deep green", varName: "--brand-deep-green", sample: "#032f28" },
  { name: "Royal gold", varName: "--brand-gold", sample: "#d9ae4d" },
  { name: "Ivory", varName: "--brand-ivory", sample: "#f4ebdd" },
  { name: "Dark text", varName: "--brand-dark-text", sample: "#17241f" },
] as const;

/**
 * Phase 2A — design foundation showcase.
 * Not linked from primary marketing navigation; used for visual QA.
 */
export default async function DesignFoundationPage({
  params,
}: PageProps<"/[locale]/design-foundation">) {
  const { locale: raw } = await params;
  if (!isLocaleCode(raw)) notFound();

  const locale: LocaleCode = raw;
  const dictionary = getDictionary(locale);
  const copy = dictionary.designFoundation;

  return (
    <div className="overflow-x-hidden bg-[var(--color-ivory)] pb-24">
      <OrnamentBand placement="top" className="max-h-[var(--brand-ornament-max-height)]" />

      <Container className="space-y-16 py-14 sm:py-20">
        <header className="max-w-2xl space-y-5">
          <GeometricAccent tone="emerald" />
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-emerald)]">
            Phase 2A
          </p>
          <h1 className="font-display text-4xl text-[var(--color-deep-green)] sm:text-5xl">
            {copy.title}
          </h1>
          <GeometricSeparator tone="gold" />
          <p className="text-base leading-relaxed text-[var(--color-dark-text)]/85 sm:text-lg">
            {copy.intro}
          </p>
          <p className="text-sm text-[var(--color-dark-text)]/70">{copy.note}</p>
        </header>

        <section aria-labelledby="tokens-heading" className="space-y-6">
          <h2
            id="tokens-heading"
            className="font-display text-2xl text-[var(--color-deep-green)] sm:text-3xl"
          >
            {copy.tokensHeading}
          </h2>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {swatches.map((swatch) => (
              <li key={swatch.varName} className="min-w-0 space-y-2">
                <div
                  className="aspect-[4/3] w-full border border-[var(--color-gold)]/35"
                  style={{ background: swatch.sample }}
                  aria-hidden
                />
                <p className="truncate text-sm font-medium text-[var(--color-dark-text)]">
                  {swatch.name}
                </p>
                <p className="ltr-isolate truncate text-xs text-[var(--color-dark-text)]/65">
                  {swatch.sample}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="pattern-heading" className="space-y-6">
          <h2
            id="pattern-heading"
            className="font-display text-2xl text-[var(--color-deep-green)] sm:text-3xl"
          >
            {copy.patternHeading}
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="relative min-h-56 overflow-hidden">
              <PatternBackdrop variant="girih-tile" intensity="medium" tone="emerald" />
              <div className="relative z-10 flex h-full min-h-56 items-end p-6">
                <p className="max-w-xs text-sm leading-relaxed text-[var(--color-ivory)]">
                  {dictionary.brand.wordmark} · {dictionary.brand.name}
                </p>
              </div>
            </div>
            <div className="relative min-h-56 overflow-hidden border border-[var(--color-gold)]/30 bg-[var(--color-deep-green)]">
              <PatternBackdrop
                variant="cover-corner"
                intensity="soft"
                tone="deep"
              />
              <div className="relative z-10 flex h-full min-h-56 items-end p-6">
                <p className="text-sm text-[var(--color-ivory)]/90">
                  menu-girih-pattern · whisper opacity for readability
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="frame-heading" className="space-y-6">
          <h2
            id="frame-heading"
            className="font-display text-2xl text-[var(--color-deep-green)] sm:text-3xl"
          >
            {copy.frameHeading}
          </h2>
          <SectionFrame tone="gold" className="bg-[var(--color-ivory)]">
            <p className="font-display text-2xl text-[var(--color-deep-green)]">
              {dictionary.brand.wordmark}
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--color-dark-text)]/85">
              {dictionary.home.support}
            </p>
          </SectionFrame>
        </section>

        <section aria-labelledby="separator-heading" className="space-y-6">
          <h2
            id="separator-heading"
            className="font-display text-2xl text-[var(--color-deep-green)] sm:text-3xl"
          >
            {copy.separatorHeading}
          </h2>
          <div className="flex flex-col items-start gap-6 sm:items-center">
            <GeometricSeparator tone="gold" />
            <GeometricAccent tone="gold" />
            <GeometricSeparator tone="emerald" className="max-w-xs" />
          </div>
        </section>

        <section aria-labelledby="band-heading" className="space-y-4">
          <h2
            id="band-heading"
            className="font-display text-2xl text-[var(--color-deep-green)] sm:text-3xl"
          >
            {copy.bandHeading}
          </h2>
          <div className="overflow-hidden border border-[var(--color-gold)]/25 bg-[var(--color-deep-green)]">
            <OrnamentBand placement="top" />
            <div className="px-6 py-10 text-center text-[var(--color-ivory)]">
              <p className="font-display text-3xl tracking-[0.12em]">
                {dictionary.brand.wordmark}
              </p>
            </div>
            <OrnamentBand placement="bottom" />
          </div>
        </section>
      </Container>

      <OrnamentBand
        placement="bottom"
        className="max-h-[var(--brand-ornament-max-height)]"
      />
    </div>
  );
}
