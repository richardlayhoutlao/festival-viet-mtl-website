import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { LocaleSwitcher } from "./locale-switcher"

export function Navbar() {
  const t = useTranslations("nav")

  const links = [
    { href: "/performers" as const, label: t("performers") },
    { href: "/food-vendors" as const, label: t("foodVendors") },
    { href: "/faq" as const, label: t("faq") },
    { href: "/special-thanks" as const, label: t("specialThanks") },
    { href: "/contact" as const, label: t("contact") },
  ]

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Festival Việt Montréal
        </Link>
        <ul className="flex items-center gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  )
}
