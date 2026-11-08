// What the page links to, in one place: when iShuo is on the App Store,
// set appStoreURL and the download section switches to it.

export const site = {
  testFlightURL: "https://testflight.apple.com/join/XFYwWf6x",
  /** The App Store page, once it's live. Empty: TestFlight is shown. */
  appStoreURL: "",
  /** Where questions and feedback go. */
  contactEmail: "",
  instagram: "",
} as const

/** Where the download buttons go now. */
export const downloadURL = site.appStoreURL || site.testFlightURL
export const onAppStore = site.appStoreURL !== ""
