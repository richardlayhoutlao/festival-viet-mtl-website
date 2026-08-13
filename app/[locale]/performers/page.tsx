import { useTranslations } from "next-intl"
import { createPageMetadata } from "@/lib/seo"

export const generateMetadata = createPageMetadata("/performers")

// Emoji tiles stand in until each performer has a real photo — swap the emoji
// for an <Image> per card when the assets arrive.
const performers = [
  { name: "Đoàn Múa Rồng MTL", emoji: "🐉" },
  { name: "Nhóm Nhạc Dân Tộc", emoji: "🪕" },
  { name: "Áo Dài Fashion Show", emoji: "👗" },
  { name: "Võ Thuật Vietnam", emoji: "🥋" },
  { name: "DJ Sài Gòn Nights", emoji: "🎧" },
  { name: "Múa Quạt", emoji: "💃" },
]

const PerformersPage = () => {
  const t = useTranslations("performers")

  return (
    <div className="flex min-h-svh flex-col items-center px-6 py-12">
      <div className="w-full max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">{t("title")}</h1>
        <p className="mb-10 text-sm leading-relaxed text-muted-foreground">{t("subtitle")}</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {performers.map(({ name, emoji }) => (
            <div key={name} className="overflow-hidden rounded-lg border">
              <div className="flex aspect-4/3 items-center justify-center bg-[#F5A623]/15">
                <span aria-hidden="true" className="text-6xl">
                  {emoji}
                </span>
              </div>
              <h2 className="p-4 font-semibold">{name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PerformersPage
