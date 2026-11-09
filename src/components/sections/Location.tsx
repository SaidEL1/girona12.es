import { Container, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { SECTION_IDS } from "@/lib/constants";

/** Stub — map embed and coordinates wait for verified location data. */
export function Location() {
  const dictionary = getDictionary();
  const { location } = siteConfig;
  const hasLocation =
    Boolean(location.label) ||
    Boolean(location.coordinates) ||
    Boolean(location.mapUrl);

  return (
    <section
      id={SECTION_IDS.location}
      aria-labelledby="location-heading"
      className="border-b border-[var(--color-emerald)]/10 bg-[var(--color-ivory)] py-20 sm:py-24"
    >
      <Container className="space-y-6">
        <SectionHeading
          id="location-heading"
          title={dictionary.sections.location}
          description={
            hasLocation ? location.directionsNote : dictionary.footer.comingSoon
          }
        />
        {!hasLocation ? null : location.mapUrl ? (
          <a
            href={location.mapUrl}
            className="text-[var(--color-emerald)] underline-offset-4 hover:underline"
          >
            {location.label ?? dictionary.sections.location}
          </a>
        ) : (
          <p className="text-[var(--color-dark-text)]/80">{location.label}</p>
        )}
      </Container>
    </section>
  );
}
