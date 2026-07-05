"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"
import { LocaleSwitcher } from "@/components/common/LocaleSwitcher"
import VietFestLogo from "@/components/common/VietFestLogo"
import { cn } from "@/utils/cn"

export const Navbar = () => {
  const t = useTranslations("nav")
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // Hide the apply CTAs (and enlarge the logo) while the hero — which shows the
  // same CTAs — is in view; reveal them once the user scrolls past it. Pages
  // without a hero keep the compact state (CTAs shown). Re-runs on navigation so
  // the observer re-attaches to the new page's hero instead of a stale node.
  const [overHero, setOverHero] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("hero")
    if (!hero) {
      setOverHero(false)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [pathname])

  const links = [
    { href: "/faq" as const, label: t("faq"), uppercase: false },
    { href: "/partners" as const, label: t("partners"), uppercase: true },
    { href: "/contact" as const, label: t("contact"), uppercase: true },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#F5A623]">
      <nav className="relative mx-auto flex max-w-[1600px] items-center justify-between px-8 py-2">
        {/* Logo — shrinks a bit while over the hero, full size once scrolled past.
            Wordmark appears alongside the CTAs once the hero is out of view. */}
        <Link href="/" className="flex items-center gap-2 -ml-6">
          <VietFestLogo
            color="#C8102E"
            className={cn(
              "w-auto transition-[height] duration-300",
              overHero ? "h-28" : "h-24",
            )}
          />
          <span
            className={cn(
              "flex flex-col font-black leading-none tracking-tight text-[#C8102E] text-2xl transition-opacity duration-300",
              overHero ? "pointer-events-none opacity-0" : "opacity-100",
            )}
            aria-hidden={overHero}
          >
            <span>Festival</span>
            <span className="-mt-1.5">Việt</span>
            <span className="-mt-1.5">Montréal</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8">
          {links.map(({ href, label, uppercase }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-lg font-semibold text-[#C8102E]/70 transition-colors hover:text-[#C8102E]",
                  uppercase && "uppercase",
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3">
          <div
            className={cn(
              "flex items-center gap-3 transition-opacity duration-300",
              overHero
                ? "pointer-events-none opacity-0"
                : "opacity-100",
            )}
            aria-hidden={overHero}
          >
            <Link
              href="/contact"
              tabIndex={overHero ? -1 : undefined}
              className="rounded-sm bg-[#C8102E] px-4 py-2.5 text-center text-lg font-semibold text-[#F5A623] transition-colors hover:bg-[#a50d26] whitespace-nowrap"
            >
              {t("applyVolunteer")}
            </Link>
            <Link
              href="/food-vendors"
              tabIndex={overHero ? -1 : undefined}
              className="rounded-sm bg-[#C8102E] px-4 py-2.5 text-center text-lg font-semibold text-[#F5A623] transition-colors hover:bg-[#a50d26] whitespace-nowrap"
            >
              {t("applyVendor")}
            </Link>
          </div>
          <LocaleSwitcher />
        </div>

        {/* Mobile: locale switcher + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <LocaleSwitcher />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="p-2 text-[#C8102E]"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F5A623] border-t border-[#C8102E]/20 px-8 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map(({ href, label, uppercase }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "block text-lg font-semibold text-[#C8102E]/70 transition-colors hover:text-[#C8102E]",
                    uppercase && "uppercase",
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 mt-5">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-sm bg-[#C8102E] px-4 py-2.5 text-center text-lg font-semibold text-[#F5A623] transition-colors hover:bg-[#a50d26]"
            >
              {t("applyVolunteer")}
            </Link>
            <Link
              href="/food-vendors"
              onClick={() => setMenuOpen(false)}
              className="rounded-sm bg-[#C8102E] px-4 py-2.5 text-center text-lg font-semibold text-[#F5A623] transition-colors hover:bg-[#a50d26]"
            >
              {t("applyVendor")}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
