import { Container, SectionHeading } from "@/components/ui";
import { getDictionary } from "@/lib/i18n";
import { SECTION_IDS } from "@/lib/constants";

/** Stub — intro copy and imagery arrive in a later phase. */
export function Intro() {
  const dictionary = getDictionary();

  return (
    <section
      id={SECTION_IDS.intro}
      aria-labelledby="intro-heading"
      className="border-b border-[var(--color-emerald)]/10 bg-[var(--color-ivory)] py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="intro-heading"
          eyebrow="Al Baraka Digital"
          title={dictionary.sections.intro}
          description={dictionary.footer.comingSoon}
        />
      </Container>
    </section>
  );
}
