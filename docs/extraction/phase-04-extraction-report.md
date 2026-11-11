# Phase 04 — Menu extraction report

**Date:** 2026-11-10 (Asia/Qatar)  
**Evidence:** 21 page screenshots from `Full Menu GERONA 12.pdf` (stored under `docs/source/menu-pages/`)  
**PDF file:** still absent as `docs/source/gerona12-full-menu.pdf` — extraction used screenshots only  
**Status:** COMPLETE for covered pages (with flags below)

## Summary

| Metric | Count |
|--------|------:|
| Screenshot pages reviewed | 21 |
| Decorative / non-item pages | 3 (e.g. Buen provecho / Welcome / Enjoy your meal) |
| Categories published | 13 |
| Subcategories | 4 |
| Total item records | 65 |
| Published items | 63 |
| Unpublished / needs review | 2 |
| Ambiguous price conflicts resolved via Spanish | 2 |
| Missing Spanish page (names aligned from EN/AR) | Burgers / kebab boxes |

## Coverage by section

| Section | ES | EN | AR | Notes |
|---------|----|----|----|-------|
| Desayuno ligero | ✓ | ✓ | ✓ | Spanish omits “2 huevos” (EN-only) |
| Desayuno exprés | ✓ | ✓ | ✓ | 4,50 € |
| Desayunos (hasta 16:00) | ✓ | ✓ | ✓ | Oriental / Lujo B / GERONA 12 |
| Desayunos de la casa | ✓ | ✓ | ✓ | Marroquí / Chef |
| Ensaladas | ✓ | ✓ | ✓ | |
| Entrantes calientes | ✓ | ✓ | ✓ | |
| Pastas | ✓ | ✓ | ✓ | |
| Hamburguesas y kebabs | ✗ page | ✓ | ✓ | Spanish page not in screenshot set |
| Cajas y platos | ✗ page | ✓ | ✓ | Same gap; prices from EN |
| Pizzas | ✓ | ✓ | ✓ | Media / Grande |
| Carnes y pescados | ✓ | ✓ | ✓ | Spanish prices win conflicts |
| Platos marroquíes | ✓ | ✓ | ✓ | Couscous Friday note |
| Postres | ✓ | ✓ | ✓ | |

## Price conflicts (Spanish canonical)

| Item | Spanish | English | Arabic | Published |
|------|---------|---------|--------|-----------|
| Pechuga de pollo a la plancha | 11,00 € | 11,00 € | 11,50 € | **11,00 €** |
| Ternera a la plancha | 13,00 € | 13,50 € | 13,50 € | **13,00 €** |
| Plato kebab pollo | (page missing) | 8,50 € | OCR 7,50 / 8,50 | **8,50 €** (EN) |

Burger Solo/Menú columns follow the English page (e.g. 4,50 € / 8,00 €). Some Arabic OCR passes swapped column headers; EN+consistent AR readings agree with Solo < Menú.

## Unpublished records

| ID | Reason |
|----|--------|
| `egg-2` | “2 fried eggs / 5,00 €” on English light breakfast only — absent from Spanish and Arabic light-breakfast pages |
| `side-rice-potatoes` | “Acompañamiento: Arroz · Patatas” listed without a separate price |

## Translation coverage

| Locale | Status |
|--------|--------|
| ES | Canonical names + prices for all published items except burgers/boxes (aligned Spanish labels from verified EN/AR dishes) |
| EN | Verified from English PDF pages |
| AR | Verified from Arabic PDF pages; RTL UI already wired |

## Evidence files

Screenshots copied to `docs/source/menu-pages/` (21 JPEGs). Full PDF still expected at `docs/source/gerona12-full-menu.pdf` when available for page-number re-audit.

## Dataset location

- Categories: `src/data/menu/categories.ts`
- Items: `src/data/menu/items.ts`
- Aggregate: `src/data/menu/dataset.ts`
