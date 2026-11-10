// iShuo's Terms of Service and Privacy Policy, shown at /policies, in
// English. They come in every language the page does: terms-id.ts,
// privacy-id.ts, terms-zh.ts and privacy-zh.ts, translated from these
// (the English is the original; keep them in step).
//
// Each policy is numbered sections; a section is parts, each with an
// optional heading. A block is a paragraph, a paragraph led by a bold
// label, a list (whose items can have a bold label too), or a note set
// apart from the text.

import type { Lang } from "../i18n/languages"
import { privacyId } from "./privacy-id"
import { privacyZh } from "./privacy-zh"
import { termsId } from "./terms-id"
import { termsZh } from "./terms-zh"

export type Labelled = { label: string; text: string }
export type Block = string | Labelled | { list: (string | Labelled)[] } | { note: string }

export type Policy = {
  title: string
  /** The line with the date, as it reads in the policy's language. */
  updated: string
  /** What follows a bold label: ": " in English and Indonesian, "：" in Chinese. */
  colon?: string
  /** The word that leads a note ("Note" when not given). */
  noteLabel?: string
  intro: string[]
  sections: { title: string; parts: { heading?: string; blocks: Block[] }[] }[]
  /** A last line, after the sections. */
  outro?: string
}

const updated = "Last updated on November 10, 2026"

