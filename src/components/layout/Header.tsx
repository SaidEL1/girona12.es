"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { SECTION_IDS } from "@/lib/constants";
import { localizedPath, originalMenuPath } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import type { Dictionary, LocaleCode } from "@/types";

type HeaderProps = {
  locale: LocaleCode;
  dictionary: Dictionary;
};

export function Header({ locale, dictionary }: HeaderProps) {
  const pathname = usePathname() || localizedPath(locale);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const homePath = localizedPath(locale);
  const menuPath = originalMenuPath(locale);
  const isHome = pathname === homePath || pathname === `${homePath}/`;


  const navLinks = [
    {
      href: `${homePath}#${SECTION_IDS.intro}`,
      label: dictionary.nav.restaurant,
    },
    { href: menuPath, label: dictionary.nav.menu },
    {
      href: `${homePath}#${SECTION_IDS.gallery}`,
      label: dictionary.nav.gallery,
    },
    {
      href: `${homePath}#${SECTION_IDS.contact}`,
      label: dictionary.nav.contact,
    },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const solid = scrolled || open || !isHome;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          solid
            ? "border-b border-[var(--color-emerald)]/15 bg-[var(--color-deep-green)]/95 text-[var(--color-ivory)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent text-[var(--color-ivory)]",
        )}
      >
        <Container className="flex h-[4.25rem] items-center justify-between gap-4 sm:h-[4.75rem]">
          <Link
            href={homePath}
            className="group flex flex-col leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
            onClick={() => setOpen(false)}
          >
            <span className="font-display text-[1.35rem] uppercase tracking-[0.12em] text-[var(--color-ivory)] transition-colors group-hover:text-[var(--color-gold)] sm:text-2xl">
              {dictionary.brand.wordmark}
            </span>
            <span className="mt-1 text-[0.62rem] uppercase tracking-[0.28em] text-[var(--color-gold)]">
              {dictionary.brand.name}
            </span>
          </Link>

          <nav
            aria-label={dictionary.a11y.primaryNav}
            className="hidden items-center gap-8 lg:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-ivory)]/85 transition-colors hover:text-[var(--color-gold)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={menuPath}
              className="border border-[var(--color-gold)]/80 px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-green)]"
            >
              {dictionary.home.ctaMenu}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher
              locale={locale}
              label={dictionary.a11y.languageSelector}
              className="hidden sm:flex"
            />

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-[var(--color-ivory)] lg:hidden"
              aria-label={open ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <X aria-hidden className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Menu aria-hidden className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </Container>
      </header>

      {open ? (
        <div
          id={panelId}
          className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-deep-green)] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={dictionary.nav.openMenu}
        >
          <Container className="flex h-[4.25rem] items-center justify-between sm:h-[4.75rem]">
            <p className="font-display text-xl uppercase tracking-[0.12em] text-[var(--color-gold)]">
              {dictionary.brand.wordmark}
            </p>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-[var(--color-ivory)]"
              aria-label={dictionary.nav.closeMenu}
              onClick={() => setOpen(false)}
            >
              <X aria-hidden className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </Container>

          <Container className="flex flex-1 flex-col justify-center gap-2 pb-16">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-[var(--color-gold)]/15 py-4 font-display text-3xl text-[var(--color-ivory)] transition-colors hover:text-[var(--color-gold)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={menuPath}
              className="mt-6 inline-flex min-h-12 items-center justify-center border border-[var(--color-gold)] px-4 py-3 text-sm uppercase tracking-[0.2em] text-[var(--color-gold)]"
              onClick={() => setOpen(false)}
            >
              {dictionary.home.ctaMenu}
            </Link>
            <LanguageSwitcher
              locale={locale}
              label={dictionary.a11y.languageSelector}
              className="mt-8"
            />
          </Container>
        </div>
      ) : null}
    </>
  );
}
