import {
  dictionaries,
  localeConfigs,
  supportedLocales,
} from "@/data/i18n";
import type { Dictionary, LocaleCode, LocaleConfig, TextDirection } from "@/types";
import { siteConfig } from "@/data/site";

export function isLocaleCode(value: string): value is LocaleCode {
  return (supportedLocales as string[]).includes(value);
}

export function getLocaleConfig(locale: LocaleCode = siteConfig.defaultLocale): LocaleConfig {
  return localeConfigs[locale];
}

export function getDictionary(locale: LocaleCode = siteConfig.defaultLocale): Dictionary {
  return dictionaries[locale];
}

export function getTextDirection(locale: LocaleCode = siteConfig.defaultLocale): TextDirection {
  return localeConfigs[locale].dir;
}

/**
 * Phase 01: single-locale root. Routing for ES/EN/AR + RTL document dir
 * will land in a later phase via a `[locale]` segment.
 */
export const i18nScaffold = {
  defaultLocale: siteConfig.defaultLocale,
  locales: supportedLocales,
  note: "Locale routing and RTL document switching are scaffolded, not wired.",
} as const;
