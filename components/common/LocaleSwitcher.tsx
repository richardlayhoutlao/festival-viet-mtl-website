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
    <div className="group relative">
      <button className="flex items-center justify-center rounded-sm bg-[#C8102E] px-4 py-2.5 text-lg font-semibold text-[#F5A623] transition-colors hover:bg-[#a50d26]">
        <span className="inline-block min-w-[2ch] text-center">{labels[locale]}</span>
      </button>

      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
        <ul className="overflow-hidden rounded-md bg-[#C8102E] shadow-lg min-w-14">
          {routing.locales.filter((l) => l !== locale).map((l) => (
            <li key={l}>
              <button
                onClick={() => switchLocale(l)}
                className="w-full cursor-pointer px-4 py-2.5 text-lg font-semibold text-[#F5A623] hover:bg-[#a50d26] transition-colors text-center"
              >
                {labels[l]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
