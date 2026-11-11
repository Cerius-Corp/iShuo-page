// The Privacy Policy in English. This is the original: privacy-id.ts and
// privacy-zh.ts are translated from it, so keep them in step.

import type { Policy } from "./policies"

export const privacyEn: Policy = {
  title: "Privacy Policy",
  updated: "Last updated on November 11, 2026",
  intro: [
    "At iShuo, we know your conversations are personal. This Privacy Policy explains what stays on your iPhone, what we receive, and how we use it. In short: your recordings stay on your iPhone and are deleted after analysis, and we never ask for your email, phone number or password.",
  ],
  sections: [
    {
      title: "Introduction",
      parts: [
        {
          blocks: [
            "iShuo is made by Cerius (“we”, “us”, “our”). This policy covers the iShuo app and the iShuo server. iShuo has no accounts. We never ask for your email, phone number or password. If you give your name, it stays on your iPhone.",
          ],
        },
      ],
    },
    {
      title: "Information That Stays Local",
      parts: [
        {
          heading: "Recordings",
          blocks: [
            "Your conversation audio is processed on your iPhone and deleted after analysis. It is never uploaded to the iShuo server. If your iPhone can’t recognize speech on its own, Apple’s speech recognition may process the audio on Apple’s servers (see Apple Features).",
          ],
        },
        {
          heading: "Conversations and Learning",
          blocks: [
            "Your transcripts, translations, feedback, and conversation history are stored only on your iPhone. Your saved words also stay on your iPhone, unless you allow it (see section 03).",
          ],
        },
        {
          heading: "Voice Profile",
          blocks: [
            "If you set up your voice, iShuo keeps only numbers that describe it (pitch and a voice fingerprint). They’re used to tell your lines apart from the other person’s. They never leave your iPhone.",
          ],
        },
        {
          heading: "Learning Personalization",
          blocks: [
            "Your name (if you give one) stays on your iPhone. Your reasons for learning and what’s hard for you also stay on your iPhone, except that practice chats use them to fit the conversation to you (see section 03). They’re included in Usage Data only if you allow it.",
          ],
        },
        {
          heading: "Apple Features",
          blocks: [
            "Speech recognition, translation, voices and Apple Intelligence are provided by Apple, on your iPhone where possible. Apple’s privacy policy applies to Apple’s services.",
          ],
        },
        {
          heading: "Qwen3.5-4B Download",
          blocks: [
            "If you download Qwen3.5-4B, your iPhone gets it directly from Hugging Face. Like any website, Hugging Face can see your IP address. Hugging Face’s privacy policy applies to the download.",
          ],
        },
      ],
    },
    {
      title: "Information That We Receive",
      parts: [
        {
          heading: "AI Processing",
          blocks: [
            {
              label: "Sent to server by default",
              text: "iShuo uses AI on the iShuo server to create your learning feedback and practice. You can also use the AI on your iPhone instead, by changing this anytime at Pengaturan → Pengaturan AI → Model AI. If the server can’t be reached, the AI on your iPhone is used.",
            },
            {
              label: "What’s sent",
              text: "the text the feature needs, such as your conversation, your practice chat messages, your questions, and the situations you describe, with a few details about each line, such as who said it. Practice chats also include your reasons for learning and what’s hard for you. Never audio, your voice profile or your name.",
            },
          ],
        },
        {
          heading: "Usage Data",
          blocks: [
            "We collect information about how iShuo is used, without your name. For example: which pages are opened, how long a recording lasts, or how many replies a practice chat has (“Usage Data”). Usage Data comes with a random app ID, the app version and basic device information (iPhone model and iOS version).",
            { label: "It never includes", text: "" },
            { list: ["your name;", "your recordings;", "your transcripts;", "anything you say or type."] },
          ],
        },
        {
          heading: "Learning Choices (with your permission)",
          blocks: [
            "Only if you allow it, Usage Data also includes:",
            { list: ["your reasons for learning;", "your speaking difficulties;", "the words you open and save."] },
          ],
        },
      ],
    },
    {
      title: "How We Use Data",
      parts: [
        {
          heading: "What We Use It For",
          blocks: [
            "iShuo uses the data above to:",
            {
              list: [
                "give you AI-generated feedback and practice;",
                "understand which features are used, and where people get stuck;",
                "improve iShuo;",
                "reply to your questions.",
              ],
            },
          ],
        },
        {
          heading: "Legal Basis",
          blocks: [
            "We process each kind of data for the following reason:",
            {
              list: [
                { label: "AI Processing", text: "to provide the feature you use." },
                { label: "Usage Data", text: "our legitimate interest in improving iShuo." },
                { label: "Learning Choices", text: "your consent, to improve iShuo’s content. You can withdraw it at any time." },
                { label: "Your emails to us", text: "to reply to your questions and requests." },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Permissions and Tracking",
      parts: [
        {
          heading: "Permissions",
          blocks: [
            "iShuo asks for each permission when it’s first needed. You can change them any time in iOS Settings.",
            {
              list: [
                { label: "Microphone", text: "to record your conversations." },
                { label: "Speech recognition", text: "to turn speech into text." },
              ],
            },
          ],
        },
        {
          heading: "No Tracking",
          blocks: ["iShuo uses no cookies and no advertising identifier. It does not track you across other apps or websites."],
        },
      ],
    },
    {
      title: "Data Sharing",
      parts: [
        {
          heading: "We Don’t Sell Your Data",
          blocks: ["We do not sell, rent or trade your data, and we do not show ads."],
        },
        {
          heading: "Service Providers",
          blocks: [
            "We use Mixpanel, Inc. (United States) to analyze Usage Data, and a hosting provider to run the iShuo server. They process data only on our behalf.",
          ],
        },
        {
          heading: "Transfers Outside Indonesia",
          blocks: ["Usage Data is processed in the United States. We rely on Mixpanel’s safeguards to protect it."],
        },
        { heading: "Legal Requests", blocks: ["We may disclose data if the law requires it."] },
      ],
    },
    {
      title: "Data Retention and Security",
      parts: [
        {
          heading: "How Long We Keep Data",
          blocks: [
            {
              list: [
                { label: "On your iPhone", text: "until you delete it or the app." },
                { label: "On our server", text: "nothing is stored." },
                { label: "Usage Data", text: "kept for up to 2 years, then deleted." },
              ],
            },
          ],
        },
        {
          heading: "Security",
          blocks: [
            "Data sent from iShuo uses encrypted connections (HTTPS), and we collect as little as possible. No method of transmission is 100% secure, but we work hard to protect your data.",
          ],
        },
      ],
    },
    {
      title: "User Rights",
      parts: [
        {
          heading: "Your Choices",
          blocks: [
            {
              list: [
                "Turn off learning choices any time in Pengaturan → Tentang iShuo → Privasi. To stop Usage Data, delete the app.",
                "Delete conversations, or the app, to remove your data from your iPhone.",
              ],
            },
          ],
        },
        {
          heading: "Your Rights",
          blocks: [
            "Depending on where you live, including under Indonesia’s Personal Data Protection Law (UU PDP), you may have the right to:",
            { list: ["access your data;", "correct it;", "delete it;", "restrict its use;", "withdraw consent."] },
            "To make a request, email us. Usage Data isn’t linked to your name, so we may not be able to tell which Usage Data is yours. We’ll tell you if we can’t.",
          ],
        },
        {
          heading: "Children",
          blocks: ["iShuo is not meant for children under 13. Users under 18 need a parent’s or guardian’s consent."],
        },
      ],
    },
    {
      title: "Changes and Contact",
      parts: [
        {
          blocks: [
            "We will post changes to this policy here with a new “Last updated” date. For questions or requests, contact us at cerius.corp@gmail.com.",
          ],
        },
      ],
    },
  ],
}
