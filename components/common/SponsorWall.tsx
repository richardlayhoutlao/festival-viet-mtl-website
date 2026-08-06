import Image from "next/image"

const sponsors = [
  {
    name: "Canadian Heritage / Patrimoine canadien",
    src: "/sponsors/canadian-heritage.png",
    width: 630,
    height: 145,
  },
]

/* Sponsor wall shared by the partners page and the landing page.

   Plates are white because sponsor marks are supplied for neutral
   grounds — the Canada wordmark carries its own red, which goes muddy
   on marigold.

   Wrapping flex rather than a grid, because a grid's tracks stay put
   whether or not they are filled — a lone plate would sit hard against
   the left edge. Capped-width plates in a centred row keep any number
   of sponsors balanced, and the fixed ratio holds the wall's geometry
   as more are added. */
export const SponsorWall = () => (
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
)
