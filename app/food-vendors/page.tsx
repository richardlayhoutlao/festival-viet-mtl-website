import { Button } from "@/components/ui/button"

const vendors = [
  {
    name: "Pho Saigon",
    description: "Classic Vietnamese pho with rich bone broth, tender noodles, and your choice of toppings.",
    specialty: "Pho & Noodle Soups",
  },
  {
    name: "Bánh Mì Maison",
    description: "Freshly baked bánh mì sandwiches loaded with house-made pickled vegetables and savoury fillings.",
    specialty: "Bánh Mì",
  },
  {
    name: "Gỏi Cuốn Express",
    description: "Light and fresh Vietnamese spring rolls wrapped in rice paper with shrimp, pork, or tofu.",
    specialty: "Spring Rolls & Appetizers",
  },
  {
    name: "Bún Bò Huế",
    description: "Spicy beef and lemongrass noodle soup straight from the kitchens of Central Vietnam.",
    specialty: "Regional Specialties",
  },
  {
    name: "Chè Ngọt",
    description: "Traditional Vietnamese sweet soups and desserts, from chè đậu đỏ to bánh flan.",
    specialty: "Desserts & Sweet Drinks",
  },
  {
    name: "Cơm Tấm Station",
    description: "Broken rice plates topped with grilled pork, shredded pork skin, and a fried egg.",
    specialty: "Rice Dishes",
  },
]

export default function FoodVendorsPage() {
  return (
    <div className="flex min-h-svh flex-col items-center px-6 py-12">
      <div className="w-full max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Food Vendors</h1>
        <p className="mb-10 text-sm leading-relaxed text-muted-foreground">
          Explore the diverse flavours of Vietnamese cuisine at our festival. From street food
          classics to regional specialties, our vendors bring the best of Vietnam to Montreal.
        </p>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vendors.map(({ name, description, specialty }) => (
            <div
              key={name}
              className="flex flex-col gap-2 rounded-lg border p-5"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {specialty}
              </span>
              <h2 className="font-semibold">{name}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="mb-2 text-lg font-semibold">Interested in becoming a vendor?</h2>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            We welcome food vendors who want to share authentic Vietnamese cuisine with the Montreal
            community. Applications open several months before the festival. Submit your interest and
            our team will get back to you with details.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild>
              <a href="/contact">Apply to Vend</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/faq">Read the FAQ</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
