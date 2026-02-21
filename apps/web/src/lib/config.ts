export type Model = {
    slug: string;
    intelligenceIndex: number;
    codingIndex: number | null;
    mathIndex: number | null;
    mmluPro: number;
    gpqa: number;
    livecodebench: number;
    scicode: number;
    math500: number | null;
    aime: number | null;
    pricing: {
        price_1m_blended_3_to_1: number;
        price_1m_input_tokens: number;
        price_1m_output_tokens: number;
    }
}

export type Models = {
    [key: string]: Model;
}

export const models: Models =
{
    "qwen3-235b-thinking-2507": {
        "slug": "qwen3-235b-a22b-instruct-2507-reasoning",
        "intelligenceIndex": 29.3,
        "codingIndex": 22.6,
        "mathIndex": 91,
        "mmluPro": 0.843,
        "gpqa": 0.79,
        "livecodebench": 0.788,
        "scicode": 0.424,
        "math500": 0.984,
        "aime": 0.94,
        "pricing": {
            "price_1m_blended_3_to_1": 2.625,
            "price_1m_input_tokens": 0.7,
            "price_1m_output_tokens": 8.4
        }
    },
    "qwen3-235b-2507": {
        "slug": "qwen3-235b-a22b-instruct-2507",
        "intelligenceIndex": 24.5,
        "codingIndex": 21.4,
        "mathIndex": 71.7,
        "mmluPro": 0.828,
        "gpqa": 0.753,
        "livecodebench": 0.524,
        "scicode": 0.36,
        "math500": 0.98,
        "aime": 0.717,
        "pricing": {
            "price_1m_blended_3_to_1": 1.225,
            "price_1m_input_tokens": 0.7,
            "price_1m_output_tokens": 2.8
        }
    },
    "claude-3.5": {
        "slug": "claude-35-sonnet",
        "intelligenceIndex": 15.9,
        "codingIndex": 30.2,
        "mathIndex": null,
        "mmluPro": 0.772,
        "gpqa": 0.599,
        "livecodebench": 0.381,
        "scicode": 0.366,
        "math500": 0.771,
        "aime": 0.157,
        "pricing": {
            "price_1m_blended_3_to_1": 6,
            "price_1m_input_tokens": 3,
            "price_1m_output_tokens": 15
        }
    },
    "claude-3.7": {
        "slug": "claude-3-7-sonnet",
        "intelligenceIndex": 30.5,
        "codingIndex": 25.8,
        "mathIndex": 21,
        "mmluPro": 0.803,
        "gpqa": 0.656,
        "livecodebench": 0.394,
        "scicode": 0.376,
        "math500": 0.85,
        "aime": 0.223,
        "pricing": {
            "price_1m_blended_3_to_1": 6,
            "price_1m_input_tokens": 3,
            "price_1m_output_tokens": 15
        }
    },
    "claude-3.7-reasoning": {
        "slug": "claude-3-7-sonnet-thinking",
        "intelligenceIndex": 34.4,
        "codingIndex": 26.7,
        "mathIndex": 56.3,
        "mmluPro": 0.837,
        "gpqa": 0.772,
        "livecodebench": 0.473,
        "scicode": 0.403,
        "math500": 0.947,
        "aime": 0.487,
        "pricing": {
            "price_1m_blended_3_to_1": 6,
            "price_1m_input_tokens": 3,
            "price_1m_output_tokens": 15
        }
    },
    "claude-4-opus": {
        "slug": "claude-4-opus-thinking",
        "intelligenceIndex": 27.4,
        "codingIndex": 32.7,
        "mathIndex": 73.3,
        "mmluPro": 0.873,
        "gpqa": 0.796,
        "livecodebench": 0.636,
        "scicode": 0.398,
        "math500": 0.982,
        "aime": 0.757,
        "pricing": {
            "price_1m_blended_3_to_1": 30,
            "price_1m_input_tokens": 15,
            "price_1m_output_tokens": 75
        }
    },
    "claude-4-sonnet": {
        "slug": "claude-4-sonnet",
        "intelligenceIndex": 32.6,
        "codingIndex": 29.4,
        "mathIndex": 38,
        "mmluPro": 0.837,
        "gpqa": 0.683,
        "livecodebench": 0.449,
        "scicode": 0.373,
        "math500": 0.934,
        "aime": 0.407,
        "pricing": {
            "price_1m_blended_3_to_1": 6,
            "price_1m_input_tokens": 3,
            "price_1m_output_tokens": 15
        }
    },
    "claude-4-sonnet-reasoning": {
        "slug": "claude-4-sonnet-thinking",
        "intelligenceIndex": 38.4,
        "codingIndex": 33.2,
        "mathIndex": 74.3,
        "mmluPro": 0.842,
        "gpqa": 0.777,
        "livecodebench": 0.655,
        "scicode": 0.4,
        "math500": 0.991,
        "aime": 0.773,
        "pricing": {
            "price_1m_blended_3_to_1": 6,
            "price_1m_input_tokens": 3,
            "price_1m_output_tokens": 15
        }
    },
    "claude-4.5-sonnet": {
        "slug": "claude-4-5-sonnet",
        "intelligenceIndex": 36.6,
        "codingIndex": 32.2,
        "mathIndex": 37,
        "mmluPro": 0.86,
        "gpqa": 0.727,
        "livecodebench": 0.59,
        "scicode": 0.428,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 6,
            "price_1m_input_tokens": 3,
            "price_1m_output_tokens": 15
        }
    },
    "claude-4.5-sonnet-reasoning": {
        "slug": "claude-4-5-sonnet-thinking",
        "intelligenceIndex": 42.4,
        "codingIndex": 37.1,
        "mathIndex": 88,
        "mmluPro": 0.875,
        "gpqa": 0.834,
        "livecodebench": 0.714,
        "scicode": 0.447,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 6,
            "price_1m_input_tokens": 3,
            "price_1m_output_tokens": 15
        }
    },
    "claude-4.1-opus": {
        "slug": "claude-4-1-opus-thinking",
        "intelligenceIndex": 31.9,
        "codingIndex": 35.1,
        "mathIndex": 80.3,
        "mmluPro": 0.88,
        "gpqa": 0.809,
        "livecodebench": 0.654,
        "scicode": 0.409,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 30,
            "price_1m_input_tokens": 15,
            "price_1m_output_tokens": 75
        }
    },
    "claude-4.5-haiku": {
        "slug": "claude-4-5-haiku",
        "intelligenceIndex": 30.5,
        "codingIndex": 28.5,
        "mathIndex": 39,
        "mmluPro": 0.8,
        "gpqa": 0.646,
        "livecodebench": 0.511,
        "scicode": 0.344,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 2,
            "price_1m_input_tokens": 1,
            "price_1m_output_tokens": 5
        }
    },
    "claude-4.5-haiku-reasoning": {
        "slug": "claude-4-5-haiku-reasoning",
        "intelligenceIndex": 36.6,
        "codingIndex": 31.4,
        "mathIndex": 83.7,
        "mmluPro": 0.76,
        "gpqa": 0.672,
        "livecodebench": 0.615,
        "scicode": 0.433,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 2,
            "price_1m_input_tokens": 1,
            "price_1m_output_tokens": 5
        }
    },
    "claude-4.5-opus": {
        "slug": "claude-opus-4-5-thinking",
        "intelligenceIndex": 49.1,
        "codingIndex": 45.8,
        "mathIndex": 91.3,
        "mmluPro": 0.895,
        "gpqa": 0.866,
        "livecodebench": 0.871,
        "scicode": 0.495,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 10,
            "price_1m_input_tokens": 5,
            "price_1m_output_tokens": 25
        }
    },
    "deepseek-v3.1": {
        "slug": "deepseek-v3-1",
        "intelligenceIndex": 27.6,
        "codingIndex": 27.4,
        "mathIndex": 49.7,
        "mmluPro": 0.833,
        "gpqa": 0.735,
        "livecodebench": 0.577,
        "scicode": 0.367,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.834,
            "price_1m_input_tokens": 0.555,
            "price_1m_output_tokens": 1.67
        }
    },
    "deepseek-v3.1-thinking": {
        "slug": "deepseek-v3-1-reasoning",
        "intelligenceIndex": 27.9,
        "codingIndex": 29.1,
        "mathIndex": 89.7,
        "mmluPro": 0.851,
        "gpqa": 0.779,
        "livecodebench": 0.784,
        "scicode": 0.391,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.855,
            "price_1m_input_tokens": 0.58,
            "price_1m_output_tokens": 1.68
        }
    },
    "deepseek-v3.1-terminus": {
        "slug": "deepseek-v3-1-terminus",
        "intelligenceIndex": 27.9,
        "codingIndex": 30.5,
        "mathIndex": 53.7,
        "mmluPro": 0.836,
        "gpqa": 0.751,
        "livecodebench": 0.529,
        "scicode": 0.321,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.8,
            "price_1m_input_tokens": 0.4,
            "price_1m_output_tokens": 1.68
        }
    },
    "deepseek-v3.1-terminus-thinking": {
        "slug": "deepseek-v3-1-terminus-reasoning",
        "intelligenceIndex": 33.4,
        "codingIndex": 32.5,
        "mathIndex": 89.7,
        "mmluPro": 0.851,
        "gpqa": 0.792,
        "livecodebench": 0.798,
        "scicode": 0.406,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.8,
            "price_1m_input_tokens": 0.4,
            "price_1m_output_tokens": 2
        }
    },
    "deepseek-v-3.2": {
        "slug": "deepseek-v3-2",
        "intelligenceIndex": 31.8,
        "codingIndex": 33.2,
        "mathIndex": 59,
        "mmluPro": 0.837,
        "gpqa": 0.751,
        "livecodebench": 0.593,
        "scicode": 0.387,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.315,
            "price_1m_input_tokens": 0.28,
            "price_1m_output_tokens": 0.42
        }
    },
    "deepseek-v-3.2-thinking": {
        "slug": "deepseek-v3-2-reasoning",
        "intelligenceIndex": 41.2,
        "codingIndex": 35.2,
        "mathIndex": 92,
        "mmluPro": 0.862,
        "gpqa": 0.84,
        "livecodebench": 0.862,
        "scicode": 0.389,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.315,
            "price_1m_input_tokens": 0.28,
            "price_1m_output_tokens": 0.42
        }
    },
    "deepseek-r1-openrouter": {
        "slug": "deepseek-r1",
        "intelligenceIndex": 27,
        "codingIndex": 23.4,
        "mathIndex": 76,
        "mmluPro": 0.849,
        "gpqa": 0.813,
        "livecodebench": 0.77,
        "scicode": 0.403,
        "math500": 0.983,
        "aime": 0.893,
        "pricing": {
            "price_1m_blended_3_to_1": 2.362,
            "price_1m_input_tokens": 1.35,
            "price_1m_output_tokens": 4.2
        }
    },
    "gemini-2.0-flash": {
        "slug": "gemini-2-0-flash",
        "intelligenceIndex": 17.6,
        "codingIndex": 13.5,
        "mathIndex": 21.7,
        "mmluPro": 0.779,
        "gpqa": 0.623,
        "livecodebench": 0.334,
        "scicode": 0.333,
        "math500": 0.93,
        "aime": 0.33,
        "pricing": {
            "price_1m_blended_3_to_1": 0.175,
            "price_1m_input_tokens": 0.1,
            "price_1m_output_tokens": 0.4
        }
    },
    "gemini-2.5-flash": {
        "slug": "gemini-2-5-flash",
        "intelligenceIndex": 20.5,
        "codingIndex": 17.3,
        "mathIndex": 60.3,
        "mmluPro": 0.809,
        "gpqa": 0.683,
        "livecodebench": 0.495,
        "scicode": 0.291,
        "math500": 0.932,
        "aime": 0.5,
        "pricing": {
            "price_1m_blended_3_to_1": 0.85,
            "price_1m_input_tokens": 0.3,
            "price_1m_output_tokens": 2.5
        }
    },
    "gemini-2.5-pro": {
        "slug": "gemini-2-5-pro",
        "intelligenceIndex": 34.1,
        "codingIndex": 30.8,
        "mathIndex": 87.7,
        "mmluPro": 0.862,
        "gpqa": 0.844,
        "livecodebench": 0.801,
        "scicode": 0.428,
        "math500": 0.967,
        "aime": 0.887,
        "pricing": {
            "price_1m_blended_3_to_1": 3.438,
            "price_1m_input_tokens": 1.25,
            "price_1m_output_tokens": 10
        }
    },
    "gemini-3-pro": {
        "slug": "gemini-3-pro",
        "intelligenceIndex": 47.9,
        "codingIndex": 44.7,
        "mathIndex": 95.7,
        "mmluPro": 0.898,
        "gpqa": 0.908,
        "livecodebench": 0.917,
        "scicode": 0.561,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 4.5,
            "price_1m_input_tokens": 2,
            "price_1m_output_tokens": 12
        }
    },
    "gemini-3-flash": {
        "slug": "gemini-3-flash",
        "intelligenceIndex": 34.7,
        "codingIndex": 36.5,
        "mathIndex": 55.7,
        "mmluPro": 0.882,
        "gpqa": 0.812,
        "livecodebench": 0.797,
        "scicode": 0.499,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 1.125,
            "price_1m_input_tokens": 0.5,
            "price_1m_output_tokens": 3
        }
    },
    "gemini-3-flash-thinking": {
        "slug": "gemini-3-flash-reasoning",
        "intelligenceIndex": 45.9,
        "codingIndex": 41,
        "mathIndex": 97,
        "mmluPro": 0.89,
        "gpqa": 0.898,
        "livecodebench": 0.908,
        "scicode": 0.506,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 1.125,
            "price_1m_input_tokens": 0.5,
            "price_1m_output_tokens": 3
        }
    },
    "llama-4-scout": {
        "slug": "llama-4-scout",
        "intelligenceIndex": 13.7,
        "codingIndex": 6.6,
        "mathIndex": 14,
        "mmluPro": 0.752,
        "gpqa": 0.587,
        "livecodebench": 0.299,
        "scicode": 0.17,
        "math500": 0.844,
        "aime": 0.283,
        "pricing": {
            "price_1m_blended_3_to_1": 0.282,
            "price_1m_input_tokens": 0.18,
            "price_1m_output_tokens": 0.59
        }
    },
    "llama-4-maverick": {
        "slug": "llama-4-maverick",
        "intelligenceIndex": 18.6,
        "codingIndex": 15.3,
        "mathIndex": 19.3,
        "mmluPro": 0.809,
        "gpqa": 0.671,
        "livecodebench": 0.397,
        "scicode": 0.331,
        "math500": 0.889,
        "aime": 0.39,
        "pricing": {
            "price_1m_blended_3_to_1": 0.461,
            "price_1m_input_tokens": 0.31,
            "price_1m_output_tokens": 0.85
        }
    },
    "minimax-m2": {
        "slug": "minimax-m2",
        "intelligenceIndex": 35.6,
        "codingIndex": 28.1,
        "mathIndex": 78.3,
        "mmluPro": 0.82,
        "gpqa": 0.777,
        "livecodebench": 0.826,
        "scicode": 0.361,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.525,
            "price_1m_input_tokens": 0.3,
            "price_1m_output_tokens": 1.2
        }
    },
    "minimax-m2.1": {
        "slug": "minimax-m2-1",
        "intelligenceIndex": 39.3,
        "codingIndex": 31.6,
        "mathIndex": 82.7,
        "mmluPro": 0.875,
        "gpqa": 0.83,
        "livecodebench": 0.81,
        "scicode": 0.407,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.525,
            "price_1m_input_tokens": 0.3,
            "price_1m_output_tokens": 1.2
        }
    },
    "kimi-k2-0905": {
        "slug": "kimi-k2-0905",
        "intelligenceIndex": 27.7,
        "codingIndex": 25.4,
        "mathIndex": 57.3,
        "mmluPro": 0.819,
        "gpqa": 0.767,
        "livecodebench": 0.61,
        "scicode": 0.307,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 1.2,
            "price_1m_input_tokens": 0.99,
            "price_1m_output_tokens": 2.5
        }
    },
    "kimi-k2-thinking": {
        "slug": "kimi-k2-thinking",
        "intelligenceIndex": 40.3,
        "codingIndex": 33.5,
        "mathIndex": 94.7,
        "mmluPro": 0.848,
        "gpqa": 0.838,
        "livecodebench": 0.853,
        "scicode": 0.424,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 1.075,
            "price_1m_input_tokens": 0.6,
            "price_1m_output_tokens": 2.5
        }
    },
    "gpt-oss-20b": {
        "slug": "gpt-oss-20b",
        "intelligenceIndex": 24.5,
        "codingIndex": 18.1,
        "mathIndex": 89.3,
        "mmluPro": 0.748,
        "gpqa": 0.688,
        "livecodebench": 0.777,
        "scicode": 0.344,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.1,
            "price_1m_input_tokens": 0.07,
            "price_1m_output_tokens": 0.2
        }
    },
    "gpt-oss-120b": {
        "slug": "gpt-oss-120b",
        "intelligenceIndex": 32.9,
        "codingIndex": 27.6,
        "mathIndex": 93.4,
        "mmluPro": 0.808,
        "gpqa": 0.782,
        "livecodebench": 0.878,
        "scicode": 0.389,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.263,
            "price_1m_input_tokens": 0.15,
            "price_1m_output_tokens": 0.6
        }
    },
    "gpt-4o-mini": {
        "slug": "gpt-4o-mini",
        "intelligenceIndex": 12.6,
        "codingIndex": null,
        "mathIndex": 14.7,
        "mmluPro": 0.648,
        "gpqa": 0.426,
        "livecodebench": 0.234,
        "scicode": 0.229,
        "math500": 0.789,
        "aime": 0.117,
        "pricing": {
            "price_1m_blended_3_to_1": 0.263,
            "price_1m_input_tokens": 0.15,
            "price_1m_output_tokens": 0.6
        }
    },
    "gpt-4o": {
        "slug": "gpt-4o",
        "intelligenceIndex": 14.8,
        "codingIndex": 16.3,
        "mathIndex": 6,
        "mmluPro": 0.748,
        "gpqa": 0.543,
        "livecodebench": 0.309,
        "scicode": 0.333,
        "math500": 0.759,
        "aime": 0.15,
        "pricing": {
            "price_1m_blended_3_to_1": 4.375,
            "price_1m_input_tokens": 2.5,
            "price_1m_output_tokens": 10
        }
    },
    "gpt-4.1": {
        "slug": "gpt-4-1",
        "intelligenceIndex": 25.7,
        "codingIndex": 21.2,
        "mathIndex": 34.7,
        "mmluPro": 0.806,
        "gpqa": 0.666,
        "livecodebench": 0.457,
        "scicode": 0.381,
        "math500": 0.913,
        "aime": 0.437,
        "pricing": {
            "price_1m_blended_3_to_1": 3.5,
            "price_1m_input_tokens": 2,
            "price_1m_output_tokens": 8
        }
    },
    "gpt-4.1-mini": {
        "slug": "gpt-4-1-mini",
        "intelligenceIndex": 22.8,
        "codingIndex": 18.2,
        "mathIndex": 46.3,
        "mmluPro": 0.781,
        "gpqa": 0.664,
        "livecodebench": 0.483,
        "scicode": 0.404,
        "math500": 0.925,
        "aime": 0.43,
        "pricing": {
            "price_1m_blended_3_to_1": 0.7,
            "price_1m_input_tokens": 0.4,
            "price_1m_output_tokens": 1.6
        }
    },
    "gpt-4.1-nano": {
        "slug": "gpt-4-1-nano",
        "intelligenceIndex": 13.1,
        "codingIndex": 11,
        "mathIndex": 24,
        "mmluPro": 0.657,
        "gpqa": 0.512,
        "livecodebench": 0.326,
        "scicode": 0.259,
        "math500": 0.848,
        "aime": 0.237,
        "pricing": {
            "price_1m_blended_3_to_1": 0.175,
            "price_1m_input_tokens": 0.1,
            "price_1m_output_tokens": 0.4
        }
    },
    "gpt-5-chat": {
        "slug": "gpt-5-chatgpt",
        "intelligenceIndex": 21.8,
        "codingIndex": 20.6,
        "mathIndex": 48.3,
        "mmluPro": 0.82,
        "gpqa": 0.686,
        "livecodebench": 0.543,
        "scicode": 0.378,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 3.438,
            "price_1m_input_tokens": 1.25,
            "price_1m_output_tokens": 10
        }
    },
    "gpt-5-reasoning": {
        "slug": "gpt-5",
        "intelligenceIndex": 44.1,
        "codingIndex": 34.6,
        "mathIndex": 94.3,
        "mmluPro": 0.871,
        "gpqa": 0.854,
        "livecodebench": 0.846,
        "scicode": 0.429,
        "math500": 0.994,
        "aime": 0.957,
        "pricing": {
            "price_1m_blended_3_to_1": 3.438,
            "price_1m_input_tokens": 1.25,
            "price_1m_output_tokens": 10
        }
    },
    "gpt-5-mini": {
        "slug": "gpt-5-mini",
        "intelligenceIndex": 40.6,
        "codingIndex": 33.9,
        "mathIndex": 90.7,
        "mmluPro": 0.837,
        "gpqa": 0.828,
        "livecodebench": 0.838,
        "scicode": 0.392,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.688,
            "price_1m_input_tokens": 0.25,
            "price_1m_output_tokens": 2
        }
    },
    "gpt-5-nano": {
        "slug": "gpt-5-nano",
        "intelligenceIndex": 26.6,
        "codingIndex": 19.8,
        "mathIndex": 83.7,
        "mmluPro": 0.78,
        "gpqa": 0.676,
        "livecodebench": 0.789,
        "scicode": 0.366,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.138,
            "price_1m_input_tokens": 0.05,
            "price_1m_output_tokens": 0.4
        }
    },
    "gpt-5.1-instant": {
        "slug": "gpt-5-1-non-reasoning",
        "intelligenceIndex": 27.2,
        "codingIndex": 26.3,
        "mathIndex": 38,
        "mmluPro": 0.801,
        "gpqa": 0.643,
        "livecodebench": 0.494,
        "scicode": 0.365,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 3.438,
            "price_1m_input_tokens": 1.25,
            "price_1m_output_tokens": 10
        }
    },
    "gpt-5.1-thinking": {
        "slug": "gpt-5-1",
        "intelligenceIndex": 47,
        "codingIndex": 42.8,
        "mathIndex": 94,
        "mmluPro": 0.87,
        "gpqa": 0.873,
        "livecodebench": 0.868,
        "scicode": 0.433,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 3.438,
            "price_1m_input_tokens": 1.25,
            "price_1m_output_tokens": 10
        }
    },
    "gpt-5.2-instant": {
        "slug": "gpt-5-2-non-reasoning",
        "intelligenceIndex": 33.1,
        "codingIndex": 33.3,
        "mathIndex": 51,
        "mmluPro": 0.814,
        "gpqa": 0.712,
        "livecodebench": 0.669,
        "scicode": 0.404,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 4.813,
            "price_1m_input_tokens": 1.75,
            "price_1m_output_tokens": 14
        }
    },
    "gpt-5.2-reasoning": {
        "slug": "gpt-5-2",
        "intelligenceIndex": 50.5,
        "codingIndex": 46.7,
        "mathIndex": 99,
        "mmluPro": 0.874,
        "gpqa": 0.903,
        "livecodebench": 0.889,
        "scicode": 0.521,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 4.813,
            "price_1m_input_tokens": 1.75,
            "price_1m_output_tokens": 14
        }
    },
    "gpt-o3-mini": {
        "slug": "o3-mini",
        "intelligenceIndex": 25.9,
        "codingIndex": 17.6,
        "mathIndex": null,
        "mmluPro": 0.791,
        "gpqa": 0.748,
        "livecodebench": 0.717,
        "scicode": 0.399,
        "math500": 0.973,
        "aime": 0.77,
        "pricing": {
            "price_1m_blended_3_to_1": 1.925,
            "price_1m_input_tokens": 1.1,
            "price_1m_output_tokens": 4.4
        }
    },
    "gpt-o4-mini": {
        "slug": "o4-mini",
        "intelligenceIndex": 32.9,
        "codingIndex": 25,
        "mathIndex": 90.7,
        "mmluPro": 0.832,
        "gpqa": 0.784,
        "livecodebench": 0.859,
        "scicode": 0.465,
        "math500": 0.989,
        "aime": 0.94,
        "pricing": {
            "price_1m_blended_3_to_1": 1.925,
            "price_1m_input_tokens": 1.1,
            "price_1m_output_tokens": 4.4
        }
    },
    "o3-full": {
        "slug": "o3",
        "intelligenceIndex": 40.9,
        "codingIndex": 36.8,
        "mathIndex": 88.3,
        "mmluPro": 0.853,
        "gpqa": 0.827,
        "livecodebench": 0.808,
        "scicode": 0.41,
        "math500": 0.992,
        "aime": 0.903,
        "pricing": {
            "price_1m_blended_3_to_1": 3.5,
            "price_1m_input_tokens": 2,
            "price_1m_output_tokens": 8
        }
    },
    "glm-4.5": {
        "slug": "glm-4.5",
        "intelligenceIndex": 26.5,
        "codingIndex": 25.8,
        "mathIndex": 73.7,
        "mmluPro": 0.835,
        "gpqa": 0.782,
        "livecodebench": 0.738,
        "scicode": 0.348,
        "math500": 0.979,
        "aime": 0.873,
        "pricing": {
            "price_1m_blended_3_to_1": 1,
            "price_1m_input_tokens": 0.6,
            "price_1m_output_tokens": 2.2
        }
    },
    "glm-4.5v": {
        "slug": "glm-4-5v",
        "intelligenceIndex": 12.9,
        "codingIndex": 10.5,
        "mathIndex": 15.3,
        "mmluPro": 0.751,
        "gpqa": 0.573,
        "livecodebench": 0.352,
        "scicode": 0.188,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.9,
            "price_1m_input_tokens": 0.6,
            "price_1m_output_tokens": 1.8
        }
    },
    "glm-4.5v-thinking": {
        "slug": "glm-4-5v-reasoning",
        "intelligenceIndex": 19.3,
        "codingIndex": 10.7,
        "mathIndex": 73,
        "mmluPro": 0.788,
        "gpqa": 0.684,
        "livecodebench": 0.604,
        "scicode": 0.221,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.9,
            "price_1m_input_tokens": 0.6,
            "price_1m_output_tokens": 1.8
        }
    },
    "glm-4.5-air": {
        "slug": "glm-4-5-air",
        "intelligenceIndex": 23.3,
        "codingIndex": 22.9,
        "mathIndex": 80.7,
        "mmluPro": 0.815,
        "gpqa": 0.733,
        "livecodebench": 0.684,
        "scicode": 0.306,
        "math500": 0.965,
        "aime": 0.673,
        "pricing": {
            "price_1m_blended_3_to_1": 0.425,
            "price_1m_input_tokens": 0.2,
            "price_1m_output_tokens": 1.1
        }
    },
    "glm-4.6": {
        "slug": "glm-4-6",
        "intelligenceIndex": 29.8,
        "codingIndex": 29,
        "mathIndex": 44.3,
        "mmluPro": 0.784,
        "gpqa": 0.632,
        "livecodebench": 0.561,
        "scicode": 0.331,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 1,
            "price_1m_input_tokens": 0.6,
            "price_1m_output_tokens": 2.2
        }
    },
    "glm-4.6-thinking": {
        "slug": "glm-4-6-reasoning",
        "intelligenceIndex": 32.2,
        "codingIndex": 28.4,
        "mathIndex": 86,
        "mmluPro": 0.829,
        "gpqa": 0.78,
        "livecodebench": 0.695,
        "scicode": 0.384,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.963,
            "price_1m_input_tokens": 0.55,
            "price_1m_output_tokens": 2.2
        }
    },
    "glm-4.6v": {
        "slug": "glm-4-6v",
        "intelligenceIndex": 17.3,
        "codingIndex": 11,
        "mathIndex": 26.3,
        "mmluPro": 0.752,
        "gpqa": 0.566,
        "livecodebench": 0.411,
        "scicode": 0.272,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.45,
            "price_1m_input_tokens": 0.3,
            "price_1m_output_tokens": 0.9
        }
    },
    "grok-v4": {
        "slug": "grok-4",
        "intelligenceIndex": 41.3,
        "codingIndex": 40.3,
        "mathIndex": 92.7,
        "mmluPro": 0.866,
        "gpqa": 0.877,
        "livecodebench": 0.819,
        "scicode": 0.457,
        "math500": 0.99,
        "aime": 0.943,
        "pricing": {
            "price_1m_blended_3_to_1": 6,
            "price_1m_input_tokens": 3,
            "price_1m_output_tokens": 15
        }
    },
    "grok-v3": {
        "slug": "grok-3",
        "intelligenceIndex": 25.1,
        "codingIndex": 19.4,
        "mathIndex": 58,
        "mmluPro": 0.799,
        "gpqa": 0.693,
        "livecodebench": 0.425,
        "scicode": 0.368,
        "math500": 0.87,
        "aime": 0.33,
        "pricing": {
            "price_1m_blended_3_to_1": 6,
            "price_1m_input_tokens": 3,
            "price_1m_output_tokens": 15
        }
    },
    "grok-v3-mini": {
        "slug": "grok-3-mini-reasoning",
        "intelligenceIndex": 32.3,
        "codingIndex": 24.4,
        "mathIndex": 84.7,
        "mmluPro": 0.828,
        "gpqa": 0.791,
        "livecodebench": 0.696,
        "scicode": 0.406,
        "math500": 0.992,
        "aime": 0.933,
        "pricing": {
            "price_1m_blended_3_to_1": 0.35,
            "price_1m_input_tokens": 0.3,
            "price_1m_output_tokens": 0.5
        }
    },
    "grok-v4-fast": {
        "slug": "grok-4-fast",
        "intelligenceIndex": 22.7,
        "codingIndex": 18.5,
        "mathIndex": 41.3,
        "mmluPro": 0.73,
        "gpqa": 0.606,
        "livecodebench": 0.401,
        "scicode": 0.329,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.275,
            "price_1m_input_tokens": 0.2,
            "price_1m_output_tokens": 0.5
        }
    },
    "grok-v4-fast-reasoning": {
        "slug": "grok-4-fast-reasoning",
        "intelligenceIndex": 34.6,
        "codingIndex": 26.6,
        "mathIndex": 89.7,
        "mmluPro": 0.85,
        "gpqa": 0.847,
        "livecodebench": 0.832,
        "scicode": 0.442,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.275,
            "price_1m_input_tokens": 0.2,
            "price_1m_output_tokens": 0.5
        }
    },
    "grok-4.1-fast": {
        "slug": "grok-4-1-fast",
        "intelligenceIndex": 23.4,
        "codingIndex": 18.9,
        "mathIndex": 34.3,
        "mmluPro": 0.743,
        "gpqa": 0.637,
        "livecodebench": 0.399,
        "scicode": 0.296,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.275,
            "price_1m_input_tokens": 0.2,
            "price_1m_output_tokens": 0.5
        }
    },
    "grok-4.1-fast-reasoning": {
        "slug": "grok-4-1-fast-reasoning",
        "intelligenceIndex": 38.2,
        "codingIndex": 29.9,
        "mathIndex": 89.3,
        "mmluPro": 0.854,
        "gpqa": 0.853,
        "livecodebench": 0.822,
        "scicode": 0.442,
        "math500": null,
        "aime": null,
        "pricing": {
            "price_1m_blended_3_to_1": 0.275,
            "price_1m_input_tokens": 0.2,
            "price_1m_output_tokens": 0.5
        }
    }
}
