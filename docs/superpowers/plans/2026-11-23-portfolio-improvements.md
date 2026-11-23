# Portfolio Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix every P0–P2 finding from the audit: a build that works in WSL, a tested and consolidated architecture, correct per-page SEO, faster first load, and an accessible refinement of the current visual identity.

**Architecture:** Keep the static Next.js App Router site. Move all UI into `src/` behind the `@/` alias. Put the page shell (nav, background, footer, `<main>`) in the root layout. Pages default to server components, with small client islands. Case studies become one data-driven `projects/[slug]` route. Colours, buttons and widths come from Tailwind v4 `@theme` tokens and two shared primitives (`Container`, `ButtonLink`).

**Tech Stack:** Next.js 15.3, React 19, TypeScript strict, Tailwind CSS v4, framer-motion 12, Vitest + Testing Library (jsdom), Playwright + @axe-core/playwright.

**Spec:** `docs/superpowers/specs/2026-11-23-portfolio-audit.md`

## Global Constraints

- Runs in WSL/Linux. Always install with `npm ci` inside WSL, never from Windows.
- UI is a **refinement**: keep dark background `#121214`, Satoshi, the single violet accent, editorial row layout and all existing copy. Don't add new claims or copy beyond labels named in this plan.
- Filled accent (white text on it): `--color-accent-strong: #6E5AE6`, hover `--color-accent-strong-hover: #5F4BD8`. Accent for text and borders on dark: `#8B7CF6` / `#A99CFF`.
- Text contrast is at least 4.5:1 everywhere (axe `color-contrast` reports 0 violations).
- One content width for every page: `max-w-6xl` (1152px) with gutters `px-6 md:px-10 lg:px-16`. Reading pages (about, experience, education) use an inner `max-w-3xl` column inside that container.
- No coloured glow shadows (no `rgba(139,124,246,…)` in `shadow-*`).
- Site URL comes from `NEXT_PUBLIC_SITE_URL`, falling back to `https://khushan-kanakrai.vercel.app` (owner to confirm the real domain).
- Contact data lives only in `src/data/site.ts`.
- Dashboard project has **no** `live` URL.
- Every route stays statically prerendered (`○` in build output).
- Commit after each task. Normalise line endings to LF.

## Review Focus

1. **Unknown case-study slug** (`/projects/does-not-exist`) must return a 404 page, not crash or render empty. Covered in Task 7.
2. **JavaScript disabled or still loading**: hero and content must be visible with opacity 1 in server HTML (no content hidden until hydration). Covered in Task 6.
3. **Keyboard-only use of the mobile menu**: open with Enter, close with Escape, focus returns to the toggle, Tab never leaves the open menu for hidden content. Covered in Task 11.
4. **Project with no case study, no live link and no repo** (e.g. Arcade): rows and cards must not render a dead "Case study" or empty action area. Covered in Task 4.
5. **200% text zoom / 320px viewport**: no horizontal scroll, nav still usable. Covered in Task 12.

---

### Task 1: Environment and repo hygiene

**Files:**
- Create: `.gitattributes`, `.nvmrc`
- Modify: `package.json` (scripts), `README.md`, `src/app/globals.css:12-13`
- Delete: `tailwind.config.js`, `public/Khushan CV.pdf`, `public/background.jpg`, `public/epitech.png`, `public/gtr-r34.jpg`, `public/shell.jpg`, `public/skyline.jpg`, `public/raytracer/images (1).jpg`, `public/next.svg`, `public/vercel.svg`, `public/file.svg`, `public/globe.svg`, `public/window.svg`
- Keep: `public/wolf3db.jpg`, `public/zappy/zappy2.png`, `public/zappy/zappy3.png` (Task 4 uses the first one; the other two stay for a future gallery)

**Interfaces:**
- Produces: npm scripts `typecheck` = `tsc --noEmit`, `test` = `vitest run`, `test:e2e` = `playwright test`, `check` = `npm run lint && npm run typecheck && npm test`

