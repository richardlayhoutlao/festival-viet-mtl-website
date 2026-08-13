import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import VietFestLogo from "@/components/common/VietFestLogo"

// Marigold on the red field, the same pairing as the wordmark beside them.
// Hover goes to white — on this ground white is the brighter of the two, so
// the state change also gains contrast instead of losing it. The underline is
// drawn transparent at rest so colouring it in can't reflow the row.
//
// The focus ring is white rather than marigold: marigold on red is 2.9:1,
// under the 3:1 a focus indicator has to clear to be seen at all.
const LINK =
  "text-[#F5A623] underline decoration-2 decoration-transparent underline-offset-[6px] transition-colors duration-200 hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"

export const Footer = () => {
  const t = useTranslations("footer")
  const tNav = useTranslations("nav")
  // Date, time and place come from the `home` catalogue on purpose: that is
  // where the event's vitals are already written in all three locales, and a
  // second copy under `footer` would be three more strings to keep in sync.
  const tHome = useTranslations("home")

  const vitals = [
    { label: tHome("dateLabel"), value: tHome("dateValue") },
    { label: tHome("timeLabel"), value: tHome("timeValue") },
    { label: tHome("locationLabel"), value: tHome("locationValue") },
  ]

  return (
    <footer>
      {/* Vitals band. A visitor who scrolled to the bottom of the FAQ is asking
          "so when is it" — the answer runs across the top of the footer rather
          than living only on the home page. Marigold field with the hero's own
          rule-and-label device, so the band reads as a piece of the hero
          returning, not as a new component. */}
      <div className="bg-[#F5A623] px-5 py-9 md:px-8">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <dl className="flex flex-col flex-wrap gap-x-12 gap-y-5 sm:flex-row">
            {vitals.map(({ label, value }) => (
              <div key={label} className="border-l-2 border-[#C8102E] pl-4">
                <dt className="mb-1 text-[9px] font-bold tracking-[0.25em] text-[#C8102E]/70 uppercase">
                  {label}
                </dt>
                <dd className="text-xl font-bold text-[#C8102E]">{value}</dd>
              </div>
            ))}
          </dl>

          <span className="self-start rounded-full bg-[#C8102E] px-4 py-1.5 text-sm font-bold tracking-[0.15em] text-[#F5A623] uppercase md:self-auto">
            {tHome("freeAdmission")}
          </span>
        </div>
      </div>

      {/* Closing slab. The site opens on a marigold field and the interior
          pages open on a red one; the page ends on red so the whole document
          is bracketed in the two brand colours. */}
      <div className="bg-[#C8102E] px-5 pt-14 pb-12 md:px-8 md:pt-16 md:pb-14">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
            {/* The navbar's lockup, mark and all, with the colours swapped:
                marigold out of red here, red out of marigold up there.

                -ml-6 is the navbar's optical offset — the SVG carries internal
                padding on the left, so the mark only lines up with the copy
                below once it is pulled back.

                No `leading-none` even though the navbar's class list has one:
                the navbar builds that string through `cn`, and tailwind-merge
                drops `leading-none` as conflicting with the `text-2xl` that
                follows it. The line box there is 32px, so it is 32px here. */}
            <Link
              href="/"
              className="-ml-6 flex items-center gap-2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <VietFestLogo
                aria-hidden="true"
                color="#F5A623"
                className="h-24 w-auto"
              />
              <span className="flex flex-col text-2xl font-black tracking-tight text-[#F5A623]">
                <span>Festival</span>
                <span className="-mt-1.5">Việt</span>
                <span className="-mt-1.5">Montréal</span>
              </span>
            </Link>

            {/* One horizontal row, no visible heading — five links don't
                need a column label. The landmark still has to announce itself,
                so the name moves to aria-label. The two participant pages
                lead, in the navbar's order.

                Uppercase and tracked, the register the site already uses for
                uppercase type: letterspacing is what keeps caps readable at
                small sizes. It wraps rather than overflowing on narrow
                screens. */}
            <nav aria-label={t("connect")}>
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-base font-bold tracking-[0.1em] uppercase">
                <li>
                  <Link href="/food-vendors" className={LINK}>
                    {tNav("foodVendors")}
                  </Link>
                </li>
                <li>
                  <Link href="/performers" className={LINK}>
                    {tNav("performers")}
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className={LINK}>
                    {tNav("faq")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={LINK}>
                    {tNav("contact")}
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className={LINK}>
                    {tNav("partners")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Fine print. Marigold like everything else on the slab, set
              small rather than dimmed — rank comes from size, not from washing
              the text out. */}
          <div className="mt-14 border-t border-[#F5A623]/30 pt-6 text-sm leading-[1.5] text-[#F5A623]">
            <p>&copy; {new Date().getFullYear()} Festival Việt Montréal.</p>
            <p>{t("copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
