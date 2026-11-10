import { Button, Container, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Stub reservation CTA. The button stays disabled until a real
 * booking href is configured — no broken links.
 */
export function ReservationCta() {
  const dictionary = getDictionary();
  const href = siteConfig.reservation.href;

  return (
    <section
      id={SECTION_IDS.reservation}
      aria-labelledby="reservation-heading"
      className="bg-[var(--color-emerald)] py-20 text-[var(--color-ivory)] sm:py-24"
    >
      <Container className="space-y-8">
        <SectionHeading
          id="reservation-heading"
          title={dictionary.sections.reservation}
          description={
            siteConfig.reservation.note ?? dictionary.footer.comingSoon
          }
          className="[&_h2]:text-[var(--color-ivory)] [&_p]:text-[var(--color-ivory)]/75"
        />
        {href ? (
          <Button
            href={href}
            className="bg-[var(--color-gold)] text-[var(--color-deep-green)] hover:bg-[var(--color-ivory)]"
          >
            {dictionary.home.ctaReserve}
          </Button>
        ) : (
          <Button
            disabled
            aria-disabled="true"
            className="bg-[var(--color-gold)]/40 text-[var(--color-ivory)]"
            title="Reservation channel pending confirmation"
          >
            {dictionary.home.ctaReserve}
          </Button>
        )}
      </Container>
    </section>
  );
}
