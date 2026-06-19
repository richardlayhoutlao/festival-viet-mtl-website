import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-2">
          <span className="font-semibold tracking-tight">Festival Việt Montréal</span>
          <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
            Celebrating Vietnamese culture, cuisine, and community in the heart of Montreal.
          </p>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Festival
            </span>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/performers", label: "Performers" },
                { href: "/food-vendors", label: "Food Vendors" },
                { href: "/faq", label: "FAQ" },
              ].map(({ href, label }) => (
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
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Connect
            </span>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/contact", label: "Contact" },
                { href: "/special-thanks", label: "Special Thanks" },
                { href: "#", label: "Facebook" },
                { href: "#", label: "Instagram" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Festival Việt Montréal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
