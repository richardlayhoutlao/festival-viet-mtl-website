import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

const Page = () => {
  const t = useTranslations("home")

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-24 text-sm leading-loose">
        <div>
          <p>{t("edition")}</p>
          <h1>{t("title")}</h1>
          <hr />
          <dl>
            <div>
              <dt>{t("dateLabel")}</dt>
              <dd>{t("dateValue")}</dd>
            </div>
            <div>
              <dt>{t("timeLabel")}</dt>
              <dd>{t("timeValue")}</dd>
            </div>
            <div>
              <dt>{t("locationLabel")}</dt>
              <dd>{t("locationValue")}</dd>
              <dd>{t("locationDetail")}</dd>
            </div>
          </dl>
          <Link href="/performers">{t("cta")}</Link>
          <Link href="/contact">{t("volunteerLink")}</Link>
          <Link href="/food-vendors">{t("foodVendorLink")}</Link>
        </div>
        <div>
          <h2>{t("exploreTitle")}</h2>
          <div>[Image placeholder]</div>
          <p>{t("exploreBody1")}</p>
          <p>{t("exploreBody2")} ✨</p>
        </div>
        <div>
          <h2>{t("traditionTitle")}</h2>
          <div>[Image placeholder]</div>
          <p>{t("traditionBody1")}</p>
          <p>{t("traditionBody2")} 🍜🥖🥤</p>
        </div>
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
            <p><strong>{t("directionsLabel")} :</strong> {t("directionsBody")}</p>
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
  )
}

export default Page