export const terms: Policy = {
  title: "Terms of Service",
  updated,
  intro: [
    "Welcome to iShuo, an app that helps you learn to speak Mandarin from your own real conversations. By downloading or using iShuo, you agree to these Terms of Service (“Terms”). These Terms apply to all users of iShuo, in Indonesia and elsewhere.",
    "iShuo uses speech recognition, translation and AI language models to turn your conversations into feedback and practice. AI-generated outputs may contain errors or inaccuracies and should not be treated as definitive or independently verified.",
    "If you downloaded iShuo from the App Store, Apple Inc. is a third-party beneficiary of these Terms, as described below.",
  ],
  sections: [
    {
      title: "Description of Service",
      parts: [
        {
          heading: "What iShuo Does",
          blocks: [
            "iShuo lets you:",
            {
              list: [
                "record conversations in Mandarin (mixed with Indonesian, if you like) and read a live transcript and translation;",
                "get feedback on the sentences you said;",
                "practice with an AI conversation partner;",
                "prepare and save vocabulary for situations you will face;",
                "practice pronunciation.",
              ],
            },
          ],
        },
        {
          heading: "On Your iPhone First",
          blocks: [
            "Speech recognition, voice recognition, translation and your conversation history run on your iPhone and stay there. Your voice profile never leaves your iPhone. AI-generated content comes from the iShuo server by default, or only from your iPhone if you turn the server off in Pengaturan → Pengaturan AI → Model AI. The server receives your conversation’s text and a few details about each line, such as who said it, but never audio or your voice profile, and it doesn’t keep them. Usage data, such as features used and time spent, may be collected without your name or conversation content to help us improve iShuo and its features.",
          ],
        },
        {
          heading: "No Accounts",
          blocks: ["iShuo has no accounts. You don’t need to sign up, sign in, or give us your email or phone number."],
        },
      ],
    },
    {
      title: "Eligibility and Availability",
      parts: [
        {
          heading: "Age Requirement",
          blocks: ["You must be at least 13 years old to use iShuo. If you are under 18, a parent or legal guardian must agree to these Terms for you."],
        },
        {
          heading: "Where iShuo Is Offered",
          blocks: [
            "iShuo is not offered in mainland China, the European Union, the European Economic Area, the United Kingdom or Switzerland. If you use iShuo while travelling, some features may not work properly where you are.",
          ],
        },
      ],
    },
    {
      title: "Recording Other People",
      parts: [
        {
          heading: "Consent Comes First",
          blocks: [
            "iShuo records conversations you take part in. Always tell the other person, and ask for permission, before you record. Recording laws differ between places, and you are solely responsible for getting the consent the law requires. iShuo reminds you before you record.",
            "To show who said each line, iShuo tells voices apart on your iPhone. It doesn’t keep a voice profile of anyone but you.",
          ],
        },
      ],
    },
    {
      title: "Your Content and Ownership",
      parts: [
        {
          heading: "Your Content",
          blocks: [
            "Your transcripts, conversation titles, saved words and answers belong to you, and they are stored on your iPhone. Audio recordings are deleted once they have been analyzed.",
          ],
        },
        {
          heading: "Helping Improve iShuo",
          blocks: [
            "If you allow it, your learning goals, speaking difficulties and saved words help us improve iShuo. Your recordings, transcripts and conversations are never included. You can change this anytime in Pengaturan → Tentang iShuo → Privasi.",
          ],
        },
      ],
    },
    {
      title: "AI-generated Content",
      parts: [
        {
          heading: "How AI Is Used",
          blocks: [
            "iShuo uses AI to:",
            {
              list: [
                "correct and explain your sentences;",
                "suggest more natural ways to say things;",
                "fix words that speech recognition misheard;",
                "answer your questions about a conversation;",
                "play the other person in practice chats;",
                "create vocabulary for situations you describe.",
              ],
            },
          ],
        },
        {
          heading: "Accuracy",
          blocks: [
            "AI feedback, translations, pinyin, transcripts and who said each line are made automatically. They may be inaccurate or incomplete. Use them as a learning aid, not as professional advice, and check anything important with a teacher or native speaker.",
          ],
        },
        {
          heading: "Processing for AI-generated Content",
          blocks: [
            "By default, iShuo uses the iShuo server. If the server can’t be reached, or you turn it off in Pengaturan → Pengaturan AI → Model AI, the AI on your iPhone is used instead: Apple Intelligence, or Qwen3.5-4B if you’ve downloaded it. When the iShuo server is used, it receives your conversation’s text and a few details about each line, such as who said it, but never audio or your voice profile. It uses them only to create feedback and other AI content in iShuo, sends the result back to your iPhone, and does not store it.",
          ],
        },
        { heading: "No Training", blocks: ["We do not use your content to train AI models."] },
        {
          heading: "Reporting",
          blocks: ["If you see harmful or offensive AI output, email us at cerius.corp@gmail.com. We review reports and improve our filters."],
        },
      ],
    },
    {
      title: "Prohibited Conduct",
      parts: [
        {
          blocks: [
            "You agree not to use iShuo to:",
            {
              list: [
                "break any local, national or international law, including Indonesian law;",
                "record people without the consent the law requires;",
                "create or spread content that is unlawful, hateful, violent or obscene, or that harms minors;",
                "harass, threaten or impersonate others;",
                "infringe anyone’s intellectual property, privacy or other rights;",
                "hack, overload, reverse-engineer or interfere with iShuo or the iShuo server.",
              ],
            },
            { note: "If you misuse the Service, we may limit or end your access to the iShuo server." },
          ],
        },
      ],
    },
    {
      title: "Intellectual Property",
      parts: [
        {
          heading: "Our Rights",
          blocks: [
            "iShuo’s app, code, design, mascot, vocabulary content, name and logo belong to Cerius or its licensors. You may not copy, modify or redistribute them without our written permission, except content under open licences, listed in Atribusi, which you may use under those licences.",
          ],
        },
        {
          heading: "Open-Source Software",
          blocks: ["iShuo includes open-source software and models under their own licences. See Atribusi in the app."],
        },
      ],
    },
    {
      title: "Third-Party Services",
      parts: [
        {
          heading: "Services We Use",
          blocks: [
            "iShuo works with:",
            {
              list: [
                { label: "Apple", text: "speech recognition, translation, voices and Apple Intelligence;" },
                { label: "Hugging Face", text: "the optional Qwen3.5-4B download;" },
                { label: "Mixpanel", text: "usage analytics." },
              ],
            },
            "We don’t control these services, and your use of them is covered by their own terms.",
          ],
        },
      ],
    },
    {
      title: "Termination and Changes",
      parts: [
        {
          heading: "Stopping",
          blocks: ["You can stop using iShuo at any time by deleting the app, which removes all data stored on your iPhone."],
        },
        {
          heading: "Changes to iShuo",
          blocks: ["We may add, change or remove features, or stop the Service, at any time."],
        },
        {
          heading: "Changes to These Terms",
          blocks: [
            "We will post updates here with a new “Last updated” date, and tell you in the app about important changes. Continuing to use iShuo after a change means you accept the new Terms.",
          ],
        },
      ],
    },
    {
      title: "Disclaimers and Limitation of Liability",
      parts: [
        {
          heading: "No Warranty",
          blocks: [
            "iShuo is free and provided “as is” and “as available”. We don’t promise that it will be error-free or always available, or that it will improve your Mandarin by any particular amount.",
          ],
        },
        {
          heading: "Limitation of Liability",
          blocks: [
            "To the extent permitted by Indonesian law, Cerius is not liable for indirect, incidental or consequential damages. Our total liability is limited to IDR 100,000. Your rights as a consumer under the law are not affected.",
          ],
        },
      ],
    },
    {
      title: "Governing Law",
      parts: [
        {
          blocks: [
            "These Terms are governed by the laws of the Republic of Indonesia. Any dispute will first be discussed in good faith, and if it can’t be resolved, it will go to the competent courts of Indonesia.",
          ],
        },
      ],
    },
    {
      title: "Apple Clause",
      parts: [
        {
          heading: "Apple Disclaimer",
          blocks: [
            "These Terms are between you and Cerius, not Apple:",
            {
              list: [
                "Cerius, not Apple, is responsible for iShuo, its content, and its maintenance and support.",
                "If iShuo fails to meet an applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any). Apple has no other warranty obligation.",
                "Apple is not responsible for any claims relating to iShuo, including product liability, legal compliance or intellectual property claims.",
              ],
            },
          ],
        },
        {
          heading: "Legal Compliance",
          blocks: ["You confirm that you are not in a country under a U.S. Government embargo, and not on a U.S. list of restricted parties."],
        },
        {
          heading: "Third-Party Beneficiary",
          blocks: ["Apple is a third-party beneficiary of these Terms and may enforce them against you."],
        },
      ],
    },
    {
      title: "Contact Information",
      parts: [{ blocks: ["For questions about these Terms, contact us at cerius.corp@gmail.com."] }],
    },
  ],
  outro: "By using iShuo, you acknowledge that you have read, understood and agree to these Terms of Service.",
}

export const privacy: Policy = {
  title: "Privacy Policy",
  updated,
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
                { label: "Microphone", text: "to record." },
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
                { label: "Usage Data", text: "kept only as long as we need it to improve iShuo. We review it at least once a year." },
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

export const policyKeys = ["terms", "privacy"] as const
export type PolicyKey = (typeof policyKeys)[number]

/** Both policies in each language. */
export const policiesIn: Record<Lang, Record<PolicyKey, Policy>> = {
  en: { terms, privacy },
  id: { terms: termsId, privacy: privacyId },
  zh: { terms: termsZh, privacy: privacyZh },
}
