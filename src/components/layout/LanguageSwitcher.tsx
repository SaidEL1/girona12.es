"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { localeConfigs, supportedLocales } from "@/data/i18n";
import { LOCALE_COOKIE, replaceLocaleInPathname } from "@/lib/i18n";
import type { LocaleCode } from "@/types";
import { cn } from "@/lib/cn";

type LanguageSwitcherProps = {
  locale: LocaleCode;
  label: string;
  className?: string;
};

function persistLocale(next: LocaleCode) {
  document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
}

/**
 * Elegant ES | EN | AR switcher.
 * Preserves the current path and in-page hash when changing language.
 */
export function LanguageSwitcher({
  locale,
  label,
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${locale}`;
  const router = useRouter();

  return (
    <nav
      aria-label={label}
      dir="ltr"
      className={cn(
        "flex items-center gap-1 text-[0.65rem] uppercase tracking-[0.2em]",
        className,
      )}
    >
      {supportedLocales.map((code, index) => {
        const config = localeConfigs[code];
        const isActive = code === locale;
        const targetPath = replaceLocaleInPathname(pathname, code);

        return (
          <span key={code} className="flex items-center gap-1">
            {index > 0 ? (
              <span aria-hidden className="text-[var(--color-ivory)]/25">
                |
              </span>
            ) : null}
            <Link
              href={targetPath}
              hrefLang={config.htmlLang}
              aria-current={isActive ? "page" : undefined}
              title={config.label}
              className={cn(
                "px-1.5 py-1 transition-colors",
                isActive
                  ? "text-[var(--color-gold)]"
                  : "text-[var(--color-ivory)]/55 hover:text-[var(--color-gold)]",
              )}
              onClick={(event) => {
                persistLocale(code);
                const hash =
                  typeof window !== "undefined" ? window.location.hash : "";
                if (!hash) return;
                event.preventDefault();
                router.push(`${targetPath}${hash}`);
              }}
            >
              {config.nativeLabel}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
