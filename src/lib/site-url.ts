/**
 * Official public site identity for GERONA 12.
 *
 * Brand spelling: GERONA 12
 * Permanent custom domain (future cutover): gerona12.es → https://gerona12.es
 * Intended Netlify hostname (after site rename): https://gerona12.es.netlify.app
 *
 * Verified live Netlify hostname (November 2026): https://girona12.netlify.app
 *   Evidence: HTTPS 200 on /es; SSL SAN *.netlify.app matches.
 * Intended Netlify hostname is NOT active yet:
 *   https://gerona12.es.netlify.app → DNS resolves, HTTPS cert mismatch for
 *   multi-level subdomain, HTTP body "Not Found" (Netlify site-not-found).
 * Do NOT point crawl-facing SEO at the intended hostname or custom domain
 * until each is verified. Do not activate redirects or regenerate the menu QR
 * before cutover.
 */

/**
 * Flip to `true` only after the Netlify site slug is renamed so
 * https://gerona12.es.netlify.app serves this project with a valid cert (TD GO).
 */
export const NETLIFY_HOSTNAME_RENAMED = false as const;

/** Flip to `true` only after gerona12.es DNS + HTTPS are verified (TD GO). */
export const DOMAIN_CUTOVER_COMPLETE = false as const;

/** Intended apex domain (brand / future cutover). */
export const FUTURE_SITE_DOMAIN = "gerona12.es" as const;
export const FUTURE_SITE_ORIGIN = "https://gerona12.es" as const;

/**
 * Intended Netlify default hostname after renaming the Netlify site slug.
 * Not used for crawl URLs while NETLIFY_HOSTNAME_RENAMED is false.
 */
export const INTENDED_NETLIFY_ORIGIN =
  "https://gerona12.es.netlify.app" as const;

/**
 * Verified live Netlify hostname (current production).
 * Keep crawl signals here until INTENDED_NETLIFY_ORIGIN or FUTURE_SITE_ORIGIN
 * is verified.
 */
export const LIVE_NETLIFY_ORIGIN = "https://girona12.netlify.app" as const;

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
