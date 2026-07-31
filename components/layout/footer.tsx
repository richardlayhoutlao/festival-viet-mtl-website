import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export const Footer = () => {
  const t = useTranslations("footer")
  const tNav = useTranslations("nav")

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-2">
          <span className="font-semibold tracking-tight">Festival Việt Montréal</span>
          <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">{t("tagline")}</p>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("festival")}
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/performers"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {tNav("performers")}
                </Link>
              </li>
              <li>
                <Link
                  href="/food-vendors"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {tNav("foodVendors")}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {tNav("faq")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("connect")}
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("partners")}
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Festival Việt Montréal. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
