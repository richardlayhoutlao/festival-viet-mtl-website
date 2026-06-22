import { useTranslations } from "next-intl"

const sponsors = [
  { tier: "Gold Sponsors", names: ["Sponsor Name A", "Sponsor Name B"] },
  { tier: "Silver Sponsors", names: ["Sponsor Name C", "Sponsor Name D", "Sponsor Name E"] },
  { tier: "Community Partners", names: ["Partner Organization F", "Partner Organization G"] },
]

const volunteers = [
  "Volunteer Name 1",
  "Volunteer Name 2",
  "Volunteer Name 3",
  "Volunteer Name 4",
  "Volunteer Name 5",
  "Volunteer Name 6",
]

const PartnersPage = () => {
  const t = useTranslations("partners")

  return (
    <div className="flex min-h-svh flex-col items-center px-6 py-12">
      <div className="w-full max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">{t("title")}</h1>
        <p className="mb-10 text-sm leading-relaxed text-muted-foreground">{t("subtitle")}</p>

        <div className="flex flex-col gap-10">
          {sponsors.map(({ tier, names }) => (
            <section key={tier}>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {tier}
              </h2>
              <ul className="flex flex-col gap-2">
                {names.map((name) => (
                  <li key={name} className="rounded-md border px-4 py-3 text-sm font-medium">
                    {name}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("volunteers")}
            </h2>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {volunteers.map((name) => (
                <li
                  key={name}
                  className="rounded-md border px-3 py-2 text-center text-sm text-muted-foreground"
                >
                  {name}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("gratitude")}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{t("gratitudeText")}</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PartnersPage
