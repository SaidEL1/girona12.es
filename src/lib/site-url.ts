/**
 * Official public site identity for GERONA 12.
 *
 * Primary domain (canonical / OG / sitemap / JSON-LD): https://gerona12.es
 * Interim Netlify hostname remains live until DNS + HTTPS on gerona12.es
 * are connected and redirects are explicitly approved. Do not force a
 * redirect to an unconnected domain from application code.
 */

export const SITE_DOMAIN = "gerona12.es" as const;
export const SITE_ORIGIN = "https://gerona12.es" as const;

/** Current hosting hostname — preserved until cutover is approved. */
export const NETLIFY_ORIGIN = "https://girona12.netlify.app" as const;

/**
 * Absolute URL on the official domain.
 * Paths should already be localized (e.g. `/es/menu-original`).
 */
export function absoluteSiteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized === "/" ? "" : normalized}`;
}
