# GERONA 12 — Printed QR recovery (`girona12.netlify.app`)

## Problem

Decoded destination of the existing printed / repo QR assets:

`https://girona12.netlify.app/es/menu-original`

Evidence (do not regenerate QR):

- PNG decode: `public/menu/qr/gerona12-menu-original.png` → that exact URL
- Live probe of the old URL: Netlify **site-not-found 404** (no Next.js headers)
- Verified live menu: `https://gerona12.netlify.app/es/menu-original` → **HTTP 200**

Cause: the Netlify site slug was renamed from `girona12` → `gerona12`. The former
`*.netlify.app` subdomain is no longer bound to this project.

## Option A — Attach retired hostname as domain alias on site `gerona12`

**Not possible on the current site.**

- Each Netlify site has **one** default `sitename.netlify.app` hostname derived from the site name.
- Domain aliases / custom domains are for **owner-controlled DNS names**, not a second `*.netlify.app` slug on the same site.
- Requests to `girona12.netlify.app` never reach site `gerona12` — the edge returns site-not-found before any site config, plugin, or `netlify.toml` runs.

Repo / OpenNext config cannot attach `girona12.netlify.app` to the live site.

## Option B — Permanent redirect in this site’s `netlify.toml`

**Not possible while the old hostname is unbound.**

A redirect such as:

```toml
[[redirects]]
  from = "https://girona12.netlify.app/*"
  to = "https://gerona12.netlify.app/:splat"
  status = 301
  force = true
```

only runs for hosts that are **already mapped** to this site. Today the old host is
not mapped, so the rule would never execute. Adding it to the production site’s
`netlify.toml` would **not** restore the printed QR.

## Why the old hostname cannot be restored from this repository

| Attempt | Result |
|---------|--------|
| Alias `girona12.netlify.app` on site `gerona12` | Unsupported (one Netlify subdomain per site name) |
| Redirect in this site’s `netlify.toml` | Unreachable — old host never hits this site |
| Point SEO / crawl at the old host | Forbidden — host is dead; crawl stays on `gerona12.netlify.app` |
| Regenerate QR | Out of scope — requires owner/TD approval |

## Manual Netlify / owner actions required

### Preferred recovery (dashboard — separate redirect-only site)

This is the only Netlify-supported pattern to keep the **encoded** QR URL working
without reprinting:

1. In **Netlify Dashboard**, create a **new** site (can be drag-and-drop; no Git required).
2. Deploy the contents of `docs/deploy/qr-legacy-redirect-site/` from this repo
   (static `index.html` + `netlify.toml` with a forced 301 to the live host).
3. **Site configuration → Site details → Change site name** to exactly **`girona12`**
   so the site receives `https://girona12.netlify.app`.
   - If the name is “already taken”, contact **Netlify Support** to release or
     transfer the slug, or wait until it is available again.
4. Verify:
   - `https://girona12.netlify.app/es/menu-original` → **301** →  
     `https://gerona12.netlify.app/es/menu-original` → **200**
   - Valid TLS on both hosts (`*.netlify.app`)
   - Menu 26 pages, ES/EN/AR, Arabic RTL on the **live** host after follow-redirects
5. Do **not** merge that redirect site into this app’s build pipeline.

Prepared kit: `docs/deploy/qr-legacy-redirect-site/` (not deployed by this PR).

### If the slug `girona12` cannot be claimed

1. Owner/TD must **approve a replacement QR** encoding  
   `https://gerona12.netlify.app/es/menu-original` (or later `https://gerona12.es/...`).
2. Reprint physical materials.
3. Keep existing QR bytes in-repo until that approval (do not silently regenerate).

## Safest recovery plan (ordered)

1. **Immediate:** Share the working URL with staff:  
   `https://gerona12.netlify.app/es/menu-original`
2. **Preferred (no reprint):** Dashboard deploy of redirect-only site named `girona12`
   using `docs/deploy/qr-legacy-redirect-site/` — TD must perform / approve deploy.
3. **Fallback:** Owner-approved new QR + reprint.
4. **Later cutover:** Custom domain `gerona12.es` + regenerate QR to apex (separate task).

## Explicit non-claims

- This PR does **not** claim the printed QR works today.
- This PR does **not** deploy the redirect-only site.
- SEO crawl origin remains `https://gerona12.netlify.app`.
- No changes to QR image bytes, menu WebP pages, or the Netlify OpenNext pipeline.
