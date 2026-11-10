import type { Dictionary, LocaleCode, LocaleConfig } from "@/types";
import { ar } from "./ar";
import { en } from "./en";
import { es } from "./es";

export const localeConfigs: Record<LocaleCode, LocaleConfig> = {
  es: {
    code: "es",
    label: "Español",
    nativeLabel: "ES",
    dir: "ltr",
    htmlLang: "es",
    ogLocale: "es_ES",
  },
  en: {
    code: "en",
    label: "English",
    nativeLabel: "EN",
    dir: "ltr",
    htmlLang: "en",
    ogLocale: "en_US",
  },
  ar: {
    code: "ar",
    label: "العربية",
    nativeLabel: "ع",
    dir: "rtl",
    htmlLang: "ar",
    ogLocale: "ar_AR",
  },
};

export const dictionaries: Record<LocaleCode, Dictionary> = {
  es,
  en,
  ar,
};

/** Display order in the language selector */
export const supportedLocales: LocaleCode[] = ["es", "en", "ar"];

export { ar, en, es };
