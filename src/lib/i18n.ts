import {
  dictionaries,
  localeConfigs,
  supportedLocales,
} from "@/data/i18n";
import type { Dictionary, LocaleCode, LocaleConfig, TextDirection } from "@/types";
import { siteConfig } from "@/data/site";

export const LOCALE_COOKIE = "gerona12_locale";
export const DEFAULT_LOCALE: LocaleCode = siteConfig.defaultLocale;

export function isLocaleCode(value: string): value is LocaleCode {
  return (supportedLocales as string[]).includes(value);
}

export function getLocaleConfig(locale: LocaleCode = DEFAULT_LOCALE): LocaleConfig {
  return localeConfigs[locale];
}

export function getDictionary(locale: LocaleCode = DEFAULT_LOCALE): Dictionary {
  return dictionaries[locale];
}

export function getTextDirection(locale: LocaleCode = DEFAULT_LOCALE): TextDirection {
  return localeConfigs[locale].dir;
}

/** Build a localized path, preserving an optional hash. */
export function localizedPath(
  locale: LocaleCode,
  path = "",
  hash = "",
): string {
  const normalized = path === "/" || path === "" ? "" : path.startsWith("/") ? path : `/${path}`;
  const base = `/${locale}${normalized}`;
  return hash ? `${base}${hash.startsWith("#") ? hash : `#${hash}`}` : base;
}

/** Primary menu experience: exact original PDF page viewer. */
export function originalMenuPath(locale: LocaleCode): string {
  return localizedPath(locale, "/menu-original");
}

/** Secondary data-driven dish list (kept available, not used for primary CTAs). */
export function dataMenuPath(locale: LocaleCode): string {
  return localizedPath(locale, "/menu");
}

/** Swap the locale segment of a pathname (e.g. /es → /ar). */
export function replaceLocaleInPathname(
  pathname: string,
  nextLocale: LocaleCode,
): string {
  const segments = pathname.split("/");
  // ["", "es", ...]
  if (segments.length > 1 && isLocaleCode(segments[1] ?? "")) {
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  }
  return localizedPath(nextLocale, pathname);
}

export const i18nConfig = {
  defaultLocale: DEFAULT_LOCALE,
  locales: supportedLocales,
  cookieName: LOCALE_COOKIE,
} as const;
