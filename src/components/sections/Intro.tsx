import { GeometricSeparator, PatternBackdrop, SectionFrame } from "@/components/brand";
import { Container, GeometricAccent, SectionHeading } from "@/components/ui";
import { SECTION_IDS } from "@/lib/constants";
import type { Dictionary } from "@/types";

type IntroProps = {
  dictionary: Dictionary;
};

export function Intro({ dictionary }: IntroProps) {
  const copy = dictionary.sections.intro;

  return (
    <section
      id={SECTION_IDS.intro}
      aria-labelledby="intro-heading"
      className="relative overflow-hidden bg-[var(--color-ivory)] py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -end-24 top-16 h-72 w-72 rounded-full bg-[var(--color-emerald)]/[0.06] blur-3xl"
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="intro-heading"
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.body}
            />
          </div>

          <div className="relative lg:col-span-7">
            <SectionFrame tone="gold" padded={false} className="overflow-hidden">
              <div className="relative aspect-[4/5] sm:aspect-[5/4]">
                <PatternBackdrop
                  variant="cover-corner"
                  intensity="medium"
                  tone="emerald"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-green)]/70 via-transparent to-[var(--color-deep-green)]/20"
                />
                <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 px-8 text-center text-[var(--color-ivory)]">
                  <GeometricAccent tone="gold" />
                  <p className="font-display text-3xl tracking-[0.1em] text-[var(--color-gold)] sm:text-4xl">
                    {dictionary.brand.wordmark}
                  </p>
                  <GeometricSeparator tone="gold" className="max-w-[12rem]" />
                  <p className="max-w-xs text-xs uppercase tracking-[0.28em] text-[var(--color-ivory)]/75">
                    {dictionary.brand.name}
                  </p>
                </div>
              </div>
            </SectionFrame>
          </div>
        </div>
      </Container>
    </section>
  );
}
