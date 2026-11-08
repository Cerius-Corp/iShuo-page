// What the page links to, in one place: when iShuo is on the App Store,
// set appStoreURL and the download section switches to it.

export const site = {
  testFlightURL: "https://testflight.apple.com/join/XFYwWf6x",
  /** The App Store page, once it's live. Empty: TestFlight is shown. */
  appStoreURL: "",
  /** Where questions and feedback go. */
  contactEmail: "cerius.corp@gmail.com",
  /** The Instagram handle, without the @. */
  instagram: "cerius_id",
} as const

/** Where the download buttons go now. */
export const downloadURL = site.appStoreURL || site.testFlightURL
export const onAppStore = site.appStoreURL !== ""

/** The page's sections, for the nav and the footer. */
export const sections = [
  { href: "#cara-kerja", label: "Cara kerja" },
  { href: "#fitur", label: "Fitur" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
] as const

/** Ways to reach the team: email and Instagram when set, TestFlight's feedback always. */
export const contacts = [
  site.contactEmail && { label: "Email", value: site.contactEmail, href: `mailto:${site.contactEmail}` },
  site.instagram && { label: "Instagram", value: `@${site.instagram}`, href: `https://instagram.com/${site.instagram}` },
  { label: "Dari iPhone", value: "Send Beta Feedback di TestFlight", href: site.testFlightURL },
].filter((c) => !!c)
