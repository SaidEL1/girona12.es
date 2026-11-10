# GERONA 12 — Exact PDF Digital Menu

Image-based viewer for the original 26-page menu. No redesign, OCR, or content rewrite.

## Route

- Primary: `/es/menu-original`
- Also available under `/en/menu-original` and `/ar/menu-original` (same JPEG pages)

## Assets

- `public/menu/pages/page-01.jpg` … `page-26.jpg` (1250×1773)
- Bytes copied unchanged from the supplied upload zips
- Served via native `<img>` (not `next/image`) so the optimizer cannot recompress them

## Landing

- New section `DigitalMenuCta` with original cover preview and CTA **“Ver nuestra carta”** → `/es/menu-original`
- Existing data-driven `/[locale]/menu` left intact

## QR

| File | Purpose |
|------|---------|
| `public/menu/qr/gerona12-menu-original.png` | High-res PNG (1080×1080) |
| `public/menu/qr/gerona12-menu-original.svg` | Vector SVG |
| `docs/print/gerona12-menu-original-qr.pdf` | Printable branded A4 |

Decoded URL (PNG + PDF render): `https://girona12.netlify.app/es/menu-original`

## Known source anomalies (preserved)

1. **Page 06 ≈ page 14** — near-duplicate Arabic burgers pages; both kept in order.
2. **Spanish burgers page missing** from the supplied 26-page set — not fabricated.

## Out of scope

- Netlify OpenNext config unchanged
- No merge / production deploy in this PR
