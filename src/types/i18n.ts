import type { LocaleCode } from "./i18n-locale";

export type { LocaleCode };

export type TextDirection = "ltr" | "rtl";

export interface LocaleConfig {
  code: LocaleCode;
  label: string;
  nativeLabel: string;
  dir: TextDirection;
  /** BCP 47 / HTML lang attribute */
  htmlLang: string;
  /** Open Graph locale tag */
  ogLocale: string;
}

export interface Dictionary {
  locale: LocaleCode;
  brand: {
    /** Primary wordmark — GERONA 12 */
    wordmark: string;
    /** Restaurant name */
    name: string;
    tagline: string;
  };
  nav: {
    home: string;
    restaurant: string;
    menu: string;
    gallery: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  home: {
    headline: string;
    support: string;
    ctaMenu: string;
    ctaDiscover: string;
  };
  sections: {
    intro: {
      eyebrow: string;
      title: string;
      body: string;
    };
    menu: {
      eyebrow: string;
      title: string;
      body: string;
      cta: string;
      pendingNote: string;
    };
    gallery: {
      eyebrow: string;
      title: string;
      body: string;
    };
    closing: {
      title: string;
      body: string;
      ctaMenu: string;
      ctaContact: string;
    };
  };
  footer: {
    rights: string;
    discovery: string;
    contactPending: string;
    photoCredit: string;
  };
  a11y: {
    skipToContent: string;
    languageSelector: string;
  };
}
