# ARCHIVED — Legacy QR redirect site kit

## Status: CANCELLED — DO NOT DEPLOY

**TD decision (2026-11-12):** Do **not** create a separate Netlify site named
`girona12`. Do **not** deploy this folder. Do **not** merge these redirects into
the main GERONA 12 app (`gerona12` / OpenNext pipeline).

Final strategy: connect **`https://gerona12.es`**, verify HTTPS, then generate a
**new** permanent QR to `https://gerona12.es/es/menu-original` (separate approved
task). See `../custom-domain-gerona12-es.md` and `../qr-legacy-host-recovery.md`.

---

## Archived contents (reference only)

```
docs/deploy/qr-legacy-redirect-site/
  README.md
  netlify.toml       # would have been 301 /* → gerona12.netlify.app/:splat
  _redirects
  index.html
```

These files are kept for audit history. They are **not** part of production.
