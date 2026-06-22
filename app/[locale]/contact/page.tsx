import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

const ContactPage = () => {
  const t = useTranslations("contact")

  return (
    <div className="flex min-h-svh flex-col items-center px-6 py-12">
      <div className="w-full max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">{t("title")}</h1>
        <p className="mb-10 text-sm text-muted-foreground">{t("subtitle")}</p>

        <div className="grid gap-10 sm:grid-cols-2">
          <section className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("generalInquiries")}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{t("generalDesc")}</p>
            <a
              href="mailto:info@festivietvietmtl.ca"
              className="text-sm font-medium underline underline-offset-4"
            >
              info@festivietvietmtl.ca
            </a>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("mediaPress")}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{t("mediaDesc")}</p>
            <a
              href="mailto:press@festivietvietmtl.ca"
              className="text-sm font-medium underline underline-offset-4"
            >
              press@festivietvietmtl.ca
            </a>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("vendorSponsorship")}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{t("vendorDesc")}</p>
            <a
              href="mailto:vendors@festivietvietmtl.ca"
              className="text-sm font-medium underline underline-offset-4"
            >
              vendors@festivietvietmtl.ca
            </a>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("followUs")}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{t("followDesc")}</p>
            <div className="flex flex-col gap-1">
              <a href="#" className="text-sm font-medium underline underline-offset-4">
                Facebook
              </a>
              <a href="#" className="text-sm font-medium underline underline-offset-4">
                Instagram
              </a>
            </div>
          </section>
        </div>

        <div className="mt-12 rounded-lg border p-6">
          <h2 className="mb-4 text-sm font-semibold">{t("sendMessage")}</h2>
          <form className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                  {t("name")}
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder={t("namePlaceholder")}
                  className="rounded-md border bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-ring"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                  {t("email")}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-md border bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-xs font-medium text-muted-foreground">
                {t("subject")}
              </label>
              <input
                id="subject"
                type="text"
                placeholder={t("subjectPlaceholder")}
                className="rounded-md border bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-ring"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                {t("message")}
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder={t("messagePlaceholder")}
                className="rounded-md border bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-ring"
              />
            </div>
            <Button type="submit" className="self-start">
              {t("submit")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
