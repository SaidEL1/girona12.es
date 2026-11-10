import type { SiteConfig } from "@/types";

/**
 * Canonical site config.
 * Contact details verified from the owner business card (business card.pdf, page 1).
 * Hours, WhatsApp, and social URLs stay unset until officially supplied.
 */
const VERIFIED_ADDRESS = "Calle Girona 12, 04001 Almería, España";

export const siteConfig: SiteConfig = {
  brandName: "Restaurante Al Andalus",
  legalName: "GERONA 12 — Restaurante Al Andalus",
  /** Spanish is the primary default language for the entire site. */
  defaultLocale: "es",
  contact: {
    phone: "+34 631 61 51 81",
    email: "girona12.andalus@gmail.com",
    addressLines: ["Calle Girona 12", "04001 Almería, España"],
    city: "Almería",
    postalCode: "04001",
    country: "España",
  },
  location: {
    label: VERIFIED_ADDRESS,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VERIFIED_ADDRESS)}`,
  },
  social: [],
  reservation: {
    note: "Canal de reservas pendiente de confirmación.",
  },
};

/** Display string for the full verified street address. */
export const verifiedAddress = VERIFIED_ADDRESS;

/** `tel:` href — spaces stripped from the published phone number. */
export function phoneTelHref(phone: string = siteConfig.contact.phone ?? ""): string {
  return `tel:${phone.replace(/[\s()-]/g, "")}`;
}

/** `mailto:` href for the verified email. */
export function emailMailtoHref(
  email: string = siteConfig.contact.email ?? "",
): string {
  return `mailto:${email}`;
}
