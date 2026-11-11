import { siteConfig } from "@/data/site";
import { SITE_ORIGIN } from "@/lib/site-url";

/**
 * Restaurant / WebSite structured data using the official gerona12.es identity.
 * Contact fields come only from the verified business card.
 */
export function JsonLd() {
  const phone = siteConfig.contact.phone;
  const email = siteConfig.contact.email;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: SITE_ORIGIN,
        name: "GERONA 12",
        alternateName: siteConfig.legalName,
        inLanguage: ["es", "en", "ar"],
      },
      {
        "@type": "Restaurant",
        "@id": `${SITE_ORIGIN}/#restaurant`,
        name: "GERONA 12",
        legalName: siteConfig.legalName,
        url: SITE_ORIGIN,
        image: `${SITE_ORIGIN}/menu/pages/page-01.webp`,
        telephone: phone,
        email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Calle Girona 12",
          addressLocality: "Almería",
          postalCode: "04001",
          addressCountry: "ES",
        },
        servesCuisine: ["Andalusian", "Moroccan", "Mediterranean"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
