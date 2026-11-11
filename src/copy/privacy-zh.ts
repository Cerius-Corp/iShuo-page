// The Privacy Policy in Chinese (the English one, in policies.ts, is the
// original; keep the two in step). The settings path stays as the app
// shows it, in Indonesian.

import type { Policy } from "./policies"

export const privacyZh: Policy = {
  title: "隐私政策",
  updated: "最后更新：2026年11月11日",
  colon: "：",
  intro: [
    "在 iShuo，我们知道你的对话是私密的。本隐私政策说明哪些内容留在你的 iPhone 上、我们会收到什么，以及我们如何使用这些信息。简而言之：你的录音留在你的 iPhone 上，分析完成后即被删除；我们也从不索要你的邮箱、手机号或密码。",
  ],
  sections: [
    {
      title: "简介",
      parts: [
        {
          blocks: [
            "iShuo 由 Cerius（“我们”）开发。本政策适用于 iShuo 应用和 iShuo 服务器。iShuo 没有账号。我们从不索要你的邮箱、手机号或密码。如果你填写了名字，它会留在你的 iPhone 上。",
          ],
        },
      ],
    },
    {
      title: "留在本地的信息",
      parts: [
        { heading: "录音", blocks: ["你的对话音频在 iPhone 上处理，分析完成后即被删除，从不上传到 iShuo 服务器。如果你的 iPhone 无法自行识别语音，Apple 的语音识别可能会在 Apple 的服务器上处理音频（见“Apple 功能”）。"] },
        { heading: "对话与学习", blocks: ["你的转写、翻译、反馈和对话记录只保存在你的 iPhone 上。你收藏的词也留在你的 iPhone 上，除非你允许（见第 03 部分）。"] },
        {
          heading: "声音档案",
          blocks: ["如果你设置了自己的声音，iShuo 只保存描述它的数值（音高和声纹），用来区分你和对方说的话。这些数值从不离开你的 iPhone。"],
        },
        { heading: "学习个性化", blocks: ["你的名字（如果你填写了）留在你的 iPhone 上。你的学习原因以及你觉得难的地方也留在你的 iPhone 上，但练习对话会用它们让对话更适合你（见第 03 部分）。只有在你允许时，它们才会包含在使用数据中。"] },
        { heading: "Apple 功能", blocks: ["语音识别、翻译、朗读语音和 Apple Intelligence 由 Apple 提供，并尽可能在你的 iPhone 上运行。Apple 的服务适用 Apple 的隐私政策。"] },
        {
          heading: "下载 Qwen3.5-4B",
          blocks: ["如果你下载 Qwen3.5-4B，你的 iPhone 会直接从 Hugging Face 下载。和任何网站一样，Hugging Face 能看到你的 IP 地址。该下载适用 Hugging Face 的隐私政策。"],
        },
      ],
    },
    {
      title: "我们收到的信息",
      parts: [
        {
          heading: "AI 处理",
          blocks: [
            {
              label: "默认发送到服务器",
              text: "iShuo 使用 iShuo 服务器上的 AI 为你生成学习反馈和练习。你也可以随时在 Pengaturan → Pengaturan AI → Model AI 中更改，改用你 iPhone 上的 AI。如果无法连接服务器，则会使用你 iPhone 上的 AI。",
            },
            {
              label: "发送的内容",
              text: "功能所需的文字，例如你的对话、练习对话中的消息、你的提问和你描述的场景，以及每一句的一些信息（例如是谁说的）。练习对话还会包括你的学习原因和你觉得难的地方。从不发送音频、你的声音档案或你的名字。",
            },
          ],
        },
        {
          heading: "使用数据",
          blocks: [
            "我们会收集关于 iShuo 使用情况的信息，不含你的名字。例如：打开了哪些页面、一段录音有多长、一次练习对话有多少轮回复（“使用数据”）。使用数据附带一个随机应用 ID、应用版本和基本设备信息（iPhone 型号和 iOS 版本）。",
            { label: "使用数据从不包括", text: "" },
            { list: ["你的名字；", "你的录音；", "你的转写；", "你说的或输入的任何内容。"] },
          ],
        },
        {
          heading: "学习选择（经你允许）",
          blocks: [
            "只有在你允许的情况下，使用数据才会包括：",
            { list: ["你的学习原因；", "你说话时的困难；", "你查看和收藏的词。"] },
          ],
        },
      ],
    },
    {
      title: "我们如何使用数据",
      parts: [
        {
          heading: "我们用它做什么",
          blocks: [
            "iShuo 使用上述数据来：",
            {
              list: [
                "为你提供 AI 生成的反馈和练习；",
                "了解哪些功能被使用，以及大家在哪里遇到困难；",
                "改进 iShuo；",
                "回复你的问题。",
              ],
            },
          ],
        },
        {
          heading: "法律依据",
          blocks: [
            "我们基于以下理由处理每类数据：",
            {
              list: [
                { label: "AI 处理", text: "为了提供你使用的功能。" },
                { label: "使用数据", text: "我们改进 iShuo 的合法利益。" },
                { label: "学习选择", text: "你的同意，用于改进 iShuo 的内容。你可以随时撤回。" },
                { label: "你发给我们的邮件", text: "为了回复你的问题和请求。" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "权限与追踪",
      parts: [
        {
          heading: "权限",
          blocks: [
            "iShuo 会在第一次需要时请求每项权限。你可以随时在 iOS 设置中更改。",
            {
              list: [
                { label: "麦克风", text: "用于录制你的对话。" },
                { label: "语音识别", text: "用于把语音转成文字。" },
              ],
            },
          ],
        },
        { heading: "不追踪", blocks: ["iShuo 不使用 Cookie，也不使用广告标识符，不会在其他应用或网站上追踪你。"] },
      ],
    },
    {
      title: "数据共享",
      parts: [
        { heading: "我们不出售你的数据", blocks: ["我们不出售、出租或交易你的数据，也不展示广告。"] },
        {
          heading: "服务提供商",
          blocks: ["我们使用 Mixpanel, Inc.（美国）分析使用数据，并使用一家托管服务商运行 iShuo 服务器。它们只代表我们处理数据。"],
        },
        { heading: "向印度尼西亚境外传输", blocks: ["使用数据在美国处理。我们依靠 Mixpanel 的保障措施来保护这些数据。"] },
        { heading: "法律要求", blocks: ["如法律要求，我们可能会披露数据。"] },
      ],
    },
    {
      title: "数据保留与安全",
      parts: [
        {
          heading: "我们保留数据多久",
          blocks: [
            {
              list: [
                { label: "在你的 iPhone 上", text: "直到你删除数据或应用。" },
                { label: "在我们的服务器上", text: "不保存任何内容。" },
                { label: "使用数据", text: "最多保留 2 年，之后删除。" },
              ],
            },
          ],
        },
        {
          heading: "安全",
          blocks: ["iShuo 发送的数据使用加密连接（HTTPS），我们也尽可能少地收集数据。没有任何传输方式是百分之百安全的，但我们会尽力保护你的数据。"],
        },
      ],
    },
    {
      title: "用户权利",
      parts: [
        {
          heading: "你的选择",
          blocks: [
            {
              list: [
                "你可以随时在 Pengaturan → Tentang iShuo → Privasi 中关闭学习选择。要停止使用数据，请删除应用。",
                "删除对话或应用，即可从你的 iPhone 上移除你的数据。",
              ],
            },
          ],
        },
        {
          heading: "你的权利",
          blocks: [
            "根据你所在的地区，包括印度尼西亚《个人数据保护法》（UU PDP），你可能有权：",
            { list: ["访问你的数据；", "更正数据；", "删除数据；", "限制其使用；", "撤回同意。"] },
            "如需提出请求，请给我们发邮件。使用数据不与你的名字关联，所以我们可能无法确定哪些使用数据属于你。如果无法确定，我们会告诉你。",
          ],
        },
        { heading: "儿童", blocks: ["iShuo 不面向 13 岁以下的儿童。18 岁以下的用户需要父母或监护人的同意。"] },
      ],
    },
    {
      title: "变更与联系方式",
      parts: [
        {
          blocks: ["我们会在此页面发布本政策的变更，并更新“最后更新”日期。如有问题或请求，请通过 cerius.corp@gmail.com 联系我们。"],
        },
      ],
    },
  ],
}
