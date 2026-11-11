// The Terms of Service in Chinese (the English, in terms-en.ts, is the
// original; keep the two in step).

import type { Policy } from "./policies"

export const termsZh: Policy = {
  title: "服务条款",
  updated: "最后更新：2026年11月11日",
  colon: "：",
  noteLabel: "注意",
  intro: [
    "欢迎使用 iShuo。iShuo 是一款帮助你从自己的真实对话中学说中文的应用。下载或使用 iShuo，即表示你同意本服务条款（“条款”）。本条款适用于 iShuo 的所有用户，无论在印度尼西亚还是其他地方。",
    "iShuo 使用语音识别、翻译和 AI 语言模型，把你的对话变成反馈和练习。AI 生成的内容可能存在错误或不准确之处，不应被视为确定无误或经过独立核实的结果。",
    "如果你从 App Store 下载了 iShuo，Apple Inc. 是本条款的第三方受益人，详见下文。",
  ],
  sections: [
    {
      title: "服务说明",
      parts: [
        {
          heading: "iShuo 能做什么",
          blocks: [
            "使用 iShuo，你可以：",
            {
              list: [
                "录下中文对话（可以夹杂印尼语），并实时查看转写和翻译；",
                "获得对你所说句子的反馈；",
                "和 AI 对话伙伴练习；",
                "为即将遇到的场景准备并收藏词汇；",
                "练习发音。",
              ],
            },
          ],
        },
        {
          heading: "优先在你的 iPhone 上",
          blocks: ["声音识别和你的对话记录都在你的 iPhone 上运行并保存。语音识别和翻译也会尽可能在你的 iPhone 上运行；否则 Apple 可能会在 Apple 的服务器上处理。你的声音档案从不离开你的 iPhone。AI 生成的内容默认来自 iShuo 服务器；如果你在 Pengaturan → Pengaturan AI → Model AI 中关闭服务器，则只来自你的 iPhone。服务器会接收你对话的文字和每一句的一些信息（例如是谁说的），在练习对话中还会接收你的学习原因以及你觉得难的地方，但从不接收音频或你的声音档案，也不会保存这些内容。我们可能会收集使用数据（例如使用了哪些功能、使用了多长时间），其中不含你的名字或对话内容，用于帮助我们改进 iShuo 及其功能。"],
        },
        { heading: "无需账号", blocks: ["iShuo 没有账号。你不需要注册或登录，也不需要向我们提供邮箱或手机号。"] },
      ],
    },
    {
      title: "使用资格与适用地区",
      parts: [
        { heading: "年龄要求", blocks: ["你必须年满 13 岁才能使用 iShuo。如果你未满 18 岁，须由父母或法定监护人代你同意本条款。"] },
        {
          heading: "可下载 iShuo 的地区",
          blocks: ["iShuo 不在中国大陆、欧盟、欧洲经济区、英国或瑞士提供下载。如果你在旅行时使用 iShuo，部分功能在当地可能无法正常使用。"],
        },
      ],
    },
    {
      title: "录制他人",
      parts: [
        {
          heading: "先征得同意",
          blocks: [
            "iShuo 录制的是你参与的对话。录音前，请务必告知对方并征得同意。各地关于录音的法律不同，你须自行负责取得法律要求的同意。iShuo 会在你录音前提醒你。",
            "为了显示每一句是谁说的，iShuo 会在你的 iPhone 上区分不同的声音。除了你以外，它不会保存任何人的声音档案。",
          ],
        },
      ],
    },
    {
      title: "你的内容与所有权",
      parts: [
        {
          heading: "你的内容",
          blocks: ["你的转写、对话标题、收藏的词和回答都属于你，并保存在你的 iPhone 上。录音在分析完成后即被删除。"],
        },
        {
          heading: "帮助改进 iShuo",
          blocks: ["如果你允许，你的学习目标、口语难点和收藏的词会帮助我们改进 iShuo。你的录音、转写和对话从不包括在内。你可以随时在 Pengaturan → Tentang iShuo → Privasi 中更改。"],
        },
      ],
    },
    {
      title: "AI 生成的内容",
      parts: [
        {
          heading: "AI 的用途",
          blocks: [
            "iShuo 使用 AI 来：",
            {
              list: ["纠正并讲解你的句子；", "建议更自然的说法；", "修正语音识别听错的词；", "回答你关于某段对话的问题；", "在练习对话中扮演对方；", "为你描述的场景生成词汇。"],
            },
          ],
        },
        {
          heading: "准确性",
          blocks: [
            "AI 反馈、翻译、拼音、转写以及每一句是谁说的，都是自动生成的，可能不准确或不完整。请把它们当作学习辅助，而不是专业意见；重要的内容请向老师或母语者确认。",
          ],
        },
        {
          heading: "为生成 AI 内容而处理",
          blocks: [
            "iShuo 默认使用 iShuo 服务器。如果无法连接服务器，或你在 Pengaturan → Pengaturan AI → Model AI 中将其关闭，则改用你 iPhone 上的 AI：Apple Intelligence，或你已下载的 Qwen3.5-4B。使用 iShuo 服务器时，服务器会接收你对话的文字和每一句的一些信息（例如是谁说的），在练习对话中还会接收你的学习原因以及你觉得难的地方，但从不接收音频或你的声音档案。服务器只用这些信息在 iShuo 中生成反馈和其他 AI 内容，把结果发回你的 iPhone，并且不会保存。",
          ],
        },
        { heading: "不用于训练", blocks: ["我们不会用你的内容训练 AI 模型。"] },
        {
          heading: "举报",
          blocks: ["如果你看到有害或冒犯性的 AI 输出，请发邮件至 cerius.corp@gmail.com。我们会审查举报并改进过滤机制。"],
        },
      ],
    },
    {
      title: "禁止行为",
      parts: [
        {
          blocks: [
            "你同意不使用 iShuo 来：",
            {
              list: [
                "违反任何地方、国家或国际法律，包括印度尼西亚法律；",
                "在未取得法律要求的同意时录制他人；",
                "制作或传播违法、仇恨、暴力或淫秽的内容，或伤害未成年人的内容；",
                "骚扰、威胁或冒充他人；",
                "侵犯任何人的知识产权、隐私或其他权利；",
                "入侵、使其过载、逆向工程或干扰 iShuo 或 iShuo 服务器。",
              ],
            },
            { note: "如果你滥用本服务，我们可能限制或终止你对 iShuo 服务器的访问。" },
          ],
        },
      ],
    },
    {
      title: "知识产权",
      parts: [
        {
          heading: "我们的权利",
          blocks: ["iShuo 的应用、代码、设计、吉祥物、词汇内容、名称和标志归 Cerius 团队所有。未经我们书面许可，你不得复制、修改或再分发；但列在 Atribusi 中、采用开放许可的内容除外，你可以按照相应许可使用。"],
        },
        { heading: "开源软件", blocks: ["iShuo 包含开源软件和模型，各自适用其许可证。详见应用中的 Atribusi。"] },
      ],
    },
    {
      title: "第三方服务",
      parts: [
        {
          heading: "我们使用的服务",
          blocks: [
            "iShuo 使用以下服务：",
            {
              list: [
                { label: "Apple", text: "语音识别、翻译、朗读语音和 Apple Intelligence；" },
                { label: "Hugging Face", text: "可选的 Qwen3.5-4B 下载；" },
                { label: "Mixpanel", text: "使用情况分析。" },
              ],
            },
            "这些服务不受我们控制，你对它们的使用受其各自条款约束。",
          ],
        },
      ],
    },
    {
      title: "终止与变更",
      parts: [
        { heading: "停止使用", blocks: ["你可以随时删除应用来停止使用 iShuo，这会移除你 iPhone 上保存的所有数据。"] },
        { heading: "iShuo 的变更", blocks: ["我们可能随时新增、更改或移除功能，或停止提供本服务。"] },
        {
          heading: "本条款的变更",
          blocks: ["我们会在此页面发布更新并更新“最后更新”日期，重要变更也会在应用内通知你。变更后继续使用 iShuo，即表示你接受新的条款。"],
        },
      ],
    },
    {
      title: "免责声明与责任限制",
      parts: [
        {
          heading: "不作保证",
          blocks: ["iShuo 免费，按“现状”和“现有”提供。我们不保证它没有错误或始终可用，也不保证它能让你的中文提高到某个程度。"],
        },
        {
          heading: "责任限制",
          blocks: [
            "在印度尼西亚法律允许的范围内，Cerius 不对间接、附带或后果性损失承担责任。我们的总责任以 100,000 印尼盾为限。你依法享有的消费者权利不受影响。",
          ],
        },
      ],
    },
    {
      title: "适用法律",
      parts: [
        {
          blocks: ["本条款受印度尼西亚共和国法律管辖。任何争议将首先本着诚信原则协商解决；如协商不成，将提交印度尼西亚有管辖权的法院处理。"],
        },
      ],
    },
    {
      title: "Apple 条款",
      parts: [
        {
          heading: "Apple 免责声明",
          blocks: [
            "本条款是你与 Cerius 之间的协议，而非与 Apple 之间的协议：",
            {
              list: [
                "由 Cerius 而非 Apple 对 iShuo、其内容及其维护和支持负责。",
                "如果 iShuo 不符合任何适用的保证，你可以通知 Apple，Apple 将退还购买价格（如有）。Apple 不承担其他任何保证义务。",
                "Apple 不对任何与 iShuo 有关的索赔负责，包括产品责任、法律合规或知识产权方面的索赔。",
              ],
            },
          ],
        },
        { heading: "法律合规", blocks: ["你确认你不在受美国政府禁运的国家，也不在美国的受限方名单上。"] },
        { heading: "第三方受益人", blocks: ["Apple 是本条款的第三方受益人，可以对你执行本条款。"] },
      ],
    },
    {
      title: "联系方式",
      parts: [{ blocks: ["如对本条款有任何疑问，请通过 cerius.corp@gmail.com 联系我们。"] }],
    },
  ],
  outro: "使用 iShuo，即表示你确认已阅读、理解并同意本服务条款。",
}
