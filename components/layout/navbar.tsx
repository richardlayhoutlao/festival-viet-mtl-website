"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { LocaleSwitcher } from "@/components/common/LocaleSwitcher"
import VietFestLogo from "@/components/common/VietFestLogo"

export const Navbar = () => {
  const t = useTranslations("nav")
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: "/faq" as const, label: t("faq") },
    { href: "/partners" as const, label: t("partners") },
    { href: "/contact" as const, label: t("contact") },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#F5A623]">
      <nav className="relative mx-auto flex max-w-[1600px] items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center -ml-6">
          <VietFestLogo color="#C8102E" className="h-48 w-auto" />
        </Link>

        {/* Desktop nav links */}
        <ul className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-lg font-semibold text-[#C8102E]/70 transition-colors hover:text-[#C8102E]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-sm bg-[#C8102E] px-4 py-2.5 text-center text-lg font-semibold text-[#F5A623] transition-colors hover:bg-[#a50d26] whitespace-nowrap"
          >
            {t("applyVolunteer")}
          </Link>
          <Link
            href="/food-vendors"
            className="rounded-sm bg-[#C8102E] px-4 py-2.5 text-center text-lg font-semibold text-[#F5A623] transition-colors hover:bg-[#a50d26] whitespace-nowrap"
          >
            {t("applyVendor")}
          </Link>
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
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg font-semibold text-[#C8102E]/70 transition-colors hover:text-[#C8102E]"
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
