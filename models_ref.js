[{
    id: `qwen-2.5-32b-groq`,
    name: `Qwen 2.5 32B`,
    provider: `Groq`,
    developer: `Alibaba`,
    addedOn: new Date(`2025-02-12`),
    knowledgeCutoffDate: null,
    retiredOn: new Date(`2025-04-16`),
    succededBy: `qwen-2.5-32b`,
    legacy: !0,
    shortDescription: `Fast, efficient Chinese open model with solid performance`,
    fullDescription: `Alibaba's Qwen 2.5 is a reliable open-weight model that strikes a good balance between speed and capability. It's particularly strong for general conversation, basic coding tasks, and Chinese language processing. Think of it as the dependable workhorse of open models - not the flashiest, but gets the job done efficiently.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`fast`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .9,
        output: .9
    },
    limits: {
        app: {
            maxInputTokens: 8e3,
            maxOutputTokens: 8e3
        },
        provider: {
            maxInputTokens: 128e3
        }
    },
    searchTags: [`open source`]
}, {
    id: `qwen-2.5-32b`,
    name: `Qwen 2.5 32B`,
    provider: `OpenRouter`,
    developer: `Alibaba`,
    addedOn: new Date(`2025-02-12`),
    knowledgeCutoffDate: new Date(`2024-03-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Versatile open model with image understanding`,
    fullDescription: `This version of Qwen 2.5 adds vision capabilities to the solid foundation of its text-only sibling. It's great for multimodal tasks like analyzing images with text, understanding screenshots, or processing documents with visual elements. A practical choice when you need both language and vision understanding without breaking the bank.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`fast`, `images`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .2 / 1e6,
        output: .6 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 8e3
        },
        provider: {
            maxInputTokens: 128e3
        }
    },
    searchTags: [`open source`]
}, {
    id: `qwq-32b`,
    name: `Qwen qwq-32B`,
    provider: `Groq`,
    developer: `Alibaba`,
    addedOn: new Date(`2025-03-06`),
    knowledgeCutoffDate: new Date(`2024-11-28`),
    retiredOn: new Date(`2025-07-15`),
    succededBy: `qwen3-32b`,
    legacy: !0,
    shortDescription: `Small but mighty reasoning specialist`,
    fullDescription: `Don't let the size fool you - this compact reasoning model punches way above its weight class. It's surprisingly good at complex problem-solving, often matching or beating much larger models on math, coding, and logic tasks. Perfect when you need deep thinking without the wait or cost of bigger models.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`, `toolCalling`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    defaultLanguageModelOptions: {
        presencePenalty: 1
    },
    cost: {
        input: 0,
        output: 0
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 128e3
        },
        provider: {
            maxInputTokens: 131072
        }
    },
    searchTags: [`open source`]
}, {
    id: `qwen3-32b`,
    name: `Qwen 3 32B`,
    provider: `Groq`,
    developer: `Alibaba`,
    addedOn: new Date(`2025-07-15`),
    knowledgeCutoffDate: new Date(`2024-10-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Alibaba's smart all-rounder with dynamic thinking`,
    fullDescription: `Qwen 3 brings a unique trick - it can switch between quick responses and deep thinking on the fly. Need a fast answer? It's got you. Complex reasoning? Just enable thinking mode. It's like having two models in one, optimized for both everyday chats and challenging problems.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`fast`, `reasoning`, `toolCalling`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: .3 / 1e6,
        output: .6 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 32e3,
            maxOutputTokens: 8e3
        },
        provider: {
            maxInputTokens: 131072
        }
    },
    statuspage: {
        url: `https://groqstatus.com/`,
        apiUrl: `https://groqstatus.com/api/v2/status.json`
    },
    searchTags: [`multilingual`]
}, {
    id: `qwen3-235b-thinking-2507`,
    aaIdentifier: `qwen3-235b-a22b-instruct-2507-reasoning`,
    name: `Qwen 3 235B (Thinking)`,
    provider: `OpenRouter`,
    developer: `Alibaba`,
    addedOn: new Date(`2025-07-25`),
    knowledgeCutoffDate: new Date(`2024-10-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Open-source reasoning powerhouse`,
    fullDescription: `This is Alibaba's crown jewel for complex reasoning. With 235B parameters but only 22B active per token, it delivers exceptional performance on math, science, and coding challenges. It's designed specifically for tasks that require deep, step-by-step thinking - think of it as your personal research assistant that never gets tired.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    defaultLanguageModelOptions: {
        presencePenalty: 1
    },
    cost: {
        input: .17 / 1e6,
        output: 1.48 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 32e3,
            maxOutputTokens: 8e3
        },
        provider: {
            maxInputTokens: 262144
        }
    },
    searchTags: [`open source`, `moe`]
}, {
    id: `qwen3-235b-2507`,
    aaIdentifier: `qwen3-235b-a22b-instruct-2507`,
    name: `Qwen 3 235B`,
    provider: `OpenRouter`,
    developer: `Alibaba`,
    addedOn: new Date(`2025-07-21`),
    knowledgeCutoffDate: new Date(`2024-10-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Massive open model for general intelligence`,
    fullDescription: `When you need raw capability without the reasoning overhead, this is your go-to. It's incredibly knowledgeable across domains and excels at tasks requiring broad understanding. Great for content creation, analysis, and general problem-solving where you don't need to see the thought process.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        presencePenalty: 1
    },
    cost: {
        input: .2 / 1e6,
        output: .61 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 32e3,
            maxOutputTokens: 8e3
        },
        provider: {
            maxInputTokens: 262144
        }
    },
    searchTags: [`open source`, `moe`, `multilingual`]
}, {
    id: `qwen3-coder`,
    name: `Qwen 3 Coder`,
    provider: `OpenRouter`,
    developer: `Alibaba`,
    addedOn: new Date(`2025-07-21`),
    knowledgeCutoffDate: new Date(`2024-10-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Alibaba's coding champion`,
    fullDescription: `Purpose-built for developers, this model excels at everything from quick scripts to complex system design. It understands modern development practices, can work across multiple files, and even helps with debugging. If you're building software, this is like having a senior developer as your pair programming partner.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        presencePenalty: 1
    },
    cost: {
        input: .64 / 1e6,
        output: 1.88 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 32e3,
            maxOutputTokens: 8e3
        },
        provider: {
            maxInputTokens: 262144
        }
    },
    searchTags: [`open source`, `coding`]
}, {
    id: `claude-3.5`,
    aaIdentifier: `claude-35-sonnet`,
    name: `Claude 3.5 Sonnet`,
    provider: `Anthropic`,
    developer: `Anthropic`,
    addedOn: new Date(`2025-01-04`),
    knowledgeCutoffDate: new Date(`2024-04-01`),
    retiredOn: new Date(`2025-10-22`),
    succededBy: `claude-3.7`,
    legacy: !0,
    shortDescription: `The reliable classic - smart, steady, and versatile`,
    fullDescription: `Claude 3.5 Sonnet is like that brilliant colleague who's great at everything but won't brag about it. It handles complex reasoning, creative writing, and coding tasks with consistent quality. While not the newest kid on the block, it's still many developers' go-to for reliable, thoughtful responses.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`images`, `nativePDFs`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 3 / 1e6,
        output: 15 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 3e4,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    statuspage: {
        url: `https://status.anthropic.com`,
        apiUrl: `https://status.anthropic.com/api/v2/status.json`
    },
    searchTags: [`coding`, `math`]
}, {
    id: `claude-3.7`,
    aaIdentifier: `claude-3-7-sonnet`,
    name: `Claude 3.7 Sonnet`,
    provider: `Anthropic`,
    developer: `Anthropic`,
    addedOn: new Date(`2025-02-24`),
    knowledgeCutoffDate: new Date(`2024-10-15`),
    retiredOn: new Date(`2026-02-19`),
    succededBy: `claude-4.6-sonnet`,
    legacy: !0,
    shortDescription: `Upgraded classic with sharper capabilities`,
    fullDescription: `Takes everything that made Claude 3.5 great and adds improved capabilities. Better at following complex instructions, more accurate on technical topics, and still maintains that helpful, nuanced communication style that makes Claude models special.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`images`, `nativePDFs`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 3 / 1e6,
        output: 15 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 3e4,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    statuspage: {
        url: `https://status.anthropic.com`,
        apiUrl: `https://status.anthropic.com/api/v2/status.json`
    },
    searchTags: [`coding`, `math`]
}, {
    id: `claude-3.7-reasoning`,
    aaIdentifier: `claude-3-7-sonnet-thinking`,
    name: `Claude 3.7 Sonnet (Reasoning)`,
    provider: `Anthropic`,
    developer: `Anthropic`,
    addedOn: new Date(`2025-02-24`),
    knowledgeCutoffDate: new Date(`2024-10-15`),
    retiredOn: new Date(`2026-02-19`),
    succededBy: `claude-4.6-sonnet-reasoning`,
    legacy: !0,
    shortDescription: `Claude's thoughtful side - when you need to see the work`,
    fullDescription: `Same great Claude capabilities, but now you can watch it think through problems step-by-step. Perfect for educational scenarios, complex analysis, or when you need to understand not just what the answer is, but how to get there.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`images`, `nativePDFs`, `reasoning`, `reasoningEffort`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Budget,
        budgets: {
            low: 2048,
            medium: 4096,
            high: 16384
        }
    },
    cost: {
        input: 3 / 1e6,
        output: 15 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 3e4,
            maxOutputTokens: 24576
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    statuspage: {
        url: `https://status.anthropic.com`,
        apiUrl: `https://status.anthropic.com/api/v2/status.json`
    },
    searchTags: [`coding`, `math`]
}, {
    id: `claude-4-opus`,
    aaIdentifier: `claude-4-opus-thinking`,
    name: `Claude 4 Opus`,
    provider: `Anthropic`,
    developer: `Anthropic`,
    addedOn: new Date(`2025-05-22`),
    knowledgeCutoffDate: new Date(`2025-03-01`),
    retiredOn: new Date(`2025-09-12`),
    succededBy: `claude-4.1-opus`,
    legacy: !0,
    shortDescription: `Anthropic's original premium flagship`,
    fullDescription: `The most capable Claude model for when you need the absolute best. It handles incredibly complex tasks, maintains context over long conversations, and produces exceptionally high-quality outputs. Think of it as hiring a world-class expert - expensive, but worth it for mission-critical work.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`, `nativePDFs`, `reasoning`, `toolCalling`]),
    apiKeySupport: Y.Required,
    reasoningConfiguration: {
        _tag: X.Budget,
        budgets: {
            low: 2048,
            medium: 4096,
            high: 16384
        }
    },
    cost: {
        input: 15 / 1e6,
        output: 75 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 3e4,
            maxOutputTokens: 15e3
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    statuspage: {
        url: `https://status.anthropic.com`,
        apiUrl: `https://status.anthropic.com/api/v2/status.json`
    },
    searchTags: [`coding`, `math`]
}, {
    id: `claude-4-sonnet`,
    aaIdentifier: `claude-4-sonnet`,
    name: `Claude 4 Sonnet`,
    provider: `Anthropic`,
    developer: `Anthropic`,
    addedOn: new Date(`2025-05-22`),
    knowledgeCutoffDate: new Date(`2025-03-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `The sweet spot of capability and efficiency`,
    fullDescription: `Claude 4 Sonnet hits that perfect balance - significantly more capable than the 3.x series, but fast enough for everyday use. It's become the favorite for developers who need reliable, intelligent assistance without the premium cost of Opus.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`images`, `nativePDFs`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 3 / 1e6,
        output: 15 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 3e4,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    statuspage: {
        url: `https://status.anthropic.com`,
        apiUrl: `https://status.anthropic.com/api/v2/status.json`
    },
    searchTags: [`coding`, `math`]
}, {
    id: `claude-4-sonnet-reasoning`,
    aaIdentifier: `claude-4-sonnet-thinking`,
    name: `Claude 4 Sonnet (Reasoning)`,
    provider: `Anthropic`,
    developer: `Anthropic`,
    addedOn: new Date(`2025-05-22`),
    knowledgeCutoffDate: new Date(`2025-03-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Balanced intelligence with transparent thinking`,
    fullDescription: `Get the best of both worlds - Claude 4 Sonnet's impressive capabilities with the ability to see its reasoning process. Great for learning, debugging complex problems, or building trust in AI-assisted decision making.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`images`, `nativePDFs`, `reasoning`, `reasoningEffort`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Budget,
        budgets: {
            low: 2048,
            medium: 4096,
            high: 16384
        }
    },
    cost: {
        input: 3 / 1e6,
        output: 15 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 3e4,
            maxOutputTokens: 24576
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    statuspage: {
        url: `https://status.anthropic.com`,
        apiUrl: `https://status.anthropic.com/api/v2/status.json`
    },
    searchTags: [`coding`, `math`]
}, {
    id: `claude-4.5-sonnet`,
    aaIdentifier: `claude-4-5-sonnet`,
    name: `Claude Sonnet 4.5`,
    provider: `Anthropic`,
    developer: `Anthropic`,
    addedOn: new Date(`2025-09-29`),
    knowledgeCutoffDate: new Date(`2025-03-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Anthropic's most advanced Sonnet yet`,
    fullDescription: `Claude 4.5 Sonnet represents a significant leap forward in AI assistance. It's exceptionally good at real-world tasks - from writing production-ready code to creating compelling content. What sets it apart is how naturally it collaborates, almost like working with a very smart human partner.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`images`, `nativePDFs`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 3 / 1e6,
        output: 15 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 3e4,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    statuspage: {
        url: `https://status.anthropic.com`,
        apiUrl: `https://status.anthropic.com/api/v2/status.json`
    },
    searchTags: [`coding`, `math`]
}, {
    id: `claude-4.5-sonnet-reasoning`,
    aaIdentifier: `claude-4-5-sonnet-thinking`,
    name: `Claude Sonnet 4.5 (Reasoning)`,
    provider: `Anthropic`,
    developer: `Anthropic`,
    addedOn: new Date(`2025-09-29`),
    knowledgeCutoffDate: new Date(`2025-03-01`),
    retiredOn: null,
    succededBy: `claude-4.6-sonnet-reasoning`,
    legacy: !0,
    shortDescription: `Advanced collaboration with visible expertise`,
    fullDescription: `All the capabilities of Claude 4.5 Sonnet, but you can watch it work through problems methodically. It's particularly valuable for complex coding projects, research tasks, or any work where understanding the reasoning process is as important as the final result.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`images`, `nativePDFs`, `reasoning`, `reasoningEffort`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Budget,
        budgets: {
            low: 2048,
            medium: 4096,
            high: 16384
        }
    },
    cost: {
        input: 3 / 1e6,
        output: 15 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 3e4,
            maxOutputTokens: 24576
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    statuspage: {
        url: `https://status.anthropic.com`,
        apiUrl: `https://status.anthropic.com/api/v2/status.json`
    },
    searchTags: [`coding`, `math`]
}, {
    id: `claude-4.6-sonnet`,
    aaIdentifier: `claude-sonnet-4-6`,
    name: `Claude Sonnet 4.6`,
    provider: `Anthropic`,
    developer: `Anthropic`,
    addedOn: new Date(`2026-02-17`),
    knowledgeCutoffDate: new Date(`2025-05-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Anthropic's latest Sonnet for real-world work`,
    fullDescription: `Current Sonnet model tuned for strong coding, clear writing, and reliable tool use at a practical cost. It is designed to handle day-to-day product, engineering, and analysis workflows with better consistency than prior Sonnet versions.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !0,
    features: new Set([`images`, `nativePDFs`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 3 / 1e6,
        output: 15 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 3e4,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    statuspage: {
        url: `https://status.anthropic.com`,
        apiUrl: `https://status.anthropic.com/api/v2/status.json`
    },
    searchTags: [`coding`, `math`]
}, {
    id: `claude-4.6-sonnet-reasoning`,
    aaIdentifier: `claude-sonnet-4-6-thinking`,
    name: `Claude Sonnet 4.6 (Reasoning)`,
    provider: `Anthropic`,
    developer: `Anthropic`,
    addedOn: new Date(`2026-02-17`),
    knowledgeCutoffDate: new Date(`2025-05-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Latest Sonnet with visible step-by-step reasoning`,
    fullDescription: `The reasoning variant of Sonnet 4.6 adds transparent thinking for harder tasks. It is a strong fit for complex debugging, architecture decisions, and multi-step analysis where process clarity matters.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`images`, `nativePDFs`, `reasoning`, `reasoningEffort`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Budget,
        budgets: {
            low: 2048,
            medium: 4096,
            high: 16384
        }
    },
    cost: {
        input: 3 / 1e6,
        output: 15 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 3e4,
            maxOutputTokens: 24576
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    statuspage: {
        url: `https://status.anthropic.com`,
        apiUrl: `https://status.anthropic.com/api/v2/status.json`
    },
    searchTags: [`coding`, `math`]
}, {
    id: `claude-4.1-opus`,
    aaIdentifier: `claude-4-1-opus-thinking`,
    name: `Claude 4.1 Opus`,
    provider: `Anthropic`,
    developer: `Anthropic`,
    addedOn: new Date(`2025-09-10`),
    knowledgeCutoffDate: new Date(`2025-03-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Enhanced premium flagship with improved capabilities`,
    fullDescription: `The most capable Claude model for when you need the absolute best. It handles incredibly complex tasks, maintains context over long conversations, and produces exceptionally high-quality outputs. Think of it as hiring a world-class expert - expensive, but worth it for mission-critical work.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`, `nativePDFs`, `reasoning`, `toolCalling`]),
    apiKeySupport: Y.Required,
    reasoningConfiguration: {
        _tag: X.Budget,
        budgets: {
            low: 2048,
            medium: 4096,
            high: 16384
        }
    },
    cost: {
        input: 15 / 1e6,
        output: 75 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 3e4,
            maxOutputTokens: 15e3
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    statuspage: {
        url: `https://status.anthropic.com`,
        apiUrl: `https://status.anthropic.com/api/v2/status.json`
    },
    searchTags: [`coding`, `math`]
}, {
    id: `claude-4.5-haiku`,
    aaIdentifier: `claude-4-5-haiku`,
    name: `Claude Haiku 4.5`,
    provider: `Anthropic`,
    developer: `Anthropic`,
    addedOn: new Date(`2025-10-15`),
    knowledgeCutoffDate: new Date(`2025-02-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Lightning-fast responses with surprising depth`,
    fullDescription: `Don't let the 'efficient' label fool you - Haiku 4.5 is remarkably capable for its speed and cost. It's perfect for real-time applications, quick iterations, and high-volume tasks where you need quality responses without the wait.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`, `nativePDFs`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 1 / 1e6,
        output: 5 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 32768
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    statuspage: {
        url: `https://status.anthropic.com`,
        apiUrl: `https://status.anthropic.com/api/v2/status.json`
    },
    searchTags: [`fast`, `efficient`, `coding`, `math`]
}, {
    id: `claude-4.5-haiku-reasoning`,
    aaIdentifier: `claude-4-5-haiku-reasoning`,
    name: `Claude Haiku 4.5 (Reasoning)`,
    provider: `Anthropic`,
    developer: `Anthropic`,
    addedOn: new Date(`2025-10-15`),
    knowledgeCutoffDate: new Date(`2025-02-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Fast thinking for quick problem-solving`,
    fullDescription: `Don't let the 'efficient' label fool you - Haiku 4.5 is remarkably capable for its speed and cost. It's perfect for real-time applications, quick iterations, and high-volume tasks where you need quality responses without the wait.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`, `nativePDFs`, `reasoning`, `reasoningEffort`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Budget,
        budgets: {
            low: 2048,
            medium: 4096,
            high: 16384
        }
    },
    cost: {
        input: 1 / 1e6,
        output: 5 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 32768
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    statuspage: {
        url: `https://status.anthropic.com`,
        apiUrl: `https://status.anthropic.com/api/v2/status.json`
    },
    searchTags: [`fast`, `efficient`, `coding`, `math`]
}, {
    id: `claude-4.5-opus`,
    aaIdentifier: `claude-opus-4-5-thinking`,
    name: `Claude Opus 4.5`,
    provider: `Anthropic`,
    developer: `Anthropic`,
    addedOn: new Date(`2025-11-24`),
    knowledgeCutoffDate: new Date(`2025-03-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `The pinnacle of Claude intelligence`,
    fullDescription: `Last-gen flagship Claude model. Strong at long-context reasoning, nuanced writing, and complex coding or analysis. Ideal when you need maximum reliability and can trade off cost and speed.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`images`, `nativePDFs`, `reasoning`, `reasoningEffort`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Budget,
        budgets: {
            low: 2048,
            medium: 4096,
            high: 16384
        }
    },
    reasoningEffortApiKeyRequired: [`medium`, `high`],
    cost: {
        input: 5 / 1e6,
        output: 25 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 3e4,
            maxOutputTokens: 15e3
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    statuspage: {
        url: `https://status.anthropic.com`,
        apiUrl: `https://status.anthropic.com/api/v2/status.json`
    },
    searchTags: [`coding`, `math`]
}, {
    id: `claude-4.6-opus`,
    aaIdentifier: `claude-opus-4-6-thinking`,
    name: `Claude Opus 4.6`,
    provider: `Anthropic`,
    developer: `Anthropic`,
    addedOn: new Date(`2026-02-05`),
    knowledgeCutoffDate: new Date(`2025-05-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `The pinnacle of Claude intelligence`,
    fullDescription: `Current flagship Claude model with the best overall performance. Excels at complex reasoning, multi-step planning, long-context tasks, and tool-driven workflows while maintaining top-tier writing quality.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`images`, `nativePDFs`, `reasoning`, `reasoningEffort`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Budget,
        budgets: {
            low: 2048,
            medium: 4096,
            high: 16384
        }
    },
    reasoningEffortApiKeyRequired: [`medium`, `high`],
    cost: {
        input: 5 / 1e6,
        output: 25 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 3e4,
            maxOutputTokens: 15e3
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    statuspage: {
        url: `https://status.anthropic.com`,
        apiUrl: `https://status.anthropic.com/api/v2/status.json`
    },
    searchTags: [`coding`, `math`]
}, {
    id: `deepseek-v3-fireworks`,
    name: `DeepSeek v3 (Fireworks)`,
    provider: `Fireworks`,
    developer: `DeepSeek`,
    addedOn: new Date(`2025-02-02`),
    knowledgeCutoffDate: new Date(`2024-07-01`),
    retiredOn: new Date(`2025-08-21`),
    succededBy: `deepseek-chat-v3-0324`,
    legacy: !0,
    shortDescription: `The foundation that started the reasoning revolution`,
    fullDescription: `DeepSeek V3 was groundbreaking - the first model to show that open-source could compete with closed models on complex reasoning. While newer versions exist, this remains a solid choice for general tasks where you want proven reliability.`,
    requiresPro: !0,
    disabled: !0,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 0 / 1e6,
        output: 0 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 163840
        }
    },
    searchTags: []
}, {
    id: `deepseek-chat-v3-0324`,
    name: `DeepSeek v3 (0324)`,
    provider: `OpenRouter`,
    developer: `DeepSeek`,
    addedOn: new Date(`2025-03-24`),
    knowledgeCutoffDate: new Date(`2024-07-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Refined and improved version of the classic`,
    fullDescription: `Takes the solid foundation of DeepSeek V3 and adds months of additional training and refinement. Better at following instructions, more knowledgeable, and still maintains that direct, no-nonsense communication style that made the original popular.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .8 / 1e6,
        output: 1.65 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 64e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 163840
        }
    },
    searchTags: [`moe`]
}, {
    id: `deepseek-v3.1`,
    aaIdentifier: `deepseek-v3-1`,
    name: `DeepSeek v3.1`,
    provider: `OpenRouter`,
    developer: `DeepSeek`,
    addedOn: new Date(`2025-08-21`),
    knowledgeCutoffDate: new Date(`2025-07-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `DeepSeek's versatile general-purpose model`,
    fullDescription: `V3.1 is a capable general-purpose model that excels at coding, tool use, and complex problem-solving. It delivers strong performance across a wide range of tasks while maintaining good speed and efficiency.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .41 / 1e6,
        output: 1.26 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 64e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 163840
        }
    },
    searchTags: [`moe`, `coding`]
}, {
    id: `deepseek-v3.1-thinking`,
    aaIdentifier: `deepseek-v3-1-reasoning`,
    name: `DeepSeek v3.1 (Thinking)`,
    provider: `OpenRouter`,
    developer: `DeepSeek`,
    addedOn: new Date(`2025-08-21`),
    knowledgeCutoffDate: new Date(`2025-07-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `DeepSeek's reasoning specialist`,
    fullDescription: `When you enable thinking mode, V3.1 becomes a different beast entirely. It excels at complex mathematical problems, intricate coding challenges, and multi-step reasoning tasks. The thinking process is thorough and often educational.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: .41 / 1e6,
        output: 1.26 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 64e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 163840
        }
    },
    searchTags: [`moe`]
}, {
    id: `deepseek-v3.1-terminus`,
    aaIdentifier: `deepseek-v3-1-terminus`,
    name: `DeepSeek v3.1 Terminus`,
    provider: `OpenRouter`,
    developer: `DeepSeek`,
    addedOn: new Date(`2025-09-30`),
    knowledgeCutoffDate: new Date(`2025-07-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `The polished, production-ready version`,
    fullDescription: `Terminus takes everything learned from V3.1 and adds stability improvements. Better at maintaining conversation context, more reliable on long tasks, and improved tool-use capabilities. It's the version you'd deploy in production systems.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .94 / 1e6,
        output: 1.82 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 64e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 131072
        }
    },
    searchTags: [`moe`, `coding`]
}, {
    id: `deepseek-v3.1-terminus-thinking`,
    aaIdentifier: `deepseek-v3-1-terminus-reasoning`,
    name: `DeepSeek v3.1 Terminus (Thinking)`,
    provider: `OpenRouter`,
    developer: `DeepSeek`,
    addedOn: new Date(`2025-09-30`),
    knowledgeCutoffDate: new Date(`2025-07-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Production-ready with visible reasoning`,
    fullDescription: `Terminus takes everything learned from V3.1 and adds stability improvements. Better at maintaining conversation context, more reliable on long tasks, and improved tool-use capabilities. It's the version you'd deploy in production systems.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: .94 / 1e6,
        output: 1.82 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 64e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 131072
        }
    },
    searchTags: [`moe`]
}, {
    id: `deepseek-v-3.2-exp`,
    name: `DeepSeek v3.2 Exp`,
    provider: `OpenRouter`,
    developer: `DeepSeek`,
    addedOn: new Date(`2025-09-30`),
    knowledgeCutoffDate: new Date(`2025-07-01`),
    retiredOn: new Date(`2025-12-17`),
    succededBy: `deepseek-v-3.2`,
    legacy: !0,
    shortDescription: `DeepSeek's latest experimental model`,
    fullDescription: `DeepSeek-V3.2-Exp is an experimental large language model released by DeepSeek as an intermediate step between V3.1 and future architectures. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse attention mechanism designed to improve training and inference efficiency in long-context scenarios while maintaining output quality. The model was trained under conditions aligned with V3.1-Terminus to enable direct comparison. Benchmarking shows performance roughly on par with V3.1 across reasoning, coding, and tool-use tasks, with minor tradeoffs and gains depending on the domain. This release focuses on validating architectural optimizations for extended context lengths rather than advancing raw task accuracy, making it primarily a research-oriented model for exploring efficient transformer designs.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .3 / 1e6,
        output: .4 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 64e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 163840
        }
    },
    searchTags: [`research`, `coding`]
}, {
    id: `deepseek-v-3.2-exp-thinking`,
    name: `DeepSeek v3.2 Exp (Thinking)`,
    provider: `OpenRouter`,
    developer: `DeepSeek`,
    addedOn: new Date(`2025-09-30`),
    knowledgeCutoffDate: new Date(`2025-07-01`),
    retiredOn: new Date(`2025-12-17`),
    succededBy: `deepseek-v-3.2-thinking`,
    legacy: !0,
    shortDescription: `DeepSeek's latest experimental model with reasoning`,
    fullDescription: `DeepSeek-V3.2-Exp is an experimental large language model released by DeepSeek as an intermediate step between V3.1 and future architectures. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse attention mechanism designed to improve training and inference efficiency in long-context scenarios while maintaining output quality. The model was trained under conditions aligned with V3.1-Terminus to enable direct comparison. Benchmarking shows performance roughly on par with V3.1 across reasoning, coding, and tool-use tasks, with minor tradeoffs and gains depending on the domain. This release focuses on validating architectural optimizations for extended context lengths rather than advancing raw task accuracy, making it primarily a research-oriented model for exploring efficient transformer designs.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: .3 / 1e6,
        output: .4 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 64e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 163840
        }
    },
    searchTags: [`research`]
}, {
    id: `deepseek-v-3.2`,
    aaIdentifier: `deepseek-v3-2`,
    name: `DeepSeek v3.2`,
    provider: `OpenRouter`,
    developer: `DeepSeek`,
    addedOn: new Date(`2025-12-17`),
    knowledgeCutoffDate: new Date(`2025-07-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Latest generation with sparse attention magic`,
    fullDescription: `V3.2 introduces DeepSeek Sparse Attention, making it incredibly efficient for long-context tasks while maintaining top-tier performance. It's designed for the modern AI workflow - handling massive codebases, long documents, and complex multi-step processes with ease.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .33 / 1e6,
        output: .66 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 64e3,
            maxOutputTokens: 32768
        },
        provider: {
            maxInputTokens: 163840
        }
    },
    searchTags: [`open source`, `coding`]
}, {
    id: `deepseek-v-3.2-thinking`,
    aaIdentifier: `deepseek-v3-2-reasoning`,
    name: `DeepSeek v3.2 (Thinking)`,
    provider: `OpenRouter`,
    developer: `DeepSeek`,
    addedOn: new Date(`2025-12-17`),
    knowledgeCutoffDate: new Date(`2025-07-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Reasoning-first design for complex challenges`,
    fullDescription: `Built from the ground up with reasoning in mind, this model excels at tasks that would challenge even human experts. It achieved gold medals in international math and programming competitions - that's how good it is at systematic problem-solving.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: .33 / 1e6,
        output: .66 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 64e3,
            maxOutputTokens: 32768
        },
        provider: {
            maxInputTokens: 163840
        }
    },
    searchTags: [`open source`, `research`]
}, {
    id: `deepseek-r1-distill-qwen-32b-groq`,
    name: `DeepSeek R1 (Qwen Distilled)`,
    provider: `Groq`,
    developer: `DeepSeek`,
    addedOn: new Date(`2025-02-12`),
    knowledgeCutoffDate: new Date(`2024-07-01`),
    retiredOn: new Date(`2025-10-09`),
    succededBy: `deepseek-r1-0528`,
    legacy: !0,
    shortDescription: `Fast R1 reasoning distilled on Qwen`,
    fullDescription: `Similar to the Llama distilled model, but distilled on Qwen 32B instead. Slightly better at code, slightly more likely to fall into thought loops.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`fast`, `reasoning`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: 0 / 1e6,
        output: 0 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 16384,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 131072
        }
    },
    statuspage: {
        url: `https://groqstatus.com/`,
        apiUrl: `https://groqstatus.com/api/v2/status.json`
    },
    searchTags: [`distilled`]
}, {
    id: `deepseek-r1-groq`,
    name: `DeepSeek R1 (Llama Distilled)`,
    provider: `Groq`,
    developer: `DeepSeek`,
    addedOn: new Date(`2025-01-26`),
    knowledgeCutoffDate: new Date(`2024-07-01`),
    retiredOn: new Date(`2025-10-09`),
    succededBy: `deepseek-r1-0528`,
    legacy: !0,
    shortDescription: `Blazing-fast R1 reasoning on Groq`,
    fullDescription: `It's like normal R1, but WAY faster and slightly dumber. Basically, DeepSeek stuffed Llama full of R1 knowledge. Since Llama is smaller and faster, the result is a really good compromise.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`fast`, `reasoning`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: 0 / 1e6,
        output: 0 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 32e3,
            maxOutputTokens: 1e5
        },
        provider: {
            maxInputTokens: 163840
        }
    },
    searchTags: []
}, {
    id: `deepseek-r1-openrouter`,
    aaIdentifier: `deepseek-r1`,
    name: `DeepSeek R1 (Original)`,
    provider: `OpenRouter`,
    developer: `DeepSeek`,
    addedOn: new Date(`2025-02-10`),
    knowledgeCutoffDate: new Date(`2024-07-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `The open reasoning model that changed everything`,
    fullDescription: `DeepSeek R1 proved that open-source reasoning models could compete with the best closed models. Whether you choose the original, the distilled versions, or the latest updates, you're getting genuine reasoning capabilities that show their work and think deeply about problems.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: 1.09 / 1e6,
        output: 4.22 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 163840
        }
    },
    searchTags: [`open source`]
}, {
    id: `deepseek-r1-0528`,
    name: `DeepSeek R1 (0528)`,
    provider: `OpenRouter`,
    developer: `DeepSeek`,
    addedOn: new Date(`2025-05-28`),
    knowledgeCutoffDate: new Date(`2024-07-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Latest version of DeepSeek R1`,
    fullDescription: `DeepSeek R1 proved that open-source reasoning models could compete with the best closed models. Whether you choose the original, the distilled versions, or the latest updates, you're getting genuine reasoning capabilities that show their work and think deeply about problems.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: 1.73 / 1e6,
        output: 3.83 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 163840
        }
    },
    searchTags: [`open source`]
}, {
    id: `deepseek-r1-distill-qwen-32b`,
    name: `DeepSeek R1 (Qwen Distilled)`,
    provider: `OpenRouter`,
    developer: `DeepSeek`,
    addedOn: new Date(`2025-02-12`),
    knowledgeCutoffDate: new Date(`2024-07-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `R1 reasoning distilled for efficiency`,
    fullDescription: `Similar to the Llama distilled model, but distilled on Qwen 32B instead. Slightly better at code, slightly more likely to fall into thought loops.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: .3 / 1e6,
        output: .3 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 16e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 131072
        }
    },
    searchTags: [`distilled`]
}, {
    id: `gemini-2.0-flash`,
    aaIdentifier: `gemini-2-0-flash`,
    name: `Gemini 2.0 Flash`,
    provider: `Google`,
    developer: `Google`,
    addedOn: new Date(`2025-02-06`),
    knowledgeCutoffDate: new Date(`2024-08-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Google's speedy all-rounder with massive context`,
    fullDescription: `Flash 2.0 is like the Swiss Army knife of AI models - fast, reliable, and handles almost anything you throw at it. Its standout feature is the enormous context window, letting you work with entire codebases or long documents without breaking a sweat.`,
    requiresPro: !1,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `nativePDFs`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        temperature: 1.1
    },
    cost: {
        input: .05 / 1e6,
        output: .4 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e6,
            maxOutputTokens: 8192
        },
        provider: {
            maxInputTokens: 1048576
        }
    },
    searchTags: []
}, {
    id: `gemini-2.5-flash`,
    aaIdentifier: `gemini-2-5-flash`,
    name: `Gemini 2.5 Flash`,
    provider: `Google`,
    developer: `Google`,
    addedOn: new Date(`2025-04-17`),
    knowledgeCutoffDate: new Date(`2025-01-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Upgraded speed with enhanced capabilities`,
    fullDescription: `Takes everything great about Flash 2.0 and adds improved capabilities. Better at complex tasks while maintaining that signature Google speed. Perfect for when you need quick but thoughtful responses.`,
    requiresPro: !1,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `nativePDFs`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        temperature: 1.1
    },
    cost: {
        input: .3 / 1e6,
        output: 2.5 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e6,
            maxOutputTokens: 65535
        },
        provider: {
            maxInputTokens: 1048576
        }
    },
    searchTags: []
}, {
    id: `gemini-2.5-flash-thinking`,
    name: `Gemini 2.5 Flash (Thinking)`,
    provider: `Google`,
    developer: `Google`,
    addedOn: new Date(`2025-04-17`),
    knowledgeCutoffDate: new Date(`2025-01-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Fast responses with visible reasoning`,
    fullDescription: `Combines Flash's speed with reasoning capabilities, letting you see the thought process behind answers. Great for educational use, debugging, or building trust in AI-assisted decisions.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `nativePDFs`, `reasoningEffort`, `toolCalling`, `reasoning`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Budget,
        budgets: {
            low: 1024,
            medium: 2048,
            high: 4096
        }
    },
    defaultLanguageModelOptions: {
        temperature: 1.1
    },
    cost: {
        input: .3 / 1e6,
        output: 2.5 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e6,
            maxOutputTokens: 65535
        },
        provider: {
            maxInputTokens: 1048576
        }
    },
    searchTags: []
}, {
    id: `gemini-2.5-flash-lite`,
    name: `Gemini 2.5 Flash Lite`,
    provider: `Google`,
    developer: `Google`,
    addedOn: new Date(`2025-06-17`),
    knowledgeCutoffDate: new Date(`2025-01-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Google's most cost-efficient Flash model`,
    fullDescription: `Gemini 2.5 Flash-Lite is a member of the Gemini 2.5 series of models, a suite of highly-capable, natively multimodal models. Gemini 2.5 Flash-Lite is Google’s most cost-efficient model, striking a balance between efficiency and quality.`,
    requiresPro: !1,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `nativePDFs`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        temperature: 1.1
    },
    cost: {
        input: .1 / 1e6,
        output: .4 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e6,
            maxOutputTokens: 65535
        },
        provider: {
            maxInputTokens: 1048576
        }
    },
    searchTags: []
}, {
    id: `gemini-2.5-flash-lite-thinking`,
    name: `Gemini 2.5 Flash Lite (Thinking)`,
    provider: `Google`,
    developer: `Google`,
    addedOn: new Date(`2025-06-17`),
    knowledgeCutoffDate: new Date(`2025-01-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Efficient Flash with reasoning capabilities`,
    fullDescription: `Gemini 2.5 Flash-Lite is a member of the Gemini 2.5 series of models, a suite of highly-capable, natively multimodal models. Gemini 2.5 Flash-Lite is Google’s most cost-efficient model, striking a balance between efficiency and quality. This version has "thinking" capabilities that enable it to provide responses with greater accuracy and nuanced context handling.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `nativePDFs`, `reasoningEffort`, `toolCalling`, `reasoning`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Budget,
        budgets: {
            low: 1024,
            medium: 2048,
            high: 4096
        }
    },
    defaultLanguageModelOptions: {
        temperature: 1.1
    },
    cost: {
        input: .1 / 1e6,
        output: .4 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e6,
            maxOutputTokens: 65535
        },
        provider: {
            maxInputTokens: 1048576
        }
    },
    searchTags: []
}, {
    id: `gemini-2.5-flash-image-preview`,
    name: `Nano Banana`,
    provider: `Google`,
    developer: `Google`,
    addedOn: new Date(`2025-08-26`),
    knowledgeCutoffDate: new Date(`2025-01-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Fast Image Generation, f.k.a. Gemini 2.5 Flash Image`,
    fullDescription: `Gemini 2.5 Flash Image Preview is a state of the art image generation model with contextual understanding. It is capable of image generation, edits, and multi-turn conversations.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`images`, `imageGeneration`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        temperature: 1.1
    },
    cost: {
        input: .3 / 1e6,
        output: 2.5 / 1e6,
        fixed: .039
    },
    limits: {
        app: {
            maxInputTokens: 32768,
            maxOutputTokens: 32768
        },
        provider: {
            maxInputTokens: 1048576
        }
    },
    numImagesPerPrompt: 1,
    searchTags: [`flash`]
}, {
    id: `gemini-2.0-flash-lite-preview-02-05`,
    name: `Gemini 2.0 Flash Lite`,
    provider: `Google`,
    developer: `Google`,
    addedOn: new Date(`2025-02-06`),
    knowledgeCutoffDate: new Date(`2024-08-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Faster, less precise Gemini model`,
    fullDescription: `Similar to 2.0 Flash, but even faster. Not as smart, but still good at most things.`,
    requiresPro: !1,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `line`,
    features: new Set([`fast`, `images`, `nativePDFs`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        temperature: 1.1
    },
    cost: {
        input: .075 / 1e6,
        output: .3 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e6,
            maxOutputTokens: 8192
        },
        provider: {
            maxInputTokens: 1048576
        }
    },
    searchTags: []
}, {
    id: `gemini-2.5-pro`,
    aaIdentifier: `gemini-2-5-pro`,
    name: `Gemini 2.5 Pro`,
    provider: `Google`,
    developer: `Google`,
    addedOn: new Date(`2025-03-25`),
    knowledgeCutoffDate: new Date(`2025-01-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Google's flagship for complex reasoning`,
    fullDescription: `When you need Google's most capable model, 2.5 Pro delivers. It excels at mathematical reasoning, scientific analysis, and complex coding challenges. The thinking capabilities make it particularly valuable for research and development work.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `nativePDFs`, `reasoning`, `reasoningEffort`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Budget,
        budgets: {
            low: 2048,
            medium: 4096,
            high: 8192
        }
    },
    defaultLanguageModelOptions: {
        temperature: 1.1
    },
    cost: {
        input: 1.25 / 1e6,
        output: 10 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 64e3
        },
        provider: {
            maxInputTokens: 1048576
        }
    },
    searchTags: [`coding`, `math`]
}, {
    id: `gemini-imagen-4`,
    name: `Gemini Imagen 4`,
    provider: `Google`,
    developer: `Google`,
    addedOn: new Date(`2025-06-26`),
    knowledgeCutoffDate: null,
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Google's advanced image generation model powered by Imagen 4`,
    fullDescription: `Google's Imagen 4 is a powerful image generation model that creates high-quality, photorealistic images from text prompts. Built on advanced diffusion techniques and trained on diverse datasets. 2 images per prompt.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`imageGeneration`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 0,
        output: 0,
        fixed: .04
    },
    limits: {
        app: {
            maxInputTokens: 1e4,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 1e4
        }
    },
    numImagesPerPrompt: 2,
    searchTags: []
}, {
    id: `gemini-imagen-4-ultra`,
    name: `Gemini Imagen 4 Ultra`,
    provider: `Google`,
    developer: `Google`,
    addedOn: new Date(`2025-06-26`),
    knowledgeCutoffDate: null,
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Google's advanced image generation model powered by Imagen 4 Ultra`,
    fullDescription: `Google's Imagen 4 Ultra is a powerful image generation model that creates high-quality, photorealistic images from text prompts. Built on advanced diffusion techniques and trained on diverse datasets. 1 image per prompt.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`imageGeneration`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 0,
        output: 0,
        fixed: .06
    },
    limits: {
        app: {
            maxInputTokens: 1e4,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 1e4
        }
    },
    numImagesPerPrompt: 1,
    searchTags: []
}, {
    id: `gemini-3-pro`,
    aaIdentifier: `gemini-3-pro`,
    name: `Gemini 3 Pro`,
    provider: `Google`,
    developer: `Google`,
    addedOn: new Date(`2025-11-17`),
    knowledgeCutoffDate: new Date(`2025-01-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Google's previous flagship with advanced reasoning`,
    fullDescription: `Gemini 3 Pro represents Google's previous advances in AI. It's exceptionally good at complex reasoning tasks, long-context understanding, and maintaining coherence over extended conversations. Think of it as Google's answer to the most challenging cognitive tasks.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `nativePDFs`, `reasoning`, `reasoningEffort`, `toolCalling`]),
    apiKeySupport: `optional`,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: void 0,
            high: `high`
        }
    },
    defaultLanguageModelOptions: {
        temperature: 1.1
    },
    cost: {
        input: 2 / 1e6,
        output: 12 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 64e3
        },
        provider: {
            maxInputTokens: 1e6
        }
    },
    searchTags: [`coding`, `math`, `3.0`]
}, {
    id: `gemini-3.1-pro`,
    aaIdentifier: `gemini-3.1-pro`,
    name: `Gemini 3.1 Pro`,
    provider: `Google`,
    developer: `Google`,
    addedOn: new Date(`2026-02-20`),
    knowledgeCutoffDate: new Date(`2025-01-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Google's newest flagship with advanced reasoning`,
    fullDescription: `Gemini 3.1 Pro Preview is Google's frontier reasoning model, delivering enhanced software engineering performance, improved agentic reliability, and more efficient token usage across complex workflows. Building on the multimodal foundation of the Gemini 3 series, it combines high-precision reasoning across text, image, video, audio, and code with a 1M-token context window.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `nativePDFs`, `reasoning`, `reasoningEffort`, `toolCalling`]),
    apiKeySupport: `optional`,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: void 0,
            high: `high`
        }
    },
    defaultLanguageModelOptions: {
        temperature: 1.1
    },
    cost: {
        input: 2 / 1e6,
        output: 12 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 4096
        },
        provider: {
            maxInputTokens: 1e6
        }
    },
    searchTags: [`coding`, `math`, `3.0`]
}, {
    id: `gemini-3-pro-image-preview`,
    name: `Nano Banana Pro`,
    provider: `Google`,
    developer: `Google`,
    addedOn: new Date(`2025-11-20`),
    knowledgeCutoffDate: new Date(`2025-01-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Higher fidelity image generation built on Gemini 3 Pro`,
    fullDescription: `Nano Banana Pro is a state of the art image generation model with contextual understanding. It is capable of image generation, edits, and multi-turn conversations.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !0,
    features: new Set([`images`, `imageGeneration`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        temperature: 1.1
    },
    cost: {
        input: 2 / 1e6,
        output: 12 / 1e6,
        fixed: .134
    },
    limits: {
        app: {
            maxInputTokens: 32768,
            maxOutputTokens: 32768
        },
        provider: {
            maxInputTokens: 1e6
        }
    },
    creditAmount: 2,
    numImagesPerPrompt: 1,
    searchTags: [`high fidelity`]
}, {
    id: `gemini-3-flash`,
    aaIdentifier: `gemini-3-flash`,
    name: `Gemini 3 Flash`,
    provider: `Google`,
    developer: `Google`,
    addedOn: new Date(`2025-12-16`),
    knowledgeCutoffDate: new Date(`2025-01-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Lightning-fast with surprising capability`,
    fullDescription: `The fastest model in Google's Gemini 3 family, but don't confuse speed with simplicity. It handles complex tasks remarkably well while maintaining low latency. Perfect for real-time applications and rapid prototyping.`,
    requiresPro: !1,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !0,
    streamChunking: `word`,
    features: new Set([`images`, `nativePDFs`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        temperature: 1.1
    },
    cost: {
        input: .5 / 1e6,
        output: 3 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e6,
            maxOutputTokens: 65535
        },
        provider: {
            maxInputTokens: 1048576
        }
    },
    searchTags: [`fast`, `3.0`]
}, {
    id: `gemini-3-flash-thinking`,
    aaIdentifier: `gemini-3-flash-reasoning`,
    name: `Gemini 3 Flash (Thinking)`,
    provider: `Google`,
    developer: `Google`,
    addedOn: new Date(`2025-12-16`),
    knowledgeCutoffDate: new Date(`2025-01-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Speed meets systematic reasoning`,
    fullDescription: `Proves that fast doesn't mean shallow. This model can quickly work through complex problems while showing its reasoning process. Ideal for interactive applications where users need both speed and transparency.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `nativePDFs`, `reasoning`, `reasoningEffort`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: `medium`,
            high: `high`
        }
    },
    defaultLanguageModelOptions: {
        temperature: 1.1
    },
    cost: {
        input: .5 / 1e6,
        output: 3 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e6,
            maxOutputTokens: 65535
        },
        provider: {
            maxInputTokens: 1048576
        }
    },
    searchTags: [`fast`, `3.0`]
}, {
    id: `llama-3.3-70b-groq`,
    name: `Llama 3.3 70B`,
    provider: `Groq`,
    developer: `Meta`,
    addedOn: new Date(`2025-01-13`),
    knowledgeCutoffDate: new Date(`2023-12-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `The speed demon of open models`,
    fullDescription: `If speed is your priority, Llama 3.3 70B is hard to beat. It processes tokens at incredible rates while maintaining solid performance on most tasks. Think of it as the sports car of AI models - not the most luxurious, but incredibly fun to drive.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `line`,
    features: new Set([`fast`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .59 / 1e6,
        output: .79 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 32768
        },
        provider: {
            maxInputTokens: 131072
        }
    },
    statuspage: {
        url: `https://groqstatus.com/`,
        apiUrl: `https://groqstatus.com/api/v2/status.json`
    },
    searchTags: [`fast`, `open source`]
}, {
    id: `llama-4-scout`,
    aaIdentifier: `llama-4-scout`,
    name: `Llama 4 Scout`,
    provider: `Groq`,
    developer: `Meta`,
    addedOn: new Date(`2025-04-05`),
    knowledgeCutoffDate: new Date(`2024-08-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Efficient multimodal explorer`,
    fullDescription: `Scout brings vision capabilities to the Llama family while maintaining efficiency. It's designed for applications that need to understand both text and images without the computational overhead of larger models.`,
    requiresPro: !1,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .11 / 1e6,
        output: .34 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 8192
        },
        provider: {
            maxInputTokens: 131072
        }
    },
    searchTags: [`open source`, `moe`, `multilingual`]
}, {
    id: `llama-4-maverick`,
    aaIdentifier: `llama-4-maverick`,
    name: `Llama 4 Maverick`,
    provider: `OpenRouter`,
    developer: `Meta`,
    addedOn: new Date(`2025-04-05`),
    knowledgeCutoffDate: new Date(`2024-08-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `The capable conversationalist`,
    fullDescription: `Maverick excels at maintaining natural, coherent conversations across long contexts. It's particularly good at tasks requiring nuanced understanding and can handle both text and visual inputs with impressive capability.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        maxOutputTokens: void 0
    },
    cost: {
        input: .33 / 1e6,
        output: 1.02 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e6,
            maxOutputTokens: 8192
        },
        provider: {
            maxInputTokens: 1048576
        }
    },
    searchTags: [`open source`, `moe`, `multilingual`]
}, {
    id: `minimax-m2`,
    aaIdentifier: `minimax-m2`,
    name: `MiniMax M2`,
    provider: `OpenRouter`,
    developer: `MiniMax`,
    addedOn: new Date(`2025-11-03`),
    knowledgeCutoffDate: null,
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `The efficiency champion for coding`,
    fullDescription: `MiniMax M2 redefines what's possible with efficient AI design. Despite 'only' activating 10B parameters from its 230B total, it delivers performance that rivals much larger models. It's specifically optimized for coding workflows, making it perfect for development tools.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`, `reasoning`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: .28 / 1e6,
        output: 1.14 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 1048576
        }
    },
    searchTags: [`coding`]
}, {
    id: `minimax-m2.1`,
    aaIdentifier: `minimax-m2-1`,
    name: `MiniMax M2.1`,
    provider: `OpenRouter`,
    developer: `MiniMax`,
    addedOn: new Date(`2025-12-23`),
    knowledgeCutoffDate: null,
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Lightweight model optimized for coding and agentic workflows`,
    fullDescription: `MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development. With only 10 billion activated parameters, it delivers a major jump in real-world capability while maintaining exceptional latency, scalability, and cost efficiency. Compared to its predecessor, M2.1 delivers cleaner, more concise outputs and faster perceived response times. It shows leading multilingual coding performance across major systems and application languages.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`, `reasoning`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: .3 / 1e6,
        output: 1.34 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 204800
        }
    },
    searchTags: [`coding`, `agentic`]
}, {
    id: `minimax-m2.5`,
    name: `MiniMax M2.5`,
    provider: `OpenRouter`,
    developer: `MiniMax`,
    addedOn: new Date(`2026-02-12`),
    knowledgeCutoffDate: null,
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `High-efficiency model optimized for coding and productivity`,
    fullDescription: `MiniMax-M2.5 is a high-efficiency large language model optimized for end-to-end coding and productivity. Building on MiniMax-M2, it extends strong coding and tool-use performance into broader office tasks, while handling multi-software context switching and cross-team collaboration across human and agent workflows.  It reports strong benchmark performance, including 80.2% on SWE-Bench Verified, 51.3% on Multi-SWE-Bench, and 76.3% on BrowseComp, while improving token efficiency through planning-focused training.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`, `reasoning`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: .34 / 1e6,
        output: 1.4 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 204800
        }
    },
    searchTags: [`coding`, `agentic`, `productivity`]
}, {
    id: `kimi-k2`,
    name: `Kimi K2 (0711)`,
    provider: `OpenRouter`,
    developer: `Moonshot`,
    addedOn: new Date(`2025-07-11`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `China's open-source capability champion`,
    fullDescription: `Kimi K2 proved that Chinese AI companies could build world-class open models. It's particularly strong on coding tasks, mathematical problem-solving, and workflows. The 1 trillion parameter count sounds impressive, but the real magic is in how efficiently it uses them.`,
    requiresPro: !1,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        temperature: .6
    },
    cost: {
        input: .55 / 1e6,
        output: 2.35 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 8192
        },
        provider: {
            maxInputTokens: 131072
        }
    },
    searchTags: [`open source`, `moe`, `coding`]
}, {
    id: `kimi-k2-0905`,
    aaIdentifier: `kimi-k2-0905`,
    name: `Kimi K2 (0905)`,
    provider: `OpenRouter`,
    developer: `Moonshot`,
    addedOn: new Date(`2025-09-05`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Enhanced version with longer context`,
    fullDescription: `The September update brings improved capabilities and extended context length. Better at handling long documents, maintaining conversation coherence, and executing complex multi-step tasks.`,
    requiresPro: !1,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !0,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        temperature: .6
    },
    cost: {
        input: .68 / 1e6,
        output: 3.21 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 8192
        },
        provider: {
            maxInputTokens: 262144
        }
    },
    searchTags: [`open source`, `moe`, `coding`]
}, {
    id: `kimi-k2-thinking`,
    aaIdentifier: `kimi-k2-thinking`,
    name: `Kimi K2 (Thinking)`,
    provider: `OpenRouter`,
    developer: `Moonshot`,
    addedOn: new Date(`2025-11-06`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Reasoning mode for complex challenges`,
    fullDescription: `When you enable thinking mode, K2 becomes a different model entirely. It excels at systematic problem-solving, showing detailed reasoning steps, and tackling challenges that require deep analysis.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`, `reasoning`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    defaultLanguageModelOptions: {
        temperature: .6
    },
    cost: {
        input: .65 / 1e6,
        output: 3.12 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 32768
        },
        provider: {
            maxInputTokens: 262144
        }
    },
    searchTags: [`open source`, `moe`, `coding`]
}, {
    id: `kimi-k2-turbo-thinking`,
    name: `Kimi K2 Turbo (Thinking)`,
    provider: `OpenRouter`,
    developer: `Moonshot`,
    addedOn: new Date(`2025-11-06`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: new Date(`2025-11-24`),
    succededBy: `kimi-k2-thinking`,
    legacy: !0,
    shortDescription: `Fast reasoning for time-sensitive tasks`,
    fullDescription: `Combines K2's impressive reasoning capabilities with optimized inference speed. Perfect for applications where you need both deep thinking and quick responses.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`, `reasoning`, `fast`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    defaultLanguageModelOptions: {
        temperature: .6
    },
    cost: {
        input: 1.15 / 1e6,
        output: 8 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 32768
        },
        provider: {
            maxInputTokens: 262144
        }
    },
    searchTags: [`open source`, `moe`, `coding`, `turbo`]
}, {
    id: `kimi-k2.5`,
    name: `Kimi K2.5`,
    provider: `OpenRouter`,
    developer: `Moonshot`,
    addedOn: new Date(`2026-01-27`),
    knowledgeCutoffDate: null,
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Native multimodal with visual coding`,
    fullDescription: `Kimi K2.5 is Moonshot AI's native multimodal model, delivering state-of-the-art visual coding capability. Built on Kimi K2 with continued pretraining over approximately 15T mixed visual and text tokens, it delivers strong performance in general reasoning, visual coding, and agentic tool-calling.`,
    requiresPro: !1,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        temperature: .6
    },
    cost: {
        input: .58 / 1e6,
        output: 2.91 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 262144
        }
    },
    searchTags: [`open source`, `moe`, `coding`, `multimodal`, `vision`]
}, {
    id: `kimi-k2.5-thinking`,
    name: `Kimi K2.5 (Thinking)`,
    provider: `OpenRouter`,
    developer: `Moonshot`,
    addedOn: new Date(`2026-01-27`),
    knowledgeCutoffDate: null,
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Reasoning mode for complex challenges`,
    fullDescription: `Kimi K2.5 is Moonshot AI's native multimodal model, delivering state-of-the-art visual coding capability. Built on Kimi K2 with continued pretraining over approximately 15T mixed visual and text tokens, it delivers strong performance in general reasoning, visual coding, and agentic tool-calling.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`, `toolCalling`, `reasoning`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    defaultLanguageModelOptions: {
        temperature: .6
    },
    cost: {
        input: .58 / 1e6,
        output: 2.91 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 32768
        },
        provider: {
            maxInputTokens: 262144
        }
    },
    searchTags: [`open source`, `moe`, `coding`, `multimodal`, `vision`]
}, {
    id: `gpt-oss-20b`,
    aaIdentifier: `gpt-oss-20b`,
    name: `GPT OSS 20B`,
    provider: `OpenRouter`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-08-05`),
    knowledgeCutoffDate: new Date(`2024-06-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `OpenAI's small open model`,
    fullDescription: `A medium-sized open-weight model from OpenAI suitable for general-purpose tasks. gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for lower-latency inference and deployability on consumer or single-GPU hardware. The model is trained in OpenAI's Harmony response format and supports reasoning level configuration, fine-tuning, and capabilities including function calling, tool use, and structured outputs. `,
    requiresPro: !1,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `line`,
    features: new Set([`toolCalling`, `reasoning`, `reasoningEffort`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: `medium`,
            high: `high`
        }
    },
    defaultLanguageModelOptions: {
        frequencyPenalty: .75,
        temperature: .6
    },
    cost: {
        input: .06 / 1e6,
        output: .23 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 8192
        },
        provider: {
            maxInputTokens: 131072
        }
    },
    searchTags: [`open source`]
}, {
    id: `gpt-oss-120b`,
    aaIdentifier: `gpt-oss-120b`,
    name: `GPT OSS 120B`,
    provider: `OpenRouter`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-08-05`),
    knowledgeCutoffDate: new Date(`2024-06-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `OpenAI's large open model`,
    fullDescription: `A large open-weight model from OpenAI. gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning and general-purpose production use cases. It activates 5.1B parameters per forward pass and is optimized to run on a single H100 GPU with native MXFP4 quantization. The model supports configurable reasoning depth, full chain-of-thought access, and native tool use, including function calling, browsing, and structured output generation.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `line`,
    features: new Set([`toolCalling`, `reasoning`, `reasoningEffort`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: `medium`,
            high: `high`
        }
    },
    defaultLanguageModelOptions: {
        temperature: .6
    },
    cost: {
        input: .13 / 1e6,
        output: .53 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 131072
        }
    },
    searchTags: [`open source`, `moe`]
}, {
    id: `gpt-4o-mini`,
    aaIdentifier: `gpt-4o-mini`,
    name: `GPT-4o-mini`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-01-04`),
    knowledgeCutoffDate: new Date(`2023-10-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Faster, less precise GPT-4o`,
    fullDescription: `Like gpt-4o, but faster. This model sacrifices some of the original GPT-4o's precision for significantly reduced latency. It accepts both text and image inputs.`,
    requiresPro: !1,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`, `toolCalling`, `nativePDFs`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .15 / 1e6,
        output: .6 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 128e3
        }
    },
    searchTags: [`general`, `coding`]
}, {
    id: `gpt-4o`,
    aaIdentifier: `gpt-4o`,
    name: `GPT-4o`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-01-04`),
    knowledgeCutoffDate: new Date(`2024-06-01`),
    retiredOn: new Date(`2025-12-31`),
    succededBy: `gpt-5.2-instant`,
    legacy: !0,
    shortDescription: `The reliable workhorse that powers millions of applications`,
    fullDescription: `GPT-4o remains the backbone of many AI applications for good reason - it's consistently capable, handles diverse tasks well, and has proven reliability. It's like the Toyota Camry of AI models - not the most exciting, but you can depend on it daily.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`, `toolCalling`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 2.5 / 1e6,
        output: 10 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 128e3
        }
    },
    searchTags: [`general`]
}, {
    id: `gpt-4.1`,
    aaIdentifier: `gpt-4-1`,
    name: `GPT-4.1`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-04-14`),
    knowledgeCutoffDate: new Date(`2024-06-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Enhanced reasoning and coding capabilities`,
    fullDescription: `GPT-4.1 brings significant improvements in code generation, instruction following, and complex reasoning. It's particularly good at software development tasks and maintains coherence over long contexts.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `toolCalling`, `nativePDFs`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 2 / 1e6,
        output: 8 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e6,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 1047576
        }
    },
    searchTags: [`coding`]
}, {
    id: `gpt-4.1-mini`,
    aaIdentifier: `gpt-4-1-mini`,
    name: `GPT-4.1 Mini`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-04-14`),
    knowledgeCutoffDate: new Date(`2024-06-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Fast and accurate mid-sized model`,
    fullDescription: `GPT-4.1 Mini is a mid-sized model delivering performance competitive with GPT-4o at substantially lower latency. It has a very large context window and scores 45.1% on hard instruction evals, 35.8% on MultiChallenge, and 84.1% on IFEval. Mini also shows strong coding ability (e.g., 31.6% on Aider's polyglot diff benchmark) and vision understanding.`,
    requiresPro: !1,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `toolCalling`, `nativePDFs`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .4 / 1e6,
        output: 1.6 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e6,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 1047576
        }
    },
    searchTags: [`coding`]
}, {
    id: `gpt-4.1-nano`,
    aaIdentifier: `gpt-4-1-nano`,
    name: `GPT-4.1 Nano`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-04-14`),
    knowledgeCutoffDate: new Date(`2024-06-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Fastest model in the GPT-4.1 series`,
    fullDescription: `For tasks that demand low latency, GPT‑4.1 nano is the fastest model in the GPT-4.1 series. It delivers exceptional performance at a small size with its 1 million token context window, and scores 80.1% on MMLU, 50.3% on GPQA, and 9.8% on Aider polyglot coding – even higher than GPT‑4o mini. It's ideal for tasks like classification or autocompletion.`,
    requiresPro: !1,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `toolCalling`, `nativePDFs`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .1 / 1e6,
        output: .4 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e6,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 1047576
        }
    },
    searchTags: [`coding`]
}, {
    id: `gpt-4.5`,
    name: `GPT-4.5`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-02-27`),
    knowledgeCutoffDate: new Date(`2023-10-01`),
    retiredOn: new Date(`2025-07-14`),
    succededBy: null,
    legacy: !0,
    shortDescription: `OpenAI's best model for writing and creative work`,
    fullDescription: `The best model for writing. Biggest model ever? Also very slow and expensive.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`, `toolCalling`]),
    apiKeySupport: Y.Required,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 0 / 1e6,
        output: 2 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 128e3
        }
    },
    searchTags: []
}, {
    id: `gpt-5-chat`,
    aaIdentifier: `gpt-5-chatgpt`,
    name: `GPT-5`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-08-07`),
    knowledgeCutoffDate: new Date(`2024-10-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Next-generation intelligence for professional work`,
    fullDescription: `GPT-5 represents a significant leap in AI capability. It excels at professional tasks, complex problem-solving, and maintaining natural conversation. The different variants (Instant, Thinking, Pro) let you choose the right tool for your specific needs.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 1.25 / 1e6,
        output: 10 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 256e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 4e5
        }
    },
    searchTags: [`chatgpt`]
}, {
    id: `gpt-5-reasoning`,
    aaIdentifier: `gpt-5`,
    name: `GPT-5 (Reasoning)`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-08-07`),
    knowledgeCutoffDate: new Date(`2024-10-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Next-generation flagship from OpenAI`,
    fullDescription: `OpenAI's latest flagship model. PhD-level intelligence at most things. This version has reasoning capabilities, and is not well suitied to general chat, but is great for complex reasoning tasks.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `reasoning`, `reasoningEffort`, `toolCalling`, `nativePDFs`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: `medium`,
            high: `high`
        }
    },
    cost: {
        input: 1.25 / 1e6,
        output: 10 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 256e3,
            maxOutputTokens: 64e3
        },
        provider: {
            maxInputTokens: 4e5
        }
    },
    searchTags: []
}, {
    id: `gpt-5-mini`,
    aaIdentifier: `gpt-5-mini`,
    name: `GPT-5 mini`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-08-07`),
    knowledgeCutoffDate: new Date(`2024-10-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Smaller, faster GPT-5 with reasoning`,
    fullDescription: `A lighter-weight GPT-5 variant optimized for speed while retaining strong reasoning and tool use.`,
    requiresPro: !1,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `toolCalling`, `reasoning`, `reasoningEffort`, `nativePDFs`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: `medium`,
            high: `high`
        }
    },
    cost: {
        input: .25 / 1e6,
        output: 2 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 256e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 4e5
        }
    },
    searchTags: []
}, {
    id: `gpt-5-nano`,
    aaIdentifier: `gpt-5-nano`,
    name: `GPT-5 nano`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-08-07`),
    knowledgeCutoffDate: new Date(`2024-10-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Fastest GPT-5 variant with reasoning`,
    fullDescription: `An ultra-fast GPT-5 variant tuned for low-latency tasks with reasoning and tool use.`,
    requiresPro: !1,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `toolCalling`, `reasoning`, `reasoningEffort`, `nativePDFs`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: `medium`,
            high: `high`
        }
    },
    cost: {
        input: .1 / 1e6,
        output: .4 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 256e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 4e5
        }
    },
    searchTags: []
}, {
    id: `gpt-5.1-instant`,
    aaIdentifier: `gpt-5-1-non-reasoning`,
    name: `GPT-5.1 (Instant)`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-11-12`),
    knowledgeCutoffDate: new Date(`2024-10-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Refined intelligence with improved capabilities`,
    fullDescription: `Building on GPT-5's foundation, 5.1 brings enhanced capabilities and better performance on complex tasks. The different variants let you choose the right tool for your specific needs.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `toolCalling`, `nativePDFs`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 1.25 / 1e6,
        output: 10 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 256e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 4e5
        }
    },
    searchTags: [`conversational`, `fast`]
}, {
    id: `gpt-5.1-thinking`,
    aaIdentifier: `gpt-5-1`,
    name: `GPT-5.1 (Reasoning)`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-11-12`),
    knowledgeCutoffDate: new Date(`2024-10-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Refined intelligence with improved reasoning`,
    fullDescription: `Building on GPT-5's foundation, 5.1 brings enhanced reasoning capabilities and better performance on complex tasks. The reasoning variants are particularly impressive for analytical work.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `toolCalling`, `reasoning`, `reasoningEffort`, `nativePDFs`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: `medium`,
            high: `high`
        }
    },
    cost: {
        input: 1.25 / 1e6,
        output: 10 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 256e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 4e5
        }
    },
    searchTags: []
}, {
    id: `gpt-5.2-instant`,
    aaIdentifier: `gpt-5-2-non-reasoning`,
    name: `GPT-5.2 (Instant)`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-12-11`),
    knowledgeCutoffDate: new Date(`2025-08-31`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `OpenAI's latest with breakthrough speed and intelligence`,
    fullDescription: `GPT-5.2 achieves something special - it's both faster and smarter than its predecessors. It excels at specialized knowledge work while maintaining conversational warmth. The speed improvements make it practical for real-time applications.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !0,
    streamChunking: `word`,
    features: new Set([`images`, `toolCalling`, `nativePDFs`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 1.75 / 1e6,
        output: 14 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 392e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 4e5
        }
    },
    searchTags: [`conversational`, `fast`]
}, {
    id: `gpt-5.2-reasoning`,
    aaIdentifier: `gpt-5-2`,
    name: `GPT-5.2 (Reasoning)`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-12-11`),
    knowledgeCutoffDate: new Date(`2025-08-31`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `GPT-5.2 with visible reasoning for complex tasks`,
    fullDescription: `GPT-5.2 achieves something special - it's both faster and smarter than its predecessors. It excels at specialized knowledge work while maintaining conversational warmth. The speed improvements make it practical for real-time applications.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `toolCalling`, `reasoning`, `reasoningEffort`, `nativePDFs`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: `medium`,
            high: `high`
        }
    },
    cost: {
        input: 1.75 / 1e6,
        output: 14 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 392e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 4e5
        }
    },
    searchTags: []
}, {
    id: `gpt-5.2-pro`,
    name: `GPT-5.2 Pro`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-12-11`),
    knowledgeCutoffDate: new Date(`2025-08-31`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Maximum precision GPT-5.2 for critical work`,
    fullDescription: `GPT-5.2 achieves something special - it's both faster and smarter than its predecessors. It excels at specialized knowledge work while maintaining conversational warmth. The speed improvements make it practical for real-time applications.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    streamChunking: `word`,
    features: new Set([`images`, `toolCalling`, `reasoning`, `reasoningEffort`, `nativePDFs`]),
    apiKeySupport: Y.Required,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `medium`,
            medium: `high`,
            high: `xhigh`
        }
    },
    cost: {
        input: 21 / 1e6,
        output: 168 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 392e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 4e5,
            maxOutputTokens: 128e3
        }
    },
    searchTags: [`coding`, `math`, `research`]
}, {
    id: `gpt-o3-mini`,
    aaIdentifier: `o3-mini`,
    name: `o3-mini`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-01-31`),
    knowledgeCutoffDate: new Date(`2023-10-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Compact reasoning specialist for methodical thinking`,
    fullDescription: `The o3 family represents OpenAI's focus on systematic reasoning. These models excel at mathematical problems, scientific analysis, and multi-step reasoning tasks. They're designed for when you need to think through problems methodically.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`, `reasoningEffort`, `toolCalling`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: `medium`,
            high: `high`
        }
    },
    cost: {
        input: 1.1 / 1e6,
        output: 4.4 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 1e5
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    searchTags: [`coding`, `math`]
}, {
    id: `gpt-o4-mini`,
    aaIdentifier: `o4-mini`,
    name: `o4-mini`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-04-16`),
    knowledgeCutoffDate: new Date(`2024-06-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Compact reasoning with impressive capability`,
    fullDescription: `Proves that you don't need massive size for sophisticated reasoning. o4-mini delivers impressive analytical capabilities while maintaining reasonable speed and cost. Perfect for applications that need reasoning power without the overhead.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`, `reasoning`, `reasoningEffort`, `toolCalling`, `nativePDFs`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: `medium`,
            high: `high`
        }
    },
    defaultLanguageModelOptions: {
        temperature: 1
    },
    cost: {
        input: 1.1 / 1e6,
        output: 4.4 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 1e5
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    searchTags: [`coding`, `math`]
}, {
    id: `o3-full`,
    aaIdentifier: `o3`,
    name: `o3`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-05-20`),
    knowledgeCutoffDate: new Date(`2024-06-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `OpenAI's full-scale reasoning powerhouse`,
    fullDescription: `The o3 family represents OpenAI's focus on systematic reasoning. These models excel at mathematical problems, scientific analysis, and multi-step reasoning tasks. They're designed for when you need to think through problems methodically.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`images`, `reasoningEffort`, `reasoning`, `toolCalling`, `nativePDFs`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: `medium`,
            high: `high`
        }
    },
    cost: {
        input: 2 / 1e6,
        output: 8 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 1e5
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    searchTags: [`coding`, `math`]
}, {
    id: `o3-pro`,
    name: `o3 Pro`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-06-07`),
    knowledgeCutoffDate: new Date(`2024-06-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Maximum reasoning power for the toughest challenges`,
    fullDescription: `When you encounter problems that require deep, systematic analysis, o3 Pro is your best bet. It uses additional compute time to work through complex challenges methodically, often achieving results that surprise even AI researchers.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`, `reasoningEffort`, `reasoning`, `nativePDFs`, `toolCalling`]),
    apiKeySupport: Y.Required,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: `medium`,
            high: `high`
        }
    },
    cost: {
        input: 20 / 1e6,
        output: 80 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 1e5
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    searchTags: [`coding`, `math`]
}, {
    id: `gpt-image-1`,
    name: `GPT ImageGen`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-04-23`),
    knowledgeCutoffDate: null,
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `OpenAI's previous image generation model`,
    fullDescription: `OpenAI's previous image generation model, using lots of crazy tech like custom tools for text and reflections. This model generates 1 image per prompt.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`images`, `imageGeneration`, `nativePDFs`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 2 / 1e6,
        output: 8 / 1e6,
        fixed: .063
    },
    limits: {
        app: {
            maxInputTokens: 1e4,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 1047576
        }
    },
    numImagesPerPrompt: 1,
    searchTags: []
}, {
    id: `gpt-image-1.5`,
    name: `GPT ImageGen 1.5`,
    provider: `OpenAI`,
    developer: `OpenAI`,
    addedOn: new Date(`2025-12-16`),
    knowledgeCutoffDate: null,
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `OpenAI's latest and greatest image generation model`,
    fullDescription: `OpenAI's latest and greatest image generation model, using lots of crazy tech like custom tools for text and reflections. This model generates 1 image per prompt.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`images`, `imageGeneration`, `nativePDFs`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 2 / 1e6,
        output: 8 / 1e6,
        fixed: .05
    },
    limits: {
        app: {
            maxInputTokens: 1e4,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 1047576
        }
    },
    numImagesPerPrompt: 1,
    searchTags: []
}, {
    id: `sonoma-sky-alpha`,
    name: `Sonoma Sky Alpha`,
    provider: `OpenRouter`,
    developer: `Stealth`,
    addedOn: new Date(`2025-09-05`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: new Date(`2025-09-19`),
    succededBy: `grok-v4-fast`,
    legacy: !0,
    shortDescription: `New Stealth model with a 2 million token context window`,
    fullDescription: `This is a cloaked model provided to the community to gather feedback. A maximally intelligent general-purpose frontier model with a 2 million token context window. Supports image inputs and parallel tool calling.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 0 / 1e6,
        output: 0 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e5,
            maxOutputTokens: 1e5
        },
        provider: {
            maxInputTokens: 2e6
        }
    },
    consent: {
        required: !0,
        description: k$(`openrouter/sonoma-sky-alpha`, !0)
    },
    searchTags: []
}, {
    id: `sonoma-dusk-alpha`,
    name: `Sonoma Dusk Alpha`,
    provider: `OpenRouter`,
    developer: `Stealth`,
    addedOn: new Date(`2025-09-05`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: new Date(`2025-09-19`),
    succededBy: `grok-v4-fast-reasoning`,
    legacy: !0,
    shortDescription: `New Stealth model with a 2 million token context window`,
    fullDescription: `This is a cloaked model provided to the community to gather feedback. A fast and intelligent general-purpose frontier model with a 2 million token context window. Supports image inputs and parallel tool calling.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 0 / 1e6,
        output: 0 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e5,
            maxOutputTokens: 1e5
        },
        provider: {
            maxInputTokens: 2e6
        }
    },
    consent: {
        required: !0,
        description: k$(`openrouter/sonoma-dusk-alpha`, !0)
    },
    searchTags: []
}, {
    id: `horizon-alpha`,
    name: `Horizon Alpha`,
    provider: `OpenRouter`,
    developer: `Stealth`,
    addedOn: new Date(`2025-07-30`),
    knowledgeCutoffDate: new Date(`2024-10-01`),
    retiredOn: new Date(`2025-08-02`),
    succededBy: `horizon-beta`,
    legacy: !0,
    shortDescription: `Prerelease model`,
    fullDescription: `This is a cloaked model provided to the community to gather feedback. It's geared toward real world use cases, including programming. NOTE: All prompts and completions for this model are logged by the upstream provider.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`, `toolCalling`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 0 / 1e6,
        output: 0 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 256e3,
            maxOutputTokens: 128e3
        },
        provider: {
            maxInputTokens: 256e3
        }
    },
    consent: {
        required: !0,
        description: k$(`openrouter/horizon-alpha`, !0)
    },
    searchTags: []
}, {
    id: `horizon-beta`,
    name: `Horizon Beta`,
    provider: `OpenRouter`,
    developer: `Stealth`,
    addedOn: new Date(`2025-08-01`),
    knowledgeCutoffDate: new Date(`2024-10-01`),
    retiredOn: new Date(`2025-08-07`),
    succededBy: `gpt-oss-20b`,
    legacy: !0,
    shortDescription: `Prerelease model`,
    fullDescription: `This is a cloaked model provided to the community to gather feedback. It's geared toward real world use cases, including programming. NOTE: All prompts and completions for this model are logged by the upstream provider.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`, `toolCalling`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 0 / 1e6,
        output: 0 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 256e3,
            maxOutputTokens: 128e3
        },
        provider: {
            maxInputTokens: 256e3
        }
    },
    consent: {
        required: !0,
        description: k$(`openrouter/horizon-beta`, !0)
    },
    searchTags: []
}, {
    id: `quasar-alpha`,
    name: `Quasar Alpha (gpt-4.1 preview)`,
    provider: `OpenRouter`,
    developer: `Stealth`,
    addedOn: new Date(`2025-04-05`),
    knowledgeCutoffDate: null,
    retiredOn: new Date(`2025-04-10`),
    succededBy: `gpt-4.1`,
    legacy: !0,
    shortDescription: `Prerelease foundation model`,
    fullDescription: `This is a cloaked model provided to the community to gather feedback. It's a powerful, all-purpose model supporting long-context tasks, including code generation. NOTE: All prompts and completions for this model are logged by OpenRouter as well as the upstream provider.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 0 / 1e6,
        output: 0 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e6,
            maxOutputTokens: 32e3
        },
        provider: {
            maxInputTokens: 1e6
        }
    },
    consent: {
        required: !0,
        description: k$(`openrouter/quasar-alpha`, !0)
    },
    searchTags: []
}, {
    id: `optimus-alpha`,
    name: `Optimus Alpha (gpt-4.1 preview)`,
    provider: `OpenRouter`,
    developer: `Stealth`,
    addedOn: new Date(`2025-04-10`),
    knowledgeCutoffDate: null,
    retiredOn: new Date(`2025-04-14`),
    succededBy: null,
    legacy: !0,
    shortDescription: `Prerelease model`,
    fullDescription: `This is a cloaked model provided to the community to gather feedback. It's geared toward real world use cases, including programming. NOTE: All prompts and completions for this model are logged by OpenRouter as well as the upstream provider.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`]),
    apiKeySupport: Y.None,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 0 / 1e6,
        output: 0 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e6,
            maxOutputTokens: 32e3
        },
        provider: {
            maxInputTokens: 1e6
        }
    },
    consent: {
        required: !0,
        description: k$(`openrouter/optimus-alpha`, !0)
    },
    searchTags: []
}, {
    id: `polaris-alpha`,
    name: `Polaris Alpha`,
    provider: `OpenRouter`,
    developer: `Stealth`,
    addedOn: new Date(`2025-11-06`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: new Date(`2025-11-13`),
    succededBy: `gpt-5.1-instant`,
    legacy: !0,
    shortDescription: `New powerful, general-purpose Stealth model`,
    fullDescription: `This is a cloaked model provided to the community to gather feedback. A powerful, general-purpose model that excels across real-world tasks, with standout performance in coding, tool calling, and instruction following.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 0 / 1e6,
        output: 0 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 1e5,
            maxOutputTokens: 1e5
        },
        provider: {
            maxInputTokens: 256e3
        }
    },
    consent: {
        required: !0,
        description: k$(`openrouter/polaris-alpha`, !0)
    },
    searchTags: []
}, {
    id: `sherlock-dash-alpha`,
    name: `Sherlock Dash Alpha`,
    provider: `OpenRouter`,
    developer: `Stealth`,
    addedOn: new Date(`2025-11-15`),
    knowledgeCutoffDate: new Date(`2025-07-01`),
    retiredOn: new Date(`2025-11-19`),
    succededBy: `grok-4.1-fast`,
    legacy: !0,
    shortDescription: `New stealth model added to OpenRouter`,
    fullDescription: `Sherlock Dash Alpha is a stealth language model`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`, `fast`]),
    apiKeySupport: `optional`,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 0 / 1e6,
        output: 0 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 4e5,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 184e4
        }
    },
    consent: {
        required: !1,
        description: k$(`openrouter/sherlock-dash-alpha`, !1)
    },
    searchTags: [`stealth`, `code`]
}, {
    id: `sherlock-think-alpha`,
    name: `Sherlock Think Alpha`,
    provider: `OpenRouter`,
    developer: `Stealth`,
    addedOn: new Date(`2025-11-15`),
    knowledgeCutoffDate: new Date(`2025-07-01`),
    retiredOn: new Date(`2025-11-19`),
    succededBy: `grok-4.1-fast-reasoning`,
    legacy: !0,
    shortDescription: `New stealth model added to OpenRouter`,
    fullDescription: `Sherlock Think Alpha is a stealth language model`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`, `reasoning`, `fast`]),
    apiKeySupport: `optional`,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: 0 / 1e6,
        output: 0 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 4e5,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 184e4
        }
    },
    consent: {
        required: !1,
        description: k$(`openrouter/sherlock-think-alpha`, !1)
    },
    searchTags: [`stealth`, `code`]
}, {
    id: `bert-nebulon-alpha`,
    name: `Bert Nebulon Alpha`,
    provider: `OpenRouter`,
    developer: `Stealth`,
    addedOn: new Date(`2025-11-24`),
    knowledgeCutoffDate: new Date(`2025-01-01`),
    retiredOn: new Date(`2025-12-02`),
    succededBy: null,
    legacy: !0,
    shortDescription: `Stealth Model`,
    fullDescription: `This is a cloaked model provided to the community to gather feedback. A general-purpose multimodal model (text/image in, text out) designed for reliability, long-context comprehension, and adaptive logic. It is engineered for production-grade assistants, retrieval-augmented systems, science workloads, and complex workflows. Note: All prompts and completions for this model are logged by the provider and may be used to improve the model.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 0 / 1e6,
        output: 0 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 25e4,
            maxOutputTokens: 25e4
        },
        provider: {
            maxInputTokens: 256e3
        }
    },
    consent: {
        required: !0,
        description: k$(`openrouter/bert-nebulon-alpha`, !0)
    },
    searchTags: []
}, {
    id: `pony-alpha`,
    name: `Pony Alpha`,
    provider: `OpenRouter`,
    developer: `Stealth`,
    addedOn: new Date(`2026-02-06`),
    knowledgeCutoffDate: null,
    retiredOn: new Date(`2026-02-11`),
    succededBy: `glm-5-thinking`,
    legacy: !1,
    shortDescription: `Stealth model with strong coding and reasoning`,
    fullDescription: `Pony is a cutting-edge foundation model with strong performance in coding, agentic workflows, reasoning, and roleplay, making it well suited for hands-on coding and real-world use. Note: All prompts and completions for this model are logged by the provider and may be used to improve the model.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`, `reasoning`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: 0 / 1e6,
        output: 0 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 131e3
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    consent: {
        required: !0,
        description: k$(`openrouter/pony-alpha`, !0)
    },
    searchTags: [`stealth`, `code`, `reasoning`]
}, {
    id: `aurora-alpha`,
    name: `Aurora Alpha`,
    provider: `OpenRouter`,
    developer: `Stealth`,
    addedOn: new Date(`2026-02-09`),
    knowledgeCutoffDate: null,
    retiredOn: new Date(`2026-02-20`),
    succededBy: null,
    legacy: !1,
    shortDescription: `Fast stealth reasoning model for coding and agentic workflows`,
    fullDescription: `Aurora Alpha is a reasoning-enabled model designed for speed, built for coding assistants, real-time conversational applications, and agentic workflows. Note: All prompts and completions for this model are logged by the provider and may be used to improve the model.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`fast`, `toolCalling`, `reasoning`, `reasoningEffort`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: `medium`,
            high: `high`
        }
    },
    cost: {
        input: 0 / 1e6,
        output: 0 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 5e4
        },
        provider: {
            maxInputTokens: 128e3
        }
    },
    consent: {
        required: !0,
        description: k$(`openrouter/aurora-alpha`, !0)
    },
    searchTags: [`stealth`, `fast`, `reasoning`]
}, {
    id: `glm-4.5`,
    aaIdentifier: `glm-4.5`,
    name: `GLM 4.5`,
    provider: `OpenRouter`,
    developer: `Z.ai`,
    addedOn: new Date(`2025-07-28`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Open-weight MoE model excelling at coding`,
    fullDescription: `GLM-4.5 is an open-weight MoE model that competes with o3 and Claude 4 while being smaller and stronger than DeepSeek-R1 and Kimi K2. It excels at coding and is trained using the Muon architecture, the same one to train Kimi K2.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        maxOutputTokens: void 0
    },
    cost: {
        input: .59 / 1e6,
        output: 2.15 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 96e3
        },
        provider: {
            maxInputTokens: 128e3
        }
    },
    searchTags: [`open source`, `moe`, `coding`]
}, {
    id: `glm-4.5-thinking`,
    name: `GLM 4.5 (Thinking)`,
    provider: `OpenRouter`,
    developer: `Z.ai`,
    addedOn: new Date(`2025-07-28`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Open-weight MoE model with step-by-step reasoning for complex tasks`,
    fullDescription: `GLM-4.5 is an open-weight MoE model that competes with o3 and Claude 4 while being smaller and stronger than DeepSeek-R1 and Kimi K2. It excels at reasoning and coding and is trained using the Muon architecture, the same one to train Kimi K2. This variant has reasoning mode enabled for step-by-step thinking.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    defaultLanguageModelOptions: {
        maxOutputTokens: void 0
    },
    cost: {
        input: .59 / 1e6,
        output: 2.15 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 96e3
        },
        provider: {
            maxInputTokens: 128e3
        }
    },
    searchTags: [`open source`, `moe`, `coding`]
}, {
    id: `glm-4.5v`,
    aaIdentifier: `glm-4-5v`,
    name: `GLM 4.5V`,
    provider: `OpenRouter`,
    developer: `Z.ai`,
    addedOn: new Date(`2025-08-19`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Multimodal MoE model for visual understanding and coding tasks`,
    fullDescription: `GLM-4.5V is an open-weight MoE model that competes with o3 and Claude 4 while being smaller and stronger than DeepSeek-R1 and Kimi K2. It excels at coding and is trained using the Muon architecture, the same one to train Kimi K2.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`, `images`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        maxOutputTokens: void 0
    },
    cost: {
        input: .6 / 1e6,
        output: 1.8 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 65500,
            maxOutputTokens: 65500
        },
        provider: {
            maxInputTokens: 65500
        }
    },
    searchTags: [`open source`, `vision`, `coding`]
}, {
    id: `glm-4.5v-thinking`,
    aaIdentifier: `glm-4-5v-reasoning`,
    name: `GLM 4.5V (Thinking)`,
    provider: `OpenRouter`,
    developer: `Z.ai`,
    addedOn: new Date(`2025-08-19`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Multimodal MoE model with reasoning for visual and coding tasks`,
    fullDescription: `GLM-4.5V is an open-weight MoE model that competes with o3 and Claude 4 while being smaller and stronger than DeepSeek-R1 and Kimi K2. It excels at reasoning and coding and is trained using the Muon architecture, the same one to train Kimi K2. This variant has reasoning mode enabled for step-by-step thinking.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`, `toolCalling`, `images`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    defaultLanguageModelOptions: {
        maxOutputTokens: void 0
    },
    cost: {
        input: .6 / 1e6,
        output: 1.8 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 65500,
            maxOutputTokens: 65500
        },
        provider: {
            maxInputTokens: 65500
        }
    },
    searchTags: [`open source`, `moe`, `coding`]
}, {
    id: `glm-4.5-air`,
    aaIdentifier: `glm-4-5-air`,
    name: `GLM 4.5 Air`,
    provider: `OpenRouter`,
    developer: `Z.ai`,
    addedOn: new Date(`2025-08-19`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Lightweight variant optimized for coding`,
    fullDescription: `GLM-4.5-Air is the lightweight variant of GLM-4.5, an open-weight MoE model that competes with o3 and Claude 4 while being smaller and stronger than DeepSeek-R1 and Kimi K2. It excels at coding and is trained using the Muon architecture, the same one to train Kimi K2.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        maxOutputTokens: void 0
    },
    cost: {
        input: .17 / 1e6,
        output: 1 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 96e3
        },
        provider: {
            maxInputTokens: 128e3
        }
    },
    searchTags: [`open source`, `moe`, `coding`]
}, {
    id: `glm-4.5-air-thinking`,
    name: `GLM 4.5 Air (Thinking)`,
    provider: `OpenRouter`,
    developer: `Z.ai`,
    addedOn: new Date(`2025-08-19`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Lightweight variant with reasoning for step-by-step problem solving`,
    fullDescription: `GLM-4.5 Air is the lightweight variant of GLM-4.5, an open-weight MoE model that competes with o3 and Claude 4 while being smaller and stronger than DeepSeek-R1 and Kimi K2. It excels at reasoning and coding and is trained using the Muon architecture, the same one to train Kimi K2. This variant has reasoning mode enabled for step-by-step thinking.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    defaultLanguageModelOptions: {
        maxOutputTokens: void 0
    },
    cost: {
        input: .17 / 1e6,
        output: 1 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 96e3
        },
        provider: {
            maxInputTokens: 128e3
        }
    },
    searchTags: [`open source`, `moe`, `coding`]
}, {
    id: `glm-4.6`,
    aaIdentifier: `glm-4-6`,
    name: `GLM 4.6`,
    provider: `OpenRouter`,
    developer: `Z.ai`,
    addedOn: new Date(`2025-09-30`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `MoE model with superior coding capabilities`,
    fullDescription: `Compared with GLM-4.5, this generation brings several key improvements - Longer context window: The context window has been expanded from 128K to 200K tokens, enabling the model to handle more complex tasks. Superior coding performance: The model achieves higher scores on code benchmarks and demonstrates better real-world performance in applications such as Claude Code、Cline、Roo Code and Kilo Code, including improvements in generating visually polished front-end pages. Advanced problem-solving: GLM-4.6 shows a clear improvement in analytical performance and supports tool use during inference, leading to stronger overall capability. Enhanced tool use: GLM-4.6 exhibits stronger performance in tool using and search-based workflows, and integrates more effectively within frameworks. Refined writing: Better aligns with human preferences in style and readability, and performs more naturally in role-playing scenarios.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .49 / 1e6,
        output: 1.99 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 96e3
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    searchTags: [`open source`, `moe`, `coding`]
}, {
    id: `glm-4.6-thinking`,
    aaIdentifier: `glm-4-6-reasoning`,
    name: `GLM 4.6 (Thinking)`,
    provider: `OpenRouter`,
    developer: `Z.ai`,
    addedOn: new Date(`2025-09-30`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `MoE model with reasoning for complex tasks`,
    fullDescription: `Compared with GLM-4.5, this generation brings several key improvements - Longer context window: The context window has been expanded from 128K to 200K tokens, enabling the model to handle more complex tasks. Superior coding performance: The model achieves higher scores on code benchmarks and demonstrates better real-world performance in applications such as Claude Code、Cline、Roo Code and Kilo Code, including improvements in generating visually polished front-end pages. Advanced reasoning: GLM-4.6 shows a clear improvement in reasoning performance and supports tool use during inference, leading to stronger overall capability. Enhanced tool use: GLM-4.6 exhibits stronger performance in tool using and search-based workflows, and integrates more effectively within frameworks. Refined writing: Better aligns with human preferences in style and readability, and performs more naturally in role-playing scenarios.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: .49 / 1e6,
        output: 1.99 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 96e3
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    searchTags: [`open source`, `moe`, `coding`]
}, {
    id: `glm-4.6v`,
    aaIdentifier: `glm-4-6v`,
    name: `GLM 4.6V`,
    provider: `OpenRouter`,
    developer: `Z.ai`,
    addedOn: new Date(`2025-12-08`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Multimodal model for visual understanding, documents, and UI reconstruction`,
    fullDescription: `GLM-4.6V is a large multimodal model designed for high-fidelity visual understanding and long-context reasoning across images, documents, and mixed media. It supports up to 128K tokens, processes complex page layouts and charts directly as visual inputs, and integrates native multimodal function calling to connect perception with downstream tool execution. The model also enables interleaved image-text generation and UI reconstruction workflows, including screenshot-to-HTML synthesis and iterative visual editing.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`images`, `nativePDFs`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    defaultLanguageModelOptions: {
        maxOutputTokens: void 0
    },
    cost: {
        input: .3 / 1e6,
        output: .9 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 24576
        },
        provider: {
            maxInputTokens: 131072
        }
    },
    searchTags: [`open source`, `vision`, `coding`]
}, {
    id: `glm-4.7`,
    name: `GLM 4.7`,
    provider: `OpenRouter`,
    developer: `Z.ai`,
    addedOn: new Date(`2025-12-22`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Flagship model with enhanced programming and stable multi-step execution`,
    fullDescription: `GLM-4.7 is Z.AI's latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step execution. It demonstrates significant improvements in executing complex tasks while delivering more natural conversational experiences and superior front-end aesthetics.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .5 / 1e6,
        output: 2.15 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 96e3
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    searchTags: [`open source`, `moe`, `coding`]
}, {
    id: `glm-4.7-thinking`,
    name: `GLM 4.7 (Thinking)`,
    provider: `OpenRouter`,
    developer: `Z.ai`,
    addedOn: new Date(`2025-12-22`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Flagship model with reasoning for complex programming tasks`,
    fullDescription: `GLM-4.7 is Z.AI's latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step reasoning/execution. It demonstrates significant improvements in executing complex tasks while delivering more natural conversational experiences and superior front-end aesthetics. This variant has reasoning mode enabled for step-by-step thinking.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: .5 / 1e6,
        output: 2.15 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 96e3
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    searchTags: [`open source`, `moe`, `coding`]
}, {
    id: `glm-5`,
    name: `GLM 5`,
    provider: `OpenRouter`,
    developer: `Z.ai`,
    addedOn: new Date(`2026-02-11`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Flagship model with enhanced programming and stable multi-step execution`,
    fullDescription: `GLM-5 is Z.ai’s flagship open-source foundation model engineered for complex systems design and long-horizon agent workflows. Built for expert developers, it delivers production-grade performance on large-scale programming tasks, rivaling leading closed-source models. With advanced agentic planning, deep backend reasoning, and iterative self-correction, GLM-5 moves beyond code generation to full-system construction and autonomous execution.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .99 / 1e6,
        output: 3.14 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 128e3
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    searchTags: [`open source`, `moe`, `coding`]
}, {
    id: `glm-5-thinking`,
    name: `GLM 5 (Thinking)`,
    provider: `OpenRouter`,
    developer: `Z.ai`,
    addedOn: new Date(`2026-02-11`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Flagship model with reasoning for complex programming tasks`,
    fullDescription: `GLM-5 is Z.ai’s flagship open-source foundation model engineered for complex systems design and long-horizon agent workflows. Built for expert developers, it delivers production-grade performance on large-scale programming tasks, rivaling leading closed-source models. With advanced agentic planning, deep backend reasoning, and iterative self-correction, GLM-5 moves beyond code generation to full-system construction and autonomous execution.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: .99 / 1e6,
        output: 3.14 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 2e5,
            maxOutputTokens: 96e3
        },
        provider: {
            maxInputTokens: 2e5
        }
    },
    searchTags: [`open source`, `moe`, `coding`]
}, {
    id: `grok-v4`,
    aaIdentifier: `grok-4`,
    name: `Grok 4`,
    provider: `OpenRouter`,
    developer: `xAI`,
    addedOn: new Date(`2025-07-09`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `xAI's latest and greatest model`,
    fullDescription: `xAI's flagship model that breaks records on lots of benchmarks (allegedly). Possesses deep domain knowledge in finance, healthcare, law, and science.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`, `reasoning`, `images`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: 3 / 1e6,
        output: 15 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 8192
        },
        provider: {
            maxInputTokens: 256e3
        }
    },
    searchTags: [`coding`]
}, {
    id: `grok-v3`,
    aaIdentifier: `grok-3`,
    name: `Grok 3`,
    provider: `OpenRouter`,
    developer: `xAI`,
    addedOn: new Date(`2025-04-10`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `xAI's last-gen model that doesn't think and costs too much`,
    fullDescription: `xAI's flagship model that excels at data extraction, coding, and text summarization. Possesses deep domain knowledge in finance, healthcare, law, and science.`,
    requiresPro: !0,
    disabled: !1,
    premium: !0,
    modelPickerDefault: !1,
    features: new Set([`toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: 3 / 1e6,
        output: 15 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 8192
        },
        provider: {
            maxInputTokens: 131072
        }
    },
    searchTags: [`coding`]
}, {
    id: `grok-v3-mini`,
    aaIdentifier: `grok-3-mini-reasoning`,
    name: `Grok 3 Mini`,
    provider: `OpenRouter`,
    developer: `xAI`,
    addedOn: new Date(`2025-04-10`),
    knowledgeCutoffDate: new Date(`2024-11-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `xAI's last-gen model that thinks for cheap`,
    fullDescription: `A lightweight model that thinks before responding. Great for simple or logic-based tasks that do not require deep domain knowledge.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`reasoning`, `reasoningEffort`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Levels,
        levels: {
            low: `low`,
            medium: void 0,
            high: `high`
        }
    },
    cost: {
        input: .45 / 1e6,
        output: 2.25 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 8192
        },
        provider: {
            maxInputTokens: 131072
        }
    },
    searchTags: []
}, {
    id: `grok-v4-fast`,
    aaIdentifier: `grok-4-fast`,
    name: `Grok 4 Fast`,
    provider: `OpenRouter`,
    developer: `xAI`,
    addedOn: new Date(`2025-09-19`),
    knowledgeCutoffDate: new Date(`2024-12-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Faster and cheaper version of Grok v4`,
    fullDescription: `Grok 4 Fast is xAI's latest multimodal model with SOTA cost-efficiency and a 2M token context window.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`fast`, `images`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .2 / 1e6,
        output: .5 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 2e6
        }
    },
    searchTags: []
}, {
    id: `grok-v4-fast-reasoning`,
    aaIdentifier: `grok-4-fast-reasoning`,
    name: `Grok 4 Fast (Reasoning)`,
    provider: `OpenRouter`,
    developer: `xAI`,
    addedOn: new Date(`2025-09-19`),
    knowledgeCutoffDate: new Date(`2024-12-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !0,
    shortDescription: `Faster and cheaper version of Grok v4. Reasoning enabled.`,
    fullDescription: `Grok 4 Fast is xAI's latest multimodal model with SOTA cost-efficiency and a 2M token context window.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`fast`, `images`, `reasoning`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: .2 / 1e6,
        output: .5 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 2e6
        }
    },
    searchTags: []
}, {
    id: `grok-4.1-fast`,
    aaIdentifier: `grok-4-1-fast`,
    name: `Grok 4.1 Fast`,
    provider: `OpenRouter`,
    developer: `xAI`,
    addedOn: new Date(`2025-11-19`),
    knowledgeCutoffDate: new Date(`2025-07-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Faster and cheaper version of Grok v4.1`,
    fullDescription: `Grok 4.1 Fast is xAI's latest multimodal model with SOTA cost-efficiency and a 2M token context window.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !1,
    features: new Set([`fast`, `images`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Disabled
    },
    cost: {
        input: .2 / 1e6,
        output: .5 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 2e6
        }
    },
    searchTags: []
}, {
    id: `grok-4.1-fast-reasoning`,
    aaIdentifier: `grok-4-1-fast-reasoning`,
    name: `Grok 4.1 Fast (Reasoning)`,
    provider: `OpenRouter`,
    developer: `xAI`,
    addedOn: new Date(`2025-11-19`),
    knowledgeCutoffDate: new Date(`2025-07-01`),
    retiredOn: null,
    succededBy: null,
    legacy: !1,
    shortDescription: `Faster and cheaper version of Grok v4.1. Reasoning enabled.`,
    fullDescription: `Grok 4.1 Fast is xAI's latest multimodal model with SOTA cost-efficiency and a 2M token context window.`,
    requiresPro: !0,
    disabled: !1,
    premium: !1,
    modelPickerDefault: !0,
    features: new Set([`fast`, `images`, `reasoning`, `toolCalling`]),
    apiKeySupport: Y.Optional,
    reasoningConfiguration: {
        _tag: X.Enabled
    },
    cost: {
        input: .2 / 1e6,
        output: .5 / 1e6
    },
    limits: {
        app: {
            maxInputTokens: 128e3,
            maxOutputTokens: 16384
        },
        provider: {
            maxInputTokens: 2e6
        }
    },
    searchTags: []
}]