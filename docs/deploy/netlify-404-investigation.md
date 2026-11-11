# Netlify 404 investigation — girona12.netlify.app

> Historical incident report. Verified live production hostname remains
> `https://girona12.netlify.app`. Intended rename target
> `https://gerona12.es.netlify.app` is **not** configured yet
> (see `domain-migration-gerona12.md`).

**Date:** 2026-11-10 (Asia/Qatar)  
**Production URL:** https://girona12.netlify.app  
**Deploy alias:** https://main--girona12.netlify.app

## Verdict

This is **not** a missing homepage component bug. Production is publishing an empty Git tree.

| Check | Result |
|-------|--------|
| Live `/`, `/es`, `/en`, `/ar`, `/es/menu` | All **HTTP 404** (Netlify “Page not found”) |
| Live `/README.md` | **200** — `# girona12.es` |
| Live `/_next/static/` | **404** — no Next build artifacts |
| Live `/images/` | **404** |
| Netlify `published_deploy.branch` | `main` |
| Netlify `published_deploy.commit_ref` | `67147c93…` (**Initial commit**) |
| Netlify `framework` | `None` |
| Netlify `plugin_state` | `none` (OpenNext adapter never ran) |
| `origin/main` contents | **Only** `README.md` |
| Next.js app location | Feature branches / open PRs `#1`–`#4` (not on `main`) |

## App Router homepage (local)

| Path | Handler |
|------|---------|
| `/` | `src/proxy.ts` → redirect to `/es` (cookie or Spanish default). No root `app/page.tsx` (html/body live in `[locale]/layout.tsx`) |
| `/es`, `/en`, `/ar` | `src/app/[locale]/page.tsx` |
| `/es/menu`, `/en/menu`, `/ar/menu` | `src/app/[locale]/menu/page.tsx` |

Local production server: `/` → **307** `/es` → **200**.

## Static export vs Netlify adapter

| Mode | Used? |
|------|-------|
| `output: 'export'` / `out/` | **No** |
| `next start` Node server | Local/prod Node |
| Netlify OpenNext (`@netlify/plugin-nextjs`) | **Intended** for Netlify; auto-injected when a Next app is detected |

`next.config.ts` has no `output: 'export'`. Trailing slashes: Next internal **308** strip (`/:path+/` → `/:path+`).

## Why `/` alone looked broken

There is no `src/app/page.tsx` on older phase branches; the real homepage is `/[locale]`. That design is fine **once the Next app is deployed**. On the live site every locale path 404s because the deploy has no Next app at all.

## Required recovery (human / dashboard)

Do **not** “fix” this with an SPA `_redirects` catch-all.

1. **Get the Next.js app onto the production branch**
   - Preferred: merge the completed phase PR stack into `main` (PRs `#1`→`#2`→`#3`→`#4`), **or**
   - Temporary: set Netlify **Production branch** to a branch that contains the app (e.g. `cursor/phase-04-menu-76aa` / this fix branch).
2. Confirm Netlify build settings:
   - Build command: `npm run build` (see `netlify.toml`)
   - **Publish directory: empty** (adapter-managed)
3. Trigger a new production deploy and verify:
   - `/` → redirect to `/es`
   - `/es`, `/en`, `/ar`, `/es/menu`, `/en/menu`, `/ar/menu` → **200**
   - `/_next/static/` assets load

## What this repo change does

- Adds `netlify.toml` so the next real Next deploy uses Node 22 + `npm run build` without a wrong publish dir.
- Does **not** merge unfinished phase PRs into `main`.
- Does **not** change Netlify production branch/settings from this agent.
- Intentionally **no** root `app/page.tsx`: adding one requires a root `layout.tsx` with `<html>`/`<body>`, which would force a larger locale-layout refactor. `/` is handled by `src/proxy.ts`.
