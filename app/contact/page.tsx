import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex min-h-svh flex-col items-center px-6 py-12">
      <div className="w-full max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Contact Us</h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Have a question or want to get involved? We&apos;d love to hear from you.
        </p>

        <div className="grid gap-10 sm:grid-cols-2">
          <section className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              General Inquiries
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              For general questions about the festival, ticketing, or programming:
            </p>
            <a
              href="mailto:info@festivietvietmtl.ca"
              className="text-sm font-medium underline underline-offset-4"
            >
              info@festivietvietmtl.ca
            </a>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Media & Press
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              For press credentials, media kits, or interview requests:
            </p>
            <a
              href="mailto:press@festivietvietmtl.ca"
              className="text-sm font-medium underline underline-offset-4"
            >
              press@festivietvietmtl.ca
            </a>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Vendor & Sponsorship
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              To apply as a food vendor or discuss sponsorship opportunities:
            </p>
            <a
              href="mailto:vendors@festivietvietmtl.ca"
              className="text-sm font-medium underline underline-offset-4"
            >
              vendors@festivietvietmtl.ca
            </a>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Follow Us
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Stay up to date with announcements and event updates:
            </p>
            <div className="flex flex-col gap-1">
              <a
                href="#"
                className="text-sm font-medium underline underline-offset-4"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-sm font-medium underline underline-offset-4"
              >
                Instagram
              </a>
            </div>
          </section>
        </div>

        <div className="mt-12 rounded-lg border p-6">
          <h2 className="mb-4 text-sm font-semibold">Send us a message</h2>
          <form className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="rounded-md border bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-ring"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-md border bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-xs font-medium text-muted-foreground">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                className="rounded-md border bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-ring"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here..."
                className="rounded-md border bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-ring"
              />
            </div>
            <Button type="submit" className="self-start">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
