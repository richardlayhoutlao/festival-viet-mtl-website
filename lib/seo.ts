import type { Metadata } from "next"
import { hasLocale } from "next-intl"
import { getTranslations } from "next-intl/server"
import { getPathname } from "@/i18n/navigation"
import { routing, type Locale, type Pathname } from "@/i18n/routing"
import { SITE_URL } from "@/lib/site"

// og:locale wants territory-qualified codes, which the routing config's bare
// language tags can't provide.
export const OG_LOCALES: Record<Locale, string> = {
  en: "en_CA",
  fr: "fr_CA",
  vi: "vi_VN",
}

// The logo stands in as the share image until the festival has a real
// 1200×630 card. The URL is relative on purpose — metadataBase resolves it.
// The site name is not translated, so neither is the alt.
export const LOGO_OG_IMAGE = {
  url: "/VietFest_logo.jpg",
  width: 1767,
  height: 1904,
  alt: "Festival Việt Montréal",
}

// Which entry in the `metadata` message catalogue describes each route.
const PAGE_KEY = {
  "/": "home",
  "/performers": "performers",
  "/food-vendors": "foodVendors",
  "/faq": "faq",
  "/partners": "partners",
  "/contact": "contact",
} as const satisfies Record<Pathname, string>

export const absoluteUrl = (locale: Locale, href: Pathname) =>
  SITE_URL + getPathname({ locale, href })

// Builds a page's `generateMetadata` from its route alone: localized title and
// description out of the `metadata` catalogue, the canonical URL for the
// current locale, and hreflang alternates pointing at the localized pathnames
// (x-default follows the default locale, which is what the proxy serves when
// no locale matches). The home page keeps its title absolute — templating the
// site name onto itself would print it twice.
export const createPageMetadata =
  (href: Pathname) =>
  async ({
    params,
  }: {
    params: Promise<{ locale: string }>
  }): Promise<Metadata> => {
    const requested = (await params).locale
    const locale = hasLocale(routing.locales, requested)
      ? requested
      : routing.defaultLocale
    const t = await getTranslations({ locale, namespace: "metadata" })

    const key = PAGE_KEY[href]
    const title = t(`${key}.title`)
    const description = t(`${key}.description`)
    const canonical = absoluteUrl(locale, href)

    return {
      title: key === "home" ? { absolute: title } : title,
      description,
      alternates: {
        canonical,
        languages: {
          ...Object.fromEntries(
            routing.locales.map((l) => [l, absoluteUrl(l, href)]),
          ),
          "x-default": absoluteUrl(routing.defaultLocale, href),
        },
      },
      // The complete Open Graph object, shared fields included: Next replaces
      // a parent's `openGraph` wholesale rather than merging it, so anything
      // the layout declares would be dropped from pages that pass this far.
      openGraph: {
        type: "website",
        siteName: t("siteName"),
        locale: OG_LOCALES[locale],
        title,
        description,
        url: canonical,
        images: [LOGO_OG_IMAGE],
      },
    }
  }
