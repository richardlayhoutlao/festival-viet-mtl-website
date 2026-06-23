import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { LocaleSwitcher } from "@/components/common/locale-switcher"
import Image from "next/image"

export const Navbar = () => {
  const t = useTranslations("nav")

  const links = [
    { href: "/faq" as const, label: t("faq") },
    { href: "/partners" as const, label: t("partners") },
    { href: "/contact" as const, label: t("contact") },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[#C8102E]/20 bg-[#F5A623]/80">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center -ml-6">
          <Image
            src="/VietFest_logo.jpg"
            alt="Festival Việt Montréal"
            width={200}
            height={200}
            className="h-24 w-auto object-contain"
          />
        </Link>
        <ul className="flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-semibold text-[#C8102E]/70 transition-colors hover:text-[#C8102E]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-sm bg-[#C8102E] px-4 py-2.5 text-center text-sm font-semibold text-[#F5A623] transition-colors hover:bg-[#a50d26] whitespace-nowrap"
          >
            {t("applyVolunteer")}
          </Link>
          <Link
            href="/food-vendors"
            className="rounded-sm bg-[#C8102E] px-4 py-2.5 text-center text-sm font-semibold text-[#F5A623] transition-colors hover:bg-[#a50d26] whitespace-nowrap"
          >
            {t("applyVendor")}
          </Link>
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  )
}
