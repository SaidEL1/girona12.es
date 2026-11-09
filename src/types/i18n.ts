import type { LocaleCode } from "./menu";

export type { LocaleCode };

export type TextDirection = "ltr" | "rtl";

export interface LocaleConfig {
  code: LocaleCode;
  label: string;
  nativeLabel: string;
  dir: TextDirection;
  /** BCP 47 / HTML lang attribute */
  htmlLang: string;
}

export interface Dictionary {
  locale: LocaleCode;
  brand: {
    name: string;
    tagline: string;
  };
  nav: {
    home: string;
    menu: string;
    gallery: string;
    contact: string;
    reserve: string;
  };
  home: {
    headline: string;
    support: string;
    ctaMenu: string;
    ctaReserve: string;
  };
  sections: {
    intro: string;
    menu: string;
    featured: string;
    gallery: string;
    contact: string;
    location: string;
    reservation: string;
  };
  footer: {
    rights: string;
    comingSoon: string;
  };
}
