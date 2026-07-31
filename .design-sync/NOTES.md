# design-sync notes — festival-viet-mtl-website

Repo-specific gotchas for future syncs. First sync: 2026-07-31.

## What this repo is

A Next.js **application**, not a published design-system package. There is no
`dist/`, no Storybook, no library entry point. The converter therefore runs in
**synth-entry mode** (`[NO_DIST]` in the log is expected, not a failure).

## Build invocation

```sh
# 1. compile a static Tailwind sheet (the app has none — Next does it at runtime)
node .ds-sync/node_modules/@tailwindcss/cli/dist/index.mjs \
  -i .design-sync/ds-styles.css -o .design-sync/.cache/compiled.css

# 2. build / validate / capture
node .ds-sync/resync.mjs --config .design-sync/config.json \
  --node-modules ./node_modules --entry ./.no-dist.mjs --out ./ds-bundle
```

- **`--entry ./.no-dist.mjs` is deliberate and must be kept.** Without `--entry`
  the converter looks for `node_modules/festival-viet-mtl-website/package.json`,
  which never exists for a repo's own package, and dies with ENOENT. The flag
  points at a path that doesn't exist on purpose: the converter walks up from its
  dirname to find the real `package.json` (repo root), then falls back to
  synthesizing an entry from `components/`. The `[NO_DIST] --entry ... doesn't
  exist` line is that fallback working as designed.
- `.design-sync/.cache/compiled.css` is gitignored, so **step 1 is mandatory on a
  fresh clone** — the build fails without it.
- pnpm 10.17.1 / node 22.11.0. Converter deps are isolated in `.ds-sync/`.

## Fixes that are already in config.json — don't rediscover these

- **`process is not defined` killed the entire bundle.** `next` and `next-intl`
  read `process.env.__NEXT_*` at module top level, so the IIFE threw before
  assigning `window.FestivalVietMtl` — every component then reported
  `[BUNDLE_EXPORT] not a component`. Fixed by `.design-sync/shims/process-env.ts`,
  which **must stay first in `cfg.extraEntries` and must stay import-free**: the
  combined entry evaluates extraEntries before the main package, and a module
  with no imports of its own evaluates before everything else.
- **Routing is shimmed.** `.design-sync/shims/navigation.tsx` replaces
  `@/i18n/navigation` via `cfg.tsconfig` → `.design-sync/tsconfig.ds.json`. It
  keeps `next/link` + `next/navigation` out of the bundle (they need a live App
  Router a static card can't provide). Note `tsconfig.ds.json` restates `@/*` as
  `../*` because redeclaring `paths` replaces the inherited map wholesale.
- **`componentSrcMap` enumerates all 8 components on purpose.** With no `.d.ts`
  tree the discovery fallback only fires when the map is empty — adding a single
  entry silently collapsed the component count to 1. If a component is added to
  the repo, **add it to the map** or it won't sync.
- **`dtsPropsFor` is hand-written for all 8.** Synth-entry mode can't extract
  props, so every `<Name>Props` came out as `[key: string]: unknown`. Re-check
  these against source when a component's API changes — nothing validates them.

- **Prose in `.design-sync/` leaks into the shipped stylesheet.** Tailwind's
  automatic source detection sweeps this directory too, not just the paths named
  by `@source`. `conventions.md` cites `bg-blue-500` and `gap-16` as examples of
  classes that *don't* exist — and the scanner generated both, making the
  document false about itself. Fixed by `@source not "../.design-sync/*.md"` in
  `ds-styles.css`. Caught on the 2nd sync (2026-07-31); the uploaded CSS was
  never affected, because the first sync's final build predated `conventions.md`.
  **Keep the exclusion**, and don't widen it to all of `.design-sync/` —
  `previews/*.tsx` must stay scanned so authored preview wrappers keep their
  classes.

## Known render warns (a warn NOT listed here is new — investigate it)

- `[RENDER_THIN] VietFestLogo` — legitimate. It's a pure SVG mark with no text
  nodes; the 150 KB+ screenshot confirms it paints correctly.
- `! [EXPORT_COLLISION] ... VietFestLogo` — benign. `VietFestLogo.tsx`
  default-exports a const named `SVGComponent`, and `export *` never re-exports a
  default, so the main package has no competing binding; the name resolves to the
  re-export in `.design-sync/preview-env.tsx`. Verified rendering correctly.
  Cleanest permanent fix would be a named export in the source file.
- `▲ [WARNING] Duplicate key "locationLabel"` — a real (harmless) duplicate in
  `messages/en.json`, lines 27 and 56. Not caused by the sync.

## Fonts

`Be Vietnam Pro` is loaded by `next/font/google` in `app/[locale]/layout.tsx` and
bound to `--font-sans`. That binding only exists inside a Next build, so previews
rendered in a fallback serif until:
- 27 woff2 files (9 weights × latin/latin-ext/vietnamese) were downloaded from
  Google Fonts into `.design-sync/fonts/` (committed, OFL 1.1) and wired via
  `cfg.extraFonts`;
- `.design-sync/ds-styles.css` binds `--font-sans` itself, because
  `globals.css` declares the self-referential `--font-sans: var(--font-sans)`.

Regenerate with the same Google Fonts CSS API URL if weights change.

## Re-sync risks — what can silently go stale

- **The compiled Tailwind sheet is a closed set.** `_ds_bundle.css` contains only
  the ~218 utility classes this repo currently uses. Any class the design agent
  invents has no rule and silently does nothing. This is documented in
  `conventions.md`, but if the design agent's output looks unstyled, this is why.
  A future sync could widen it with Tailwind v4 `@source inline(...)` in
  `ds-styles.css` — deliberately not done here to keep the sheet small.
- **Anything written into `.design-sync/` can change the stylesheet.** The `*.md`
  exclusion covers today's prose, but a new non-markdown doc or scratch file here
  would be scanned again. After adding files to this directory, diff the
  compiled CSS size before trusting the build.
- **`dtsPropsFor` and `conventions.md` are hand-maintained.** Both enumerate real
  names (variants, tokens, classes) verified against the build on 2026-07-31.
  Neither is regenerated; a component API change will not invalidate them
  automatically. Re-run the name check before trusting them.
- **The navigation shim is tied to next-intl's `createNavigation` surface.** If
  `i18n/navigation.ts` starts exporting something new, the shim must export it
  too or the bundle breaks at build time.
- **`previewMessages` is `messages/en.json` via `$ref`**, so it tracks the repo.
  French and Vietnamese catalogues are never exercised by the cards.
- **Windows lock flake:** one driver run died with `EBUSY: rmdir ds-bundle`.
  `rm -rf ds-bundle` and re-run; it was transient and did not recur.

## Not verified

- `BackgroundVideo` ships the floor card — it loads the YouTube IFrame API at
  runtime and cannot render statically.
- `Navbar`, `LocaleSwitcher`, `ThemeProvider`, `Button` also ship floor cards:
  scoped out of preview authoring by the user on the first sync ("hero is the
  only real design"). They are fully importable — authoring their previews is the
  standing offer for any later re-sync.
