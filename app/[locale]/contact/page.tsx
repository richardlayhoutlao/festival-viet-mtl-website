import type { SVGProps } from "react"
import { useTranslations } from "next-intl"
import { Mail } from "lucide-react"
import { EMAIL, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/site"

// lucide-react v1 dropped its brand icons, so the two social marks are inlined.
// They carry lucide's own geometry and stroke settings on purpose — a filled
// simple-icons glyph next to an outline <Mail /> reads as two icon systems.
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const socials = [
  { label: "Facebook", href: FACEBOOK_URL, Icon: FacebookIcon },
  { label: "Instagram", href: INSTAGRAM_URL, Icon: InstagramIcon },
]

// One clock and one curve for everything that moves, so the whole card lands
// together. The curve is the same expo-out the FAQ accordion uses.
const HOVER_EASE =
  "duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none"

const HIT_AREA = "group block rounded-3xl focus-visible:outline-none"
const CARD = `flex h-full rounded-3xl group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-[#C8102E] ${HOVER_EASE}`

const ContactPage = () => {
  const t = useTranslations("contact")

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
          <p className="max-w-[600px] text-lg leading-[1.55] text-white/90">
            {t("subtitle")}
          </p>
        </div>
      </header>

      <section className="px-8 pt-20 pb-[110px]">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-5">
          {/* Primary contact. The address is set as display type — it is the
              one thing a visitor actually needs, so it gets the full width and
              the largest type on the page.

              Mark and address are centred as one group rather than pushed to
              opposite edges. The mark stays out below `sm`, where the address
              alone already fills the line.

              Marigold rather than red: the masthead directly above is already a
              red field, and stacking two would flatten the page. On hover the
              plate inverts to red-on-marigold, which is a pairing the brand
              already uses (masthead eyebrow, FAQ button) rather than a new
              tint. Colour lives on the wrapper, so the address and mark invert
              together through currentColor on a single transition. */}
          <a href={`mailto:${EMAIL}`} className={HIT_AREA}>
            <div
              className={`${CARD} items-center justify-center gap-6 bg-[#F5A623] p-6 text-[#C8102E] transition-colors group-hover:bg-[#C8102E] group-hover:text-[#F5A623] sm:gap-8 sm:p-10`}
            >
              <Mail
                aria-hidden="true"
                className="hidden size-12 flex-none sm:block"
              />
              <span className="text-center text-[clamp(1rem,4.5vw,3rem)] leading-[1.05] font-black tracking-[-0.03em] wrap-break-word">
                {EMAIL}
              </span>
            </div>
          </a>

          {/* Secondary. Marigold like the card above, so all three read as one
              flat-field set on the cream rather than a coloured plate sitting
              on two white ones. The hairline goes with the white: borders were
              only ever there to give a pale surface an edge, and a filled field
              carries its own — the mastheads and the partners plates are
              borderless for the same reason.

              Rank now comes from size alone — the primary runs the full width
              and carries display type; these are half-width marks.

              The mark is the whole card — no label, so the name moves to
              aria-label rather than disappearing: the link still has to
              announce itself to a screen reader when nothing is drawn. */}
          <ul className="grid gap-5 sm:grid-cols-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} aria-label={label} className={HIT_AREA}>
                  <div
                    className={`${CARD} min-h-[220px] items-center justify-center bg-[#F5A623] p-7 text-[#C8102E] transition-colors group-hover:bg-[#C8102E] group-hover:text-[#F5A623]`}
                  >
                    <Icon aria-hidden="true" className="size-16 flex-none" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
