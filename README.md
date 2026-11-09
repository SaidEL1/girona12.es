# Gerona 12 — Restaurante Al Andalus

Premium Andalusian restaurant website scaffold for **Al Baraka Digital**.

## Phase 01

Foundation only: Next.js App Router, TypeScript (strict), Tailwind CSS, Lucide React, design tokens, layout shell, branded homepage shell, and architecture stubs for menu / i18n / sections.

Menu items, contact details, and location data are intentionally empty until official sources (menu PDF, verified contact info) are provided.

## Stack

- Next.js (App Router)
- TypeScript
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

| Token        | Hex     |
|--------------|---------|
| Emerald      | `#064D40` |
| Deep Green   | `#032F28` |
| Royal Gold   | `#D9AE4D` |
| Warm Ivory   | `#F4EBDD` |
| Dark Text    | `#17241F` |

## Architecture

```
src/app/                 # App Router entry
src/components/layout/   # Header, footer, shell
src/components/sections/ # Home sections (stubs + hero)
src/components/menu/     # Menu UI stubs
src/components/ui/       # Shared primitives
src/data/                # Site + menu + i18n dictionaries
src/lib/                 # Helpers (i18n, cn, constants)
src/types/               # Shared TypeScript models
public/images|fonts|menu # Asset placeholders
```
