# Gerona 12 — Restaurante Al Andalus

Premium Andalusian restaurant website for **Al Baraka Digital**.

## Current phase

**Phase 03** — Spanish-first multilingual experience (`/es`, `/en`, `/ar`) with RTL Arabic, cookie persistence, and hreflang SEO, on the Phase 02 landing page.

Menu items, contact details, and location data remain empty until official sources are provided.

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
src/data/                # Site + menu + i18n + image registry
src/lib/                 # Helpers
src/types/               # Shared TypeScript models
public/images/           # Local Unsplash photography + patterns
```

## Photography

Homepage imagery is downloaded locally from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license). Attribution is listed in `src/data/images.ts` and the site footer.
