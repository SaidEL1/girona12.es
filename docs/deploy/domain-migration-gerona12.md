# GERONA 12 — Domain migration readiness (`gerona12.es`)

## Official identity

| Field | Value |
|-------|-------|
| Brand | **GERONA 12** |
| Intended future domain | **gerona12.es** |
| Future origin (after cutover) | **https://gerona12.es** |

## Current crawl-facing origin (live)

Until DNS, HTTPS, and redirects for `gerona12.es` are connected and verified:

- Live host / crawl origin: **https://girona12.netlify.app**
- Controlled by `DOMAIN_CUTOVER_COMPLETE = false` in `src/lib/site-url.ts`
- `metadataBase`, canonicals, Open Graph, sitemap, robots, and JSON-LD all use **CRAWL_ORIGIN** (= Netlify while the flag is false)
- Existing menu QR still decodes to `https://girona12.netlify.app/es/menu-original`
- **Do not regenerate the QR** and **do not activate a redirect** to `gerona12.es` until that host is live

## Already prepared in the app

- Brand spelling **GERONA 12** (ES/EN/AR)
- Future domain constants: `FUTURE_SITE_DOMAIN` / `FUTURE_SITE_ORIGIN`
- Cutover flag + SEO origin guard script: `scripts/check-seo-origin.mjs`
- Locale cookie renamed to `gerona12_locale`
- `/robots.txt` and `/sitemap.xml` excluded from locale proxy redirects

## Pending cutover steps (manual / TD approval)

1. Attach custom domain `gerona12.es` (+ `www`) in Netlify DNS / registrar.
2. Confirm HTTPS certificates are active on `https://gerona12.es`.
3. Verify homepage, `/es/menu-original`, and Contacto over the new domain.
4. Set `DOMAIN_CUTOVER_COMPLETE = true` in `src/lib/site-url.ts` (TD GO) so crawl URLs switch to `https://gerona12.es`.
5. Add Netlify redirects (example — **do not enable until step 2–3 pass**):

   ```toml
   # PENDING — enable only after gerona12.es HTTPS is verified
   # [[redirects]]
   #   from = "https://girona12.netlify.app/*"
   #   to = "https://gerona12.es/:splat"
   #   status = 301
   #   force = true
   ```

6. Regenerate and reprint the menu QR to `https://gerona12.es/es/menu-original` (separate approved task).
7. Optionally map apex/`www` preference (apex canonical recommended).

## Intentionally unchanged (pre-cutover)

- GitHub repository `SaidEL1/girona12.es`
- Netlify project slug / hostname
- Verified email `girona12.andalus@gmail.com`
- Street address `Calle Girona 12, 04001 Almería, España`
- Original 26 menu WebP pages, order, hashes, viewer behavior, and QR destination
