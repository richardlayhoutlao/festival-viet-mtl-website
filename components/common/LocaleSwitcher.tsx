"use client"

import { useEffect, useRef, useState } from "react"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"
import { routing, type Locale } from "@/i18n/routing"
import { cn } from "@/utils/cn"

const labels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  vi: "VI",
}

export const LocaleSwitcher = () => {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  // Hover alone can't open the menu on touch screens, so the button also
  // toggles it. Hover still works on desktop through the group-hover classes.
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("pointerdown", close)
    return () => document.removeEventListener("pointerdown", close)
  }, [open])

  const switchLocale = (next: Locale) => {
    setOpen(false)
    router.replace(pathname, { locale: next })
  }

  return (
    <div ref={containerRef} className="group relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center justify-center rounded-full bg-[#C8102E] px-3 py-2 text-base md:px-4 md:py-2.5 md:text-lg font-semibold text-[#F5A623] transition-colors hover:bg-[#a50d26]"
      >
        <span className="inline-block min-w-[2ch] text-center">{labels[locale]}</span>
      </button>

      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 top-full pt-1 transition-opacity duration-150",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto",
        )}
      >
        <ul className="overflow-hidden rounded-xl bg-[#C8102E] shadow-lg min-w-14">
          {routing.locales.filter((l) => l !== locale).map((l) => (
            <li key={l}>
              <button
                onClick={() => switchLocale(l)}
                className="w-full cursor-pointer px-4 py-2.5 text-base md:text-lg font-semibold text-[#F5A623] hover:bg-[#a50d26] transition-colors text-center"
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
