import {
  ArchFrame,
  GeometricSeparator,
  PatternBackdrop,
  SectionFrame,
} from "@/components/brand";
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
        className="pointer-events-none absolute inset-0 opacity-[0.35] zellige-ivory"
      />
      <Container className="relative">
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
              <div className="relative grid gap-0 bg-[var(--color-deep-green)] sm:grid-cols-2">
                <div className="relative min-h-[16rem] p-6 sm:min-h-[22rem] sm:p-8">
                  <PatternBackdrop
                    variant="zellige-emerald"
                    intensity="medium"
                    tone="emerald"
                  />
                  <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 text-center text-[var(--color-ivory)]">
                    <GeometricAccent tone="gold" />
                    <p className="font-display text-3xl tracking-[0.1em] text-[var(--color-gold)]">
                      {dictionary.brand.wordmark}
                    </p>
                    <GeometricSeparator tone="gold" className="max-w-[10rem]" />
                    <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-ivory)]/75">
                      {dictionary.brand.name}
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center bg-[var(--color-ivory)] p-6 sm:p-8">
                  <ArchFrame variant="scalloped" className="w-full max-w-xs" />
                </div>
              </div>
            </SectionFrame>
          </div>
        </div>
      </Container>
    </section>
  );
}
