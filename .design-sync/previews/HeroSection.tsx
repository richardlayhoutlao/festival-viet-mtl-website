import { HeroSection } from "festival-viet-mtl-website"

/**
 * The landing hero exactly as app/[locale]/page.tsx renders it.
 *
 * HeroSection takes no props — every string comes from the "home" namespace in
 * messages/*.json, so this card shows the real festival copy the site ships.
 *
 * The section carries `-mt-56 pt-56` because the transparent navbar overlaps it
 * on the real page; the wrapper below re-creates that overlap allowance so the
 * card frames the same composition a visitor sees instead of a clipped one.
 *
 * Only one export: the layout's responsive switch is driven by Tailwind `md:`
 * viewport media queries, so a narrower wrapper would still render the desktop
 * arrangement — a "mobile" cell here would be a lie.
 */
export const Default = () => (
  <div className="overflow-hidden pt-56">
    <HeroSection />
  </div>
)
