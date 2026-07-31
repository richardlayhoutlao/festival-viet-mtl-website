/*
 * Preview-only stand-in for @/i18n/navigation.
 *
 * The real module is next-intl's createNavigation(routing), which pulls in
 * next/link and next/navigation. Those read process.env.__NEXT_* at module top
 * level, so bundling them throws "process is not defined" before window.<GLOBAL>
 * is ever assigned — the whole bundle dies at load. They also need a live Next
 * App Router context that a static preview card cannot provide.
 *
 * This substitutes the routing ENVIRONMENT only, exactly as cfg.provider
 * substitutes React context. Every component still ships its own real source:
 * HeroSection's CTAs, Navbar's links and active-route styling all render from
 * the repo's own JSX and class names, just against inert navigation.
 *
 * Wired in via .design-sync/tsconfig.ds.json paths -> cfg.tsconfig.
 */
import * as React from "react"

type LinkProps = Omit<React.ComponentPropsWithoutRef<"a">, "href"> & {
  href: string | { pathname: string }
}

export const Link = ({ href, children, ...props }: LinkProps) => (
  <a href={typeof href === "string" ? href : href.pathname} {...props}>
    {children}
  </a>
)

/** Cards render a route-less page; "/" keeps active-link styling off. */
export const usePathname = () => "/"

const noop = () => {}

export const useRouter = () => ({
  push: noop,
  replace: noop,
  back: noop,
  forward: noop,
  refresh: noop,
  prefetch: noop,
})

export const redirect = noop

export const getPathname = ({ href }: { href: string | { pathname: string } }) =>
  typeof href === "string" ? href : href.pathname
