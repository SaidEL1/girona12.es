# GERONA 12 — Domain migration readiness (`gerona12.es`)

## Official identity

| Field | Value |
|-------|-------|
| Brand | **GERONA 12** |
| Primary domain | **gerona12.es** |
| Canonical origin | **https://gerona12.es** |

## Current production host (preserved)

Until DNS, HTTPS, and redirects for `gerona12.es` are connected and verified:

- Live host remains **https://girona12.netlify.app**
- Existing menu QR still decodes to `https://girona12.netlify.app/es/menu-original`
- **Do not regenerate the QR** and **do not activate a redirect** to `gerona12.es` until that host is live

## Already prepared in the app

- `metadataBase` / Open Graph / canonicals → `https://gerona12.es`
- `src/app/sitemap.ts` → URLs under `https://gerona12.es`
- `src/app/robots.ts` → `host` + sitemap on `https://gerona12.es`
- JSON-LD `WebSite` + `Restaurant` → `https://gerona12.es`
- Locale cookie renamed to `gerona12_locale`

## Pending cutover steps (manual / TD approval)

1. Attach custom domain `gerona12.es` (+ `www`) in Netlify DNS / registrar.
2. Confirm HTTPS certificates are active on `https://gerona12.es`.
3. Verify homepage, `/es/menu-original`, and Contacto over the new domain.
4. Add Netlify redirects (example — **do not enable until step 2–3 pass**):

   ```toml
   # PENDING — enable only after gerona12.es HTTPS is verified
   # [[redirects]]
   #   from = "https://girona12.netlify.app/*"
   #   to = "https://gerona12.es/:splat"
   #   status = 301
   #   force = true
   ```

5. Regenerate and reprint the menu QR to `https://gerona12.es/es/menu-original` (separate approved task).
6. Optionally map apex/`www` preference (apex canonical recommended).

## Intentionally unchanged

- GitHub repository `SaidEL1/girona12.es`
- Netlify project slug / hostname until cutover
- Verified email `girona12.andalus@gmail.com`
- Street address `Calle Girona 12, 04001 Almería, España`
- Original 26 menu WebP pages, order, hashes, and viewer behavior
