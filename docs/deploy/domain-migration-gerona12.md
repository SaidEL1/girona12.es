# GERONA 12 — Domain migration readiness (`gerona12.es`)

## Official identity

| Field | Value |
|-------|-------|
| Brand | **GERONA 12** |
| Permanent custom domain | **gerona12.es** |
| Future origin (after custom-domain cutover) | **https://gerona12.es** |
| Intended Netlify hostname (after site rename) | **https://gerona12.es.netlify.app** |
| Verified live Netlify hostname (current) | **https://girona12.netlify.app** |

## Hostname verification evidence (do not skip)

### Verified live — `https://girona12.netlify.app`

- HTTPS `/es` → **200** (Netlify + Next.js)
- TLS certificate SAN includes `*.netlify.app` (matches this host)
- Deploy alias also live: `https://main--girona12.netlify.app`

### Not active — `https://gerona12.es.netlify.app`

Verified **2026-11-11** (Asia/Qatar):

- DNS A/AAAA resolves (Netlify edge IPs — same anycast pool as other `*.netlify.app` hosts)
- TLS: hostname is a **multi-level** subdomain; it is **not** covered by the `*.netlify.app` wildcard in practice for this name (curl: SSL certificate subject-name mismatch)
- HTTP (insecure probe): **404** body `Not Found` — Netlify **site-not-found** page (`utm_campaign=…site-not-found-text`)
- Conclusion: **no Netlify site is configured for this hostname**. A repo edit cannot rename the Netlify project.

### Not active — `https://gerona12.es`

- DNS: **NXDOMAIN** / could not resolve (custom domain not attached)

## Current crawl-facing origin (live)

Until the intended Netlify hostname **or** the custom domain is connected and verified:

- Live host / crawl origin: **https://girona12.netlify.app**
- Controlled in `src/lib/site-url.ts`:
  - `NETLIFY_HOSTNAME_RENAMED = false`
  - `DOMAIN_CUTOVER_COMPLETE = false`
- `metadataBase`, canonicals, Open Graph, sitemap, robots, and JSON-LD all use **CRAWL_ORIGIN** (= live Netlify while both flags are false)
- Existing menu QR still decodes to `https://girona12.netlify.app/es/menu-original`
- **Do not regenerate the QR** and **do not activate redirects** until the target host is live

## Already prepared in the app

- Brand spelling **GERONA 12** (ES/EN/AR)
- Central origins: `LIVE_NETLIFY_ORIGIN`, `INTENDED_NETLIFY_ORIGIN`, `FUTURE_SITE_ORIGIN`
- Cutover flags + SEO origin guard: `scripts/check-seo-origin.mjs`
- Locale cookie: `gerona12_locale`
- `/robots.txt` and `/sitemap.xml` excluded from locale proxy redirects

## Manual Netlify actions required (dashboard — not done by this PR)

### A. Activate intended Netlify hostname `gerona12.es.netlify.app`

1. Open **Netlify Dashboard** → site currently named **`girona12`** (serves `girona12.netlify.app`).
2. **Site configuration** → **Site details** → **Change site name**.
3. Set the site name so the default hostname becomes **`gerona12.es.netlify.app`**  
   (typically site name `gerona12.es` if Netlify accepts a dot in the slug; if Netlify rejects dots, stop and keep `girona12.netlify.app` — do not invent an alternate crawl host).
4. Confirm:
   - `https://gerona12.es.netlify.app/es` returns **200** with a **valid** certificate (no subject-name mismatch)
   - Homepage, `/es/menu-original`, and Contacto load on the new hostname
5. Only then set `NETLIFY_HOSTNAME_RENAMED = true` in `src/lib/site-url.ts` (TD GO) so crawl URLs move to `https://gerona12.es.netlify.app`.

### B. Attach permanent custom domain `gerona12.es`

1. Attach custom domain `gerona12.es` (+ `www`) in Netlify DNS / registrar.
2. Confirm HTTPS certificates are active on `https://gerona12.es`.
3. Verify homepage, `/es/menu-original`, and Contacto over the new domain.
4. Set `DOMAIN_CUTOVER_COMPLETE = true` in `src/lib/site-url.ts` (TD GO) so crawl URLs switch to `https://gerona12.es`.
5. Add Netlify redirects (example — **do not enable until steps B2–B3 pass**):

   ```toml
   # PENDING — enable only after gerona12.es HTTPS is verified
   # [[redirects]]
   #   from = "https://girona12.netlify.app/*"
   #   to = "https://gerona12.es/:splat"
   #   status = 301
   #   force = true
   # [[redirects]]
   #   from = "https://gerona12.es.netlify.app/*"
   #   to = "https://gerona12.es/:splat"
   #   status = 301
   #   force = true
   ```

6. Regenerate and reprint the menu QR to `https://gerona12.es/es/menu-original` (separate approved task).
7. Optionally map apex/`www` preference (apex canonical recommended).

## Intentionally unchanged (pre-cutover)

- GitHub repository `SaidEL1/girona12.es` and npm `package.json` `"name": "girona12.es"`
- Netlify project slug / live hostname until dashboard rename (A) completes
- Verified email `girona12.andalus@gmail.com`
- Street address `Calle Girona 12, 04001 Almería, España`
- Original 26 menu WebP pages, order, hashes, viewer behavior, and QR destination
- Netlify build adapter / deployment pipeline (`netlify.toml` build settings)
