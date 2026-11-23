# Portfolio Audit — 2026-11-23

Scope: whole site (Next.js 15.3 App Router, React 19, Tailwind v4, framer-motion 12).
Method: source read of every file; `tsc --noEmit`; `next lint`; clean `npm ci && next build` in an
isolated copy; production server driven by headless Chromium 131 (Playwright) at 1440×900 and
390×844 with a reduced-motion pass; Impeccable detector against rendered URLs.

Decisions taken with the owner:
- UI: **refine the incumbent look** (dark, violet accent, Satoshi). No redesign.
- Tests: **Vitest + Playwright** (+ axe).
- Environment: **WSL/Linux** is where the project runs.
- Dashboard live link `https://gayboyz.lol`: **remove**.

## Does it work?

| Check | Result |
|---|---|
| `tsc --noEmit` | pass |
| `next lint` | pass, 0 warnings |
| `next build` with the repo's `node_modules` in WSL | **FAIL**: `Cannot find module '../lightningcss.linux-x64-gnu.node'`; only `@next/swc-win32-x64-msvc` present; `.bin` shims not executable. `node_modules` was installed from Windows. |
| `next build` after clean `npm ci` (Linux) | pass, 14 static routes, 150–163 kB first-load JS per route |
| All routes 200, unknown route 404, CV PDF served | pass |
| Console errors / failed requests (all pages, both viewports) | none |
| Horizontal overflow at 390px | none |

## Audit Health Score

| # | Dimension | Score | Key finding |
|---|---|---|---|
| 1 | Accessibility | 2 | White on `#8B7CF6` is 3.3:1 on every primary button, active nav pill and active filter (WCAG 1.4.3 fail). No skip link. Mobile menu ignores Escape/outside click. Framer animations ignore reduced motion. |
| 2 | Performance | 2 | Render-blocking third-party font CSS (fontshare). Whole home/projects/education/case-study trees are client components. framer-motion shipped on every route for one fade + a menu. |
| 3 | Theming | 1 | No colour tokens in use: ~25 distinct hex literals repeated across 14 files. Dead `tailwind.config.js` (v3 style, ignored by v4). `--font-sans` points at undefined Geist vars. |
| 4 | Responsive | 3 | No overflow. Mobile nav is a lone centred hamburger with an off-centre dropdown and no name/brand. Hero portrait renders ~470px tall on mobile. Text links are 20px tall tap targets. |
| 5 | Implementation integrity | 2 | Content width drifts (7xl / 6xl / 3xl; footer is 6xl inside a 7xl page, visibly misaligned on home). Button styles copy-pasted ~10×. Coloured glow shadows. "Case study" label on Livedrop links to `/projects` (no case study exists). |
| | **Total** | **10/20** | **Acceptable — significant work needed** |

### Implementation Integrity Verdict
**Partial pass.** The site has a coherent idea (quiet dark editorial layout, one violet accent,
data-driven project list) and the copy is specific and honest. It does not yet express it as a
*system*: every page re-declares background, padding, widths, colours and button styles by hand,
so the pages drift apart. Detector findings (verified): `low-contrast` (accent buttons, all pages),
`dark-glow` (accent shadows, all pages), `line-length` (/projects intro ~98ch, /education ~94ch),
`straggler` (advisory), `codex-grid-background` (advisory; part of the incumbent identity, keep but
soften).

## Findings by severity

**P0**
- **Build broken in WSL** — Windows-installed `node_modules`. Fix: `rm -rf node_modules && npm ci` in WSL; document in README.

**P1**
- **Accent contrast 3.3:1** — `#FFFFFF` on `#8B7CF6`; Navbar, hero CTA, CaseStudyLayout CTAs, About CTA, filter chips, `::selection`. Fix: filled accent `#6E5AE6` (4.9:1 with white), hover `#5F4BD8` (6.0:1). Keep `#8B7CF6`/`#A99CFF` for text/borders on dark (5.6:1+). → `/impeccable colorize`
- **Every page has the same `<title>`/description** — client pages can't export metadata; case studies have none. No `metadataBase`, canonical, OG image, sitemap, robots. → architecture
- **Misleading "Case study" link** — home secondary rows render "Case study" for every featured project; Livedrop has none and lands on `/projects`. `src/app/page.tsx:178-199`.
- **Reduced motion ignored by framer-motion** — hero still mid-fade (opacity 0.15 at 100ms) with `reducedMotion: reduce`; the global CSS kill-switch doesn't reach JS animations and also kills useful transitions. → `/impeccable animate`
- **Mobile menu** — no Escape, no outside-click close, no focus return; dropdown anchored `right-0` of a centred 48px button so it sits off-centre. `components/Navbar.tsx`. → `/impeccable adapt`
- **No skip link** — first Tab lands on nav. → `/impeccable harden`
- **Inappropriate live URL** on Dashboard (owner decision: remove).

