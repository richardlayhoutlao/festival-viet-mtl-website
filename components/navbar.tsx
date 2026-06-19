import Link from "next/link"

const links = [
  { href: "/", label: "Home" },
  { href: "/performers", label: "Performers" },
  { href: "/food-vendors", label: "Food Vendors" },
  { href: "/faq", label: "FAQ" },
  { href: "/special-thanks", label: "Special Thanks" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Festival Việt Montréal
        </Link>
        <ul className="flex items-center gap-6">
          {links.slice(1).map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
