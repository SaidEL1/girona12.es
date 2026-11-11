# GERONA 12 — Legacy QR redirect site (`girona12`)

**Independent Netlify site.** Not part of the main GERONA 12 app build.

| Item | Value |
|------|-------|
| Required Netlify site name | **`girona12`** (exact) |
| Hostname after rename | `https://girona12.netlify.app` |
| Redirect target | `https://gerona12.netlify.app/:splat` (HTTP **301**) |
| Printed QR URL preserved | `https://girona12.netlify.app/es/menu-original` |
| Query strings | Preserved by Netlify on the destination |

## Directory contents

```
docs/deploy/qr-legacy-redirect-site/
  README.md          ← this file (dashboard steps + verification)
  netlify.toml       ← forced 301 /* → https://gerona12.netlify.app/:splat
  _redirects         ← same rule for drag-and-drop compatibility
  index.html         ← HTML fallback + noindex (QR path still uses 301)
```

## Redirect configuration

`netlify.toml`:

```toml
[[redirects]]
  from = "/*"
  to = "https://gerona12.netlify.app/:splat"
  status = 301
  force = true
```

`_redirects`:

```
/*    https://gerona12.netlify.app/:splat    301!
```

Examples after TD deploys + renames the site to `girona12`:

| Request | Expected |
|---------|----------|
| `https://girona12.netlify.app/es/menu-original` | **301** → `https://gerona12.netlify.app/es/menu-original` |
| `https://girona12.netlify.app/es/menu-original?utm=print` | **301** → `https://gerona12.netlify.app/es/menu-original?utm=print` |
| `https://girona12.netlify.app/ar/menu-original` | **301** → `https://gerona12.netlify.app/ar/menu-original` |
| `https://girona12.netlify.app/` | **301** → `https://gerona12.netlify.app/` |

## Exact Netlify dashboard deployment instructions

**Do not deploy without TD approval.**

1. Open [Netlify Dashboard](https://app.netlify.com/) → team that owns the live site `gerona12`.
2. **Add new site** → **Deploy manually** → **Drag and drop**.
3. Zip **only** the contents of this folder (`netlify.toml`, `_redirects`, `index.html`)  
   **or** drag the folder itself so those three files are at the **publish root**  
   (do not nest them under an extra `qr-legacy-redirect-site/` directory in the upload).
4. Wait for the first deploy to finish (temporary random `*.netlify.app` name is fine).
5. Open the **new** site → **Site configuration** → **Site details** → **Change site name**.
6. Set the site name to exactly **`girona12`** → Save.  
   - Success → site URL becomes `https://girona12.netlify.app`.  
   - If Netlify says the name is taken → **stop**. Contact Netlify Support to release the slug, or escalate for a replacement QR (see `../qr-legacy-host-recovery.md`).
7. Confirm **Domain management** lists `girona12.netlify.app` on **this** redirect site, not on the main app.
8. Run the verification checklist below. Only then treat printed QR codes as recovered.
9. Leave the main app site (`gerona12` / `https://gerona12.netlify.app`) unchanged.

### Explicit non-actions

- Do **not** merge this folder into the main app `netlify.toml` / OpenNext pipeline.
- Do **not** regenerate or edit QR PNG/SVG/PDF.
- Do **not** modify the 26 menu WebP pages.
- Do **not** change SEO crawl origin on the main app.
- Do **not** merge/deploy production app changes for this recovery.

## Verification checklist (run after TD deploy)

```bash
# 1) Legacy QR path — expect 301 to live menu (no follow)
curl -sSI "https://girona12.netlify.app/es/menu-original" | sed -n '1,20p'
# Expect: HTTP/2 301
# Expect: location: https://gerona12.netlify.app/es/menu-original
# Expect: valid TLS (no certificate errors from curl)

# 2) Follow redirects — expect final 200 on live host
curl -sS -o /dev/null -w "final=%{url_effective} http=%{http_code} redirects=%{num_redirects}\n" \
  -L "https://girona12.netlify.app/es/menu-original"
# Expect: final=https://gerona12.netlify.app/es/menu-original http=200 redirects=1

# 3) Query string preserved
curl -sSI "https://girona12.netlify.app/es/menu-original?utm=print-qr" | rg -i 'HTTP/|location:'
# Expect: 301 and location containing ?utm=print-qr

# 4) Live menu still healthy (direct)
curl -sSI "https://gerona12.netlify.app/es/menu-original" | sed -n '1,15p'
# Expect: HTTP/2 200 and x-powered-by: Next.js

# 5) Sample menu assets on live host
for i in 01 13 26; do
  curl -sS -o /dev/null -w "page-$i %{http_code}\n" \
    "https://gerona12.netlify.app/menu/pages/page-$i.webp"
done
# Expect: 200 for each

# 6) Locales on live host after following legacy QR host
for loc in es en ar; do
  curl -sS -L "https://girona12.netlify.app/$loc/menu-original" \
    | rg -o 'lang="[^"]+"|dir="[^"]+"' | head -2
done
# Expect: es/en dir=ltr; ar dir=rtl
```

### Pass criteria

- [ ] `girona12.netlify.app` HTTPS works (trusted cert)
- [ ] `/es/menu-original` on legacy host returns **301**
- [ ] `Location` is `https://gerona12.netlify.app/es/menu-original`
- [ ] Following the redirect yields **200** menu page
- [ ] Query strings survive the 301
- [ ] Live `gerona12.netlify.app` still returns **200**
- [ ] Main app / QR assets / 26 WebP pages were not modified for this recovery
