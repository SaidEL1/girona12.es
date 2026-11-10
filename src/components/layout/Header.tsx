import { Container } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { getDictionary, getLocaleConfig } from "@/lib/i18n";
import { SECTION_IDS } from "@/lib/constants";
import { supportedLocales, localeConfigs } from "@/data/i18n";
import { Menu } from "lucide-react";

/**
 * Phase 01 responsive header shell.
 * Mobile nav toggle and locale routing arrive in a later phase.
 */
export function Header() {
  const dictionary = getDictionary();
  const locale = getLocaleConfig();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-emerald)]/10 bg-[var(--color-ivory)]/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <a
          href={`#${SECTION_IDS.home}`}
          className="group flex flex-col leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-emerald)]"
        >
          <span className="font-display text-xl tracking-wide text-[var(--color-deep-green)] transition-colors group-hover:text-[var(--color-emerald)] sm:text-2xl">
            {siteConfig.brandName}
          </span>
          <span className="mt-1 hidden text-[0.65rem] uppercase tracking-[0.28em] text-[var(--color-gold)] sm:block">
            Gerona 12
          </span>
        </a>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 md:flex"
        >
          <a
            href={`#${SECTION_IDS.menu}`}
            className="text-sm uppercase tracking-[0.18em] text-[var(--color-dark-text)]/80 transition-colors hover:text-[var(--color-emerald)]"
          >
            {dictionary.nav.menu}
          </a>
          <a
            href={`#${SECTION_IDS.gallery}`}
            className="text-sm uppercase tracking-[0.18em] text-[var(--color-dark-text)]/80 transition-colors hover:text-[var(--color-emerald)]"
          >
            {dictionary.nav.gallery}
          </a>
          <a
            href={`#${SECTION_IDS.contact}`}
            className="text-sm uppercase tracking-[0.18em] text-[var(--color-dark-text)]/80 transition-colors hover:text-[var(--color-emerald)]"
          >
            {dictionary.nav.contact}
          </a>
          <a
            href={`#${SECTION_IDS.reservation}`}
            className="border border-[var(--color-gold)]/80 px-4 py-2 text-sm uppercase tracking-[0.18em] text-[var(--color-deep-green)] transition-colors hover:bg-[var(--color-gold)]/15"
          >
            {dictionary.nav.reserve}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="hidden items-center gap-1 text-xs uppercase tracking-[0.2em] text-[var(--color-dark-text)]/60 sm:flex"
            aria-label={`Idioma: ${locale.label}`}
          >
            {supportedLocales.map((code) => {
              const config = localeConfigs[code];
              const isActive = code === locale.code;
              return (
                <span
                  key={code}
                  className={
                    isActive
                      ? "px-1.5 text-[var(--color-emerald)]"
                      : "px-1.5 opacity-50"
                  }
                  aria-current={isActive ? "true" : undefined}
                  title={`${config.label} — routing in a later phase`}
                >
                  {config.nativeLabel}
                </span>
              );
            })}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-[var(--color-deep-green)] md:hidden"
            aria-label="Abrir menú de navegación"
            disabled
            title="Mobile navigation arrives in a later phase"
          >
            <Menu aria-hidden className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </Container>
    </header>
  );
}
