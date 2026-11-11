/**
 * Official public site identity for GERONA 12.
 *
 * Brand spelling: GERONA 12
 * Permanent custom domain (future cutover): gerona12.es → https://gerona12.es
 * Intended Netlify hostname (site name with .es): https://gerona12.es.netlify.app
 *
 * Verified live Netlify hostname (2026-11-11, Asia/Qatar):
 *   https://gerona12.netlify.app  → HTTPS /es 200 (Netlify site slug `gerona12`)
 * Former slug host https://girona12.netlify.app → site-not-found 404 after rename
 * Intended host https://gerona12.es.netlify.app → NOT configured
 *   (TLS subject-name mismatch + Netlify site-not-found 404)
 *
 * Do NOT point crawl-facing SEO at gerona12.es.netlify.app or gerona12.es until
 * each is verified. Do not activate redirects or regenerate the menu QR before
 * cutover.
 */

/**
 * Flip to `true` only after the Netlify site slug yields
 * https://gerona12.es.netlify.app with a valid cert and HTTP 200 (TD GO).
 */
export const NETLIFY_HOSTNAME_RENAMED = false as const;

/** Flip to `true` only after gerona12.es DNS + HTTPS are verified (TD GO). */
export const DOMAIN_CUTOVER_COMPLETE = false as const;

/** Intended apex domain (brand / future cutover). */
export const FUTURE_SITE_DOMAIN = "gerona12.es" as const;
export const FUTURE_SITE_ORIGIN = "https://gerona12.es" as const;

/**
 * Intended Netlify default hostname after renaming the site slug to include `.es`.
 * Not used for crawl URLs while NETLIFY_HOSTNAME_RENAMED is false.
 */
export const INTENDED_NETLIFY_ORIGIN =
  "https://gerona12.es.netlify.app" as const;

/**
 * Verified live Netlify hostname (current production after slug rename to `gerona12`).
 * Keep crawl signals here until INTENDED_NETLIFY_ORIGIN or FUTURE_SITE_ORIGIN
 * is verified.
 */
export const LIVE_NETLIFY_ORIGIN = "https://gerona12.netlify.app" as const;

/** Former Netlify hostname (slug `girona12`) — retired; do not use for crawl. */
export const FORMER_NETLIFY_ORIGIN = "https://girona12.netlify.app" as const;

/** @deprecated Prefer LIVE_NETLIFY_ORIGIN — alias for existing imports/guards. */
export const NETLIFY_ORIGIN = LIVE_NETLIFY_ORIGIN;

/**
 * Origin used for all crawl-facing absolute URLs
 * (metadataBase, canonical, Open Graph, sitemap, robots, JSON-LD).
 *
 * Priority while flags are false → true:
 * 1. FUTURE_SITE_ORIGIN when DOMAIN_CUTOVER_COMPLETE
 * 2. INTENDED_NETLIFY_ORIGIN when NETLIFY_HOSTNAME_RENAMED
 * 3. LIVE_NETLIFY_ORIGIN (verified production)
 */
export const CRAWL_ORIGIN = (
  DOMAIN_CUTOVER_COMPLETE
    ? FUTURE_SITE_ORIGIN
    : NETLIFY_HOSTNAME_RENAMED
      ? INTENDED_NETLIFY_ORIGIN
      : LIVE_NETLIFY_ORIGIN
) as
  | typeof FUTURE_SITE_ORIGIN
  | typeof INTENDED_NETLIFY_ORIGIN
  | typeof LIVE_NETLIFY_ORIGIN;

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
