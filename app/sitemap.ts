import type { MetadataRoute } from "next"
import { routing, type Pathname } from "@/i18n/routing"
import { absoluteUrl } from "@/lib/seo"

// One entry per route, keyed to the default locale's URL, with every locale's
// localized pathname listed as an alternate — the sitemap mirror of the
// hreflang tags each page already emits.
const sitemap = (): MetadataRoute.Sitemap =>
  (Object.keys(routing.pathnames) as Pathname[]).map((href) => ({
    url: absoluteUrl(routing.defaultLocale, href),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, absoluteUrl(locale, href)]),
      ),
    },
  }))

export default sitemap
