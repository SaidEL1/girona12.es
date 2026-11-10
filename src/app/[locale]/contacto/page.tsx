import { notFound } from "next/navigation";
import {
  GeometricSeparator,
  PatternBackdrop,
  SectionFrame,
  ZelligeBorder,
} from "@/components/brand";
import { Container, GeometricAccent, SectionHeading } from "@/components/ui";
import { getDictionary, isLocaleCode } from "@/lib/i18n";

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contacto">) {
  const { locale: raw } = await params;
  if (!isLocaleCode(raw)) notFound();

  const dictionary = getDictionary(raw);
  const copy = dictionary.sections.contact;

  return (
    <div className="overflow-x-hidden pt-[4.25rem] sm:pt-[4.75rem]">
      <ZelligeBorder variant="girih-emerald" />
      <section
        aria-labelledby="contact-heading"
        className="relative bg-[var(--color-ivory)] py-20 sm:py-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35] zellige-ivory"
        />
        <Container className="relative space-y-10">
          <SectionHeading
            id="contact-heading"
            as="h1"
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.body}
          />

          <SectionFrame
            tone="gold"
            className="overflow-hidden bg-[var(--color-deep-green)]"
          >
            <div className="relative min-h-[16rem] px-6 py-14 text-[var(--color-ivory)] sm:px-10 sm:py-16">
              <PatternBackdrop
                variant="zellige-emerald"
                intensity="soft"
                tone="deep"
              />
              <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
                <GeometricAccent tone="gold" />
                <p className="font-display text-3xl tracking-[0.08em] text-[var(--color-gold)] sm:text-4xl">
                  {dictionary.brand.wordmark}
                </p>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-ivory)]/75">
                  {dictionary.brand.name}
                </p>
                <GeometricSeparator tone="gold" className="max-w-xs" />
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
                    {copy.placeholderLabel}
                  </p>
                  <p className="text-base leading-relaxed text-[var(--color-ivory)]/85">
                    {copy.placeholderBody}
                  </p>
                </div>
              </div>
            </div>
          </SectionFrame>
        </Container>
      </section>
    </div>
  );
}
