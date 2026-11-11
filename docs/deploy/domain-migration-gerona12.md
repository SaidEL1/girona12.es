# GERONA 12 — Domain migration readiness (`gerona12.es`)

## Official identity

| Field | Value |
|-------|-------|
| Brand | **GERONA 12** |
| Permanent custom domain | **gerona12.es** |
| Future origin (after custom-domain cutover) | **https://gerona12.es** |
| Intended Netlify hostname (slug with `.es`) | **https://gerona12.es.netlify.app** |
| Verified live Netlify hostname (current) | **https://gerona12.netlify.app** |
| Former Netlify hostname (retired) | **https://girona12.netlify.app** |

## Hostname verification evidence (do not skip)

### Verified live — `https://gerona12.netlify.app`

Re-checked **2026-11-11** (Asia/Qatar):

- HTTPS `/es` → **200** (Netlify + Next.js, brand GERONA 12)
- Deploy alias: `https://main--gerona12.netlify.app` → **200**
- Netlify project / CI context name: **`gerona12`**
- TLS covered by `*.netlify.app`

### Retired — `https://girona12.netlify.app`

- After the Netlify site slug rename, this host returns Netlify **site-not-found 404**
- Do **not** use for crawl-facing SEO
- Existing printed menu QR still decodes here — **do not regenerate** until TD cutover GO

### Not active — `https://gerona12.es.netlify.app`

- DNS A/AAAA resolves (Netlify anycast)
- TLS: multi-level subdomain subject-name mismatch (`*.netlify.app` does not cover `*.es.netlify.app`)
- HTTP (`curl -k`): **404** Netlify site-not-found
- Conclusion: **no Netlify site is configured for this hostname**. A repo edit cannot create it.

### Not active — `https://gerona12.es`

- DNS: does not resolve (custom domain not attached)

## Current crawl-facing origin (live)

Until `gerona12.es.netlify.app` **or** the custom domain is connected and verified:

- Live host / crawl origin: **https://gerona12.netlify.app**
- Controlled in `src/lib/site-url.ts`:
  - `NETLIFY_HOSTNAME_RENAMED = false`
  - `DOMAIN_CUTOVER_COMPLETE = false`
- `metadataBase`, canonicals, Open Graph, sitemap, robots, and JSON-LD all use **CRAWL_ORIGIN**
- Existing menu QR still decodes to `https://girona12.netlify.app/es/menu-original` (former host)
- **Do not regenerate the QR** and **do not activate redirects** until the target host is live

## Already prepared in the app

- Brand spelling **GERONA 12** (ES/EN/AR)
- Central origins: `LIVE_NETLIFY_ORIGIN`, `INTENDED_NETLIFY_ORIGIN`, `FUTURE_SITE_ORIGIN`, `FORMER_NETLIFY_ORIGIN`
- Cutover flags + SEO origin guard: `scripts/check-seo-origin.mjs`
- Locale cookie: `gerona12_locale`
- `/robots.txt` and `/sitemap.xml` excluded from locale proxy redirects

## Manual Netlify actions required (dashboard — not done by this PR)

### A. Activate intended Netlify hostname `gerona12.es.netlify.app`

1. Open **Netlify Dashboard** → site currently named **`gerona12`** (serves `gerona12.netlify.app`).
2. **Site configuration** → **Site details** → **Change site name**.
3. Set the site name so the default hostname becomes **`gerona12.es.netlify.app`**  
   (typically site name `gerona12.es` if Netlify accepts a dot in the slug; if Netlify rejects dots, stop and keep `gerona12.netlify.app` — do not invent an alternate crawl host).
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
   #   from = "https://gerona12.netlify.app/*"
   #   to = "https://gerona12.es/:splat"
   #   status = 301
   #   force = true
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
- Verified email `girona12.andalus@gmail.com`
- Street address `Calle Girona 12, 04001 Almería, España`
- Original 26 menu WebP pages, order, hashes, viewer behavior, and QR destination bytes
- Netlify build adapter / deployment pipeline (`netlify.toml` build settings)
