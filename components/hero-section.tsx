"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export const HeroSection = () => {
  const t = useTranslations("home")

  return (
    <section className="bg-[#F5A623] px-8 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-6xl">

        {/* Top row — edition tag + free entry badge */}
        <div className="mb-10 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8102E]">
            {t("edition")}
          </span>
          <span className="rounded-full bg-[#C8102E] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F5A623]">
            {t("feeValue")} admission
          </span>
        </div>

        {/* Main layout — title left, vitals right */}
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">

          {/* Title */}
          <h1 className="text-7xl font-black leading-[0.88] tracking-tight text-[#C8102E] md:text-8xl lg:text-[8rem]">
            Festival
            <br />
            Việt
            <br />
            Montréal
          </h1>

          {/* Right column — vitals + CTA, fixed width so locale changes don't shift layout */}
          <div className="flex shrink-0 flex-col gap-6 md:w-96">

            {/* Key facts */}
            <dl className="flex flex-col gap-5">
              <div className="border-l-2 border-[#C8102E] pl-4">
                <dt className="mb-1 text-[9px] font-bold uppercase tracking-[0.25em] text-[#C8102E]/70">
                  {t("dateLabel")}
                </dt>
                <dd className="text-xl font-bold text-[#C8102E]">
                  {t("dateValue")}
                </dd>
              </div>
              <div className="border-l-2 border-[#C8102E] pl-4">
                <dt className="mb-1 text-[9px] font-bold uppercase tracking-[0.25em] text-[#C8102E]/70">
                  {t("timeLabel")}
                </dt>
                <dd className="text-xl font-bold text-[#C8102E]">
                  {t("timeValue")}
                </dd>
              </div>
              <div className="border-l-2 border-[#C8102E] pl-4">
                <dt className="mb-1 text-[9px] font-bold uppercase tracking-[0.25em] text-[#C8102E]/70">
                  {t("locationLabel")}
                </dt>
                <dd className="text-xl font-bold leading-tight text-[#C8102E]">
                  {t("locationValue")}
                </dd>
                <dd className="mt-0.5 text-sm text-[#C8102E]/60">
                  {t("locationDetail")}
                </dd>
              </div>
            </dl>

            {/* Divider */}
            <div className="h-px bg-[#C8102E]/20" />

            {/* CTAs */}
            <div className="flex flex-col gap-2">
              <Link
                href="/performers"
                className="rounded-sm bg-[#C8102E] px-5 py-3.5 text-center text-sm font-bold text-[#F5A623] transition-colors hover:bg-[#a50d26]"
              >
                {t("cta")}
              </Link>
              <div className="flex gap-2">
                <Link
                  href="/contact"
                  className="flex-1 rounded-sm border border-[#C8102E] px-4 py-2.5 text-center text-xs font-semibold text-[#C8102E] transition-colors hover:bg-[#C8102E]/10"
                >
                  {t("volunteerLink")}
                </Link>
                <Link
                  href="/food-vendors"
                  className="flex-1 rounded-sm border border-[#C8102E] px-4 py-2.5 text-center text-xs font-semibold text-[#C8102E] transition-colors hover:bg-[#C8102E]/10"
                >
                  {t("foodVendorLink")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
