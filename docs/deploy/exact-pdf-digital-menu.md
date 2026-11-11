# GERONA 12 — Exact PDF Digital Menu

Image-based viewer for the original 26-page menu. No redesign, OCR, or content rewrite.

## Route

- Primary: `/es/menu-original`
- Also available under `/en/menu-original` and `/ar/menu-original` (same page images)

## Assets

- `public/menu/pages/page-01.webp` … `page-26.webp` (1748×2480)
- Bytes copied unchanged from owner `GERONA12-menu-HTML-compact` pack
- Served via native `<img>` (not `next/image`) so the optimizer cannot recompress them

## Landing

- Section `DigitalMenuCta` with original cover preview and CTA → `/[locale]/menu-original`
- Existing data-driven `/[locale]/menu` left intact

## QR

| File | Purpose |
|------|---------|
| `public/menu/qr/gerona12-menu-original.png` | High-res PNG (1080×1080) |
| `public/menu/qr/gerona12-menu-original.svg` | Vector SVG |
| `docs/print/gerona12-menu-original-qr.pdf` | Printable branded A4 |

Decoded URL (PNG + PDF render): `https://girona12.netlify.app/es/menu-original`  
(Verified live Netlify host. Intended Netlify host after site rename: `https://gerona12.es.netlify.app/…` — not active yet.  
Permanent cutover target: `https://gerona12.es/es/menu-original` — regenerate QR only then.)

## Out of scope

- Do not invent dishes or prices
- Do not alter QR destination without approval
- Do not regenerate QR until `gerona12.es` HTTPS is verified
