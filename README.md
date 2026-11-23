# Khushan Kanakrai — Portfolio

Personal portfolio built with Next.js (App Router), React 19, TypeScript, Tailwind CSS v4 and framer-motion. Every route is statically prerendered.

## Setup

Install and run from **WSL/Linux**. Native packages (SWC, lightningcss) are platform-specific, so a `node_modules` installed from Windows will not build in WSL.

```bash
nvm use        # Node 22 (see .nvmrc)
npm ci
npm run dev    # http://localhost:3000
```

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build / serve |
| `npm run lint` | ESLint (next/core-web-vitals) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Vitest unit and component tests (`tests/unit`) |
| `npm run test:e2e` | Playwright browser tests (`tests/e2e`), which build and serve the site on port 3100 |
| `npm run check` | lint + typecheck + unit tests |

The first time you run the e2e tests, install the browser: `npx playwright install --with-deps chromium`.

## Configuration

- `NEXT_PUBLIC_SITE_URL`: the public URL used for canonical links, Open Graph and the sitemap. Defaults to `https://khushan-kanakrai.vercel.app`.

## Content

- Projects: `src/data/projects.ts`
- Case studies: `src/data/case-studies.ts`
- Contact details and CV path: `src/data/site.ts`
