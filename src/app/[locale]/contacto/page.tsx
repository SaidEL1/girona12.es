import { notFound } from "next/navigation";
import {
  PatternBackdrop,
  SectionFrame,
  ZelligeBorder,
} from "@/components/brand";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { Container, SectionHeading } from "@/components/ui";
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
            <div className="relative min-h-[16rem] px-5 py-12 text-[var(--color-ivory)] sm:px-10 sm:py-16">
              <PatternBackdrop
                variant="zellige-emerald"
                intensity="soft"
                tone="deep"
              />
              <ContactDetails dictionary={dictionary} variant="page" />
            </div>
          </SectionFrame>
        </Container>
      </section>
    </div>
  );
}
