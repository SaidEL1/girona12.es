# Fix: primary menu navigation → original PDF viewer

Primary site CTAs now open `/[locale]/menu-original` (exact 26-page JPEG menu).

## Updated links

| Surface | Previous | New |
|---------|----------|-----|
| Header nav “Carta / Menu / القائمة” | `/[locale]/menu` | `/[locale]/menu-original` |
| Header CTA “Descubre Nuestra Carta” (desktop + mobile) | `/[locale]/menu` | `/[locale]/menu-original` |
| Hero CTA | `/[locale]/menu` | `/[locale]/menu-original` |
| MenuCategories section CTA | `/[locale]/menu` | `/[locale]/menu-original` |
| Closing CTA | `/[locale]/menu` | `/[locale]/menu-original` |
| DigitalMenuCta | hard-coded `/es/menu-original` | locale-aware `/[locale]/menu-original` |
| Footer “Carta” | `#carta` | `/[locale]/menu-original` |

Helper: `originalMenuPath(locale)` in `src/lib/i18n.ts` (plus `dataMenuPath` for the secondary list).

## Unchanged

- 26 original JPEGs (byte-identical)
- Viewer behavior (counter, prev/next, jump, keyboard, sticky chrome)
- Secondary route `/[locale]/menu` still available
- QR → `https://girona12.netlify.app/es/menu-original`
- Netlify OpenNext config