- [ ] **Step 1: Reproduce the failure.** Run: `npm run build`. Expected: FAIL with `Permission denied` or `Cannot find module '../lightningcss.linux-x64-gnu.node'`.
- [ ] **Step 2: Reinstall in WSL.** Run: `rm -rf node_modules .next && npm ci`.
- [ ] **Step 3: Add `.gitattributes`** with `* text=auto eol=lf` plus `*.png *.jpg *.jpeg *.pdf *.ico binary`. Add `.nvmrc` containing `22`. Run `git add --renormalize .`.
- [ ] **Step 4: Delete the dead files listed above.** In `globals.css`, remove the `--font-sans`/`--font-mono` lines that point at the undefined Geist variables. Add the four scripts.
- [ ] **Step 5: Rewrite README.** Cover the stack, `npm ci` from WSL only, the scripts, `NEXT_PUBLIC_SITE_URL`, and the fact that project data lives in `src/data/`.
- [ ] **Step 6: Verify.** Run: `npm run lint && npm run typecheck && npm run build`. Expected: all pass, 14 `○` routes. Then run `git grep -l "Khushan CV.pdf\|background.jpg\|skyline"`. Expected: no matches.
- [ ] **Step 7: Commit.** `git commit -m "chore: reinstall for linux, normalise line endings, drop dead config and assets"`

### Task 2: Test harness

**Files:**
- Create: `vitest.config.mts`, `vitest.setup.ts`, `playwright.config.ts`, `tests/unit/projects.test.ts`, `tests/e2e/smoke.spec.ts`
- Modify: `package.json` (devDependencies), `.gitignore` (`/test-results`, `/playwright-report`)

**Interfaces:**
- Produces: Vitest with environment `jsdom`, globals, alias `@` → `./src`, setup file importing `@testing-library/jest-dom/vitest`, and `include: ["tests/unit/**/*.test.{ts,tsx}"]`. Playwright with `testDir: "tests/e2e"`, `webServer: { command: "npm run build && npx next start -p 3100", port: 3100, reuseExistingServer: !process.env.CI }`, and projects `desktop` (1440×900) and `mobile` (Pixel 7 device).

- [ ] **Step 1: Install.** Run `npm i -D vitest@^3 @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @playwright/test @axe-core/playwright`, then `npx playwright install --with-deps chromium`.
- [ ] **Step 2: Write the data invariants test** (it should pass at once, which shows the harness works):

```ts
import { projects, featuredProjects, categories } from "@/data/projects";
test("slugs are unique", () => {
  expect(new Set(projects.map(p => p.slug)).size).toBe(projects.length);
});
test("featured resolves to 4 projects, sensai first", () => {
  expect(featuredProjects.map(p => p.slug)).toEqual(["sensai","dashboard","mytorch","livedrop"]);
});
test("every project category is a declared filter", () => {
  for (const p of projects) for (const c of p.categories) expect(categories).toContain(c);
});
test("every image path starts with /", () => {
  for (const p of projects) if (p.image) expect(p.image.startsWith("/")).toBe(true);
});
```

- [ ] **Step 3: Write the smoke e2e test** `tests/e2e/smoke.spec.ts`. For each of `/`, `/projects`, `/about`, `/experience`, `/education`, `/projects/sensai`: assert response status 200, exactly one `h1`, zero `pageerror` events, and `document.documentElement.scrollWidth <= window.innerWidth`.
- [ ] **Step 4: Run.** Run: `npm test && npm run test:e2e`. Expected: all PASS.
- [ ] **Step 5: Commit.** `git commit -m "test: add vitest and playwright harness with data and smoke tests"`

### Task 3: Move UI into `src/` and centralise site data

**Files:**
- Move: `components/*.tsx` → `src/components/*.tsx` (with `git mv`)
- Create: `src/data/site.ts`, `tests/unit/site.test.ts`
- Modify: every import of `components/` or `../data/` in `src/app/**` and `src/components/**`; `SiteFooter.tsx`, `src/app/page.tsx`, `src/app/about/page.tsx` use `site` instead of inline links

**Interfaces:**
- Produces: `src/data/site.ts` exporting

```ts
export const site: {
  name: "Khushan Kanakrai";
  url: string;                 // process.env.NEXT_PUBLIC_SITE_URL ?? "https://khushan-kanakrai.vercel.app"
  email: string;               // "khushan.kanakrai5@gmail.com"
  cvPath: "/Khushan_Kanakrai_CV.pdf";
  tagline: string;             // the existing layout.tsx description
};
export type SocialLink = { label: "Email" | "GitHub" | "LinkedIn"; href: string; external: boolean };
export const socials: SocialLink[];
```
- All imports use `@/components/X` and `@/data/X`.

