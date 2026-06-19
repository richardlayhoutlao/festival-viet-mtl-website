const performers = [
  {
    name: "Đoàn Múa Rồng MTL",
    type: "Traditional Dance",
    description:
      "Montreal's premier dragon and lion dance troupe, performing breathtaking traditional choreography rooted in Vietnamese and East Asian heritage.",
  },
  {
    name: "Nhóm Nhạc Dân Tộc",
    type: "Traditional Music",
    description:
      "A live ensemble performing on traditional Vietnamese instruments including the đàn bầu, đàn tranh, and trống.",
  },
  {
    name: "Áo Dài Fashion Show",
    type: "Cultural Fashion",
    description:
      "A curated runway showcase of Vietnamese traditional dress, featuring designs from both emerging and established local designers.",
  },
  {
    name: "Võ Thuật Vietnam",
    type: "Martial Arts",
    description:
      "Demonstrations of Vovinam, a Vietnamese martial art, performed by youth and adult practitioners from across the region.",
  },
  {
    name: "DJ Sài Gòn Nights",
    type: "Contemporary Music",
    description:
      "A high-energy DJ set blending V-pop, Vietnamese folk music, and contemporary beats to keep the festival grounds alive.",
  },
  {
    name: "Múa Quạt",
    type: "Traditional Dance",
    description:
      "Elegant fan dance performances by the Les Étoiles Vietnamese Cultural Dance Company, representing the grace and artistry of Vietnamese dance traditions.",
  },
]

const schedule = [
  { time: "11:00 AM", act: "Đoàn Múa Rồng MTL", stage: "Main Stage" },
  { time: "12:30 PM", act: "Nhóm Nhạc Dân Tộc", stage: "Cultural Tent" },
  { time: "1:30 PM", act: "Võ Thuật Vietnam", stage: "Main Stage" },
  { time: "2:30 PM", act: "Áo Dài Fashion Show", stage: "Main Stage" },
  { time: "3:30 PM", act: "Múa Quạt", stage: "Cultural Tent" },
  { time: "5:00 PM", act: "DJ Sài Gòn Nights", stage: "Main Stage" },
]

export default function PerformersPage() {
  return (
    <div className="flex min-h-svh flex-col items-center px-6 py-12">
      <div className="w-full max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Performers</h1>
        <p className="mb-10 text-sm leading-relaxed text-muted-foreground">
          Celebrate the richness of Vietnamese performing arts with live music, dance, martial
          arts, and more. This year&apos;s lineup showcases both traditional heritage and
          contemporary Vietnamese culture.
        </p>

        <div className="mb-12 grid gap-4 sm:grid-cols-2">
          {performers.map(({ name, type, description }) => (
            <div key={name} className="flex flex-col gap-2 rounded-lg border p-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {type}
              </span>
              <h2 className="font-semibold">{name}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>

        <section>
          <h2 className="mb-4 text-lg font-semibold">Schedule</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Times are approximate and subject to change. Check back closer to the event for
            the final schedule.
          </p>
          <div className="flex flex-col divide-y rounded-lg border">
            {schedule.map(({ time, act, stage }) => (
              <div
                key={`${time}-${act}`}
                className="flex items-center justify-between gap-4 px-5 py-4"
              >
                <div className="flex items-center gap-4">
                  <span className="w-20 shrink-0 font-mono text-xs text-muted-foreground">
                    {time}
                  </span>
                  <span className="text-sm font-medium">{act}</span>
                </div>
                <span className="text-xs text-muted-foreground">{stage}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
