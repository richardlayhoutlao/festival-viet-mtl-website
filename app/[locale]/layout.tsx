import type { Metadata } from "next"
import { Be_Vietnam_Pro } from "next/font/google"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { getTranslations } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { ThemeProvider } from "@/components/common/ThemeProvider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { LOGO_OG_IMAGE, OG_LOCALES } from "@/lib/seo"
import { SITE_URL } from "@/lib/site"
import { cn } from "@/utils/cn"
import "../globals.css"

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
})

type Props = {
  readonly children: React.ReactNode
  readonly params: Promise<{ readonly locale: string }>
}

// Site-wide defaults; each page layers its own title, description, canonical
// and hreflang alternates on top via createPageMetadata. The openGraph here
// only serves routes without page metadata — pages replace it wholesale.
export const generateMetadata = async ({
  params,
}: Pick<Props, "params">): Promise<Metadata> => {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("home.title"),
      template: `%s | ${t("siteName")}`,
    },
    description: t("home.description"),
    openGraph: {
      type: "website",
      siteName: t("siteName"),
      locale: OG_LOCALES[locale],
      images: [LOGO_OG_IMAGE],
    },
    twitter: {
      card: "summary",
    },
    icons: {
      icon: "/VietFest_logo.jpg",
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn("antialiased", "font-sans", beVietnamPro.variable)}
    >
      <body>
        <NextIntlClientProvider>
          <ThemeProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