- [ ] **Step 1: Write the failing test.** `site.test.ts`: `socials` labels equal `["GitHub","LinkedIn","Email"]`; the Email href equals `` `mailto:${site.email}` ``; `external` is true exactly when the href starts with `http`.
- [ ] **Step 2: Run** `npm test`. Expected: FAIL, module `@/data/site` not found.
- [ ] **Step 3: Create `site.ts`, move the components and rewrite the imports.**
- [ ] **Step 4: Verify.** Run `npm test && npm run typecheck`. Expected: PASS. Then `git grep -n "\.\./.*components\|khushan.kanakrai5@" -- src`. Expected: only `src/data/site.ts`.
- [ ] **Step 5: Commit.** `git commit -m "refactor: move components under src, add @ alias imports and site data"`

### Task 4: Project data correctness and the primary link helper

**Files:**
- Modify: `src/data/projects.ts` (drop dashboard `live`, add the helper, set Wolf3D `image: "/wolf3db.jpg"`, rename `raytracer/images.jpg` → `raytracer/cover.jpg`), `src/app/page.tsx:176-202`, `src/components/ProjectRow.tsx`
- Test: `tests/unit/projects.test.ts`

**Interfaces:**
- Produces: `export function primaryLink(p: Project): { href: string; label: "Case study" | "Live site" | "Repository"; external: boolean } | null`. Order: `caseStudy` → `live` → `repo` → `null`.

- [ ] **Step 1: Write the failing tests.**

```ts
test("dashboard has no live link", () => expect(getProject("dashboard")!.live).toBeUndefined());
test("primaryLink prefers case study", () =>
  expect(primaryLink(getProject("sensai")!)).toEqual({ href: "/projects/sensai", label: "Case study", external: false }));
test("primaryLink falls back to live", () =>
  expect(primaryLink(getProject("livedrop")!)?.label).toBe("Live site"));
test("primaryLink is null with nothing to link", () =>
  expect(primaryLink(getProject("arcade")!)).toBeNull());
```

- [ ] **Step 2: Run** `npm test`. Expected: FAIL.
- [ ] **Step 3: Implement the helper and the data edits.** On the home page, the secondary rows use `primaryLink`. A row whose link is `null` renders as a plain `div`, not a link. External links get `target="_blank" rel="noopener noreferrer"`. The label comes from the helper and is never hard-coded "Case study".
- [ ] **Step 4: Add the e2e check.** On `/`, the Livedrop row's action text is "Live site" and its href is `https://livedrop.vercel.app`. `gayboyz` appears nowhere in the HTML of `/`, `/projects` or `/projects/dashboard`.
- [ ] **Step 5: Run** `npm test && npm run test:e2e`. Expected: PASS.
- [ ] **Step 6: Commit.** `git commit -m "fix: correct project action links and remove dashboard live url"`

### Task 5: Root layout shell, skip link, shared Container

**Files:**
- Create: `src/components/Container.tsx`, `src/components/SkipLink.tsx`, `tests/e2e/shell.spec.ts`
- Modify: `src/app/layout.tsx`. Remove `<Navbar/>`, `<PageBackground/>`, `<SiteFooter/>` and the `<main …>` wrapper from all 7 pages and `CaseStudyLayout.tsx`. Update `SiteFooter.tsx` to use `Container`.

**Interfaces:**
- Produces: `Container({ children, className?, as? }: { children: ReactNode; className?: string; as?: "div" | "section" | "header" | "footer" | "article" })`, which renders `mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-16`. `SkipLink()` renders `<a href="#main">Skip to content</a>`, visually hidden until focused.
- Layout body order: `SkipLink`, `Navbar`, `<div class="relative min-h-screen overflow-x-clip">` containing `PageBackground`, `<main id="main" tabIndex={-1} class="relative pt-32 pb-20">{children}</main>` and `SiteFooter`.

- [ ] **Step 1: Write the failing e2e tests.** First Tab focuses a link with text "Skip to content", and pressing Enter moves focus to `#main`. Each route has exactly 1 `main`, 1 `footer` and 1 `header nav`. On `/` at 1440px, the left edge of the footer's first child equals the `h1` left edge (±1px).
- [ ] **Step 2: Run** `npm run test:e2e -- shell`. Expected: FAIL.
- [ ] **Step 3: Implement.** Each page wraps its content in `Container`. About, experience and education add an inner `max-w-3xl`.
- [ ] **Step 4: Run** `npm run test:e2e`. Expected: PASS (smoke still green).
- [ ] **Step 5: Commit.** `git commit -m "refactor: move page shell into root layout, add skip link and Container"`

