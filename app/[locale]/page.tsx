import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

export default function Page() {
  const t = useTranslations("home")

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">{t("title")}</h1>
          <p>{t("subtitle")}</p>
          <p>{t("buttonNote")}</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          ({t("darkModeHint")})
        </div>
      </div>
    </div>
  )
}
