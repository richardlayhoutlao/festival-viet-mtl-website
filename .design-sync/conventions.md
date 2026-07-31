# Building with the Festival Việt Montréal system

This is the real component set behind the festival's Next.js site. Components are
prop-light on purpose: most of them read their copy from a translation catalogue
rather than from props.

## Every tree needs the i18n provider

`HeroSection`, `Navbar`, `Footer` and `LocaleSwitcher` call `useTranslations()`.
Without a `NextIntlClientProvider` above them they throw and render nothing.
`NextIntlClientProvider` and a ready-made `previewMessages` catalogue (the real
`en` strings) are both on the bundle global:

```jsx
const { NextIntlClientProvider, previewMessages, HeroSection } = window.FestivalVietMtl

<NextIntlClientProvider locale="en" messages={previewMessages}>
  <HeroSection />
</NextIntlClientProvider>
```

Wrap in `ThemeProvider` as well if you want the `.dark` class variants to apply.
Routing is inert here — links render as plain `<a>`, so `Navbar` shows no active
state and `LocaleSwitcher` won't actually switch.

## Two colour systems — don't mix them up

**Brand colours are literal hex values, not tokens.** The festival look is exactly
two colours, written inline throughout `HeroSection`, `Navbar` and `Footer`:

- `#C8102E` — flag red: display type, CTA fills, rules
- `#F5A623` — marigold: hero field, text reversed out of red

Use them as arbitrary values (`bg-[#C8102E]`, `text-[#F5A623]`). There is no
`--brand-*` token; inventing one produces nothing.

**shadcn semantic tokens** exist separately and drive `Button` only:
`--primary`, `--primary-foreground`, `--secondary`, `--secondary-foreground`,
`--muted`, `--muted-foreground`, `--accent`, `--destructive`, `--background`,
`--foreground`, `--border`, `--input`, `--ring`, `--card`, `--popover`,
`--radius`, `--radius-md`, `--font-sans`. Light and dark values are both defined.

## The utility vocabulary is a CLOSED set — read this before styling

`_ds_bundle.css` is a **statically compiled** Tailwind v4 sheet. It contains only
the ~218 classes this repo already uses. A Tailwind class that isn't already in
the sheet has **no rule at all** — `bg-blue-500` or `gap-16` will silently do
nothing.

So, for your own layout glue, either reuse what exists or use inline
`style={{…}}`, which always works. What exists:

| Family | Real values available |
|---|---|
| layout | `flex`, `grid`, `block`, `hidden`, `inline-flex`, `relative`, `absolute`, `fixed`, `overflow-hidden` |
| direction/align | `flex-col`, `flex-1`, `items-center`, `justify-center`, `justify-between` |
| gap | `gap-1` `gap-1.5` `gap-2` `gap-3` `gap-4` `gap-5` `gap-6` `gap-8` `gap-10` `gap-12` `gap-24` |
| padding | `px-2` `px-2.5` `px-3` `px-4` `px-5` `px-6` `px-8`, `py-*`, `p-*` |
| type scale | `text-xs` `text-sm` `text-base` `text-lg` `text-xl` `text-2xl` `text-3xl` `text-4xl` |
| weight | `font-medium` `font-semibold` `font-bold` `font-black` |
| colour | `bg-background` `bg-primary` `bg-secondary` `bg-transparent` `text-primary` `text-muted-foreground` `text-white` `text-destructive` |
| misc | `rounded-full` `rounded-sm` `rounded-lg`, `uppercase`, `tracking-*`, `leading-*`, `transition-colors`, `size-*` |

Responsive `md:` and `dark:` prefixes exist only on the specific classes the repo
already pairs them with. Verify anything else against `_ds/<folder>/styles.css`
and its imports (`fonts/fonts.css`, `_ds_bundle.css`) — that is the authoritative
list, and reading it beats guessing.

## Typography

`Be Vietnam Pro` ships with the bundle at weights 100–900, Latin + Vietnamese
subsets, bound to `--font-sans`. It is the only family; the display look comes
from weight (`font-black`) and tight leading, not from a second face.

## Component notes

- **`HeroSection`** — full-bleed landing block, no props. It carries `-mt-56 pt-56`
  because the transparent navbar overlaps it on the real page; give it room at the
  top or wrap it in `overflow-hidden`.
- **`Button`** — the only configurable component: `variant` (`default`, `outline`,
  `secondary`, `ghost`, `destructive`, `link`), `size` (`default`, `xs`, `sm`,
  `lg`, `icon`, `icon-xs`, `icon-sm`, `icon-lg`), `asChild`. Always pass children;
  it renders an empty pill otherwise.
- **`VietFestLogo`** — conical-hat mark, `color` defaults to `currentColor`. Give
  it an explicit size; it has no intrinsic dimensions.
- **`BackgroundVideo`** — requires a `title` and loads the YouTube IFrame API at
  runtime, so it stays blank without network access.

Per-component detail lives in `components/<group>/<Name>/<Name>.prompt.md` and
`<Name>.d.ts`.