### Task 6: Server components and accessible motion

**Files:**
- Create: `src/components/motion/FadeIn.tsx` (client), `src/components/motion/MotionProvider.tsx` (client), `src/components/ProjectsExplorer.tsx` (client), `tests/e2e/motion.spec.ts`
- Modify: `src/app/page.tsx` (drop `"use client"`, wrap the hero in `FadeIn`), `src/app/education/page.tsx` and `src/components/CaseStudyLayout.tsx` (drop `"use client"`), `src/app/projects/page.tsx` (server component rendering header + `<ProjectsExplorer/>`), `src/app/layout.tsx` (wrap in `MotionProvider`), `src/app/globals.css:40-53`

**Interfaces:**
- Produces: `MotionProvider({children})` = `<LazyMotion features={domAnimation} strict><MotionConfig reducedMotion="user">…`. `FadeIn({ children, className?, delay? })` uses `m.div` with `initial={false}` when `useReducedMotion()` returns true. `ProjectsExplorer()` takes no props and holds the filter/showAll state and markup now in `projects/page.tsx`. All framer usage switches from `motion.*` to `m.*` (required by `strict`).
- CSS: replace the global `0.01ms` kill-switch with a reduced-motion block that only turns off `scroll-behavior` and transform-based transitions (`.motion-safe-transform`). Colour and opacity hover feedback stays.

- [ ] **Step 1: Write the failing e2e tests.** With `test.use({ reducedMotion: "reduce" })`, `/` hero container computed opacity is `"1"` 50ms after `domcontentloaded`. With JavaScript disabled (`javaScriptEnabled: false`), the `h1` on `/` is visible. On `/projects`, clicking the "Systems" chip shows a heading "Systems" and N rows, where N = number of projects whose categories include `"Systems"` (import the data in the spec). "Clear filter" restores "Flagship".
- [ ] **Step 2: Run.** Expected: the reduced-motion test FAILs (opacity ≈ 0.15). The no-JS test FAILs if the hero SSRs at `opacity:0`.
- [ ] **Step 3: Implement.** `FadeIn` animates **transform only** (`initial={{ y: 12 }} animate={{ y: 0 }}`, 0.5s ease-out), never opacity, so server HTML is fully visible without JS. When reduced motion is on, `initial={false}`.
- [ ] **Step 4: Run** `npm run test:e2e && npm run build`. Expected: PASS. The `/` first-load JS drops below 163 kB (record the number in the commit message).
- [ ] **Step 5: Commit.** `git commit -m "perf: server-render pages, lazy-load motion, respect reduced motion (/ first load: <N> kB)"`

### Task 7: Data-driven case-study route

**Files:**
- Create: `src/data/case-studies.ts`, `src/app/projects/[slug]/page.tsx`, `src/app/not-found.tsx`, `tests/unit/case-studies.test.ts`, `tests/e2e/case-studies.spec.ts`
- Delete: `src/app/projects/{sensai,dashboard,mytorch,raytracer,zappy}/page.tsx`
- Modify: `src/components/CaseStudyLayout.tsx` (export the types from `case-studies.ts` instead)

**Interfaces:**
- Produces:

```ts
export type CaseStudy = { slug: string; label: string; summary: string; sections: CaseStudySection[]; focus: CaseStudyFocus[] };
export const caseStudies: CaseStudy[];          // content moved verbatim from the 5 page files
export function getCaseStudy(slug: string): CaseStudy | undefined;
```
- The route exports `dynamicParams = false`, `generateStaticParams()` returning one entry per case study, and `generateMetadata({ params })` returning `{ title: project.title, description: project.tagline, alternates: { canonical: \`/projects/${slug}\` } }`. Next 15 `params` is a `Promise<{ slug: string }>`.
- `not-found.tsx` shows a page `h1` ("Page not found") and a link to `/projects`.

