import { useTranslations } from "next-intl"

const sponsors = ["Sponsor Name A", "Sponsor Name B"]

const PartnersPage = () => {
  const t = useTranslations("partners")

  return (
    <div className="bg-[#FAF7F2]">
      {/* Masthead — flat red field behind the type, matching the FAQ page */}
      <header className="bg-[#C8102E] px-8 pt-30 pb-20">
        <div className="mx-auto max-w-[1100px]">
          <span className="mb-5 block text-[10px] font-bold tracking-[0.3em] text-[#F5A623] uppercase">
            {t("eyebrow")}
          </span>
          <h1 className="mb-6 text-[clamp(2.6rem,7vw,6rem)] leading-[0.9] font-black tracking-[-0.03em] text-white">
            {t("title")}
          </h1>
          <p className="max-w-[600px] text-lg leading-[1.55] text-white/90">{t("subtitle")}</p>
        </div>
      </header>

      {/* Sponsor wall. The label stays at eyebrow scale so the sponsors
          themselves are the largest thing in the band.

          Fixed-ratio plates on purpose: they are logo slots, so real sponsor
          artwork drops in later without the wall reflowing. Marigold fill
          rather than an outline — gold tier taking the brand's gold. */}
      <section className="px-8 pt-20 pb-[110px]">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-6 text-[11px] font-bold tracking-[0.28em] text-[#C8102E] uppercase">
            {t("sponsors")}
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2">
            {sponsors.map((name) => (
              <li
                key={name}
                className="flex aspect-[16/7] items-center justify-center rounded-sm bg-[#F5A623] px-8 text-center"
              >
                <span className="text-[clamp(1.35rem,3vw,2rem)] leading-[1.1] font-black tracking-[-0.02em] text-[#C8102E]">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default PartnersPage
