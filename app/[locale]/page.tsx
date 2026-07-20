import { useTranslations } from "next-intl"
import { HeroSection } from "@/components/common/HeroSection"
import { BackgroundVideo } from "@/components/common/BackgroundVideo"

const Page = () => {
  const t = useTranslations("home")

  return (
    <div>
      <HeroSection />

      {/* Explore — first editorial beat under the hero, background video */}
      <section className="relative isolate flex min-h-[calc(100svh-7rem)] items-center overflow-hidden bg-linear-to-br from-[#C8102E] to-[#7a0a1d] px-8 py-32 md:py-48">
        {/* Background YouTube video — muted autoplay loop, scaled to cover the section.
            Uses the IFrame API (client component) to auto-resume so YouTube's
            paused-overlay controls never appear. */}
        <BackgroundVideo title={t("exploreTitleLine1")} />
        {/* Scrim keeps the copy readable over the footage */}
        <div className="absolute inset-0 -z-10 bg-black/60" />

        <div className="mx-auto w-full max-w-[1600px]">
          <div className="max-w-2xl">
            <span className="mb-8 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#F5A623]">
              {t("exploreEyebrow")}
            </span>
            <h2 className="font-black leading-[0.92] tracking-tight text-white text-[clamp(1.75rem,3.5vw,3rem)]">
              {t("exploreTitleLine1")}
              <br />
              {t("exploreTitleLine2")}
            </h2>
            <p className="mt-8 border-l-2 border-[#F5A623] pl-5 text-lg leading-relaxed text-white/90 md:text-xl">
              {t("exploreBody1")}
            </p>
            <p className="mt-6 text-lg font-semibold leading-relaxed text-[#F5A623] md:text-xl">
              {t("exploreBody2")}
            </p>
          </div>
        </div>
      </section>

      {/* Tradition — mirrored editorial beat, image on the left */}
      <section className="flex min-h-[calc(100svh-7rem)] items-stretch bg-[#FAF7F2] px-8 py-24 md:py-32">
        <div className="mx-auto grid w-full max-w-[1600px] items-stretch gap-12 md:grid-cols-2 md:gap-20">

          {/* Image */}
          <div className="order-1 flex">
            <div className="flex min-h-[60vh] w-full items-center justify-center rounded-sm bg-[#C8102E] text-xs font-bold uppercase tracking-[0.25em] text-[#F5A623] md:min-h-0">
              [Image placeholder]
            </div>
          </div>

          {/* Copy */}
          <div className="order-2 flex flex-col justify-center">
            <span className="mb-8 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8102E]">
              {t("traditionEyebrow")}
            </span>
            <h2 className="whitespace-nowrap font-black leading-[0.92] tracking-tight text-[#111] text-[clamp(1.1rem,2.2vw,2.25rem)]">
              {t("traditionTitle")}
            </h2>
            <p className="mt-8 border-l-2 border-[#F5A623] pl-5 text-lg leading-relaxed text-[#333] md:text-xl">
              {t("traditionBody1")}
            </p>
            <p className="mt-6 text-lg font-semibold leading-relaxed text-[#C8102E] md:text-xl">
              {t("traditionBody2")} 🍜🥖🥤
            </p>
          </div>
        </div>
      </section>

      <div className="flex min-h-svh p-6">
        <div className="flex max-w-md min-w-0 flex-col gap-24 text-sm leading-loose">
          <div>
            <h2>{t("participantsTitle")}</h2>
            <p>{t("participantsSubtitle")}</p>
            <div>
              <div>
                <h3>{t("vendorsTitle")}</h3>
                <div>[Food Vendors image placeholder]</div>
                <p>{t("vendorsDesc")}</p>
              </div>
              <div>
                <h3>{t("performersTitle")}</h3>
                <div>[Performers image placeholder]</div>
                <p>{t("performersDesc")}</p>
              </div>
              <div>
                <h3>{t("merchantsTitle")}</h3>
                <div>[Merchants image placeholder]</div>
                <p>{t("merchantsDesc")}</p>
              </div>
            </div>
          </div>
          <div>
            <h2>{t("eventDetailsTitle")}</h2>
            <div>
              <h3>{t("howToGetThereTitle")}</h3>
              <div>[Map image placeholder]</div>
              <p>
                <strong>{t("directionsLabel")} :</strong> {t("directionsBody")}
              </p>
              <ul>
                <li>{t("transit1")}</li>
                <li>{t("transit2")}</li>
                <li>{t("transit3")}</li>
              </ul>
            </div>
            <div>
              <h3>{t("generalInfoTitle")}</h3>
              <dl>
                <div>
                  <dt>{t("locationLabel")} :</dt>
                  <dd>{t("locationAddress")}</dd>
                </div>
                <div>
                  <dt>{t("feeLabel")} :</dt>
                  <dd>{t("feeValue")}</dd>
                </div>
                <div>
                  <dt>{t("scheduleLabel")} :</dt>
                  <dd>{t("scheduleValue")}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div>
            <h2>{t("partnersTitle")}</h2>
            <p>{t("partnersSubtitle")}</p>
            <ul>
              <li>[Canadian Heritage – Patrimoine canadien logo]</li>
              <li>[Premier Vendredi logo]</li>
            </ul>
            <h3>{t("contributorsTitle")}</h3>
            <p>{t("contributorsBody1")}</p>
            <p>{t("contributorsBody2")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
