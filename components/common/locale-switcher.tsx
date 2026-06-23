"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"
import { routing, type Locale } from "@/i18n/routing"

const labels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  vi: "VI",
}

export const LocaleSwitcher = () => {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (next: Locale) => {
    router.replace(pathname, { locale: next })
  }

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          className={`rounded px-2 py-1 text-xs font-semibold transition-colors ${
            l === locale
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  )
}
