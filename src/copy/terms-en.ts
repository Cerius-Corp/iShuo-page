// The Terms of Service in English. This is the original: terms-id.ts and
// terms-zh.ts are translated from it, so keep them in step.

import type { Policy } from "./policies"

export const termsEn: Policy = {
  title: "Terms of Service",
  updated: "Last updated on November 11, 2026",
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
                "capture conversations in Mandarin (mixed with Indonesian, if you like) and read a live transcript and translation;",
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
            "Voice recognition and your conversation history run on your iPhone and stay there. Speech recognition and translation also run on your iPhone where possible; otherwise Apple may process them on Apple’s servers. Your voice profile never leaves your iPhone. AI-generated content comes from the iShuo server by default, or only from your iPhone if you turn the server off in Pengaturan → Pengaturan AI → Model AI. The server receives your conversation’s text and a few details about each line, such as who said it, and, in practice chats, your reasons for learning and what’s hard for you. The server never receives audio or your voice profile, and it doesn’t keep any of it. Usage data, such as features used and time spent, may be collected without your name or conversation content to help us improve iShuo and its features.",
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
          heading: "Where iShuo Is Available",
          blocks: [
            "iShuo is not available to download in mainland China, the European Union, the European Economic Area, the United Kingdom or Switzerland. If you use iShuo while travelling, some features may not work properly where you are.",
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
            "By default, iShuo uses the iShuo server. If the server can’t be reached, or you turn it off in Pengaturan → Pengaturan AI → Model AI, the AI on your iPhone is used instead: Apple Intelligence, or Qwen3.5-4B if you’ve downloaded it. When the iShuo server is used, it receives your conversation’s text and a few details about each line, such as who said it, and, in practice chats, your reasons for learning and what’s hard for you. It never receives audio or your voice profile. It uses them only to create feedback and other AI content in iShuo, sends the result back to your iPhone, and does not store it.",
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
            "iShuo’s app, code, design, mascot, vocabulary content, name and logo belong to Cerius team. You may not copy, modify or redistribute them without our written permission, except content under open licences, listed in Atribusi, which you may use under those licences.",
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
