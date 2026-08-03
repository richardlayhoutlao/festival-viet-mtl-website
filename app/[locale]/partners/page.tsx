import Image from "next/image"
import { useTranslations } from "next-intl"

const sponsors = [
  {
    name: "Canadian Heritage / Patrimoine canadien",
    src: "/sponsors/canadian-heritage.png",
    width: 630,
    height: 145,
  },
]

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

      {/* Sponsor wall. Plates are white because sponsor marks are supplied for
          neutral grounds — the Canada wordmark carries its own red, which goes
          muddy on marigold.

          Wrapping flex rather than a grid, because a grid's tracks stay put
          whether or not they are filled — a lone plate would sit hard against
          the left edge. Capped-width plates in a centred row keep any number
          of sponsors balanced under the masthead, and the fixed ratio holds
          the wall's geometry as more are added. */}
      <section className="px-8 pt-20 pb-[110px]">
        <div className="mx-auto max-w-[1100px]">
          <ul className="flex flex-wrap justify-center gap-5">
            {sponsors.map(({ name, src, width, height }) => (
              <li
                key={name}
                className="flex aspect-[16/7] w-full max-w-[420px] items-center justify-center rounded-sm bg-white p-6 sm:p-8"
              >
                <Image
                  src={src}
                  width={width}
                  height={height}
                  alt={name}
                  className="h-auto max-h-full w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default PartnersPage
