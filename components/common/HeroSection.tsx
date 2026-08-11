"use client"

import { useTranslations } from "next-intl"

export const HeroSection = () => {
  const t = useTranslations("home")

  return (
    <section id="hero" className="-mt-56 flex min-h-[calc(100svh+7rem)] flex-col bg-[#F5A623] px-8 pt-56 pb-12 md:pb-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center">

        {/* Main layout — title left, vitals right */}
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between md:gap-26">

          {/* Title with edition label above */}
          <div>
            <span className="mb-14 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8102E]">
              {t("edition")}
            </span>
            <h1 className="font-black leading-[0.88] tracking-tight text-[#C8102E] text-[clamp(3.5rem,10vw,11.5rem)] ml-[-0.05em]">
              Festival
              <br />
              Việt
              <br />
              Montréal
            </h1>
          </div>

          {/* Right column — vitals + CTA, fixed width so locale changes don't shift layout */}
          <div className="flex flex-col gap-6 md:flex-1">

            {/* Free admission badge */}
            <span className="self-start rounded-full bg-[#C8102E] px-4 py-1.5 text-sm font-bold uppercase tracking-[0.15em] text-[#F5A623]">
              {t("freeAdmission")}
            </span>

            {/* Key facts */}
            <dl className="flex flex-col gap-5">
              <div className="border-l-2 border-[#C8102E] pl-4">
                <dt className="mb-1 text-[9px] font-bold uppercase tracking-[0.25em] text-[#C8102E]/70">
                  {t("dateLabel")}
                </dt>
                <dd className="text-4xl font-bold text-[#C8102E] whitespace-nowrap">
                  {t("dateValue")}
                </dd>
              </div>
              <div className="border-l-2 border-[#C8102E] pl-4">
                <dt className="mb-1 text-[9px] font-bold uppercase tracking-[0.25em] text-[#C8102E]/70">
                  {t("timeLabel")}
                </dt>
                <dd className="text-4xl font-bold text-[#C8102E]">
                  {t("timeValue")}
                </dd>
              </div>
              <div className="border-l-2 border-[#C8102E] pl-4">
                <dt className="mb-1 text-[9px] font-bold uppercase tracking-[0.25em] text-[#C8102E]/70">
                  {t("locationLabel")}
                </dt>
                <dd className="text-4xl font-bold leading-tight text-[#C8102E]">
                  {t("locationValue")}
                </dd>
                <dd className="mt-0.5 text-base text-[#C8102E]/60">
                  {t("locationDetail")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
