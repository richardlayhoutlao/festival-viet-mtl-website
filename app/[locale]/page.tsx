import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { HeroSection } from "@/components/common/HeroSection"
import { BackgroundVideo } from "@/components/common/BackgroundVideo"
import { SponsorWall } from "@/components/common/SponsorWall"
import { createPageMetadata } from "@/lib/seo"
import { SITE_URL } from "@/lib/site"

export const generateMetadata = createPageMetadata("/")

const Page = () => {
  const t = useTranslations("home")
  const locale = useLocale()

  // Event structured data for search engines — the festival's vitals in the
  // format Google's event rich results read. Dates are fixed here rather than
  // parsed out of the localized copy; update them alongside the message
  // catalogues when the next edition is announced.
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Festival",
    name: "Festival Việt Montréal 2026",
    description: t("exploreBody1"),
    startDate: "2026-09-06T11:00:00-04:00",
    endDate: "2026-09-06T19:00:00-04:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    inLanguage: locale,
    image: [`${SITE_URL}/VietFest_logo.jpg`],
    location: {
      "@type": "Place",
      name: t("locationValue"),
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rue Jean-Talon Ouest",
        addressLocality: "Montréal",
        addressRegion: "QC",
        postalCode: "H3R 2M2",
        addressCountry: "CA",
      },
    },
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: SITE_URL,
    },
    organizer: {
      "@type": "Organization",
      name: "Festival Việt Montréal",
      url: SITE_URL,
    },
  }

  // Marker colours follow the STM lines each item talks about; the bus item
  // gets the band's plain ink.
  const transitItems: { text: string; marker: string }[] = [
    { text: t("transit1"), marker: "bg-[#EF8122]" },
    { text: t("transit2"), marker: "bg-[#0083C9]" },
    { text: t("transit3"), marker: "bg-[#111]" },
  ]

  const participantCards: {
    title: string
    desc: string
    image: string
    href?: "/food-vendors" | "/performers"
    cta?: string
  }[] = [
    {
      title: t("vendorsTitle"),
      desc: t("vendorsDesc"),
      image: "/food-vendors.png",
      href: "/food-vendors",
      cta: t("vendorsCta"),
    },
    {
      title: t("performersTitle"),
      desc: t("performersDesc"),
      image: "/performers.png",
      href: "/performers",
      cta: t("performersCta"),
    },
    {
      title: t("merchantsTitle"),
      desc: t("merchantsDesc"),
      image: "/merchants.png",
    },
  ]

  return (
    <div>
      {/* Escaping `<` keeps injected markup out of the script tag, per the
          Next.js JSON-LD guidance. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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

          {/* Illustration — hand-drawn Vietnamese food & folklore, transparent background */}
          <div className="order-1 flex items-center justify-center">
            <Image
              src="/heritage-illustration.png"
              width={707}
              height={711}
              alt="Illustration de plats vietnamiens : phở, bánh mì et café glacé accompagnés de dragons et d'un tigre"
              className="h-auto w-full max-w-130"
            />
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
              {t("traditionBody2")}
            </p>
          </div>
        </div>
      </section>

      {/* Participants — red field, one cream card per group; the two groups
          with their own pages link out, merchants doesn't have one yet */}
      <section className="bg-[#C8102E] px-8 py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1600px]">
          <span className="mb-8 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#F5A623]">
            {t("participantsEyebrow")}
          </span>
          <h2 className="font-black leading-[0.92] tracking-tight text-white text-[clamp(1.75rem,3.5vw,3rem)]">
            {t("participantsTitle")}
          </h2>
          <p className="mt-8 max-w-2xl border-l-2 border-[#F5A623] pl-5 text-lg leading-relaxed text-white/90 md:text-xl">
            {t("participantsSubtitle")}
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {participantCards.map(({ title, desc, image, href, cta }) => (
              <article
                key={title}
                className="flex flex-col overflow-hidden rounded-3xl bg-[#FAF7F2]"
              >
                {/* Empty alt — the card title right below already names the image */}
                <div className="relative aspect-4/3 bg-[#F5A623]">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-black tracking-tight text-[#111]">{title}</h3>
                  <p className="mt-3 leading-relaxed text-[#333]">{desc}</p>
                  {href && cta && (
                    <Link
                      href={href}
                      className="mt-auto inline-flex items-center self-start pt-6 text-xs font-bold uppercase tracking-[0.12em] text-[#C8102E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8102E]"
                    >
                      {cta}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Event details — the practical band. Marigold field with soft white
          bento cards on top; "Free" keeps the largest type so it stays the
          loudest fact in the section. Metro items keep white-ringed dots in
          each line's colour, the way stations are drawn on the STM map. */}
      <section className="bg-[#F5A623] px-8 py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1600px]">
          <h2 className="font-black leading-[0.92] tracking-tight text-[#111] text-[clamp(1.75rem,3.5vw,3rem)]">
            {t("eventDetailsTitle")}
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-5 md:gap-8">
            {/* How to get there — framed live map, then directions and transit */}
            <div className="flex flex-col gap-6 md:col-span-3 md:gap-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#111]/70">
                {t("howToGetThereTitle")}
              </h3>

              <div className="rounded-3xl bg-white p-2 shadow-[0_24px_48px_-24px_rgba(17,17,17,0.35)]">
                <iframe
                  src={`https://www.google.com/maps?q=Parc+Rom%C3%A9o-Charette,+Montr%C3%A9al&z=16&hl=${locale}&output=embed`}
                  title={`${t("howToGetThereTitle")} — ${t("locationValue")}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-16/10 w-full rounded-2xl border-0"
                />
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-[0_24px_48px_-24px_rgba(17,17,17,0.35)] md:p-10">
                <p className="text-lg leading-relaxed text-[#333]">
                  <strong className="text-[#111]">{t("directionsLabel")} :</strong>{" "}
                  {t("directionsBody")}
                </p>

                <ul className="mt-6 space-y-3">
                  {transitItems.map(({ text, marker }) => (
                    <li
                      key={text}
                      className="flex items-start gap-4 rounded-2xl bg-[#FAF7F2] px-5 py-4 leading-relaxed text-[#111]"
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-1.5 h-3 w-3 flex-none rounded-full border-2 border-white ${marker}`}
                      />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* General information — stacked white tiles */}
            <div className="flex flex-col gap-6 md:col-span-2 md:gap-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#111]/70">
                {t("generalInfoTitle")}
              </h3>

              <dl className="flex flex-col gap-6 md:gap-8">
                <div className="rounded-3xl bg-white p-8 shadow-[0_24px_48px_-24px_rgba(17,17,17,0.35)] md:p-10">
                  <dt className="w-fit rounded-full bg-[#111]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A4A4A]">
                    {t("locationLabel")}
                  </dt>
                  <dd className="mt-5 text-xl font-black tracking-tight text-[#111]">
                    {t("locationValue")}
                    <span className="mt-2 block text-base font-normal tracking-normal text-[#333]">
                      {t("locationAddress")}
                    </span>
                  </dd>
                </div>

                <div className="rounded-3xl bg-white p-8 shadow-[0_24px_48px_-24px_rgba(17,17,17,0.35)] md:p-10">
                  <dt className="w-fit rounded-full bg-[#111]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A4A4A]">
                    {t("feeLabel")}
                  </dt>
                  <dd className="mt-5 text-xl font-black tracking-tight text-[#111]">
                    {t("feeValue")}
                  </dd>
                </div>

                <div className="rounded-3xl bg-white p-8 shadow-[0_24px_48px_-24px_rgba(17,17,17,0.35)] md:p-10">
                  <dt className="w-fit rounded-full bg-[#111]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A4A4A]">
                    {t("scheduleLabel")}
                  </dt>
                  <dd className="mt-5 text-xl font-black tracking-tight text-[#111]">
                    {t("scheduleValue")}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Partners — same sponsor wall as the partners page, framed with the
          landing page's editorial header. */}
      <section className="bg-[#FAF7F2] px-8 py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1600px]">
          <h2 className="text-center font-black leading-[0.92] tracking-tight text-[#111] text-[clamp(1.75rem,3.5vw,3rem)]">
            {t("partnersTitle")}
          </h2>
          <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-relaxed text-[#333] md:text-xl">
            {t("partnersSubtitle")}
          </p>

          <div className="mt-14">
            <SponsorWall />
          </div>

          <div className="mx-auto mt-16 max-w-4xl text-center">
            <h3 className="text-xl font-black tracking-tight text-[#111]">
              {t("contributorsTitle")}
            </h3>
            <p className="mt-3 leading-relaxed text-[#333]">{t("contributorsBody1")}</p>
            <p className="mt-2 leading-relaxed text-[#333]">{t("contributorsBody2")}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