- [ ] **Step 1: Write the failing tests.** Unit: every `caseStudies[i].slug` resolves with `getProject`, and that project's `caseStudy` equals `/projects/${slug}`. Every project with a `caseStudy` has a matching entry. E2E: `/projects/does-not-exist` returns 404 and shows "Page not found". `/projects/mytorch` has `<title>` starting "MyTorch | Khushan Kanakrai".
- [ ] **Step 2: Run.** Expected: FAIL.
- [ ] **Step 3: Move the content verbatim and implement the route.**
- [ ] **Step 4: Verify.** Run `npm test && npm run test:e2e && npm run build`. Expected: PASS. The build lists `● /projects/[slug]` with 5 prerendered paths.
- [ ] **Step 5: Commit.** `git commit -m "refactor: single static case-study route with per-project metadata and 404"`

### Task 8: SEO metadata, OG image, sitemap, robots

**Files:**
- Create: `src/app/opengraph-image.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `tests/e2e/seo.spec.ts`
- Modify: `src/app/layout.tsx` (`metadataBase: new URL(site.url)`, `alternates.canonical: "/"`), plus a `metadata` export on `projects/page.tsx`, `about/page.tsx`, `experience/page.tsx` and `education/page.tsx`

**Interfaces:**
- Consumes: `site` (Task 3), `projects`, `caseStudies` (Task 7).
- Produces: page titles `Projects`, `About`, `Experience`, `Education` (the layout template adds ` | Khushan Kanakrai`), each with its own one-sentence description taken from that page's existing intro copy. `sitemap()` returns the 5 static routes plus every case-study URL. `robots()` allows `/` and points to `${site.url}/sitemap.xml`. The OG image is 1200×630 on `#121214`, showing the name and the existing tagline in Satoshi, accent `#8B7CF6`.

- [ ] **Step 1: Write the failing e2e tests.** The `<title>` of the 6 main routes are pairwise distinct. Each page has `link[rel=canonical]` and `meta[property="og:image"]`. `/sitemap.xml` contains `/projects/sensai`. `/robots.txt` contains `Sitemap:`.
- [ ] **Step 2: Run.** Expected: FAIL.
- [ ] **Step 3: Implement.**
- [ ] **Step 4: Run** `npm run test:e2e && npm run build`. Expected: PASS, all routes still static.
- [ ] **Step 5: Commit.** `git commit -m "feat: per-page metadata, canonical urls, og image, sitemap and robots"`

### Task 9: Self-host Satoshi

**Files:**
- Create: `src/fonts/Satoshi-Variable.woff2` (from the Fontshare Satoshi download zip, `Fonts/WEB/fonts/`), `src/fonts/index.ts`
- Modify: `src/app/layout.tsx` (remove the `<head><link fontshare>`, add `className={satoshi.variable}` on `<html>`), `src/app/globals.css` (`--font-sans: var(--font-satoshi), ui-sans-serif, system-ui, sans-serif`; the body uses `font-sans`; delete the literal `"Satoshi"` family string and the `font-satoshi` class)

**Interfaces:**
- Produces: `export const satoshi = localFont({ src: "./Satoshi-Variable.woff2", variable: "--font-satoshi", weight: "300 900", display: "swap" })`.

- [ ] **Step 1: Write the failing e2e test.** No request to `api.fontshare.com` or `cdn.fontshare.com` is made on `/`. `document.fonts.check('16px Satoshi')` (or the generated family name read from `getComputedStyle(body).fontFamily`) resolves to a loaded face.
- [ ] **Step 2: Run.** Expected: FAIL (fontshare request seen).
- [ ] **Step 3: Implement.**
- [ ] **Step 4: Run** `npm run test:e2e`. Expected: PASS. Compare the screenshot of `/` at 1440px with the audit screenshot: same typeface and weights.
- [ ] **Step 5: Commit.** `git commit -m "perf: self-host satoshi with next/font"`

### Task 10: Colour tokens, accessible accent, ButtonLink (`/impeccable colorize` + `extract` + `quieter`)

**Files:**
- Create: `src/components/ButtonLink.tsx`, `tests/unit/ButtonLink.test.tsx`, `tests/e2e/a11y.spec.ts`
- Modify: `src/app/globals.css` (`@theme` colours, `::selection`, focus ring), plus every file containing `#[0-9A-Fa-f]{6}` in a class string (14 files)

**Interfaces:**
- Produces these `@theme` tokens (Tailwind utilities follow, e.g. `bg-surface`, `text-muted`):

