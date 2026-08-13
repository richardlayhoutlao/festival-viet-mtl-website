import { useTranslations } from "next-intl"
import { SponsorWall } from "@/components/common/SponsorWall"
import { createPageMetadata } from "@/lib/seo"

export const generateMetadata = createPageMetadata("/partners")

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

      <section className="px-8 pt-20 pb-[110px]">
        <div className="mx-auto max-w-[1100px]">
          <SponsorWall />
        </div>
      </section>
    </div>
  )
}

export default PartnersPage