**P2**
- Hard-coded colours in 14 files; no `@theme` colour tokens. → `/impeccable extract`
- Inconsistent content widths; footer misaligned on home. → `/impeccable layout`
- Primary/secondary button classes duplicated ~10×; no `ButtonLink`.
- Coloured glow shadows (`shadow-[0_8px_24px_rgba(139,124,246,0.35)]`). → `/impeccable quieter`
- Text-link tap targets 20px on mobile (pass 24px spacing exception horizontally, cramped when wrapped).
- Hero portrait `aspect-[3/4]` full-width on mobile (~470px). `sizes` claims 440px for a 380px box.
- Case study cover for non-image projects: 10px terminal text in a 1100px-wide frame looks empty.
- Line length > 80ch on /projects intro and education cards.
- Render-blocking fontshare CSS; Satoshi not self-hosted. → `/impeccable optimize`
- `"use client"` on pages that need none (home, education, CaseStudyLayout); projects page entirely client.

**P3**
- Unused public assets: `Khushan CV.pdf` (stale CV, still public), `background.jpg`, `epitech.png` (root), `gtr-r34.jpg`, `shell.jpg`, `skyline.jpg`, `wolf3db.jpg`, `raytracer/images (1).jpg`, `next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`. (`zappy2/3.png` unused but could feed a gallery.)
- README is the create-next-app boilerplate.
- `text-wrap: pretty` missing on body copy (stragglers).

## Architecture & structure findings
- `components/` lives outside `src/` so the `@/*` alias can't reach it; imports are `../../../../components/...`.
- Navbar, PageBackground, SiteFooter and the `<main>` shell are repeated in 7 page files instead of the root layout.
- Five near-identical case-study route folders; content is inline JSX props. Should be one `projects/[slug]` route with `generateStaticParams` + `generateMetadata`, content in `src/data/case-studies.ts`, unknown slugs → 404.
- Contact data (email, GitHub, LinkedIn, CV path) duplicated in 4 files.
- `getProject(...)!` non-null assertions.
- ~20 files show as modified only because of CRLF→LF; no `.gitattributes`.
- No tests, no `typecheck`/`test` scripts, no CI.

## Positive findings
- Strict TypeScript, lint clean, fully static output.
- Single source of truth for projects (`src/data/projects.ts`) with typed categories and covers.
- `next/image` used everywhere with alt text; correct `rel="noopener noreferrer"`.
- Semantic landmarks, `aria-current`, `aria-pressed` on filters, `aria-expanded` on the menu, visible `:focus-visible` ring.
- Copy is concrete and personal; muted greys (`#8B8B95` on `#121214` = 5.6:1) pass AA.

## Re-audit — after the improvement plan (branch `improve/audit-fixes`)

Method: the same as above. Also: 107 Playwright tests (desktop and Pixel 7, including axe WCAG 2 A/AA on every main route), 21 Vitest tests, and the Impeccable detector at 1280×800 and 390×844 on `/`, `/projects`, `/projects/sensai`, `/about` and `/education`.

| # | Dimension | Before | After | Evidence |
|---|---|---|---|---|
| 1 | Accessibility | 2 | 4 | axe: 0 A/AA violations on all routes at both viewports. Accent contrast 4.9:1. Skip link. Mobile menu traps focus, closes on Escape and outside clicks, and returns focus. Reduced motion respected; content visible without JS. |
| 2 | Performance | 2 | 3 | First-load JS on `/` went from 163 to 110 kB. Pages are server components; framer-motion loads lazily and only for the menu. Satoshi is self-hosted with `next/font`. Remaining: raster images are unoptimised JPEG/PNG sources. |
| 3 | Theming | 1 | 4 | Full `@theme` colour tokens. No hex literals in components except two illustration colours and the meta `themeColor`. The site is dark-only by design. |
| 4 | Responsive | 3 | 4 | Tap targets ≥ 44px at 390px. No horizontal scroll at 320px with 200% text. Brand plus full-width mobile menu. Portrait height capped. |
| 5 | Implementation integrity | 2 | 3 | One `Container` width, a shared `ButtonLink`, one case-study route, contact data in one place, no glow shadows. Detector: only the advisory `codex-grid-background` remains (it's part of the identity). Remaining: small labels above case-study headings ("The project", "My contribution") are an eyebrow pattern Impeccable bans. |
| | **Total** | **10/20** | **18/20** | **Excellent (minor polish)** |

Remaining recommendations:
1. `/impeccable distill` on case studies: drop or fold in the eyebrow labels above section headings and above the `h1`.
2. `/impeccable optimize`: re-export project screenshots at their displayed sizes (several are 200 KB+ PNG/JPEG).
3. Set `NEXT_PUBLIC_SITE_URL` to the real domain in the hosting environment.
