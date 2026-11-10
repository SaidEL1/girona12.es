import { Container, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { SECTION_IDS } from "@/lib/constants";

/**
 * Stub — no invented email, phone, or address.
 * Renders details only once real contact fields are supplied.
 */
export function Contact() {
  const dictionary = getDictionary();
  const { contact } = siteConfig;
  const hasContact =
    Boolean(contact.email) ||
    Boolean(contact.phone) ||
    Boolean(contact.addressLines?.length);

  return (
    <section
      id={SECTION_IDS.contact}
      aria-labelledby="contact-heading"
      className="border-b border-[var(--color-emerald)]/10 bg-[var(--color-ivory)] py-20 sm:py-24"
    >
      <Container className="space-y-6">
        <SectionHeading
          id="contact-heading"
          title={dictionary.sections.contact}
          description={hasContact ? undefined : dictionary.footer.comingSoon}
        />
        {hasContact ? (
          <address className="not-italic text-[var(--color-dark-text)]/80">
            {contact.email ? <p>{contact.email}</p> : null}
            {contact.phone ? <p>{contact.phone}</p> : null}
            {contact.addressLines?.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
        ) : null}
      </Container>
    </section>
  );
}
