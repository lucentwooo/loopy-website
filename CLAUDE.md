# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> The line above is load-bearing: this repo runs **Next.js 16 / React 19**, which has
> breaking changes from older versions. Read the relevant guide in
> `node_modules/next/dist/docs/` before writing Next.js code.

## What this is

Marketing site for **Loopy** (tryloopy.io): customer research and client-ready Meta
ad briefs for agencies running DTC brands. Loopy reads a client's site, finds what
their customers really say, ranks ad ideas by awareness stage and writes the brief.
No backend, no database: a static App Router site with three routes (`/` landing,
`/pricing`, `/ad-creative-brief-template` SEO page). The landing is a 1:1 port of the
locked DS v2 mockup `landing-v7.html` (app repo, `docs/design/loopy-ds-v2/mockups/`,
with its `v2.css` tokens). Its CSS values, breakpoints and copy are the mockup's:
change the mockup first, or keep the two in step.

## Commands

```bash
npm run dev          # dev server → http://localhost:3000
npm run build        # production build (also the strictest type+lint gate)
npm run lint         # eslint (fails on unused vars/imports)
npx tsc --noEmit     # standalone type check
npm test             # vitest run (one-shot)
npm run test:watch   # vitest watch
npx vitest run lib/creatives.test.ts            # single test file
npx vitest run -t "name of the test"            # single test by name
```

Vitest runs in **jsdom** with globals enabled (no per-file `import { describe }`).
The `@/` alias maps to the repo root in both `tsconfig.json` and `vitest.config.ts`.

## Architecture

**Each page is a fixed vertical sequence of sections.** `app/page.tsx` composes the
landing: Nav, then `<main>` with Hero (headline, swipe wall, flow card) → Problem →
HowItWorks (`#how`) → InsideBrief (`#brief`) → BetterInput (`#input`) → Loop → Proof →
Pricing (`#pricing`) → Faq (`#faq`) → FinalCta, then Footer. `app/pricing/page.tsx` is
Nav → Pricing (`standalone`: the headline is the h1 and sits at the hero's distance
from the nav) → Faq → Footer. The SEO page uses Nav/Faq/Footer with `page="content"`
and its own FAQ items. Each section lives in `components/<Section>/` with a co-located
`.module.css`. Nav/Footer take `page` to resolve links (`#how` on the landing, `/#how`
elsewhere); Faq defaults to the landing questions and opens the first one.

**Styling is CSS Modules over tokens plus a few shared primitives.** `styles/tokens.css`
holds `--loopy-*` brand primitives feeding semantic aliases whose names and values
follow the mockup's `v2.css` (`--bg`, `--bg-sunken`, `--fg` to `--fg-muted`,
`--border*`, `--accent`, `--pop-coral/mint/violet`, the radius scale), the page layout
tokens (`--wrap`, `--gutter`, `--sec`, `--btn-border`, `--float-shadow`, ...) and the
base reset (`* { margin: 0; padding: 0 }`, block images, bare lists and links, Inter
body at -0.011em). `app/globals.css` holds the primitives more than one section uses:
`.wrap`, `.section`, the type roles `.sh` / `.sub` / `.sec-head`, the pills
(`.pill`, `-primary`, `-outline`, `-sm`, `.ctas`), `.pin`, the angle chips (`.ang` +
`.a-obj/.a-pain/.a-offer/.a-proof/.a-desire`) and the source icons (`.app`, `.tile`,
`.docic`). Section modules reach them with `:global()` (`.pricing :global(.sec-head)`),
mirroring the mockup's selectors so specificity and cascade match. Inter is loaded as
the variable font via `next/font` (the design uses weights like 450, 550, 650). Blue
only on the one primary pill per screen; pop colors only inside illustration cards.
Inline custom properties (`style={{ '--o': '-90px' }}`) are typed by
`types/react-css-vars.d.ts`.

**Images go through next/image.** Where the mockup CSS leaves a dimension `auto`,
either the CSS pins it (`height: auto` + `aspect-ratio` on wall tiles and the browser
screenshot) or the image is `unoptimized` (Svens logo, book covers), because a resized
srcset file rounds the source ratio and shifts layout by a sub-pixel. Landing assets
(Svens Island reference ads, app icons, book covers) are in `public/landing/`; the hero
wall and final-CTA peek row are data in `lib/creatives.ts`, drawn from
`public/creatives/library/` (real winners from the platform's swipe library).
`lib/creatives.test.ts` asserts every catalogued file, and every literal image path in
`app/`, `components/` and `lib/`, exists on disk. `public/app/`, `public/demo/` and the
per-brand folders in `public/creatives/` are left over from the previous landing and
are no longer referenced.

**CTAs are plain links.** `lib/site.ts` exports `CAL_URL` (the 20-minute demo: Book a
demo, Studio's Talk to us, Talk to the founders) and `APP_URL` (the self-serve app: Try
it free, Sign in, Start free, Start with 3 / 10 brands; Privacy and Terms live at
`APP_URL/privacy` and `/terms`), plus `SITE_URL`. No embeds, no forms. Plan numbers come
from `lib/billing-catalog.ts` (yearly is 15% off, matching the app's `TERM_DISCOUNT`;
the per-brand line is price / brands, rounded). Analytics: PostHog
(`components/PostHog.tsx`, autocapture, proxied through the `/ingest` rewrites in
`next.config.ts`) and GA in the root layout. `lib/analytics.ts` `track()` is a no-op
until something attaches `window.va`, and nothing calls it.

## Conventions

- **Client vs server:** everything is a server component except
  `components/Pricing/Pricing.tsx` (monthly / yearly toggle) and `components/PostHog.tsx`.
  The phone nav menu and the FAQ are native `<details>`. No animation libraries.
- **Breakpoints are the mockup's:** 1366 (the five brief cards become a fixed-width
  scroller), 1180 (flow card and step rows stack, plans go 2-up), 960, 720 (phone:
  16px gutter, 112px section gap, hamburger nav) and 380.
- **Reduced motion:** the base CSS drops transitions under `prefers-reduced-motion`.
- **Visual parity:** shoot the production build (`npm run start -- -p 3100`) and the
  mockup full page at 1440 (deviceScaleFactor 2) and 390, and diff them. Page heights
  match exactly and pixels outside images match; the only differences are inside
  images, where next/image re-encodes and resizes.
- `legacy/` is the original static HTML/CSS, kept for reference only. Nothing in `app/`
  or `components/` imports from it. Don't wire it into the build.
- Design specs and implementation plans live in `docs/superpowers/`.

## Env

Copy `.env.local.example`. `NEXT_PUBLIC_SITE_URL` overrides the canonical origin
(defaults to https://tryloopy.io). `NEXT_PUBLIC_CAL_LINK` and the `RESEND_*` vars are
legacy scaffolding — booking is now a hard-coded link (`lib/site.ts`) and no email
route handler exists (there is no `app/api/`).