| token | value | use |
|---|---|---|
| `--color-bg` | `#121214` | page |
| `--color-surface` | `#18181B` | cards, chips |
| `--color-surface-2` | `#1D1D22` | hover surface |
| `--color-inset` | `#0F0F12` | cover wells |
| `--color-line` | `#2A2A31` | borders/rules |
| `--color-fg` | `#F3F3F5` | headings |
| `--color-fg-2` | `#D4D4D8` | lead text |
| `--color-fg-3` | `#A1A1AA` | body |
| `--color-muted` | `#8B8B95` | meta |
| `--color-accent` | `#8B7CF6` | accent borders/dots |
| `--color-accent-text` | `#A99CFF` | accent links on dark |
| `--color-accent-strong` | `#6E5AE6` | filled buttons, active nav, active chip, selection |
| `--color-accent-strong-hover` | `#5F4BD8` | hover of the above |
| `--color-ok` | `#7FE0C3` | availability dot |

- `ButtonLink({ href, variant = "primary", external?, download?, children, className? })`, with `variant: "primary" | "secondary"`. It renders a Next `Link` for internal hrefs and an `<a>` otherwise. Primary = `bg-accent-strong text-white hover:bg-accent-strong-hover`. Secondary = `border-line bg-surface text-fg hover:border-accent/40 hover:bg-surface-2`. Shared: `inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors`. No shadows.

- [ ] **Step 1: Write the failing tests.** Unit: `ButtonLink` with `external` renders `target="_blank"` and `rel="noopener noreferrer"`. With `download` it renders the `download` attribute. The primary class list contains `bg-accent-strong` and no `shadow-`. E2E `a11y.spec.ts`: for each main route on both projects, `new AxeBuilder({ page }).withTags(["wcag2a","wcag2aa"]).analyze()` gives 0 violations. Also: the active nav pill's computed background is `rgb(110, 90, 230)`.
- [ ] **Step 2: Run.** Expected: FAIL (color-contrast on accent buttons).
- [ ] **Step 3: Implement.** Add the tokens. Replace every hex literal in class strings with a token utility. Swap the 10 duplicated button class strings (home hero, about, CaseStudyLayout, projects "Show more") for `ButtonLink` or the same classes on `<button>`. Delete every `shadow-[…rgba(139,124,246…)]`. Navbar and mobile-menu shadows become neutral `rgba(0,0,0,…)`.
- [ ] **Step 4: Verify.** Run `npm test && npm run test:e2e`. Expected: PASS. Then `git grep -nE "#[0-9A-Fa-f]{6}" -- src/app src/components ':!src/app/globals.css' ':!src/app/opengraph-image.tsx'`. Expected: only SVG/decorative literals inside `ProjectCover.tsx`; those move to tokens via `var(--color-…)` where they are colours.
- [ ] **Step 5: Run the detector.** `impeccable detect --json http://localhost:3100/` (and `/projects`, `/projects/sensai`). Expected: no `low-contrast`, no `dark-glow`.
- [ ] **Step 6: Commit.** `git commit -m "style: colour tokens, AA-contrast accent, shared ButtonLink, remove glow shadows"`

### Task 11: Mobile navigation (`/impeccable adapt` + `harden`)

**Files:**
- Modify: `src/components/Navbar.tsx`
- Create: `tests/e2e/nav.spec.ts`

**Interfaces:**
- Consumes: tokens (Task 10), `site.name` (Task 3).
- Behaviour below `sm`: a full-width bar fixed at the top, inside `Container` gutters. The left side shows a `Link` to `/` with text `site.name`. The right side has the 48×48 toggle. The menu is a full-width panel below the bar (`left-0 right-0`), not anchored to the button. It closes on: Escape, a click outside the panel, route change, or a link click. When it closes because of Escape, focus returns to the toggle. While it is open, Tab cycles inside the panel and toggle. `aria-expanded`/`aria-controls` stay. Desktop (`sm+`) pill nav is unchanged apart from tokens.

- [ ] **Step 1: Write the failing e2e tests** (mobile project). The name link is visible in the top bar. Open the menu → press Escape → `#mobile-navigation` is hidden and `document.activeElement` is the toggle. Open → click at (195, 700) → hidden. Open → the panel's bounding box spans the viewport width minus the gutters (±2px). Open → press Tab 10 times → focus is always inside `header`.
- [ ] **Step 2: Run.** Expected: FAIL (the audit showed Escape and outside click leave it open).
- [ ] **Step 3: Implement** with a `keydown` listener, a `pointerdown` outside check via ref, and a small focus trap (first/last focusable). Don't add a dependency.
- [ ] **Step 4: Run** `npm run test:e2e`. Expected: PASS, a11y spec still 0 violations.
- [ ] **Step 5: Commit.** `git commit -m "feat(nav): accessible mobile menu with brand, escape, outside click and focus trap"`

