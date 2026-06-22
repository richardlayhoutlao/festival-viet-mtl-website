import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { LocaleSwitcher } from "./locale-switcher"
import Image from "next/image"

export function Navbar() {
  const t = useTranslations("nav")

  const links = [
    { href: "/faq" as const, label: t("faq") },
    { href: "/partners" as const, label: t("partners") },
    { href: "/contact" as const, label: t("contact") },
  ]

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/VietFest_logo.jpg"
            alt="Festival Việt Montréal"
            width={200}
            height={200}
            className="h-24 w-auto object-contain"
          />
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
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-md border border-foreground/20 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            {t("applyVolunteer")}
          </Link>
          <Link
            href="/food-vendors"
            className="rounded-md bg-foreground px-3 py-1.5 text-sm text-background transition-colors hover:bg-foreground/80"
          >
            {t("applyVendor")}
          </Link>
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  )
}
