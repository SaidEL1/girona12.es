import type { Dictionary, LocaleCode, LocaleConfig } from "@/types";
import { ar } from "./ar";
import { en } from "./en";
import { es } from "./es";

export const localeConfigs: Record<LocaleCode, LocaleConfig> = {
  es: {
    code: "es",
    label: "Spanish",
    nativeLabel: "ES",
    dir: "ltr",
    htmlLang: "es",
  },
  en: {
    code: "en",
    label: "English",
    nativeLabel: "EN",
    dir: "ltr",
    htmlLang: "en",
  },
  ar: {
    code: "ar",
    label: "Arabic",
    nativeLabel: "ع",
    dir: "rtl",
    htmlLang: "ar",
  },
};

export const dictionaries: Record<LocaleCode, Dictionary> = {
  es,
  en,
  ar,
};

export const supportedLocales: LocaleCode[] = ["es", "en", "ar"];

export { ar, en, es };