### Task 12: Layout and responsive polish (`/impeccable layout` + `typeset` + `polish`)

**Files:**
- Modify: `src/app/globals.css`, `src/app/page.tsx`, `src/app/projects/page.tsx` + `ProjectsExplorer.tsx`, `src/app/education/page.tsx`, `src/components/{SiteFooter,ProjectRow,FlagshipCard,CaseStudyLayout,PageBackground}.tsx`
- Create: `tests/e2e/layout.spec.ts`

**Interfaces / pinned values:**
- `globals.css`: `p, li { text-wrap: pretty }` and `h1, h2, h3 { text-wrap: balance }`.
- Intro paragraphs on /projects and education cards get `max-w-[68ch]`.
- Home portrait: below `lg` it is `aspect-[4/5] max-h-[420px] w-full max-w-sm`. Fix `sizes` to `(min-width: 1024px) 380px, (min-width: 640px) 384px, 100vw`.
- Inline text-link groups (hero socials, footer links, row actions) get `py-2 -my-2` (or `min-h-11 inline-flex items-center` on mobile) so each tap target is ≥ 44px high without changing visual rhythm.
- Case-study cover without an image: `h-[280px] sm:h-[340px]` and an inner `max-w-xl mx-auto` so the terminal mock stays at its designed scale.
- `PageBackground` grid: cap opacity at `0.025` and stop the mask at 55%. It is part of the identity, so soften it rather than remove it.

- [ ] **Step 1: Write the failing e2e tests.** At 390px on `/`, the portrait's height is ≤ 420px. Every `a`/`button` inside `main` and `footer` has a bounding height ≥ 44 at 390px (allow-list: none). At 320px width and with `document.documentElement.style.fontSize = "200%"`, `scrollWidth <= innerWidth` on `/`, `/projects` and `/projects/sensai`. At 1440px, the /projects intro paragraph's `getBoundingClientRect().width` is ≤ 68 × the rendered width of a `0` glyph in that paragraph's font (measure with a temporary inline `<span>0</span>`).
- [ ] **Step 2: Run.** Expected: FAIL (portrait ~470px, links 20px).
- [ ] **Step 3: Implement.**
- [ ] **Step 4: Verify.** Run `npm run test:e2e`. Expected: PASS. Take screenshots of `/`, `/projects` and `/projects/sensai` at 1440 and 390, and compare them with the audit captures: same identity, footer aligned, no empty cover.
- [ ] **Step 5: Commit.** `git commit -m "style: consistent widths, tap targets, mobile portrait, text wrapping, calmer background"`

### Task 13: Final verification and CI

**Files:**
- Create: `.github/workflows/ci.yml`

**Interfaces:**
- CI runs on push/PR: `ubuntu-latest`, Node from `.nvmrc`, `npm ci`, `npm run check`, `npx playwright install --with-deps chromium`, `npm run test:e2e`.

- [ ] **Step 1: Run the full suite locally.** `npm run check && npm run test:e2e && npm run build`. Expected: all pass and every route is `○`/`●` static.
- [ ] **Step 2: Rendered detector.** `impeccable detect --json` on `/`, `/projects`, `/projects/sensai`, `/about`, `/education` at 1440×800 and 390×844. Expected: no `low-contrast`, `dark-glow` or `line-length` findings (advisories may remain).
- [ ] **Step 3: Re-run `/impeccable audit`** and record the new score in `docs/superpowers/specs/2026-11-23-portfolio-audit.md` under a "Re-audit" heading. Target: ≥ 16/20.
- [ ] **Step 4: Add the CI workflow** and push a branch. Expected: green run.
- [ ] **Step 5: Commit.** `git commit -m "ci: lint, typecheck, unit and e2e on every push"`

---

## Out of scope (follow-ups, not in this plan)

- Visual redesign. That would need `/impeccable init` (PRODUCT.md) first.
- Zappy image gallery using `zappy2/3.png`.
- URL-synced project filters (`?category=`).
- Replacing the mirror-selfie hero portrait with a dedicated headshot. This is a content decision for the owner.
