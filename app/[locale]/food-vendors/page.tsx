import { useTranslations } from "next-intl"

// Emoji tiles stand in until each vendor has a real photo — swap the emoji
// for an <Image> per card when the assets arrive.
const vendors = [
  { name: "Pho Saigon", emoji: "🍜" },
  { name: "Bánh Mì Maison", emoji: "🥖" },
  { name: "Gỏi Cuốn Express", emoji: "🍤" },
  { name: "Bún Bò Huế", emoji: "🍲" },
  { name: "Chè Ngọt", emoji: "🍮" },
  { name: "Cơm Tấm Station", emoji: "🍚" },
]

const FoodVendorsPage = () => {
  const t = useTranslations("foodVendors")

  return (
    <div className="flex min-h-svh flex-col items-center px-6 py-12">
      <div className="w-full max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">{t("title")}</h1>
        <p className="mb-10 text-sm leading-relaxed text-muted-foreground">{t("subtitle")}</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vendors.map(({ name, emoji }) => (
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

export default FoodVendorsPage
