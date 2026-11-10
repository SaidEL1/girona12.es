import { PatternBackdrop, ZelligeBorder } from "@/components/brand";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { Container, GeometricAccent } from "@/components/ui";
import { SECTION_IDS } from "@/lib/constants";
import { localizedPath, originalMenuPath } from "@/lib/i18n";
import type { Dictionary, LocaleCode } from "@/types";

const COPYRIGHT_YEAR = 2026;

type FooterProps = {
  locale: LocaleCode;
  dictionary: Dictionary;
};

export function Footer({ locale, dictionary }: FooterProps) {
  return (
    <footer
      id={SECTION_IDS.contact}
      className="relative overflow-hidden border-t border-[var(--color-gold)]/20 bg-[var(--color-deep-green)] text-[var(--color-ivory)]"
    >
      <PatternBackdrop variant="zellige-emerald" intensity="whisper" tone="deep" />
      <ZelligeBorder variant="girih-emerald" className="relative z-10" />
      <Container className="relative z-10 grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.15fr_0.95fr_0.9fr]">
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
        </div>

        <ContactDetails dictionary={dictionary} variant="footer" />

        <div className="flex flex-col justify-between gap-8 lg:items-end lg:text-end">
          <nav
            aria-label={dictionary.a11y.footerNav}
            className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end"
          >
            <a
              href={localizedPath(locale, "/restaurante")}
              className="text-xs uppercase tracking-[0.2em] text-[var(--color-ivory)]/75 transition-colors hover:text-[var(--color-gold)]"
            >
              {dictionary.nav.restaurant}
            </a>
            <a
              href={originalMenuPath(locale)}
              className="text-xs uppercase tracking-[0.2em] text-[var(--color-ivory)]/75 transition-colors hover:text-[var(--color-gold)]"
            >
              {dictionary.nav.menu}
            </a>
            <a
              href={localizedPath(locale, "/galeria")}
              className="text-xs uppercase tracking-[0.2em] text-[var(--color-ivory)]/75 transition-colors hover:text-[var(--color-gold)]"
            >
              {dictionary.nav.gallery}
            </a>
            <a
              href={localizedPath(locale, "/contacto")}
              className="text-xs uppercase tracking-[0.2em] text-[var(--color-ivory)]/75 transition-colors hover:text-[var(--color-gold)]"
            >
              {dictionary.nav.contact}
            </a>
          </nav>
          <div className="space-y-2 text-xs tracking-[0.08em] text-[var(--color-ivory)]/55">
            <p className="uppercase tracking-[0.22em] text-[var(--color-gold)]/90">
              <span className="ltr-isolate">© {COPYRIGHT_YEAR}</span>
              {" · "}
              {dictionary.footer.discovery}
            </p>
            <p>{dictionary.footer.rights}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
