import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["en", "fr", "vi"],
  defaultLocale: "fr",
  pathnames: {
    "/": "/",
    "/performers": {
      en: "/performers",
      fr: "/artistes",
      vi: "/nghe-si",
    },
    "/food-vendors": {
      en: "/food-vendors",
      fr: "/restaurateurs",
      vi: "/quan-an",
    },
    "/faq": {
      en: "/faq",
      fr: "/faq",
      vi: "/hoi-dap",
    },
    "/special-thanks": {
      en: "/special-thanks",
      fr: "/remerciements",
      vi: "/cam-on",
    },
    "/contact": {
      en: "/contact",
      fr: "/contact",
      vi: "/lien-he",
    },
  },
})

export type Locale = (typeof routing.locales)[number]
export type Pathname = keyof typeof routing.pathnames
