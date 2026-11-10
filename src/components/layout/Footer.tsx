import { Container, GeometricAccent } from "@/components/ui";
import { getDictionary } from "@/lib/i18n";
import { SECTION_IDS } from "@/lib/constants";

/** Static copyright year — avoids unstable `Date` during Cache Components prerender. */
const COPYRIGHT_YEAR = 2026;

export function Footer() {
  const dictionary = getDictionary();

  return (
    <footer
      id={SECTION_IDS.contact}
      className="relative overflow-hidden border-t border-[var(--color-gold)]/20 bg-[var(--color-deep-green)] text-[var(--color-ivory)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] moorish-pattern"
      />
      <Container className="relative grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5">
          <GeometricAccent tone="gold" />
          <div>
            <p className="font-display text-3xl tracking-[0.06em]">
              {dictionary.brand.wordmark}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[var(--color-gold)]">
              {dictionary.brand.name}
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--color-ivory)]/70">
            {dictionary.footer.contactPending}
          </p>
        </div>

        <div className="flex flex-col justify-between gap-8 sm:items-end sm:text-right">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 sm:justify-end">
            <a
              href={`#${SECTION_IDS.intro}`}
              className="text-xs uppercase tracking-[0.2em] text-[var(--color-ivory)]/75 transition-colors hover:text-[var(--color-gold)]"
            >
              {dictionary.nav.restaurant}
            </a>
            <a
              href={`#${SECTION_IDS.menu}`}
              className="text-xs uppercase tracking-[0.2em] text-[var(--color-ivory)]/75 transition-colors hover:text-[var(--color-gold)]"
            >
              {dictionary.nav.menu}
            </a>
            <a
              href={`#${SECTION_IDS.gallery}`}
              className="text-xs uppercase tracking-[0.2em] text-[var(--color-ivory)]/75 transition-colors hover:text-[var(--color-gold)]"
            >
              {dictionary.nav.gallery}
            </a>
          </nav>
          <div className="space-y-2 text-xs tracking-[0.08em] text-[var(--color-ivory)]/55">
            <p className="uppercase tracking-[0.22em] text-[var(--color-gold)]/90">
              © {COPYRIGHT_YEAR} · {dictionary.footer.discovery}
            </p>
            <p>{dictionary.footer.rights}</p>
            <p>{dictionary.footer.photoCredit}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
