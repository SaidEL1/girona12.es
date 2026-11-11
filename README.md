# GERONA 12 — Restaurante Al Andalus

Premium Andalusian restaurant website for **Al Baraka Digital**.

## Current phase

**Phase 04** — Real menu system architecture (`/es/menu`, `/en/menu`, `/ar/menu`) with typed multilingual data model, search/filter UI, and empty verified state.

**Blocker:** `docs/source/gerona12-full-menu.pdf` is not in the repository. No dishes or prices are invented until that PDF is supplied.

Contact details (phone, email, address) are published from the verified owner business card on `/contacto` and in the footer. Opening hours and social URLs remain unpublished until supplied.

## Stack

- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- Lucide React
- ESLint
- npm

## Develop

```bash
npm install
npm run dev
```

```bash
npm run lint
npm run build
```

## Deploy (Netlify)

Brand: **GERONA 12** · Intended domain: **gerona12.es**  
Crawl-facing SEO origin (until DNS cutover): **https://girona12.netlify.app**  

See `docs/deploy/domain-migration-gerona12.md`. Do not flip `DOMAIN_CUTOVER_COMPLETE` or force redirects until `gerona12.es` HTTPS is verified.

This app is **Next.js App Router** (not a static `out/` export). Netlify should use the OpenNext adapter with `npm run build` and an **empty publish directory**. See `netlify.toml` and `docs/deploy/netlify-404-investigation.md`.

Homepage routes live under `/[locale]` (`/es` default). `/` redirects to Spanish via `src/proxy.ts`.

## Brand tokens

| Token      | Hex       |
|------------|-----------|
| Emerald    | `#064D40` |
| Deep Green | `#032F28` |
| Royal Gold | `#D9AE4D` |
| Warm Ivory | `#F4EBDD` |
| Dark Text  | `#17241F` |

## Architecture

```
src/app/                 # App Router entry
src/components/layout/   # Header, footer, shell
src/components/sections/ # Landing sections
src/components/menu/     # Menu UI stubs
src/components/ui/       # Shared primitives
src/data/                # Site + menu + i18n registries
src/lib/                 # Helpers
src/types/               # Shared TypeScript models
public/brand/            # Menu-derived geometric crops & ornaments
public/menu/             # Original menu WebP pages + QR (read-only source of truth)
```

## Visual identity

Non-menu surfaces use emerald/gold/ivory surfaces and decorative assets derived from the original GERONA 12 menu pages. Stock photography and external image URLs are not used. The gallery remains a designed placeholder until the owner supplies real restaurant photographs. The Digital Menu CTA may preview the approved original cover page (`page-01.webp`) without altering menu page bytes.
