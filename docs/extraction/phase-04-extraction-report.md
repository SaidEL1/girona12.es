# Phase 04 — Menu extraction report

**Date:** 2026-11-09 (Asia/Qatar)  
**Source expected:** `docs/source/gerona12-full-menu.pdf` (26 pages)  
**Status:** BLOCKED — source PDF missing from repository

## Summary

| Metric | Count |
|--------|------:|
| PDF pages available | 0 / 26 |
| Successfully extracted items | 0 |
| Published items | 0 |
| Categories | 0 |
| Subcategories | 0 |
| Unreadable items | 0 |
| Ambiguous prices | 0 |
| Missing translations | n/a |
| Items flagged for manual review | 0 |

## Page-by-page coverage

| Pages | Coverage |
|-------|----------|
| 1–26 | Not extracted — PDF file absent |

## Blocker

The repository does not contain `docs/source/gerona12-full-menu.pdf` (searched workspace, `public/menu`, project store, and GitHub `main` / feature branches).

Per project rules, **no dishes, prices, ingredients, allergens, dietary labels, or descriptions were invented**.

## Translation coverage

| Locale | Status |
|--------|--------|
| ES (canonical) | No item content (source missing) |
| EN | No item content (source missing) |
| AR | No item content (source missing) |

UI chrome (search, empty states, navigation) is fully translated ES / EN / AR.

## Next step when PDF arrives

1. Add the file at `docs/source/gerona12-full-menu.pdf`.
2. Extract page-by-page into `src/data/menu/dataset.ts` with `source.page` references.
3. Publish only items with verified Spanish name + exact EUR price.
4. Add EN/AR only when verified; keep uncertain rows as `needs_review` / unpublished.
5. Update this report with counts and remaining flags.
