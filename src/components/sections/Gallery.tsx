import { Container, SectionHeading } from "@/components/ui";
import { getDictionary } from "@/lib/i18n";
import { SECTION_IDS } from "@/lib/constants";

/** Stub — gallery assets will live under public/images. */
export function Gallery() {
  const dictionary = getDictionary();

  return (
    <section
      id={SECTION_IDS.gallery}
      aria-labelledby="gallery-heading"
      className="border-b border-[var(--color-emerald)]/10 bg-[var(--color-ivory)] py-20 sm:py-24"
    >
      <Container className="space-y-6">
        <SectionHeading
          id="gallery-heading"
          title={dictionary.sections.gallery}
          description={dictionary.footer.comingSoon}
        />
        <div
          className="min-h-40 border border-dashed border-[var(--color-emerald)]/25"
          aria-hidden
        />
      </Container>
    </section>
  );
}
