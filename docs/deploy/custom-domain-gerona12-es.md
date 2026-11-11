# GERONA 12 — Connect custom domain `gerona12.es` (main Netlify site)

**Target site:** main production site slug **`gerona12`**  
**Live Netlify URL today:** `https://gerona12.netlify.app`  
**Official domain:** `gerona12.es` (+ `www.gerona12.es`)  
**Final QR (later, after HTTPS + SEO cutover):** `https://gerona12.es/es/menu-original`

Do **not** flip `DOMAIN_CUTOVER_COMPLETE`, regenerate QR, merge PR #14, or enable
production redirects until TD explicitly approves each step.

Current DNS status (2026-11-11 / 12): `gerona12.es` and `www.gerona12.es` do
**not** resolve yet.

---

## Path A — External DNS (keep current registrar DNS)

Use this if the domain stays at your registrar / existing DNS host.

### 1. Add the domain in Netlify (dashboard)

1. Open Netlify → site **`gerona12`** (the main app — not a new site).
2. **Domain management** → **Add a domain** / **Add custom domain**.
3. Enter **`gerona12.es`**.
4. Netlify will also prepare **`www.gerona12.es`** (apex + www pairing).
5. Leave the UI on **Awaiting DNS** / **Pending DNS verification** and copy any
   site-specific values shown in the modal (prefer those if they differ).

### 2. DNS records to create at your registrar

Use the values Netlify shows in the pending modal when present. Defaults from
[Netlify external DNS docs](https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/):

| Type | Host / Name | Value | Notes |
|------|-------------|-------|-------|
| **CNAME** | `www` | `gerona12.netlify.app` | Required for `www.gerona12.es` |
| **ALIAS / ANAME / flattened CNAME** (preferred) | `@` (apex) | `apex-loadbalancer.netlify.com` | Use if your DNS provider supports it |
| **A** (fallback if no ALIAS/ANAME) | `@` (apex) | `75.2.60.5` | Netlify load-balancer IP; **only one** apex A record |

Important:

- Remove conflicting apex A/AAAA/CNAME records that do not point at Netlify.
- Do **not** point apex at `girona12.netlify.app` (retired / unbound).
- Do **not** create a second Netlify site for this domain.
- High-Performance Edge customers: use the load balancer Netlify shows in the modal instead of the defaults above.

### 3. Wait for DNS + HTTPS

1. Wait for propagation (often minutes; up to ~24–48 hours).
2. In Netlify Domain management, wait until the domain shows as verified.
3. Netlify provisions Let’s Encrypt HTTPS automatically once DNS is correct.
4. Confirm the certificate is **Issued** / HTTPS works with no browser warning.

### 4. Verification commands (run before any QR / SEO cutover)

```bash
# DNS
dig +short gerona12.es A
dig +short www.gerona12.es CNAME

# HTTPS + menu locales (expect 200)
curl -sSI "https://gerona12.es/es/menu-original" | sed -n '1,20p'
curl -sSI "https://gerona12.es/en/menu-original" | sed -n '1,15p'
curl -sSI "https://gerona12.es/ar/menu-original" | sed -n '1,15p'

# Live Netlify host must still work
curl -sSI "https://gerona12.netlify.app/es/menu-original" | sed -n '1,15p'
```

Pass criteria before asking for QR generation:

- [ ] `https://gerona12.es` HTTPS valid (trusted cert)
- [ ] `/es/menu-original`, `/en/menu-original`, `/ar/menu-original` → **200**
- [ ] Arabic page `dir=rtl` still correct
- [ ] Main `gerona12.netlify.app` still **200**

---

## Path B — Netlify DNS (nameservers at Netlify)

Use this only if you want Netlify to host the DNS zone.

1. Netlify → **Domains** → **Add or register domain** / bring `gerona12.es` to Netlify DNS.
2. Copy Netlify’s **nameservers**.
3. At the registrar, set the domain’s NS records to those Netlify nameservers.
4. Assign `gerona12.es` (+ www) to site **`gerona12`**.
5. Netlify creates the needed NETLIFY records automatically; wait for HTTPS.

---

## After domain + HTTPS are verified (TD GO sequence)

Do these **only** with explicit TD approval, in order:

1. Set `DOMAIN_CUTOVER_COMPLETE = true` in `src/lib/site-url.ts` so crawl SEO
   (`metadataBase`, canonical, OG, sitemap, robots, JSON-LD) uses
   `https://gerona12.es`.
2. Optionally enable `netlify.app` → `gerona12.es` 301 redirects (separate change).
3. Generate **new** permanent QR → `https://gerona12.es/es/menu-original`.
4. Reprint physical materials; keep old QR assets archived until replaced.
5. Merge / production deploy only with TD approval.

## Explicit non-actions (now)

- Do not deploy `docs/deploy/qr-legacy-redirect-site/` (**CANCELLED**).
- Do not regenerate QR yet.
- Do not flip cutover flags yet.
- Do not merge PR #14 or change production SEO prematurely.
