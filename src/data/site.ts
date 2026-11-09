import type { SiteConfig } from "@/types";

/**
 * Canonical site config. Contact, location, and reservation targets
 * remain unset until real details are supplied.
 */
export const siteConfig: SiteConfig = {
  brandName: "Restaurante Al Andalus",
  legalName: "Gerona 12 — Restaurante Al Andalus",
  /** Spanish is the primary default language for the entire site. */
  defaultLocale: "es",
  contact: {},
  location: {},
  social: [],
  reservation: {
    note: "Canal de reservas pendiente de confirmación.",
  },
};
