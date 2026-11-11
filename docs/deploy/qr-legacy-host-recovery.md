# GERONA 12 — Printed QR / legacy host notes

## TD decision — CANCELLED (2026-11-12, Asia/Qatar)

**Legacy redirect deployment is CANCELLED.**

- Do **not** create or deploy a separate Netlify site named `girona12`.
- Do **not** integrate `docs/deploy/qr-legacy-redirect-site/` into the main app.
- The prepared kit remains **archived** in-repo for historical reference only.

### Final QR strategy

1. Keep current production on `https://gerona12.netlify.app` until cutover.
2. Connect official custom domain **`gerona12.es`** to the main Netlify site and verify HTTPS.
3. Flip crawl SEO to `https://gerona12.es` only after TD GO (`DOMAIN_CUTOVER_COMPLETE`).
4. Generate a **new** permanent QR encoding:

   `https://gerona12.es/es/menu-original`

5. Do **not** generate that QR until domain + HTTPS + locale menu routes are verified.

See:

- `docs/deploy/custom-domain-gerona12-es.md` — DNS / Netlify attach steps
- `docs/deploy/domain-migration-gerona12.md` — cutover checklist

## Historical context (pre-cancellation)

Existing printed / repo QR still decodes to:

`https://girona12.netlify.app/es/menu-original`

That hostname is unbound (Netlify site-not-found) after the site slug rename
`girona12` → `gerona12`. Options to alias or redirect that hostname on the
**current** main site were not possible. TD chose **not** to restore it via a
second Netlify site; the permanent fix is a new QR on `gerona12.es` after go-live.

Archived kit (do not deploy): `docs/deploy/qr-legacy-redirect-site/`
