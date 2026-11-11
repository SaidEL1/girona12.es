# Legacy QR host redirect site (manual Netlify deploy)

**Not part of the main GERONA 12 app build.**

Use only if TD approves restoring `https://girona12.netlify.app` as a
redirect-only Netlify site so existing printed QR codes keep working
without regenerating the QR image.

## Steps

1. Netlify Dashboard → **Add new site** → **Deploy manually** (drag & drop).
2. Drop this folder (`index.html` + `netlify.toml`).
3. Site configuration → Change site name → **`girona12`**.
4. Test: `https://girona12.netlify.app/es/menu-original` should 301 to
   `https://gerona12.netlify.app/es/menu-original`.

If the site name `girona12` is unavailable, stop and contact Netlify Support
or approve a replacement QR (see `../qr-legacy-host-recovery.md`).
