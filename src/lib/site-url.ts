/**
 * Official public site identity for GERONA 12.
 *
 * Brand spelling: GERONA 12
 * Intended future domain: gerona12.es (https://gerona12.es)
 *
 * Crawl-facing origin (canonical / metadataBase / Open Graph / sitemap /
 * robots / JSON-LD) stays on the live Netlify host until DNS + HTTPS for
 * gerona12.es are verified and DOMAIN_CUTOVER_COMPLETE is flipped to true.
 * Do not activate redirects or regenerate the menu QR before that cutover.
 */

/** Flip to `true` only after gerona12.es DNS + HTTPS are verified (TD GO). */
export const DOMAIN_CUTOVER_COMPLETE = false as const;

/** Intended apex domain (brand / future cutover). */
export const FUTURE_SITE_DOMAIN = "gerona12.es" as const;
export const FUTURE_SITE_ORIGIN = "https://gerona12.es" as const;

/** Current live hosting hostname. */
export const NETLIFY_ORIGIN = "https://girona12.netlify.app" as const;

/**
 * Origin used for all crawl-facing absolute URLs.
 * Must remain NETLIFY_ORIGIN while DOMAIN_CUTOVER_COMPLETE is false.
 */
export const CRAWL_ORIGIN = (
  DOMAIN_CUTOVER_COMPLETE ? FUTURE_SITE_ORIGIN : NETLIFY_ORIGIN
) as typeof NETLIFY_ORIGIN | typeof FUTURE_SITE_ORIGIN;

/** @deprecated Prefer CRAWL_ORIGIN — kept as alias for existing imports. */
export const SITE_ORIGIN = CRAWL_ORIGIN;

/** @deprecated Prefer FUTURE_SITE_DOMAIN — brand domain name only. */
export const SITE_DOMAIN = FUTURE_SITE_DOMAIN;

/**
 * Absolute URL on the current crawl-facing origin.
 * Paths should already be localized (e.g. `/es/menu-original`).
 */
export function absoluteSiteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${CRAWL_ORIGIN}${normalized === "/" ? "" : normalized}`;
}
