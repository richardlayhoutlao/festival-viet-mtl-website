// The festival's public contact points. Both the contact page and the footer
// publish them, and two copies of an address is one that can go stale.

// Canonical origin for every absolute URL the site emits (canonical tags,
// hreflang alternates, the sitemap, JSON-LD). Preview deployments inherit the
// production origin on purpose — a canonical tag pointing at a preview URL
// would ask Google to index the preview. Override with NEXT_PUBLIC_SITE_URL
// when the festival gets its own domain.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://festival-viet-mtl-website.vercel.app"

export const EMAIL = "info@festivietvietmtl.ca"

export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=100027689933508"

// No ?hl=en — that param is a copy-paste artifact from the browser and would
// pin Instagram to English for visitors reading the site in fr or vi.
export const INSTAGRAM_URL = "https://www.instagram.com/festivalvietmtl/"
