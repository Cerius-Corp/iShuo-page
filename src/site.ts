// What the page links to, in one place: when iShuo is on the App Store,
// set appStoreURL and the download section switches to it. (The words
// shown for each are in src/copy.)

export const site = {
  testFlightURL: "https://testflight.apple.com/join/XFYwWf6x",
  /** The App Store page. Empty: TestFlight is shown instead. */
  appStoreURL: "https://apps.apple.com/id/app/ishuo/id6821036292",
  /** Where questions and feedback go. */
  contactEmail: "cerius.corp@gmail.com",
  /** The Instagram handle, without the @. */
  instagram: "cerius_id",
} as const

/** The page with the Terms of Service and the Privacy Policy. */
export const policiesPath = "/policies"

/** Whether this is the policies page (else it's the landing page). */
export const onPolicies = /^\/policies\/?$/.test(window.location.pathname)

/** Where the download buttons go now. */
export const downloadURL = site.appStoreURL || site.testFlightURL
export const onAppStore = Boolean(site.appStoreURL)

/** The page's sections, for the nav and the footer, by their key in the copy. */
export const sections = [
  { href: "#cara-kerja", key: "how" },
  { href: "#fitur", key: "features" },
  { href: "#faq", key: "faq" },
  { href: "#kontak", key: "contact" },
] as const

/** Ways to reach the team: email and Instagram, when set. */
export const contacts = [
  site.contactEmail && { kind: "email", value: site.contactEmail, href: `mailto:${site.contactEmail}` },
  site.instagram && { kind: "instagram", value: `@${site.instagram}`, href: `https://instagram.com/${site.instagram}` },
].filter((c) => !!c) as { kind: "email" | "instagram"; value: string; href: string }[]
