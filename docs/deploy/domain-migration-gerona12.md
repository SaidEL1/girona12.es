# GERONA 12 — Domain migration readiness (`gerona12.es`)

## Official identity

| Field | Value |
|-------|-------|
| Brand | **GERONA 12** |
| Permanent custom domain | **gerona12.es** |
| Future origin (after custom-domain cutover) | **https://gerona12.es** |
| Verified live Netlify hostname (current) | **https://gerona12.netlify.app** |
| Former Netlify hostname (retired) | **https://girona12.netlify.app** |
| Intended Netlify slug host (optional / not required for cutover) | **https://gerona12.es.netlify.app** |

## Final printed QR strategy (TD)

| Step | Status |
|------|--------|
| Separate `girona12` legacy redirect site | **CANCELLED — do not deploy** |
| Archived kit `docs/deploy/qr-legacy-redirect-site/` | Keep in repo; do not integrate into main app |
| New permanent QR destination | `https://gerona12.es/es/menu-original` |
| Generate new QR | **Only after** domain connected, HTTPS valid, locale menus 200, SEO cutover |

Details: `docs/deploy/custom-domain-gerona12-es.md`, `docs/deploy/qr-legacy-host-recovery.md`.

## Hostname verification evidence

### Verified live — `https://gerona12.netlify.app`

- HTTPS `/es` and `/es/menu-original` → **200**
- Site slug: **`gerona12`**
- Crawl SEO currently uses this host (`DOMAIN_CUTOVER_COMPLETE = false`)

### Retired — `https://girona12.netlify.app`

- Site-not-found after slug rename
- Old printed QR still encodes this URL (bytes unchanged; no regen yet)

### Not active — `https://gerona12.es`

- DNS does not resolve until custom domain is attached

## Current crawl-facing origin (do not change prematurely)

- `CRAWL_ORIGIN` = **https://gerona12.netlify.app**
- Flags in `src/lib/site-url.ts`:
  - `NETLIFY_HOSTNAME_RENAMED = false`
  - `DOMAIN_CUTOVER_COMPLETE = false`
- metadataBase, canonicals, Open Graph, sitemap, robots, JSON-LD use **CRAWL_ORIGIN**

## Next steps (owner / TD)

1. Follow **`docs/deploy/custom-domain-gerona12-es.md`** to attach `gerona12.es` (+ www) to the **main** site `gerona12`.
2. Configure DNS (external or Netlify DNS) using the records in that doc.
3. Wait for HTTPS certificate **Issued**.
4. Verify `/es|/en|/ar/menu-original` → **200** on `https://gerona12.es`.
5. TD GO → flip `DOMAIN_CUTOVER_COMPLETE`, then generate new QR (separate task).
6. Do **not** merge/deploy without explicit approval.

### DNS records summary (external DNS)

| Type | Host | Value |
|------|------|-------|
| CNAME | `www` | `gerona12.netlify.app` |
| ALIAS/ANAME/flattened CNAME (preferred) | `@` | `apex-loadbalancer.netlify.com` |
| **or** A (fallback) | `@` | `75.2.60.5` |

Prefer any values shown in Netlify’s “Pending DNS verification” modal.

## Intentionally unchanged (pre-cutover)

- GitHub repository `SaidEL1/girona12.es` / npm package name
- Email `girona12.andalus@gmail.com`
- Street `Calle Girona 12, 04001 Almería, España`
- 26 menu WebP pages, QR asset bytes, viewer behavior
- Main app OpenNext / `netlify.toml` build pipeline
- SEO crawl origin until TD GO
