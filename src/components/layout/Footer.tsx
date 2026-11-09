import { Container } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/lib/i18n";

/** Static copyright year — avoids unstable `Date` during Cache Components prerender. */
const COPYRIGHT_YEAR = 2026;

export function Footer() {
  const dictionary = getDictionary();

  return (
    <footer className="mt-auto border-t border-[var(--color-emerald)]/15 bg-[var(--color-deep-green)] text-[var(--color-ivory)]">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between sm:py-12">
        <div className="space-y-2">
          <p className="font-display text-2xl tracking-wide">
            {siteConfig.brandName}
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--color-ivory)]/70">
            {dictionary.footer.comingSoon}
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-gold)]/90">
          © {COPYRIGHT_YEAR} · {dictionary.footer.rights}
        </p>
      </Container>
    </footer>
  );
}
