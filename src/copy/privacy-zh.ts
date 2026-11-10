// The Privacy Policy in Chinese (the English one, in policies.ts, is the
// original; keep the two in step). The settings path stays as the app
// shows it, in Indonesian.

import type { Policy } from "./policies"

export const privacyZh: Policy = {
  title: "隐私政策",
  updated: "最后更新：2026年11月9日",
  colon: "：",
  intro: [
    "在 iShuo，我们知道你的对话是私密的。本隐私政策说明哪些内容留在你的 iPhone 上、我们会收到什么，以及我们如何使用这些信息。简而言之：你的录音从不离开你的 iPhone，我们也从不问你是谁。",
  ],
  sections: [
    {
      title: "简介",
      parts: [
        {
          blocks: [
            "iShuo 由 Cerius（“我们”）开发。本政策适用于 iShuo 应用和 iShuo 服务器。iShuo 没有账号：我们从不索要你的姓名、邮箱、手机号或密码。",
          ],
        },
      ],
    },
    {
      title: "留在你 iPhone 上的信息",
      parts: [
        { heading: "录音", blocks: ["你的对话音频在 iPhone 上处理，分析完成后即被删除，从不上传。"] },
        { heading: "对话与学习", blocks: ["你的转写、翻译、反馈、对话记录、收藏的词和设置只保存在你的 iPhone 上，除非你允许（见第 03 部分）。"] },
        {
          heading: "声音档案",
          blocks: ["如果你设置了自己的声音，iShuo 只保存描述它的数值（音高和声纹），用来区分你和对方说的话。这些数值从不离开你的 iPhone。"],
        },
        { heading: "你的回答", blocks: ["你的名字（如果你填写了）留在你的 iPhone 上。你的学习原因以及你觉得难的地方也留在你的 iPhone 上，除非你允许（见第 03 部分）。"] },
        { heading: "Apple 功能", blocks: ["语音识别、翻译和朗读语音由 Apple 在你的 iPhone 上提供。Apple 的服务适用 Apple 的隐私政策。"] },
      ],
    },
    {
      title: "我们收到的信息",
      parts: [
        {
          heading: "AI 反馈",
          blocks: [
            { label: "默认开启", text: "iShuo 使用 iShuo 服务器为你提供反馈。" },
            { label: "发送的内容", text: "你的对话文字和场景。从不发送音频，也从不发送你的名字。" },
            { label: "处理方式", text: "服务器处理文字后把结果发回你的 iPhone。服务器上不保存任何内容，也不会用于训练 AI 模型。" },
            { label: "让 AI 只在 iPhone 上运行", text: "前往 Pengaturan → Pengaturan AI → Model AI，选择 Apple 或 Qwen3.5-4B。" },
          ],
        },
        {
          heading: "使用数据",
          blocks: [
            "我们会收集关于 iShuo 使用情况的匿名信息，例如打开了哪些页面、一段录音有多长、一次练习对话有多少轮回复（“使用数据”）。使用数据附带一个随机应用 ID、应用版本和基本设备信息（iPhone 型号和 iOS 版本）。",
            "使用数据从不包括：",
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
        { heading: "你联系我们时", blocks: ["如果你给我们发邮件，我们会收到你的邮箱地址和邮件内容，只用于回复你。"] },
      ],
    },
    {
      title: "我们如何使用数据",
      parts: [
        {
          blocks: [
            "iShuo 使用上述数据来：",
            {
              list: [
                "为你提供 AI 反馈和练习；",
                "了解哪些功能被使用，以及大家在哪里遇到困难；",
                "改进 iShuo；",
                "发现并修复技术问题；",
                "回复你的问题。",
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
                { label: "麦克风", text: "用于录音。" },
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
                { label: "使用数据", text: "只在改进 iShuo 所需的期限内保留，我们至少每年审查一次。" },
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
                "你可以随时在 Pengaturan 中关闭学习选择。要停止使用数据，请删除应用。",
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
            "如需提出请求，请给我们发邮件。",
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
