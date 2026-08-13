import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { FaqAccordion } from "@/components/common/FaqAccordion"
import { createPageMetadata } from "@/lib/seo"

export const generateMetadata = createPageMetadata("/faq")

const FAQPage = () => {
  const t = useTranslations("faq")
  const questions = t.raw("questions") as { question: string; answer: string }[]

  return (
    <div className="bg-[#FAF7F2]">
      {/* Masthead — flat red field behind the type */}
      <header className="bg-[#C8102E] px-8 pt-30 pb-20">
        <div className="mx-auto max-w-[1100px]">
          <span className="mb-5 block text-[10px] font-bold tracking-[0.3em] text-[#F5A623] uppercase">
            {t("eyebrow")}
          </span>
          <h1 className="mb-6 text-[clamp(2.6rem,7vw,6rem)] leading-[0.9] font-black tracking-[-0.03em] text-white">
            {t("title")}
          </h1>
          <p className="max-w-[600px] text-lg leading-[1.55] text-white/90">
            {t("subtitle")}
          </p>
        </div>
      </header>

      {/* Accordion — red hairlines between entries, one panel open at a time */}
      <section className="px-8 pt-20 pb-[110px]">
        <div className="mx-auto max-w-[1100px]">
          <FaqAccordion questions={questions} />

          {/* Closing CTA — the list's last rule doubles as this section's opening
              rule, so the block reads as the end of the questions rather than a
              detached slab. The button carries the colour on its own. */}
          <div className="mt-2 flex flex-col gap-8 border-t border-[#C8102E]/25 pt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-12">
            <p className="max-w-[26ch] text-[clamp(1.5rem,3vw,2.125rem)] leading-[1.15] font-black tracking-[-0.02em] text-[#111]">
              {t("ctaTitle")}
            </p>
            <Link
              href="/contact"
              className="group inline-flex flex-none items-center gap-3 self-start rounded-full bg-[#C8102E] px-8 py-4 text-[13px] font-bold tracking-[0.12em] text-[#F5A623] uppercase transition-colors hover:bg-[#a50d26] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8102E] sm:self-auto"
            >
              {t("ctaLink")}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage
