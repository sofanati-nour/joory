const OPENROUTER_MODELS = {
  "openai/gpt-5.4-pro": {
    "canonical_slug": "openai/gpt-5.4-pro-20260305",
    "name": "OpenAI: GPT-5.4 Pro",
    "description": "GPT-5.4 Pro is OpenAI's most advanced model, building on GPT-5.4's unified architecture with enhanced reasoning capabilities for complex, high-stakes tasks. It features a 1M+ token context window (922K input, 128K output) with support for text and image inputs. Optimized for step-by-step reasoning, instruction following, and accuracy, GPT-5.4 Pro excels at agentic coding, long-context workflows, and multi-step problem solving.",
    "context_length": 1050000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00003",
      "completion": "0.00018",
      "web_search": "0.01"
    },
    "top_provider": {
      "context_length": 1050000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "tool_choice",
      "tools",
      "top_logprobs"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "top_k": null,
      "frequency_penalty": null,
      "presence_penalty": null,
      "repetition_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5.4": {
    "canonical_slug": "openai/gpt-5.4-20260305",
    "name": "OpenAI: GPT-5.4",
    "description": "GPT-5.4 is OpenAI’s latest frontier model, unifying the Codex and GPT lines into a single system. It features a 1M+ token context window (922K input, 128K output) with support for text and image inputs, enabling high-context reasoning, coding, and multimodal analysis within the same workflow.\n\nThe model delivers improved performance in coding, document understanding, tool use, and instruction following. It is designed as a strong default for both general-purpose tasks and software engineering, capable of generating production-quality code, synthesizing information across multiple sources, and executing complex multi-step workflows with fewer iterations and greater token efficiency.",
    "context_length": 1050000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000025",
      "completion": "0.000015",
      "web_search": "0.01",
      "input_cache_read": "0.00000025"
    },
    "top_provider": {
      "context_length": 1050000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "tool_choice",
      "tools",
      "top_logprobs"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "top_k": null,
      "frequency_penalty": null,
      "presence_penalty": null,
      "repetition_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5.3-chat": {
    "canonical_slug": "openai/gpt-5.3-chat-20260303",
    "name": "OpenAI: GPT-5.3 Chat",
    "description": "GPT-5.3 Chat is an update to ChatGPT's most-used model that makes everyday conversations smoother, more useful, and more directly helpful. It delivers more accurate answers with better contextualization and significantly reduces unnecessary refusals, caveats, and overly cautious phrasing that can interrupt conversational flow.",
    "context_length": 128000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000175",
      "completion": "0.000014",
      "web_search": "0.1",
      "input_cache_read": "0.000000175"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 16384,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "tool_choice",
      "tools",
      "top_logprobs"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "top_k": null,
      "frequency_penalty": null,
      "presence_penalty": null,
      "repetition_penalty": null
    },
    "expiration_date": null
  },
  "google/gemini-3.1-flash-lite-preview": {
    "canonical_slug": "google/gemini-3.1-flash-lite-preview-20260303",
    "name": "Google: Gemini 3.1 Flash Lite Preview",
    "description": "Gemini 3.1 Flash Lite Preview is Google's high-efficiency model optimized for high-volume use cases. It outperforms Gemini 2.5 Flash Lite on overall quality and approaches Gemini 2.5 Flash performance across key capabilities. Improvements span audio input/ASR, RAG snippet ranking, translation, data extraction, and code completion. Supports full thinking levels (minimal, low, medium, high) for fine-grained cost/performance trade-offs. Priced at half the cost of Gemini 3 Flash.",
    "context_length": 1048576,
    "architecture": {
      "modality": "text+image+file+audio+video->text",
      "input_modalities": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000025",
      "completion": "0.0000015",
      "image": "0.00000025",
      "audio": "0.0000005",
      "internal_reasoning": "0.0000015",
      "input_cache_read": "0.000000025",
      "input_cache_write": "0.00000008333333333333334"
    },
    "top_provider": {
      "context_length": 1048576,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "top_k": null,
      "frequency_penalty": null,
      "presence_penalty": null,
      "repetition_penalty": null
    },
    "expiration_date": null
  },
  "google/gemini-3.1-flash-image-preview": {
    "canonical_slug": "google/gemini-3.1-flash-image-preview-20260226",
    "name": "Google: Nano Banana 2 (Gemini 3.1 Flash Image Preview)",
    "description": "Gemini 3.1 Flash Image Preview, a.k.a. \"Nano Banana 2,\" is Google’s latest state of the art image generation and editing model, delivering Pro-level visual quality at Flash speed. It combines advanced contextual understanding with fast, cost-efficient inference, making complex image generation and iterative edits significantly more accessible. Aspect ratios can be controlled with the [image_config API Parameter](https://openrouter.ai/docs/features/multimodal/image-generation#image-aspect-ratio-configuration)",
    "context_length": 65536,
    "architecture": {
      "modality": "text+image->text+image",
      "input_modalities": [
        "image",
        "text"
      ],
      "output_modalities": [
        "image",
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000005",
      "completion": "0.000003"
    },
    "top_provider": {
      "context_length": 65536,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "top_k": null,
      "frequency_penalty": null,
      "presence_penalty": null,
      "repetition_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3.5-35b-a3b": {
    "canonical_slug": "qwen/qwen3.5-35b-a3b-20260224",
    "name": "Qwen: Qwen3.5-35B-A3B",
    "description": "The Qwen3.5 Series 35B-A3B is a native vision-language model designed with a hybrid architecture that integrates linear attention mechanisms and a sparse mixture-of-experts model, achieving higher inference efficiency. Its overall performance is comparable to that of the Qwen3.5-27B.",
    "context_length": 262144,
    "architecture": {
      "modality": "text+image+video->text",
      "input_modalities": [
        "text",
        "image",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000001625",
      "completion": "0.0000013"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 1,
      "top_p": 0.95,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3.5-27b": {
    "canonical_slug": "qwen/qwen3.5-27b-20260224",
    "name": "Qwen: Qwen3.5-27B",
    "description": "The Qwen3.5 27B native vision-language Dense model incorporates a linear attention mechanism, delivering fast response times while balancing inference speed and performance. Its overall capabilities are comparable to those of the Qwen3.5-122B-A10B.",
    "context_length": 262144,
    "architecture": {
      "modality": "text+image+video->text",
      "input_modalities": [
        "text",
        "image",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000000195",
      "completion": "0.00000156"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 0.6,
      "top_p": 0.95,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3.5-122b-a10b": {
    "canonical_slug": "qwen/qwen3.5-122b-a10b-20260224",
    "name": "Qwen: Qwen3.5-122B-A10B",
    "description": "The Qwen3.5 122B-A10B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. In terms of overall performance, this model is second only to Qwen3.5-397B-A17B. Its text capabilities significantly outperform those of Qwen3-235B-2507, and its visual capabilities surpass those of Qwen3-VL-235B.",
    "context_length": 262144,
    "architecture": {
      "modality": "text+image+video->text",
      "input_modalities": [
        "text",
        "image",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000026",
      "completion": "0.00000208"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 0.6,
      "top_p": 0.95,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3.5-flash-02-23": {
    "canonical_slug": "qwen/qwen3.5-flash-20260224",
    "name": "Qwen: Qwen3.5-Flash",
    "description": "The Qwen3.5 native vision-language Flash models are built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. Compared to the 3 series, these models deliver a leap forward in performance for both pure text and multimodal tasks, offering fast response times while balancing inference speed and overall performance.",
    "context_length": 1000000,
    "architecture": {
      "modality": "text+image+video->text",
      "input_modalities": [
        "text",
        "image",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000001",
      "completion": "0.0000004"
    },
    "top_provider": {
      "context_length": 1000000,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "google/gemini-3.1-pro-preview-customtools": {
    "canonical_slug": "google/gemini-3.1-pro-preview-customtools-20260219",
    "name": "Google: Gemini 3.1 Pro Preview Custom Tools",
    "description": "Gemini 3.1 Pro Preview Custom Tools is a variant of Gemini 3.1 Pro that improves tool selection behavior by preventing overuse of a general bash tool when more efficient third-party or user-defined functions are available. This specialized preview endpoint significantly increases function calling reliability and ensures the model selects the most appropriate tool in coding agents and complex, multi-tool workflows.\n\nIt retains the core strengths of Gemini 3.1 Pro, including multimodal reasoning across text, image, video, audio, and code, a 1M-token context window, and strong software engineering performance.",
    "context_length": 1048576,
    "architecture": {
      "modality": "text+image+file+audio+video->text",
      "input_modalities": [
        "text",
        "audio",
        "image",
        "video",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000002",
      "completion": "0.000012",
      "image": "0.000002",
      "audio": "0.000002",
      "internal_reasoning": "0.000012",
      "input_cache_read": "0.0000002",
      "input_cache_write": "0.000000375"
    },
    "top_provider": {
      "context_length": 1048576,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5.3-codex": {
    "canonical_slug": "openai/gpt-5.3-codex-20260224",
    "name": "OpenAI: GPT-5.3-Codex",
    "description": "GPT-5.3-Codex is OpenAI’s most advanced agentic coding model, combining the frontier software engineering performance of GPT-5.2-Codex with the broader reasoning and professional knowledge capabilities of GPT-5.2. It achieves state-of-the-art results on SWE-Bench Pro and strong performance on Terminal-Bench 2.0 and OSWorld-Verified, reflecting improved multi-language coding, terminal proficiency, and real-world computer-use skills. The model is optimized for long-running, tool-using workflows and supports interactive steering during execution, making it suitable for complex development tasks, debugging, deployment, and iterative product work.\n\nBeyond coding, GPT-5.3-Codex performs strongly on structured knowledge-work benchmarks such as GDPval, supporting tasks like document drafting, spreadsheet analysis, slide creation, and operational research across domains. It is trained with enhanced cybersecurity awareness, including vulnerability identification capabilities, and deployed with additional safeguards for high-risk use cases. Compared to prior Codex models, it is more token-efficient and approximately 25% faster, targeting professional end-to-end workflows that span reasoning, execution, and computer interaction.",
    "context_length": 400000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000175",
      "completion": "0.000014",
      "web_search": "0.01",
      "input_cache_read": "0.000000175"
    },
    "top_provider": {
      "context_length": 400000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "google/gemini-3.1-pro-preview": {
    "canonical_slug": "google/gemini-3.1-pro-preview-20260219",
    "name": "Google: Gemini 3.1 Pro Preview",
    "description": "Gemini 3.1 Pro Preview is Google’s frontier reasoning model, delivering enhanced software engineering performance, improved agentic reliability, and more efficient token usage across complex workflows. Building on the multimodal foundation of the Gemini 3 series, it combines high-precision reasoning across text, image, video, audio, and code with a 1M-token context window. Reasoning Details must be preserved when using multi-turn tool calling, see our docs here: https://openrouter.ai/docs/use-cases/reasoning-tokens#preserving-reasoning. The 3.1 update introduces measurable gains in SWE benchmarks and real-world coding environments, along with stronger autonomous task execution in structured domains such as finance and spreadsheet-based workflows.\n\nDesigned for advanced development and agentic systems, Gemini 3.1 Pro Preview improves long-horizon stability and tool orchestration while increasing token efficiency. It introduces a new medium thinking level to better balance cost, speed, and performance. The model excels in agentic coding, structured planning, multimodal analysis, and workflow automation, making it well-suited for autonomous agents, financial modeling, spreadsheet automation, and high-context enterprise tasks.",
    "context_length": 1048576,
    "architecture": {
      "modality": "text+image+file+audio+video->text",
      "input_modalities": [
        "audio",
        "file",
        "image",
        "text",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000002",
      "completion": "0.000012",
      "image": "0.000002",
      "audio": "0.000002",
      "internal_reasoning": "0.000012",
      "input_cache_read": "0.0000002",
      "input_cache_write": "0.000000375"
    },
    "top_provider": {
      "context_length": 1048576,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "anthropic/claude-sonnet-4.6": {
    "canonical_slug": "anthropic/claude-4.6-sonnet-20260217",
    "name": "Anthropic: Claude Sonnet 4.6",
    "description": "Sonnet 4.6 is Anthropic's most capable Sonnet-class model yet, with frontier performance across coding, agents, and professional work. It excels at iterative development, complex codebase navigation, end-to-end project management with memory, polished document creation, and confident computer use for web QA and workflow automation.",
    "context_length": 1000000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Claude",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000003",
      "completion": "0.000015",
      "web_search": "0.01",
      "input_cache_read": "0.0000003",
      "input_cache_write": "0.00000375"
    },
    "top_provider": {
      "context_length": 1000000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p",
      "verbosity"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3.5-plus-02-15": {
    "canonical_slug": "qwen/qwen3.5-plus-20260216",
    "name": "Qwen: Qwen3.5 Plus 2026-02-15",
    "description": "The Qwen3.5 native vision-language series Plus models are built on a hybrid architecture that integrates linear attention mechanisms with sparse mixture-of-experts models, achieving higher inference efficiency. In a variety of task evaluations, the 3.5 series consistently demonstrates performance on par with state-of-the-art leading models. Compared to the 3 series, these models show a leap forward in both pure-text and multimodal capabilities.",
    "context_length": 1000000,
    "architecture": {
      "modality": "text+image+video->text",
      "input_modalities": [
        "text",
        "image",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000026",
      "completion": "0.00000156"
    },
    "top_provider": {
      "context_length": 1000000,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3.5-397b-a17b": {
    "canonical_slug": "qwen/qwen3.5-397b-a17b-20260216",
    "name": "Qwen: Qwen3.5 397B A17B",
    "description": "The Qwen3.5 series 397B-A17B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. It delivers state-of-the-art performance comparable to leading-edge models across a wide range of tasks, including language understanding, logical reasoning, code generation, agent-based tasks, image understanding, video understanding, and graphical user interface (GUI) interactions. With its robust code-generation and agent capabilities, the model exhibits strong generalization across diverse agent.",
    "context_length": 262144,
    "architecture": {
      "modality": "text+image+video->text",
      "input_modalities": [
        "text",
        "image",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000039",
      "completion": "0.00000234"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 0.6,
      "top_p": 0.95,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "minimax/minimax-m2.5": {
    "canonical_slug": "minimax/minimax-m2.5-20260211",
    "name": "MiniMax: MiniMax M2.5",
    "description": "MiniMax-M2.5 is a SOTA large language model designed for real-world productivity. Trained in a diverse range of complex real-world digital working environments, M2.5 builds upon the coding expertise of M2.1 to extend into general office work, reaching fluency in generating and operating Word, Excel, and Powerpoint files, context switching between diverse software environments, and working across different agent and human teams. Scoring 80.2% on SWE-Bench Verified, 51.3% on Multi-SWE-Bench, and 76.3% on BrowseComp, M2.5 is also more token efficient than previous generations, having been trained to optimize its actions and output through planning.",
    "context_length": 196608,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Other",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000000295",
      "completion": "0.0000012",
      "input_cache_read": "0.00000003"
    },
    "top_provider": {
      "context_length": 196608,
      "max_completion_tokens": 196608,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "min_p",
      "parallel_tool_calls",
      "presence_penalty",
      "reasoning",
      "reasoning_effort",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 1,
      "top_p": 0.95,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-max-thinking": {
    "canonical_slug": "qwen/qwen3-max-thinking-20260123",
    "name": "Qwen: Qwen3 Max Thinking",
    "description": "Qwen3-Max-Thinking is the flagship reasoning model in the Qwen3 series, designed for high-stakes cognitive tasks that require deep, multi-step reasoning. By significantly scaling model capacity and reinforcement learning compute, it delivers major gains in factual accuracy, complex reasoning, instruction following, alignment with human preferences, and agentic behavior.",
    "context_length": 262144,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000078",
      "completion": "0.0000039"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "anthropic/claude-opus-4.6": {
    "canonical_slug": "anthropic/claude-4.6-opus-20260205",
    "name": "Anthropic: Claude Opus 4.6",
    "description": "Opus 4.6 is Anthropic’s strongest model for coding and long-running professional tasks. It is built for agents that operate across entire workflows rather than single prompts, making it especially effective for large codebases, complex refactors, and multi-step debugging that unfolds over time. The model shows deeper contextual understanding, stronger problem decomposition, and greater reliability on hard engineering tasks than prior generations.\n\nBeyond coding, Opus 4.6 excels at sustained knowledge work. It produces near-production-ready documents, plans, and analyses in a single pass, and maintains coherence across very long outputs and extended sessions. This makes it a strong default for tasks that require persistence, judgment, and follow-through, such as technical design, migration planning, and end-to-end project execution.\n\nFor users upgrading from earlier Opus versions, see our [official migration guide here](https://openrouter.ai/docs/guides/guides/model-migrations/claude-4-6-opus)\n",
    "context_length": 1000000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Claude",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000005",
      "completion": "0.000025",
      "web_search": "0.01",
      "input_cache_read": "0.0000005",
      "input_cache_write": "0.00000625"
    },
    "top_provider": {
      "context_length": 1000000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p",
      "verbosity"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-coder-next": {
    "canonical_slug": "qwen/qwen3-coder-next-2025-02-03",
    "name": "Qwen: Qwen3 Coder Next",
    "description": "Qwen3-Coder-Next is an open-weight causal language model optimized for coding agents and local development workflows. It uses a sparse MoE design with 80B total parameters and only 3B activated per token, delivering performance comparable to models with 10 to 20x higher active compute, which makes it well suited for cost-sensitive, always-on agent deployment.\n\nThe model is trained with a strong agentic focus and performs reliably on long-horizon coding tasks, complex tool usage, and recovery from execution failures. With a native 256k context window, it integrates cleanly into real-world CLI and IDE environments and adapts well to common agent scaffolds used by modern coding tools. The model operates exclusively in non-thinking mode and does not emit <think> blocks, simplifying integration for production coding agents.",
    "context_length": 262144,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000012",
      "completion": "0.00000075",
      "input_cache_read": "0.00000006"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 1,
      "top_p": 0.95,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "minimax/minimax-m2-her": {
    "canonical_slug": "minimax/minimax-m2-her-20260123",
    "name": "MiniMax: MiniMax M2-her",
    "description": "MiniMax M2-her is a dialogue-first large language model built for immersive roleplay, character-driven chat, and expressive multi-turn conversations. Designed to stay consistent in tone and personality, it supports rich message roles (user_system, group, sample_message_user, sample_message_ai) and can learn from example dialogue to better match the style and pacing of your scenario, making it a strong choice for storytelling, companions, and conversational experiences where natural flow and vivid interaction matter most.",
    "context_length": 65536,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Other",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000003",
      "completion": "0.0000012",
      "input_cache_read": "0.00000003"
    },
    "top_provider": {
      "context_length": 65536,
      "max_completion_tokens": 2048,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "temperature",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 1,
      "top_p": 0.95,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-audio": {
    "canonical_slug": "openai/gpt-audio",
    "name": "OpenAI: GPT Audio",
    "description": "The gpt-audio model is OpenAI's first generally available audio model. The new snapshot features an upgraded decoder for more natural sounding voices and maintains better voice consistency. Audio is priced at $32 per million input tokens and $64 per million output tokens.",
    "context_length": 128000,
    "architecture": {
      "modality": "text+audio->text+audio",
      "input_modalities": [
        "text",
        "audio"
      ],
      "output_modalities": [
        "text",
        "audio"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000025",
      "completion": "0.00001",
      "audio": "0.000032"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 16384,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-audio-mini": {
    "canonical_slug": "openai/gpt-audio-mini",
    "name": "OpenAI: GPT Audio Mini",
    "description": "A cost-efficient version of GPT Audio. The new snapshot features an upgraded decoder for more natural sounding voices and maintains better voice consistency. Input is priced at $0.60 per million tokens and output is priced at $2.40 per million tokens.",
    "context_length": 128000,
    "architecture": {
      "modality": "text+audio->text+audio",
      "input_modalities": [
        "text",
        "audio"
      ],
      "output_modalities": [
        "text",
        "audio"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000006",
      "completion": "0.0000024",
      "audio": "0.0000006"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 16384,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5.2-codex": {
    "canonical_slug": "openai/gpt-5.2-codex-20260114",
    "name": "OpenAI: GPT-5.2-Codex",
    "description": "GPT-5.2-Codex is an upgraded version of GPT-5.1-Codex optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering tasks. The model supports building projects from scratch, feature development, debugging, large-scale refactoring, and code review. Compared to GPT-5.1-Codex, 5.2-Codex is more steerable, adheres closely to developer instructions, and produces cleaner, higher-quality code outputs. Reasoning effort can be adjusted with the `reasoning.effort` parameter. Read the [docs here](https://openrouter.ai/docs/use-cases/reasoning-tokens#reasoning-effort-level)\n\nCodex integrates into developer environments including the CLI, IDE extensions, GitHub, and cloud tasks. It adapts reasoning effort dynamically—providing fast responses for small tasks while sustaining extended multi-hour runs for large projects. The model is trained to perform structured code reviews, catching critical flaws by reasoning over dependencies and validating behavior against tests. It also supports multimodal inputs such as images or screenshots for UI development and integrates tool use for search, dependency installation, and environment setup. Codex is intended specifically for agentic coding applications.",
    "context_length": 400000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000175",
      "completion": "0.000014",
      "web_search": "0.01",
      "input_cache_read": "0.000000175"
    },
    "top_provider": {
      "context_length": 400000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "minimax/minimax-m2.1": {
    "canonical_slug": "minimax/minimax-m2.1",
    "name": "MiniMax: MiniMax M2.1",
    "description": "MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development. With only 10 billion activated parameters, it delivers a major jump in real-world capability while maintaining exceptional latency, scalability, and cost efficiency.\n\nCompared to its predecessor, M2.1 delivers cleaner, more concise outputs and faster perceived response times. It shows leading multilingual coding performance across major systems and application languages, achieving 49.4% on Multi-SWE-Bench and 72.5% on SWE-Bench Multilingual, and serves as a versatile agent “brain” for IDEs, coding tools, and general-purpose assistance.\n\nTo avoid degrading this model's performance, MiniMax highly recommends preserving reasoning between turns. Learn more about using reasoning_details to pass back reasoning in our [docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#preserving-reasoning-blocks).",
    "context_length": 196608,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Other",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000027",
      "completion": "0.00000095",
      "input_cache_read": "0.0000000290000007"
    },
    "top_provider": {
      "context_length": 196608,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 1,
      "top_p": 0.9,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "google/gemini-3-flash-preview": {
    "canonical_slug": "google/gemini-3-flash-preview-20251217",
    "name": "Google: Gemini 3 Flash Preview",
    "description": "Gemini 3 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi turn chat, and coding assistance. It delivers near Pro level reasoning and tool use performance with substantially lower latency than larger Gemini variants, making it well suited for interactive development, long running agent loops, and collaborative coding tasks. Compared to Gemini 2.5 Flash, it provides broad quality improvements across reasoning, multimodal understanding, and reliability.\n\nThe model supports a 1M token context window and multimodal inputs including text, images, audio, video, and PDFs, with text output. It includes configurable reasoning via thinking levels (minimal, low, medium, high), structured output, tool use, and automatic context caching. Gemini 3 Flash Preview is optimized for users who want strong reasoning and agentic behavior without the cost or latency of full scale frontier models.",
    "context_length": 1048576,
    "architecture": {
      "modality": "text+image+file+audio+video->text",
      "input_modalities": [
        "text",
        "image",
        "file",
        "audio",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000005",
      "completion": "0.000003",
      "image": "0.0000005",
      "audio": "0.000001",
      "internal_reasoning": "0.000003",
      "input_cache_read": "0.00000005",
      "input_cache_write": "0.00000008333333333333334"
    },
    "top_provider": {
      "context_length": 1048576,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5.2-chat": {
    "canonical_slug": "openai/gpt-5.2-chat-20251211",
    "name": "OpenAI: GPT-5.2 Chat",
    "description": "GPT-5.2 Chat (AKA Instant) is the fast, lightweight member of the 5.2 family, optimized for low-latency chat while retaining strong general intelligence. It uses adaptive reasoning to selectively “think” on harder queries, improving accuracy on math, coding, and multi-step tasks without slowing down typical conversations. The model is warmer and more conversational by default, with better instruction following and more stable short-form reasoning. GPT-5.2 Chat is designed for high-throughput, interactive workloads where responsiveness and consistency matter more than deep deliberation.",
    "context_length": 128000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "file",
        "image",
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000175",
      "completion": "0.000014",
      "web_search": "0.01",
      "input_cache_read": "0.000000175"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 16384,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5.2-pro": {
    "canonical_slug": "openai/gpt-5.2-pro-20251211",
    "name": "OpenAI: GPT-5.2 Pro",
    "description": "GPT-5.2 Pro is OpenAI’s most advanced model, offering major improvements in agentic coding and long context performance over GPT-5 Pro. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and accuracy in high-stakes use cases. It supports test-time routing features and advanced prompt understanding, including user-specified intent like \"think hard about this.\" Improvements include reductions in hallucination, sycophancy, and better performance in coding, writing, and health-related tasks.",
    "context_length": 400000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "image",
        "text",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000021",
      "completion": "0.000168",
      "web_search": "0.01"
    },
    "top_provider": {
      "context_length": 400000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5.2": {
    "canonical_slug": "openai/gpt-5.2-20251211",
    "name": "OpenAI: GPT-5.2",
    "description": "GPT-5.2 is the latest frontier-grade model in the GPT-5 series, offering stronger agentic and long context perfomance compared to GPT-5.1. It uses adaptive reasoning to allocate computation dynamically, responding quickly to simple queries while spending more depth on complex tasks.\n\nBuilt for broad task coverage, GPT-5.2 delivers consistent gains across math, coding, sciende, and tool calling workloads, with more coherent long-form answers and improved tool-use reliability.",
    "context_length": 400000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "file",
        "image",
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000175",
      "completion": "0.000014",
      "web_search": "0.01",
      "input_cache_read": "0.000000175"
    },
    "top_provider": {
      "context_length": 400000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5.1-codex-max": {
    "canonical_slug": "openai/gpt-5.1-codex-max-20251204",
    "name": "OpenAI: GPT-5.1-Codex-Max",
    "description": "GPT-5.1-Codex-Max is OpenAI’s latest agentic coding model, designed for long-running, high-context software development tasks. It is based on an updated version of the 5.1 reasoning stack and trained on agentic workflows spanning software engineering, mathematics, and research. \nGPT-5.1-Codex-Max delivers faster performance, improved reasoning, and higher token efficiency across the development lifecycle. ",
    "context_length": 400000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000125",
      "completion": "0.00001",
      "web_search": "0.01",
      "input_cache_read": "0.000000125"
    },
    "top_provider": {
      "context_length": 400000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "deepseek/deepseek-v3.2-speciale": {
    "canonical_slug": "deepseek/deepseek-v3.2-speciale-20251201",
    "name": "DeepSeek: DeepSeek V3.2 Speciale",
    "description": "DeepSeek-V3.2-Speciale is a high-compute variant of DeepSeek-V3.2 optimized for maximum reasoning and agentic performance. It builds on DeepSeek Sparse Attention (DSA) for efficient long-context processing, then scales post-training reinforcement learning to push capability beyond the base model. Reported evaluations place Speciale ahead of GPT-5 on difficult reasoning workloads, with proficiency comparable to Gemini-3.0-Pro, while retaining strong coding and tool-use reliability. Like V3.2, it benefits from a large-scale agentic task synthesis pipeline that improves compliance and generalization in interactive environments.",
    "context_length": 163840,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "DeepSeek",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000004",
      "completion": "0.0000012",
      "input_cache_read": "0.0000002"
    },
    "top_provider": {
      "context_length": 163840,
      "max_completion_tokens": 163840,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 1,
      "top_p": 0.95,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "deepseek/deepseek-v3.2": {
    "canonical_slug": "deepseek/deepseek-v3.2-20251201",
    "name": "DeepSeek: DeepSeek V3.2",
    "description": "DeepSeek-V3.2 is a large language model designed to harmonize high computational efficiency with strong reasoning and agentic tool-use performance. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse attention mechanism that reduces training and inference cost while preserving quality in long-context scenarios. A scalable reinforcement learning post-training framework further improves reasoning, with reported performance in the GPT-5 class, and the model has demonstrated gold-medal results on the 2025 IMO and IOI. V3.2 also uses a large-scale agentic task synthesis pipeline to better integrate reasoning into tool-use settings, boosting compliance and generalization in interactive environments.\n\nUsers can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)",
    "context_length": 163840,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "DeepSeek",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000025",
      "completion": "0.0000004"
    },
    "top_provider": {
      "context_length": 163840,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 1,
      "top_p": 0.95,
      "top_k": null,
      "frequency_penalty": null,
      "presence_penalty": null,
      "repetition_penalty": null
    },
    "expiration_date": null
  },
  "anthropic/claude-opus-4.5": {
    "canonical_slug": "anthropic/claude-4.5-opus-20251124",
    "name": "Anthropic: Claude Opus 4.5",
    "description": "Claude Opus 4.5 is Anthropic’s frontier reasoning model optimized for complex software engineering, agentic workflows, and long-horizon computer use. It offers strong multimodal capabilities, competitive performance across real-world coding and reasoning benchmarks, and improved robustness to prompt injection. The model is designed to operate efficiently across varied effort levels, enabling developers to trade off speed, depth, and token usage depending on task requirements. It comes with a new parameter to control token efficiency, which can be accessed using the OpenRouter Verbosity parameter with low, medium, or high.\n\nOpus 4.5 supports advanced tool use, extended context management, and coordinated multi-agent setups, making it well-suited for autonomous research, debugging, multi-step planning, and spreadsheet/browser manipulation. It delivers substantial gains in structured reasoning, execution reliability, and alignment compared to prior Opus generations, while reducing token overhead and improving performance on long-running tasks.",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "file",
        "image",
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Claude",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000005",
      "completion": "0.000025",
      "web_search": "0.01",
      "input_cache_read": "0.0000005",
      "input_cache_write": "0.00000625"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 64000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "verbosity"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "google/gemini-3-pro-image-preview": {
    "canonical_slug": "google/gemini-3-pro-image-preview-20251120",
    "name": "Google: Nano Banana Pro (Gemini 3 Pro Image Preview)",
    "description": "Nano Banana Pro is Google’s most advanced image-generation and editing model, built on Gemini 3 Pro. It extends the original Nano Banana with significantly improved multimodal reasoning, real-world grounding, and high-fidelity visual synthesis. The model generates context-rich graphics, from infographics and diagrams to cinematic composites, and can incorporate real-time information via Search grounding.\n\nIt offers industry-leading text rendering in images (including long passages and multilingual layouts), consistent multi-image blending, and accurate identity preservation across up to five subjects. Nano Banana Pro adds fine-grained creative controls such as localized edits, lighting and focus adjustments, camera transformations, and support for 2K/4K outputs and flexible aspect ratios. It is designed for professional-grade design, product visualization, storyboarding, and complex multi-element compositions while remaining efficient for general image creation workflows.",
    "context_length": 65536,
    "architecture": {
      "modality": "text+image->text+image",
      "input_modalities": [
        "image",
        "text"
      ],
      "output_modalities": [
        "image",
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000002",
      "completion": "0.000012",
      "image": "0.000002",
      "audio": "0.000002",
      "internal_reasoning": "0.000012",
      "input_cache_read": "0.0000002",
      "input_cache_write": "0.000000375"
    },
    "top_provider": {
      "context_length": 65536,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "x-ai/grok-4.1-fast": {
    "canonical_slug": "x-ai/grok-4.1-fast",
    "name": "xAI: Grok 4.1 Fast",
    "description": "Grok 4.1 Fast is xAI's best agentic tool calling model that shines in real-world use cases like customer support and deep research. 2M context window.\n\nReasoning can be enabled/disabled using the `reasoning` `enabled` parameter in the API. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#controlling-reasoning-tokens)",
    "context_length": 2000000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Grok",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000002",
      "completion": "0.0000005",
      "web_search": "0.005",
      "input_cache_read": "0.00000005"
    },
    "top_provider": {
      "context_length": 2000000,
      "max_completion_tokens": 30000,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "logprobs",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 0.7,
      "top_p": 0.95,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "google/gemini-3-pro-preview": {
    "canonical_slug": "google/gemini-3-pro-preview-20251117",
    "name": "Google: Gemini 3 Pro Preview",
    "description": "Gemini 3 Pro is Google’s flagship frontier model for high-precision multimodal reasoning, combining strong performance across text, image, video, audio, and code with a 1M-token context window. Reasoning Details must be preserved when using multi-turn tool calling, see our docs here: https://openrouter.ai/docs/use-cases/reasoning-tokens#preserving-reasoning-blocks. It delivers state-of-the-art benchmark results in general reasoning, STEM problem solving, factual QA, and multimodal understanding, including leading scores on LMArena, GPQA Diamond, MathArena Apex, MMMU-Pro, and Video-MMMU. Interactions emphasize depth and interpretability: the model is designed to infer intent with minimal prompting and produce direct, insight-focused responses.\n\nBuilt for advanced development and agentic workflows, Gemini 3 Pro provides robust tool-calling, long-horizon planning stability, and strong zero-shot generation for complex UI, visualization, and coding tasks. It excels at agentic coding (SWE-Bench Verified, Terminal-Bench 2.0), multimodal analysis, and structured long-form tasks such as research synthesis, planning, and interactive learning experiences. Suitable applications include autonomous agents, coding assistants, multimodal analytics, scientific reasoning, and high-context information processing.",
    "context_length": 1048576,
    "architecture": {
      "modality": "text+image+file+audio+video->text",
      "input_modalities": [
        "text",
        "image",
        "file",
        "audio",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000002",
      "completion": "0.000012",
      "image": "0.000002",
      "audio": "0.000002",
      "internal_reasoning": "0.000012",
      "input_cache_read": "0.0000002",
      "input_cache_write": "0.000000375"
    },
    "top_provider": {
      "context_length": 1048576,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": "2026-03-09"
  },
  "openai/gpt-5.1": {
    "canonical_slug": "openai/gpt-5.1-20251113",
    "name": "OpenAI: GPT-5.1",
    "description": "GPT-5.1 is the latest frontier-grade model in the GPT-5 series, offering stronger general-purpose reasoning, improved instruction adherence, and a more natural conversational style compared to GPT-5. It uses adaptive reasoning to allocate computation dynamically, responding quickly to simple queries while spending more depth on complex tasks. The model produces clearer, more grounded explanations with reduced jargon, making it easier to follow even on technical or multi-step problems.\n\nBuilt for broad task coverage, GPT-5.1 delivers consistent gains across math, coding, and structured analysis workloads, with more coherent long-form answers and improved tool-use reliability. It also features refined conversational alignment, enabling warmer, more intuitive responses without compromising precision. GPT-5.1 serves as the primary full-capability successor to GPT-5",
    "context_length": 400000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "image",
        "text",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000125",
      "completion": "0.00001",
      "web_search": "0.01",
      "input_cache_read": "0.000000125"
    },
    "top_provider": {
      "context_length": 400000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5.1-chat": {
    "canonical_slug": "openai/gpt-5.1-chat-20251113",
    "name": "OpenAI: GPT-5.1 Chat",
    "description": "GPT-5.1 Chat (AKA Instant is the fast, lightweight member of the 5.1 family, optimized for low-latency chat while retaining strong general intelligence. It uses adaptive reasoning to selectively “think” on harder queries, improving accuracy on math, coding, and multi-step tasks without slowing down typical conversations. The model is warmer and more conversational by default, with better instruction following and more stable short-form reasoning. GPT-5.1 Chat is designed for high-throughput, interactive workloads where responsiveness and consistency matter more than deep deliberation.\n",
    "context_length": 128000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "file",
        "image",
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000125",
      "completion": "0.00001",
      "web_search": "0.01",
      "input_cache_read": "0.000000125"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 16384,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5.1-codex": {
    "canonical_slug": "openai/gpt-5.1-codex-20251113",
    "name": "OpenAI: GPT-5.1-Codex",
    "description": "GPT-5.1-Codex is a specialized version of GPT-5.1 optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering tasks. The model supports building projects from scratch, feature development, debugging, large-scale refactoring, and code review. Compared to GPT-5.1, Codex is more steerable, adheres closely to developer instructions, and produces cleaner, higher-quality code outputs. Reasoning effort can be adjusted with the `reasoning.effort` parameter. Read the [docs here](https://openrouter.ai/docs/use-cases/reasoning-tokens#reasoning-effort-level)\n\nCodex integrates into developer environments including the CLI, IDE extensions, GitHub, and cloud tasks. It adapts reasoning effort dynamically—providing fast responses for small tasks while sustaining extended multi-hour runs for large projects. The model is trained to perform structured code reviews, catching critical flaws by reasoning over dependencies and validating behavior against tests. It also supports multimodal inputs such as images or screenshots for UI development and integrates tool use for search, dependency installation, and environment setup. Codex is intended specifically for agentic coding applications.",
    "context_length": 400000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000125",
      "completion": "0.00001",
      "input_cache_read": "0.000000125"
    },
    "top_provider": {
      "context_length": 400000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5.1-codex-mini": {
    "canonical_slug": "openai/gpt-5.1-codex-mini-20251113",
    "name": "OpenAI: GPT-5.1-Codex-Mini",
    "description": "GPT-5.1-Codex-Mini is a smaller and faster version of GPT-5.1-Codex",
    "context_length": 400000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "image",
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000025",
      "completion": "0.000002",
      "input_cache_read": "0.000000025"
    },
    "top_provider": {
      "context_length": 400000,
      "max_completion_tokens": 100000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-oss-safeguard-20b": {
    "canonical_slug": "openai/gpt-oss-safeguard-20b",
    "name": "OpenAI: gpt-oss-safeguard-20b",
    "description": "gpt-oss-safeguard-20b is a safety reasoning model from OpenAI built upon gpt-oss-20b. This open-weight, 21B-parameter Mixture-of-Experts (MoE) model offers lower latency for safety tasks like content classification, LLM filtering, and trust & safety labeling.\n\nLearn more about this model in OpenAI's gpt-oss-safeguard [user guide](https://cookbook.openai.com/articles/gpt-oss-safeguard-guide).",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000000075",
      "completion": "0.0000003",
      "input_cache_read": "0.000000037"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "minimax/minimax-m2": {
    "canonical_slug": "minimax/minimax-m2",
    "name": "MiniMax: MiniMax M2",
    "description": "MiniMax-M2 is a compact, high-efficiency large language model optimized for end-to-end coding and agentic workflows. With 10 billion activated parameters (230 billion total), it delivers near-frontier intelligence across general reasoning, tool use, and multi-step task execution while maintaining low latency and deployment efficiency.\n\nThe model excels in code generation, multi-file editing, compile-run-fix loops, and test-validated repair, showing strong results on SWE-Bench Verified, Multi-SWE-Bench, and Terminal-Bench. It also performs competitively in agentic evaluations such as BrowseComp and GAIA, effectively handling long-horizon planning, retrieval, and recovery from execution errors.\n\nBenchmarked by [Artificial Analysis](https://artificialanalysis.ai/models/minimax-m2), MiniMax-M2 ranks among the top open-source models for composite intelligence, spanning mathematics, science, and instruction-following. Its small activation footprint enables fast inference, high concurrency, and improved unit economics, making it well-suited for large-scale agents, developer assistants, and reasoning-driven applications that require responsiveness and cost efficiency.\n\nTo avoid degrading this model's performance, MiniMax highly recommends preserving reasoning between turns. Learn more about using reasoning_details to pass back reasoning in our [docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#preserving-reasoning-blocks).",
    "context_length": 196608,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Other",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000000255",
      "completion": "0.000001",
      "input_cache_read": "0.00000003"
    },
    "top_provider": {
      "context_length": 196608,
      "max_completion_tokens": 196608,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 1,
      "top_p": 0.95,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-vl-32b-instruct": {
    "canonical_slug": "qwen/qwen3-vl-32b-instruct",
    "name": "Qwen: Qwen3 VL 32B Instruct",
    "description": "Qwen3-VL-32B-Instruct is a large-scale multimodal vision-language model designed for high-precision understanding and reasoning across text, images, and video. With 32 billion parameters, it combines deep visual perception with advanced text comprehension, enabling fine-grained spatial reasoning, document and scene analysis, and long-horizon video understanding.Robust OCR in 32 languages, and enhanced multimodal fusion through Interleaved-MRoPE and DeepStack architectures. Optimized for agentic interaction and visual tool use, Qwen3-VL-32B delivers state-of-the-art performance for complex real-world multimodal tasks.",
    "context_length": 131072,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000000104",
      "completion": "0.000000416"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": "2026-02-25"
  },
  "openai/gpt-5-image-mini": {
    "canonical_slug": "openai/gpt-5-image-mini",
    "name": "OpenAI: GPT-5 Image Mini",
    "description": "GPT-5 Image Mini combines OpenAI's advanced language capabilities, powered by [GPT-5 Mini](https://openrouter.ai/openai/gpt-5-mini), with GPT Image 1 Mini for efficient image generation. This natively multimodal model features superior instruction following, text rendering, and detailed image editing with reduced latency and cost. It excels at high-quality visual creation while maintaining strong text understanding, making it ideal for applications that require both efficient image generation and text processing at scale.",
    "context_length": 400000,
    "architecture": {
      "modality": "text+image+file->text+image",
      "input_modalities": [
        "file",
        "image",
        "text"
      ],
      "output_modalities": [
        "image",
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000025",
      "completion": "0.000002",
      "web_search": "0.01",
      "input_cache_read": "0.00000025"
    },
    "top_provider": {
      "context_length": 400000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "anthropic/claude-haiku-4.5": {
    "canonical_slug": "anthropic/claude-4.5-haiku-20251001",
    "name": "Anthropic: Claude Haiku 4.5",
    "description": "Claude Haiku 4.5 is Anthropic’s fastest and most efficient model, delivering near-frontier intelligence at a fraction of the cost and latency of larger Claude models. Matching Claude Sonnet 4’s performance across reasoning, coding, and computer-use tasks, Haiku 4.5 brings frontier-level capability to real-time and high-volume applications.\n\nIt introduces extended thinking to the Haiku line; enabling controllable reasoning depth, summarized or interleaved thought output, and tool-assisted workflows with full support for coding, bash, web search, and computer-use tools. Scoring >73% on SWE-bench Verified, Haiku 4.5 ranks among the world’s best coding models while maintaining exceptional responsiveness for sub-agents, parallelized execution, and scaled deployment.",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "image",
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Claude",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000001",
      "completion": "0.000005",
      "web_search": "0.01",
      "input_cache_read": "0.0000001",
      "input_cache_write": "0.00000125"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 64000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-vl-8b-thinking": {
    "canonical_slug": "qwen/qwen3-vl-8b-thinking",
    "name": "Qwen: Qwen3 VL 8B Thinking",
    "description": "Qwen3-VL-8B-Thinking is the reasoning-optimized variant of the Qwen3-VL-8B multimodal model, designed for advanced visual and textual reasoning across complex scenes, documents, and temporal sequences. It integrates enhanced multimodal alignment and long-context processing (native 256K, expandable to 1M tokens) for tasks such as scientific visual analysis, causal inference, and mathematical reasoning over image or video inputs.\n\nCompared to the Instruct edition, the Thinking version introduces deeper visual-language fusion and deliberate reasoning pathways that improve performance on long-chain logic tasks, STEM problem-solving, and multi-step video understanding. It achieves stronger temporal grounding via Interleaved-MRoPE and timestamp-aware embeddings, while maintaining robust OCR, multilingual comprehension, and text generation on par with large text-only LLMs.",
    "context_length": 131072,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "image",
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000000117",
      "completion": "0.000001365"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 1,
      "top_p": 0.95
    },
    "expiration_date": null
  },
  "qwen/qwen3-vl-8b-instruct": {
    "canonical_slug": "qwen/qwen3-vl-8b-instruct",
    "name": "Qwen: Qwen3 VL 8B Instruct",
    "description": "Qwen3-VL-8B-Instruct is a multimodal vision-language model from the Qwen3-VL series, built for high-fidelity understanding and reasoning across text, images, and video. It features improved multimodal fusion with Interleaved-MRoPE for long-horizon temporal reasoning, DeepStack for fine-grained visual-text alignment, and text-timestamp alignment for precise event localization.\n\nThe model supports a native 256K-token context window, extensible to 1M tokens, and handles both static and dynamic media inputs for tasks like document parsing, visual question answering, spatial reasoning, and GUI control. It achieves text understanding comparable to leading LLMs while expanding OCR coverage to 32 languages and enhancing robustness under varied visual conditions.",
    "context_length": 131072,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "image",
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000008",
      "completion": "0.0000005"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 0.7,
      "top_p": 0.8,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5-image": {
    "canonical_slug": "openai/gpt-5-image",
    "name": "OpenAI: GPT-5 Image",
    "description": "[GPT-5](https://openrouter.ai/openai/gpt-5) Image combines OpenAI's GPT-5 model with state-of-the-art image generation capabilities. It offers major improvements in reasoning, code quality, and user experience while incorporating GPT Image 1's superior instruction following, text rendering, and detailed image editing.",
    "context_length": 400000,
    "architecture": {
      "modality": "text+image+file->text+image",
      "input_modalities": [
        "image",
        "text",
        "file"
      ],
      "output_modalities": [
        "image",
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00001",
      "completion": "0.00001",
      "web_search": "0.01",
      "input_cache_read": "0.00000125"
    },
    "top_provider": {
      "context_length": 400000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/o3-deep-research": {
    "canonical_slug": "openai/o3-deep-research-2025-06-26",
    "name": "OpenAI: o3 Deep Research",
    "description": "o3-deep-research is OpenAI's advanced model for deep research, designed to tackle complex, multi-step research tasks.\n\nNote: This model always uses the 'web_search' tool which adds additional cost.",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "image",
        "text",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00001",
      "completion": "0.00004",
      "web_search": "0.01",
      "input_cache_read": "0.0000025"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 100000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/o4-mini-deep-research": {
    "canonical_slug": "openai/o4-mini-deep-research-2025-06-26",
    "name": "OpenAI: o4 Mini Deep Research",
    "description": "o4-mini-deep-research is OpenAI's faster, more affordable deep research model—ideal for tackling complex, multi-step research tasks.\n\nNote: This model always uses the 'web_search' tool which adds additional cost.",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "file",
        "image",
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000002",
      "completion": "0.000008",
      "web_search": "0.01",
      "input_cache_read": "0.0000005"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 100000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "google/gemini-2.5-flash-image": {
    "canonical_slug": "google/gemini-2.5-flash-image",
    "name": "Google: Nano Banana (Gemini 2.5 Flash Image)",
    "description": "Gemini 2.5 Flash Image, a.k.a. \"Nano Banana,\" is now generally available. It is a state of the art image generation model with contextual understanding. It is capable of image generation, edits, and multi-turn conversations. Aspect ratios can be controlled with the [image_config API Parameter](https://openrouter.ai/docs/features/multimodal/image-generation#image-aspect-ratio-configuration)",
    "context_length": 32768,
    "architecture": {
      "modality": "text+image->text+image",
      "input_modalities": [
        "image",
        "text"
      ],
      "output_modalities": [
        "image",
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000003",
      "completion": "0.0000025",
      "image": "0.0000003",
      "audio": "0.000001",
      "internal_reasoning": "0.0000025",
      "input_cache_read": "0.00000003",
      "input_cache_write": "0.00000008333333333333334"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-vl-30b-a3b-thinking": {
    "canonical_slug": "qwen/qwen3-vl-30b-a3b-thinking",
    "name": "Qwen: Qwen3 VL 30B A3B Thinking",
    "description": "Qwen3-VL-30B-A3B-Thinking is a multimodal model that unifies strong text generation with visual understanding for images and videos. Its Thinking variant enhances reasoning in STEM, math, and complex tasks. It excels in perception of real-world/synthetic categories, 2D/3D spatial grounding, and long-form visual comprehension, achieving competitive multimodal benchmark results. For agentic use, it handles multi-image multi-turn instructions, video timeline alignments, GUI automation, and visual coding from sketches to debugged UI. Text performance matches flagship Qwen3 models, suiting document AI, OCR, UI assistance, spatial tasks, and agent research.",
    "context_length": 131072,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0",
      "completion": "0",
      "request": "0",
      "image": "0",
      "web_search": "0",
      "internal_reasoning": "0"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 0.8,
      "top_p": 0.95
    },
    "expiration_date": null
  },
  "qwen/qwen3-vl-30b-a3b-instruct": {
    "canonical_slug": "qwen/qwen3-vl-30b-a3b-instruct",
    "name": "Qwen: Qwen3 VL 30B A3B Instruct",
    "description": "Qwen3-VL-30B-A3B-Instruct is a multimodal model that unifies strong text generation with visual understanding for images and videos. Its Instruct variant optimizes instruction-following for general multimodal tasks. It excels in perception of real-world/synthetic categories, 2D/3D spatial grounding, and long-form visual comprehension, achieving competitive multimodal benchmark results. For agentic use, it handles multi-image multi-turn instructions, video timeline alignments, GUI automation, and visual coding from sketches to debugged UI. Text performance matches flagship Qwen3 models, suiting document AI, OCR, UI assistance, spatial tasks, and agent research.",
    "context_length": 131072,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000013",
      "completion": "0.00000052"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 0.7,
      "top_p": 0.8,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5-pro": {
    "canonical_slug": "openai/gpt-5-pro-2025-10-06",
    "name": "OpenAI: GPT-5 Pro",
    "description": "GPT-5 Pro is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and accuracy in high-stakes use cases. It supports test-time routing features and advanced prompt understanding, including user-specified intent like \"think hard about this.\" Improvements include reductions in hallucination, sycophancy, and better performance in coding, writing, and health-related tasks.",
    "context_length": 400000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "image",
        "text",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000015",
      "completion": "0.00012",
      "web_search": "0.01"
    },
    "top_provider": {
      "context_length": 400000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "anthropic/claude-sonnet-4.5": {
    "canonical_slug": "anthropic/claude-4.5-sonnet-20250929",
    "name": "Anthropic: Claude Sonnet 4.5",
    "description": "Claude Sonnet 4.5 is Anthropic’s most advanced Sonnet model to date, optimized for real-world agents and coding workflows. It delivers state-of-the-art performance on coding benchmarks such as SWE-bench Verified, with improvements across system design, code security, and specification adherence. The model is designed for extended autonomous operation, maintaining task continuity across sessions and providing fact-based progress tracking.\n\nSonnet 4.5 also introduces stronger agentic capabilities, including improved tool orchestration, speculative parallel execution, and more efficient context and memory management. With enhanced context tracking and awareness of token usage across tool calls, it is particularly well-suited for multi-context and long-running workflows. Use cases span software engineering, cybersecurity, financial analysis, research agents, and other domains requiring sustained reasoning and tool use.",
    "context_length": 1000000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Claude",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000003",
      "completion": "0.000015",
      "web_search": "0.01",
      "input_cache_read": "0.0000003",
      "input_cache_write": "0.00000375"
    },
    "top_provider": {
      "context_length": 1000000,
      "max_completion_tokens": 64000,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 1,
      "top_p": 1,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "deepseek/deepseek-v3.2-exp": {
    "canonical_slug": "deepseek/deepseek-v3.2-exp",
    "name": "DeepSeek: DeepSeek V3.2 Exp",
    "description": "DeepSeek-V3.2-Exp is an experimental large language model released by DeepSeek as an intermediate step between V3.1 and future architectures. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse attention mechanism designed to improve training and inference efficiency in long-context scenarios while maintaining output quality. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)\n\nThe model was trained under conditions aligned with V3.1-Terminus to enable direct comparison. Benchmarking shows performance roughly on par with V3.1 across reasoning, coding, and agentic tool-use tasks, with minor tradeoffs and gains depending on the domain. This release focuses on validating architectural optimizations for extended context lengths rather than advancing raw task accuracy, making it primarily a research-oriented model for exploring efficient transformer designs.",
    "context_length": 163840,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "DeepSeek",
      "instruct_type": "deepseek-v3.1"
    },
    "pricing": {
      "prompt": "0.00000027",
      "completion": "0.00000041"
    },
    "top_provider": {
      "context_length": 163840,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 0.6,
      "top_p": 0.95,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "google/gemini-2.5-flash-lite-preview-09-2025": {
    "canonical_slug": "google/gemini-2.5-flash-lite-preview-09-2025",
    "name": "Google: Gemini 2.5 Flash Lite Preview 09-2025",
    "description": "Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance across common benchmarks compared to earlier Flash models. By default, \"thinking\" (i.e. multi-pass reasoning) is disabled to prioritize speed, but developers can enable it via the [Reasoning API parameter](https://openrouter.ai/docs/use-cases/reasoning-tokens) to selectively trade off cost for intelligence. ",
    "context_length": 1048576,
    "architecture": {
      "modality": "text+image+file+audio+video->text",
      "input_modalities": [
        "text",
        "image",
        "file",
        "audio",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000001",
      "completion": "0.0000004",
      "image": "0.0000001",
      "audio": "0.0000003",
      "internal_reasoning": "0.0000004",
      "input_cache_read": "0.00000001",
      "input_cache_write": "0.00000008333333333333334"
    },
    "top_provider": {
      "context_length": 1048576,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-vl-235b-a22b-thinking": {
    "canonical_slug": "qwen/qwen3-vl-235b-a22b-thinking",
    "name": "Qwen: Qwen3 VL 235B A22B Thinking",
    "description": "Qwen3-VL-235B-A22B Thinking is a multimodal model that unifies strong text generation with visual understanding across images and video. The Thinking model is optimized for multimodal reasoning in STEM and math. The series emphasizes robust perception (recognition of diverse real-world and synthetic categories), spatial understanding (2D/3D grounding), and long-form visual comprehension, with competitive results on public multimodal benchmarks for both perception and reasoning.\n\nBeyond analysis, Qwen3-VL supports agentic interaction and tool use: it can follow complex instructions over multi-image, multi-turn dialogues; align text to video timelines for precise temporal queries; and operate GUI elements for automation tasks. The models also enable visual coding workflows, turning sketches or mockups into code and assisting with UI debugging, while maintaining strong text-only performance comparable to the flagship Qwen3 language models. This makes Qwen3-VL suitable for production scenarios spanning document AI, multilingual OCR, software/UI assistance, spatial/embodied tasks, and research on vision-language agents.",
    "context_length": 131072,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0",
      "completion": "0",
      "request": "0",
      "image": "0",
      "web_search": "0",
      "internal_reasoning": "0"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 0.8,
      "top_p": 0.95,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-vl-235b-a22b-instruct": {
    "canonical_slug": "qwen/qwen3-vl-235b-a22b-instruct",
    "name": "Qwen: Qwen3 VL 235B A22B Instruct",
    "description": "Qwen3-VL-235B-A22B Instruct is an open-weight multimodal model that unifies strong text generation with visual understanding across images and video. The Instruct model targets general vision-language use (VQA, document parsing, chart/table extraction, multilingual OCR). The series emphasizes robust perception (recognition of diverse real-world and synthetic categories), spatial understanding (2D/3D grounding), and long-form visual comprehension, with competitive results on public multimodal benchmarks for both perception and reasoning.\n\nBeyond analysis, Qwen3-VL supports agentic interaction and tool use: it can follow complex instructions over multi-image, multi-turn dialogues; align text to video timelines for precise temporal queries; and operate GUI elements for automation tasks. The models also enable visual coding workflows—turning sketches or mockups into code and assisting with UI debugging—while maintaining strong text-only performance comparable to the flagship Qwen3 language models. This makes Qwen3-VL suitable for production scenarios spanning document AI, multilingual OCR, software/UI assistance, spatial/embodied tasks, and research on vision-language agents.",
    "context_length": 262144,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000002",
      "completion": "0.00000088",
      "input_cache_read": "0.00000011"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 0.7,
      "top_p": 0.8,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-max": {
    "canonical_slug": "qwen/qwen3-max",
    "name": "Qwen: Qwen3 Max",
    "description": "Qwen3-Max is an updated release built on the Qwen3 series, offering major improvements in reasoning, instruction following, multilingual support, and long-tail knowledge coverage compared to the January 2025 version. It delivers higher accuracy in math, coding, logic, and science tasks, follows complex instructions in Chinese and English more reliably, reduces hallucinations, and produces higher-quality responses for open-ended Q&A, writing, and conversation. The model supports over 100 languages with stronger translation and commonsense reasoning, and is optimized for retrieval-augmented generation (RAG) and tool calling, though it does not include a dedicated “thinking” mode.",
    "context_length": 262144,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000012",
      "completion": "0.000006",
      "input_cache_read": "0.00000024"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 1,
      "top_p": 1,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-coder-plus": {
    "canonical_slug": "qwen/qwen3-coder-plus",
    "name": "Qwen: Qwen3 Coder Plus",
    "description": "Qwen3 Coder Plus is Alibaba's proprietary version of the Open Source Qwen3 Coder 480B A35B. It is a powerful coding agent model specializing in autonomous programming via tool calling and environment interaction, combining coding proficiency with versatile general-purpose abilities.",
    "context_length": 1000000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000065",
      "completion": "0.00000325",
      "input_cache_read": "0.00000013"
    },
    "top_provider": {
      "context_length": 1000000,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5-codex": {
    "canonical_slug": "openai/gpt-5-codex",
    "name": "OpenAI: GPT-5 Codex",
    "description": "GPT-5-Codex is a specialized version of GPT-5 optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering tasks. The model supports building projects from scratch, feature development, debugging, large-scale refactoring, and code review. Compared to GPT-5, Codex is more steerable, adheres closely to developer instructions, and produces cleaner, higher-quality code outputs. Reasoning effort can be adjusted with the `reasoning.effort` parameter. Read the [docs here](https://openrouter.ai/docs/use-cases/reasoning-tokens#reasoning-effort-level)\n\nCodex integrates into developer environments including the CLI, IDE extensions, GitHub, and cloud tasks. It adapts reasoning effort dynamically—providing fast responses for small tasks while sustaining extended multi-hour runs for large projects. The model is trained to perform structured code reviews, catching critical flaws by reasoning over dependencies and validating behavior against tests. It also supports multimodal inputs such as images or screenshots for UI development and integrates tool use for search, dependency installation, and environment setup. Codex is intended specifically for agentic coding applications.",
    "context_length": 400000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000125",
      "completion": "0.00001",
      "input_cache_read": "0.000000125"
    },
    "top_provider": {
      "context_length": 400000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "deepseek/deepseek-v3.1-terminus:exacto": {
    "canonical_slug": "deepseek/deepseek-v3.1-terminus",
    "name": "DeepSeek: DeepSeek V3.1 Terminus (exacto)",
    "description": "DeepSeek-V3.1 Terminus is an update to [DeepSeek V3.1](/deepseek/deepseek-chat-v3.1) that maintains the model's original capabilities while addressing issues reported by users, including language consistency and agent capabilities, further optimizing the model's performance in coding and search agents. It is a large hybrid reasoning model (671B parameters, 37B active) that supports both thinking and non-thinking modes. It extends the DeepSeek-V3 base with a two-phase long-context training process, reaching up to 128K tokens, and uses FP8 microscaling for efficient inference. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)\n\nThe model improves tool use, code generation, and reasoning efficiency, achieving performance comparable to DeepSeek-R1 on difficult benchmarks while responding more quickly. It supports structured tool calling, code agents, and search agents, making it suitable for research, coding, and agentic workflows. ",
    "context_length": 163840,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "DeepSeek",
      "instruct_type": "deepseek-v3.1"
    },
    "pricing": {
      "prompt": "0.00000021",
      "completion": "0.00000079",
      "input_cache_read": "0.000000168"
    },
    "top_provider": {
      "context_length": 163840,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "deepseek/deepseek-v3.1-terminus": {
    "canonical_slug": "deepseek/deepseek-v3.1-terminus",
    "name": "DeepSeek: DeepSeek V3.1 Terminus",
    "description": "DeepSeek-V3.1 Terminus is an update to [DeepSeek V3.1](/deepseek/deepseek-chat-v3.1) that maintains the model's original capabilities while addressing issues reported by users, including language consistency and agent capabilities, further optimizing the model's performance in coding and search agents. It is a large hybrid reasoning model (671B parameters, 37B active) that supports both thinking and non-thinking modes. It extends the DeepSeek-V3 base with a two-phase long-context training process, reaching up to 128K tokens, and uses FP8 microscaling for efficient inference. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)\n\nThe model improves tool use, code generation, and reasoning efficiency, achieving performance comparable to DeepSeek-R1 on difficult benchmarks while responding more quickly. It supports structured tool calling, code agents, and search agents, making it suitable for research, coding, and agentic workflows. ",
    "context_length": 163840,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "DeepSeek",
      "instruct_type": "deepseek-v3.1"
    },
    "pricing": {
      "prompt": "0.00000021",
      "completion": "0.00000079",
      "input_cache_read": "0.0000001300000002"
    },
    "top_provider": {
      "context_length": 163840,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "x-ai/grok-4-fast": {
    "canonical_slug": "x-ai/grok-4-fast",
    "name": "xAI: Grok 4 Fast",
    "description": "Grok 4 Fast is xAI's latest multimodal model with SOTA cost-efficiency and a 2M token context window. It comes in two flavors: non-reasoning and reasoning. Read more about the model on xAI's [news post](http://x.ai/news/grok-4-fast).\n\nReasoning can be enabled/disabled using the `reasoning` `enabled` parameter in the API. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#controlling-reasoning-tokens)",
    "context_length": 2000000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Grok",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000002",
      "completion": "0.0000005",
      "web_search": "0.005",
      "input_cache_read": "0.00000005"
    },
    "top_provider": {
      "context_length": 2000000,
      "max_completion_tokens": 30000,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "logprobs",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-coder-flash": {
    "canonical_slug": "qwen/qwen3-coder-flash",
    "name": "Qwen: Qwen3 Coder Flash",
    "description": "Qwen3 Coder Flash is Alibaba's fast and cost efficient version of their proprietary Qwen3 Coder Plus. It is a powerful coding agent model specializing in autonomous programming via tool calling and environment interaction, combining coding proficiency with versatile general-purpose abilities.",
    "context_length": 1000000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000000195",
      "completion": "0.000000975",
      "input_cache_read": "0.000000039"
    },
    "top_provider": {
      "context_length": 1000000,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-next-80b-a3b-thinking": {
    "canonical_slug": "qwen/qwen3-next-80b-a3b-thinking-2509",
    "name": "Qwen: Qwen3 Next 80B A3B Thinking",
    "description": "Qwen3-Next-80B-A3B-Thinking is a reasoning-first chat model in the Qwen3-Next line that outputs structured “thinking” traces by default. It’s designed for hard multi-step problems; math proofs, code synthesis/debugging, logic, and agentic planning, and reports strong results across knowledge, reasoning, coding, alignment, and multilingual evaluations. Compared with prior Qwen3 variants, it emphasizes stability under long chains of thought and efficient scaling during inference, and it is tuned to follow complex instructions while reducing repetitive or off-task behavior.\n\nThe model is suitable for agent frameworks and tool use (function calling), retrieval-heavy workflows, and standardized benchmarking where step-by-step solutions are required. It supports long, detailed completions and leverages throughput-oriented techniques (e.g., multi-token prediction) for faster generation. Note that it operates in thinking-only mode.",
    "context_length": 128000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000015",
      "completion": "0.0000012"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-next-80b-a3b-instruct:free": {
    "canonical_slug": "qwen/qwen3-next-80b-a3b-instruct-2509",
    "name": "Qwen: Qwen3 Next 80B A3B Instruct (free)",
    "description": "Qwen3-Next-80B-A3B-Instruct is an instruction-tuned chat model in the Qwen3-Next series optimized for fast, stable responses without “thinking” traces. It targets complex tasks across reasoning, code generation, knowledge QA, and multilingual use, while remaining robust on alignment and formatting. Compared with prior Qwen3 instruct variants, it focuses on higher throughput and stability on ultra-long inputs and multi-turn dialogues, making it well-suited for RAG, tool use, and agentic workflows that require consistent final answers rather than visible chain-of-thought.\n\nThe model employs scaling-efficient training and decoding to improve parameter efficiency and inference speed, and has been validated on a broad set of public benchmarks where it reaches or approaches larger Qwen3 systems in several categories while outperforming earlier mid-sized baselines. It is best used as a general assistant, code helper, and long-context task solver in production settings where deterministic, instruction-following outputs are preferred.",
    "context_length": 262144,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0",
      "completion": "0"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen3-next-80b-a3b-instruct": {
    "canonical_slug": "qwen/qwen3-next-80b-a3b-instruct-2509",
    "name": "Qwen: Qwen3 Next 80B A3B Instruct",
    "description": "Qwen3-Next-80B-A3B-Instruct is an instruction-tuned chat model in the Qwen3-Next series optimized for fast, stable responses without “thinking” traces. It targets complex tasks across reasoning, code generation, knowledge QA, and multilingual use, while remaining robust on alignment and formatting. Compared with prior Qwen3 instruct variants, it focuses on higher throughput and stability on ultra-long inputs and multi-turn dialogues, making it well-suited for RAG, tool use, and agentic workflows that require consistent final answers rather than visible chain-of-thought.\n\nThe model employs scaling-efficient training and decoding to improve parameter efficiency and inference speed, and has been validated on a broad set of public benchmarks where it reaches or approaches larger Qwen3 systems in several categories while outperforming earlier mid-sized baselines. It is best used as a general assistant, code helper, and long-context task solver in production settings where deterministic, instruction-following outputs are preferred.",
    "context_length": 262144,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000009",
      "completion": "0.0000011"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen-plus-2025-07-28:thinking": {
    "canonical_slug": "qwen/qwen-plus-2025-07-28",
    "name": "Qwen: Qwen Plus 0728 (thinking)",
    "description": "Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.",
    "context_length": 1000000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000026",
      "completion": "0.00000078"
    },
    "top_provider": {
      "context_length": 1000000,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen-plus-2025-07-28": {
    "canonical_slug": "qwen/qwen-plus-2025-07-28",
    "name": "Qwen: Qwen Plus 0728",
    "description": "Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.",
    "context_length": 1000000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000026",
      "completion": "0.00000078"
    },
    "top_provider": {
      "context_length": 1000000,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-30b-a3b-thinking-2507": {
    "canonical_slug": "qwen/qwen3-30b-a3b-thinking-2507",
    "name": "Qwen: Qwen3 30B A3B Thinking 2507",
    "description": "Qwen3-30B-A3B-Thinking-2507 is a 30B parameter Mixture-of-Experts reasoning model optimized for complex tasks requiring extended multi-step thinking. The model is designed specifically for “thinking mode,” where internal reasoning traces are separated from final answers.\n\nCompared to earlier Qwen3-30B releases, this version improves performance across logical reasoning, mathematics, science, coding, and multilingual benchmarks. It also demonstrates stronger instruction following, tool use, and alignment with human preferences. With higher reasoning efficiency and extended output budgets, it is best suited for advanced research, competitive problem solving, and agentic applications requiring structured long-context reasoning.",
    "context_length": 32768,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000000051",
      "completion": "0.00000034"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "x-ai/grok-code-fast-1": {
    "canonical_slug": "x-ai/grok-code-fast-1",
    "name": "xAI: Grok Code Fast 1",
    "description": "Grok Code Fast 1 is a speedy and economical reasoning model that excels at agentic coding. With reasoning traces visible in the response, developers can steer Grok Code for high-quality work flows.",
    "context_length": 256000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Grok",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000002",
      "completion": "0.0000015",
      "web_search": "0.005",
      "input_cache_read": "0.00000002"
    },
    "top_provider": {
      "context_length": 256000,
      "max_completion_tokens": 10000,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "logprobs",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "deepseek/deepseek-chat-v3.1": {
    "canonical_slug": "deepseek/deepseek-chat-v3.1",
    "name": "DeepSeek: DeepSeek V3.1",
    "description": "DeepSeek-V3.1 is a large hybrid reasoning model (671B parameters, 37B active) that supports both thinking and non-thinking modes via prompt templates. It extends the DeepSeek-V3 base with a two-phase long-context training process, reaching up to 128K tokens, and uses FP8 microscaling for efficient inference. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://openrouter.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)\n\nThe model improves tool use, code generation, and reasoning efficiency, achieving performance comparable to DeepSeek-R1 on difficult benchmarks while responding more quickly. It supports structured tool calling, code agents, and search agents, making it suitable for research, coding, and agentic workflows. \n\nIt succeeds the [DeepSeek V3-0324](/deepseek/deepseek-chat-v3-0324) model and performs well on a variety of tasks.",
    "context_length": 32768,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "DeepSeek",
      "instruct_type": "deepseek-v3.1"
    },
    "pricing": {
      "prompt": "0.00000015",
      "completion": "0.00000075"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": 7168,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4o-audio-preview": {
    "canonical_slug": "openai/gpt-4o-audio-preview",
    "name": "OpenAI: GPT-4o Audio",
    "description": "The gpt-4o-audio-preview model adds support for audio inputs as prompts. This enhancement allows the model to detect nuances within audio recordings and add depth to generated user experiences. Audio outputs are currently not supported. Audio tokens are priced at $40 per million input and $80 per million output audio tokens.",
    "context_length": 128000,
    "architecture": {
      "modality": "text+audio->text+audio",
      "input_modalities": [
        "audio",
        "text"
      ],
      "output_modalities": [
        "text",
        "audio"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000025",
      "completion": "0.00001",
      "audio": "0.00004"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 16384,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5-chat": {
    "canonical_slug": "openai/gpt-5-chat-2025-08-07",
    "name": "OpenAI: GPT-5 Chat",
    "description": "GPT-5 Chat is designed for advanced, natural, multimodal, and context-aware conversations for enterprise applications.",
    "context_length": 128000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "file",
        "image",
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000125",
      "completion": "0.00001",
      "web_search": "0.01",
      "input_cache_read": "0.000000125"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 16384,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "structured_outputs"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-5": {
    "canonical_slug": "openai/gpt-5-2025-08-07",
    "name": "OpenAI: GPT-5",
    "description": "GPT-5 is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and accuracy in high-stakes use cases. It supports test-time routing features and advanced prompt understanding, including user-specified intent like \"think hard about this.\" Improvements include reductions in hallucination, sycophancy, and better performance in coding, writing, and health-related tasks.",
    "context_length": 400000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000125",
      "completion": "0.00001",
      "web_search": "0.01",
      "input_cache_read": "0.000000125"
    },
    "top_provider": {
      "context_length": 400000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-5-mini": {
    "canonical_slug": "openai/gpt-5-mini-2025-08-07",
    "name": "OpenAI: GPT-5 Mini",
    "description": "GPT-5 Mini is a compact version of GPT-5, designed to handle lighter-weight reasoning tasks. It provides the same instruction-following and safety-tuning benefits as GPT-5, but with reduced latency and cost. GPT-5 Mini is the successor to OpenAI's o4-mini model.",
    "context_length": 400000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000025",
      "completion": "0.000002",
      "web_search": "0.01",
      "input_cache_read": "0.000000025"
    },
    "top_provider": {
      "context_length": 400000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-5-nano": {
    "canonical_slug": "openai/gpt-5-nano-2025-08-07",
    "name": "OpenAI: GPT-5 Nano",
    "description": "GPT-5-Nano is the smallest and fastest variant in the GPT-5 system, optimized for developer tools, rapid interactions, and ultra-low latency environments. While limited in reasoning depth compared to its larger counterparts, it retains key instruction-following and safety features. It is the successor to GPT-4.1-nano and offers a lightweight option for cost-sensitive or real-time applications.",
    "context_length": 400000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000005",
      "completion": "0.0000004",
      "web_search": "0.01",
      "input_cache_read": "0.000000005"
    },
    "top_provider": {
      "context_length": 400000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-oss-120b:free": {
    "canonical_slug": "openai/gpt-oss-120b",
    "name": "OpenAI: gpt-oss-120b (free)",
    "description": "gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward pass and is optimized to run on a single H100 GPU with native MXFP4 quantization. The model supports configurable reasoning depth, full chain-of-thought access, and native tool use, including function calling, browsing, and structured output generation.",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0",
      "completion": "0"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 131072,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "seed",
      "stop",
      "temperature",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-oss-120b": {
    "canonical_slug": "openai/gpt-oss-120b",
    "name": "OpenAI: gpt-oss-120b",
    "description": "gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward pass and is optimized to run on a single H100 GPU with native MXFP4 quantization. The model supports configurable reasoning depth, full chain-of-thought access, and native tool use, including function calling, browsing, and structured output generation.",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000000039",
      "completion": "0.00000019"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "reasoning_effort",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-oss-120b:exacto": {
    "canonical_slug": "openai/gpt-oss-120b",
    "name": "OpenAI: gpt-oss-120b (exacto)",
    "description": "gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward pass and is optimized to run on a single H100 GPU with native MXFP4 quantization. The model supports configurable reasoning depth, full chain-of-thought access, and native tool use, including function calling, browsing, and structured output generation.",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000000039",
      "completion": "0.00000019"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-oss-20b:free": {
    "canonical_slug": "openai/gpt-oss-20b",
    "name": "OpenAI: gpt-oss-20b (free)",
    "description": "gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for lower-latency inference and deployability on consumer or single-GPU hardware. The model is trained in OpenAI’s Harmony response format and supports reasoning level configuration, fine-tuning, and agentic capabilities including function calling, tool use, and structured outputs.",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0",
      "completion": "0"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 131072,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "seed",
      "stop",
      "temperature",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/gpt-oss-20b": {
    "canonical_slug": "openai/gpt-oss-20b",
    "name": "OpenAI: gpt-oss-20b",
    "description": "gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for lower-latency inference and deployability on consumer or single-GPU hardware. The model is trained in OpenAI’s Harmony response format and supports reasoning level configuration, fine-tuning, and agentic capabilities including function calling, tool use, and structured outputs.",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000003",
      "completion": "0.00000014"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "reasoning_effort",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "anthropic/claude-opus-4.1": {
    "canonical_slug": "anthropic/claude-4.1-opus-20250805",
    "name": "Anthropic: Claude Opus 4.1",
    "description": "Claude Opus 4.1 is an updated version of Anthropic’s flagship model, offering improved performance in coding, reasoning, and agentic tasks. It achieves 74.5% on SWE-bench Verified and shows notable gains in multi-file code refactoring, debugging precision, and detail-oriented reasoning. The model supports extended thinking up to 64K tokens and is optimized for tasks involving research, data analysis, and tool-assisted reasoning.",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "image",
        "text",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Claude",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000015",
      "completion": "0.000075",
      "web_search": "0.01",
      "input_cache_read": "0.0000015",
      "input_cache_write": "0.00001875"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 32000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-coder-30b-a3b-instruct": {
    "canonical_slug": "qwen/qwen3-coder-30b-a3b-instruct",
    "name": "Qwen: Qwen3 Coder 30B A3B Instruct",
    "description": "Qwen3-Coder-30B-A3B-Instruct is a 30.5B parameter Mixture-of-Experts (MoE) model with 128 experts (8 active per forward pass), designed for advanced code generation, repository-scale understanding, and agentic tool use. Built on the Qwen3 architecture, it supports a native context length of 256K tokens (extendable to 1M with Yarn) and performs strongly in tasks involving function calls, browser use, and structured code completion.\n\nThis model is optimized for instruction-following without “thinking mode”, and integrates well with OpenAI-compatible tool-use formats. ",
    "context_length": 160000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000007",
      "completion": "0.00000027"
    },
    "top_provider": {
      "context_length": 160000,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen3-30b-a3b-instruct-2507": {
    "canonical_slug": "qwen/qwen3-30b-a3b-instruct-2507",
    "name": "Qwen: Qwen3 30B A3B Instruct 2507",
    "description": "Qwen3-30B-A3B-Instruct-2507 is a 30.5B-parameter mixture-of-experts language model from Qwen, with 3.3B active parameters per inference. It operates in non-thinking mode and is designed for high-quality instruction following, multilingual understanding, and agentic tool use. Post-trained on instruction data, it demonstrates competitive performance across reasoning (AIME, ZebraLogic), coding (MultiPL-E, LiveCodeBench), and alignment (IFEval, WritingBench) benchmarks. It outperforms its non-instruct variant on subjective and open-ended tasks while retaining strong factual and coding performance.",
    "context_length": 262144,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000009",
      "completion": "0.0000003"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": 262144,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen3-235b-a22b-thinking-2507": {
    "canonical_slug": "qwen/qwen3-235b-a22b-thinking-2507",
    "name": "Qwen: Qwen3 235B A22B Thinking 2507",
    "description": "Qwen3-235B-A22B-Thinking-2507 is a high-performance, open-weight Mixture-of-Experts (MoE) language model optimized for complex reasoning tasks. It activates 22B of its 235B parameters per forward pass and natively supports up to 262,144 tokens of context. This \"thinking-only\" variant enhances structured logical reasoning, mathematics, science, and long-form generation, showing strong benchmark performance across AIME, SuperGPQA, LiveCodeBench, and MMLU-Redux. It enforces a special reasoning mode (</think>) and is designed for high-token outputs (up to 81,920 tokens) in challenging domains.\n\nThe model is instruction-tuned and excels at step-by-step reasoning, tool use, agentic workflows, and multilingual tasks. This release represents the most capable open-source variant in the Qwen3-235B series, surpassing many closed models in structured reasoning use cases.",
    "context_length": 262144,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": "qwen3"
    },
    "pricing": {
      "prompt": "0.00000011",
      "completion": "0.0000006",
      "input_cache_read": "0.000000055"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": 262144,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-coder:free": {
    "canonical_slug": "qwen/qwen3-coder-480b-a35b-07-25",
    "name": "Qwen: Qwen3 Coder 480B A35B (free)",
    "description": "Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over repositories. The model features 480 billion total parameters, with 35 billion active per forward pass (8 out of 160 experts).\n\nPricing for the Alibaba endpoints varies by context length. Once a request is greater than 128k input tokens, the higher pricing is used.",
    "context_length": 262000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0",
      "completion": "0"
    },
    "top_provider": {
      "context_length": 262000,
      "max_completion_tokens": 262000,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "presence_penalty",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen3-coder": {
    "canonical_slug": "qwen/qwen3-coder-480b-a35b-07-25",
    "name": "Qwen: Qwen3 Coder 480B A35B",
    "description": "Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over repositories. The model features 480 billion total parameters, with 35 billion active per forward pass (8 out of 160 experts).\n\nPricing for the Alibaba endpoints varies by context length. Once a request is greater than 128k input tokens, the higher pricing is used.",
    "context_length": 262144,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000022",
      "completion": "0.000001",
      "input_cache_read": "0.000000022"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen3-coder:exacto": {
    "canonical_slug": "qwen/qwen3-coder-480b-a35b-07-25",
    "name": "Qwen: Qwen3 Coder 480B A35B (exacto)",
    "description": "Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over repositories. The model features 480 billion total parameters, with 35 billion active per forward pass (8 out of 160 experts).\n\nPricing for the Alibaba endpoints varies by context length. Once a request is greater than 128k input tokens, the higher pricing is used.",
    "context_length": 262144,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000022",
      "completion": "0.0000018",
      "input_cache_read": "0.000000022"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "repetition_penalty",
      "response_format",
      "seed",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "google/gemini-2.5-flash-lite": {
    "canonical_slug": "google/gemini-2.5-flash-lite",
    "name": "Google: Gemini 2.5 Flash Lite",
    "description": "Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance across common benchmarks compared to earlier Flash models. By default, \"thinking\" (i.e. multi-pass reasoning) is disabled to prioritize speed, but developers can enable it via the [Reasoning API parameter](https://openrouter.ai/docs/use-cases/reasoning-tokens) to selectively trade off cost for intelligence. ",
    "context_length": 1048576,
    "architecture": {
      "modality": "text+image+file+audio+video->text",
      "input_modalities": [
        "text",
        "image",
        "file",
        "audio",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000001",
      "completion": "0.0000004",
      "image": "0.0000001",
      "audio": "0.0000003",
      "internal_reasoning": "0.0000004",
      "input_cache_read": "0.00000001",
      "input_cache_write": "0.00000008333333333333334"
    },
    "top_provider": {
      "context_length": 1048576,
      "max_completion_tokens": 65535,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-235b-a22b-2507": {
    "canonical_slug": "qwen/qwen3-235b-a22b-07-25",
    "name": "Qwen: Qwen3 235B A22B Instruct 2507",
    "description": "Qwen3-235B-A22B-Instruct-2507 is a multilingual, instruction-tuned mixture-of-experts language model based on the Qwen3-235B architecture, with 22B active parameters per forward pass. It is optimized for general-purpose text generation, including instruction following, logical reasoning, math, code, and tool usage. The model supports a native 262K context length and does not implement \"thinking mode\" (<think> blocks).\n\nCompared to its base variant, this version delivers significant gains in knowledge coverage, long-context reasoning, coding benchmarks, and alignment with open-ended tasks. It is particularly strong on multilingual understanding, math reasoning (e.g., AIME, HMMT), and alignment evaluations like Arena-Hard and WritingBench.",
    "context_length": 262144,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000000071",
      "completion": "0.0000001"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "reasoning_effort",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "x-ai/grok-4": {
    "canonical_slug": "x-ai/grok-4-07-09",
    "name": "xAI: Grok 4",
    "description": "Grok 4 is xAI's latest reasoning model with a 256k context window. It supports parallel tool calling, structured outputs, and both image and text inputs. Note that reasoning is not exposed, reasoning cannot be disabled, and the reasoning effort cannot be specified. Pricing increases once the total tokens in a given request is greater than 128k tokens. See more details on the [xAI docs](https://docs.x.ai/docs/models/grok-4-0709)",
    "context_length": 256000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "image",
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Grok",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000003",
      "completion": "0.000015",
      "web_search": "0.005",
      "input_cache_read": "0.00000075"
    },
    "top_provider": {
      "context_length": 256000,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "logprobs",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "google/gemma-3n-e2b-it:free": {
    "canonical_slug": "google/gemma-3n-e2b-it",
    "name": "Google: Gemma 3n 2B (free)",
    "description": "Gemma 3n E2B IT is a multimodal, instruction-tuned model developed by Google DeepMind, designed to operate efficiently at an effective parameter size of 2B while leveraging a 6B architecture. Based on the MatFormer architecture, it supports nested submodels and modular composition via the Mix-and-Match framework. Gemma 3n models are optimized for low-resource deployment, offering 32K context length and strong multilingual and reasoning performance across common benchmarks. This variant is trained on a diverse corpus including code, math, web, and multimodal data.",
    "context_length": 8192,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Other",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0",
      "completion": "0"
    },
    "top_provider": {
      "context_length": 8192,
      "max_completion_tokens": 2048,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "temperature",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "minimax/minimax-m1": {
    "canonical_slug": "minimax/minimax-m1",
    "name": "MiniMax: MiniMax M1",
    "description": "MiniMax-M1 is a large-scale, open-weight reasoning model designed for extended context and high-efficiency inference. It leverages a hybrid Mixture-of-Experts (MoE) architecture paired with a custom \"lightning attention\" mechanism, allowing it to process long sequences—up to 1 million tokens—while maintaining competitive FLOP efficiency. With 456 billion total parameters and 45.9B active per token, this variant is optimized for complex, multi-step reasoning tasks.\n\nTrained via a custom reinforcement learning pipeline (CISPO), M1 excels in long-context understanding, software engineering, agentic tool use, and mathematical reasoning. Benchmarks show strong performance across FullStackBench, SWE-bench, MATH, GPQA, and TAU-Bench, often outperforming other open models like DeepSeek R1 and Qwen3-235B.",
    "context_length": 1000000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Other",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000004",
      "completion": "0.0000022"
    },
    "top_provider": {
      "context_length": 1000000,
      "max_completion_tokens": 40000,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "seed",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "google/gemini-2.5-flash": {
    "canonical_slug": "google/gemini-2.5-flash",
    "name": "Google: Gemini 2.5 Flash",
    "description": "Gemini 2.5 Flash is Google's state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks. It includes built-in \"thinking\" capabilities, enabling it to provide responses with greater accuracy and nuanced context handling. \n\nAdditionally, Gemini 2.5 Flash is configurable through the \"max tokens for reasoning\" parameter, as described in the documentation (https://openrouter.ai/docs/use-cases/reasoning-tokens#max-tokens-for-reasoning).",
    "context_length": 1048576,
    "architecture": {
      "modality": "text+image+file+audio+video->text",
      "input_modalities": [
        "file",
        "image",
        "text",
        "audio",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000003",
      "completion": "0.0000025",
      "image": "0.0000003",
      "audio": "0.000001",
      "internal_reasoning": "0.0000025",
      "input_cache_read": "0.00000003",
      "input_cache_write": "0.00000008333333333333334"
    },
    "top_provider": {
      "context_length": 1048576,
      "max_completion_tokens": 65535,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "google/gemini-2.5-pro": {
    "canonical_slug": "google/gemini-2.5-pro",
    "name": "Google: Gemini 2.5 Pro",
    "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.",
    "context_length": 1048576,
    "architecture": {
      "modality": "text+image+file+audio+video->text",
      "input_modalities": [
        "text",
        "image",
        "file",
        "audio",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000125",
      "completion": "0.00001",
      "image": "0.00000125",
      "audio": "0.00000125",
      "internal_reasoning": "0.00001",
      "input_cache_read": "0.000000125",
      "input_cache_write": "0.000000375"
    },
    "top_provider": {
      "context_length": 1048576,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/o3-pro": {
    "canonical_slug": "openai/o3-pro-2025-06-10",
    "name": "OpenAI: o3 Pro",
    "description": "The o-series of models are trained with reinforcement learning to think before they answer and perform complex reasoning. The o3-pro model uses more compute to think harder and provide consistently better answers.\n\nNote that BYOK is required for this model. Set up here: https://openrouter.ai/settings/integrations",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "file",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00002",
      "completion": "0.00008",
      "web_search": "0.01"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 100000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "x-ai/grok-3-mini": {
    "canonical_slug": "x-ai/grok-3-mini",
    "name": "xAI: Grok 3 Mini",
    "description": "A lightweight model that thinks before responding. Fast, smart, and great for logic-based tasks that do not require deep domain knowledge. The raw thinking traces are accessible.",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Grok",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000003",
      "completion": "0.0000005",
      "web_search": "0.005",
      "input_cache_read": "0.000000075"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "logprobs",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "x-ai/grok-3": {
    "canonical_slug": "x-ai/grok-3",
    "name": "xAI: Grok 3",
    "description": "Grok 3 is the latest model from xAI. It's their flagship model that excels at enterprise use cases like data extraction, coding, and text summarization. Possesses deep domain knowledge in finance, healthcare, law, and science.\n\n",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Grok",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000003",
      "completion": "0.000015",
      "web_search": "0.005",
      "input_cache_read": "0.00000075"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "google/gemini-2.5-pro-preview": {
    "canonical_slug": "google/gemini-2.5-pro-preview-06-05",
    "name": "Google: Gemini 2.5 Pro Preview 06-05",
    "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.\n",
    "context_length": 1048576,
    "architecture": {
      "modality": "text+image+file+audio->text",
      "input_modalities": [
        "file",
        "image",
        "text",
        "audio"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000125",
      "completion": "0.00001",
      "image": "0.00000125",
      "audio": "0.00000125",
      "internal_reasoning": "0.00001",
      "input_cache_read": "0.000000125",
      "input_cache_write": "0.000000375"
    },
    "top_provider": {
      "context_length": 1048576,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "deepseek/deepseek-r1-0528": {
    "canonical_slug": "deepseek/deepseek-r1-0528",
    "name": "DeepSeek: R1 0528",
    "description": "May 28th update to the [original DeepSeek R1](/deepseek/deepseek-r1) Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active in an inference pass.\n\nFully open-source model.",
    "context_length": 163840,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "DeepSeek",
      "instruct_type": "deepseek-r1"
    },
    "pricing": {
      "prompt": "0.00000045",
      "completion": "0.00000215",
      "input_cache_read": "0.000000225"
    },
    "top_provider": {
      "context_length": 163840,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "anthropic/claude-opus-4": {
    "canonical_slug": "anthropic/claude-4-opus-20250522",
    "name": "Anthropic: Claude Opus 4",
    "description": "Claude Opus 4 is benchmarked as the world’s best coding model, at time of release, bringing sustained performance on complex, long-running tasks and agent workflows. It sets new benchmarks in software engineering, achieving leading results on SWE-bench (72.5%) and Terminal-bench (43.2%). Opus 4 supports extended, agentic workflows, handling thousands of task steps continuously for hours without degradation. \n\nRead more at the [blog post here](https://www.anthropic.com/news/claude-4)",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "image",
        "text",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Claude",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000015",
      "completion": "0.000075",
      "web_search": "0.01",
      "input_cache_read": "0.0000015",
      "input_cache_write": "0.00001875"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 32000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "anthropic/claude-sonnet-4": {
    "canonical_slug": "anthropic/claude-4-sonnet-20250522",
    "name": "Anthropic: Claude Sonnet 4",
    "description": "Claude Sonnet 4 significantly enhances the capabilities of its predecessor, Sonnet 3.7, excelling in both coding and reasoning tasks with improved precision and controllability. Achieving state-of-the-art performance on SWE-bench (72.7%), Sonnet 4 balances capability and computational efficiency, making it suitable for a broad range of applications from routine coding tasks to complex software development projects. Key enhancements include improved autonomous codebase navigation, reduced error rates in agent-driven workflows, and increased reliability in following intricate instructions. Sonnet 4 is optimized for practical everyday use, providing advanced reasoning capabilities while maintaining efficiency and responsiveness in diverse internal and external scenarios.\n\nRead more at the [blog post here](https://www.anthropic.com/news/claude-4)",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "image",
        "text",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Claude",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000003",
      "completion": "0.000015",
      "web_search": "0.01",
      "input_cache_read": "0.0000003",
      "input_cache_write": "0.00000375"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 64000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "google/gemma-3n-e4b-it:free": {
    "canonical_slug": "google/gemma-3n-e4b-it",
    "name": "Google: Gemma 3n 4B (free)",
    "description": "Gemma 3n E4B-it is optimized for efficient execution on mobile and low-resource devices, such as phones, laptops, and tablets. It supports multimodal inputs—including text, visual data, and audio—enabling diverse tasks such as text generation, speech recognition, translation, and image analysis. Leveraging innovations like Per-Layer Embedding (PLE) caching and the MatFormer architecture, Gemma 3n dynamically manages memory usage and computational load by selectively activating model parameters, significantly reducing runtime resource requirements.\n\nThis model supports a wide linguistic range (trained in over 140 languages) and features a flexible 32K token context window. Gemma 3n can selectively load parameters, optimizing memory and computational efficiency based on the task or device capabilities, making it well-suited for privacy-focused, offline-capable applications and on-device AI solutions. [Read more in the blog post](https://developers.googleblog.com/en/introducing-gemma-3n/)",
    "context_length": 8192,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Other",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0",
      "completion": "0"
    },
    "top_provider": {
      "context_length": 8192,
      "max_completion_tokens": 2048,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "temperature",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "google/gemma-3n-e4b-it": {
    "canonical_slug": "google/gemma-3n-e4b-it",
    "name": "Google: Gemma 3n 4B",
    "description": "Gemma 3n E4B-it is optimized for efficient execution on mobile and low-resource devices, such as phones, laptops, and tablets. It supports multimodal inputs—including text, visual data, and audio—enabling diverse tasks such as text generation, speech recognition, translation, and image analysis. Leveraging innovations like Per-Layer Embedding (PLE) caching and the MatFormer architecture, Gemma 3n dynamically manages memory usage and computational load by selectively activating model parameters, significantly reducing runtime resource requirements.\n\nThis model supports a wide linguistic range (trained in over 140 languages) and features a flexible 32K token context window. Gemma 3n can selectively load parameters, optimizing memory and computational efficiency based on the task or device capabilities, making it well-suited for privacy-focused, offline-capable applications and on-device AI solutions. [Read more in the blog post](https://developers.googleblog.com/en/introducing-gemma-3n/)",
    "context_length": 32768,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Other",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000002",
      "completion": "0.00000004"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "stop",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "google/gemini-2.5-pro-preview-05-06": {
    "canonical_slug": "google/gemini-2.5-pro-preview-03-25",
    "name": "Google: Gemini 2.5 Pro Preview 05-06",
    "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.",
    "context_length": 1048576,
    "architecture": {
      "modality": "text+image+file+audio+video->text",
      "input_modalities": [
        "text",
        "image",
        "file",
        "audio",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000125",
      "completion": "0.00001",
      "image": "0.00000125",
      "audio": "0.00000125",
      "internal_reasoning": "0.00001",
      "input_cache_read": "0.000000125",
      "input_cache_write": "0.000000375"
    },
    "top_provider": {
      "context_length": 1048576,
      "max_completion_tokens": 65535,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-4b:free": {
    "canonical_slug": "qwen/qwen3-4b-04-28",
    "name": "Qwen: Qwen3 4B (free)",
    "description": "Qwen3-4B is a 4 billion parameter dense language model from the Qwen3 series, designed to support both general-purpose and reasoning-intensive tasks. It introduces a dual-mode architecture—thinking and non-thinking—allowing dynamic switching between high-precision logical reasoning and efficient dialogue generation. This makes it well-suited for multi-turn chat, instruction following, and complex agent workflows.",
    "context_length": 40960,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": "qwen3"
    },
    "pricing": {
      "prompt": "0",
      "completion": "0"
    },
    "top_provider": {
      "context_length": 40960,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "meta-llama/llama-guard-4-12b": {
    "canonical_slug": "meta-llama/llama-guard-4-12b",
    "name": "Meta: Llama Guard 4 12B",
    "description": "Llama Guard 4 is a Llama 4 Scout-derived multimodal pretrained model, fine-tuned for content safety classification. Similar to previous versions, it can be used to classify content in both LLM inputs (prompt classification) and in LLM responses (response classification). It acts as an LLM—generating text in its output that indicates whether a given prompt or response is safe or unsafe, and if unsafe, it also lists the content categories violated.\n\nLlama Guard 4 was aligned to safeguard against the standardized MLCommons hazards taxonomy and designed to support multimodal Llama 4 capabilities. Specifically, it combines features from previous Llama Guard models, providing content moderation for English and multiple supported languages, along with enhanced capabilities to handle mixed text-and-image prompts, including multiple images. Additionally, Llama Guard 4 is integrated into the Llama Moderations API, extending robust safety classification to text and images.",
    "context_length": 163840,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "image",
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Other",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000018",
      "completion": "0.00000018"
    },
    "top_provider": {
      "context_length": 163840,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen3-30b-a3b": {
    "canonical_slug": "qwen/qwen3-30b-a3b-04-28",
    "name": "Qwen: Qwen3 30B A3B",
    "description": "Qwen3, the latest generation in the Qwen large language model series, features both dense and mixture-of-experts (MoE) architectures to excel in reasoning, multilingual support, and advanced agent tasks. Its unique ability to switch seamlessly between a thinking mode for complex reasoning and a non-thinking mode for efficient dialogue ensures versatile, high-quality performance.\n\nSignificantly outperforming prior models like QwQ and Qwen2.5, Qwen3 delivers superior mathematics, coding, commonsense reasoning, creative writing, and interactive dialogue capabilities. The Qwen3-30B-A3B variant includes 30.5 billion parameters (3.3 billion activated), 48 layers, 128 experts (8 activated per task), and supports up to 131K token contexts with YaRN, setting a new standard among open-source models.",
    "context_length": 40960,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": "qwen3"
    },
    "pricing": {
      "prompt": "0.00000008",
      "completion": "0.00000028"
    },
    "top_provider": {
      "context_length": 40960,
      "max_completion_tokens": 40960,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-8b": {
    "canonical_slug": "qwen/qwen3-8b-04-28",
    "name": "Qwen: Qwen3 8B",
    "description": "Qwen3-8B is a dense 8.2B parameter causal language model from the Qwen3 series, designed for both reasoning-heavy tasks and efficient dialogue. It supports seamless switching between \"thinking\" mode for math, coding, and logical inference, and \"non-thinking\" mode for general conversation. The model is fine-tuned for instruction-following, agent integration, creative writing, and multilingual use across 100+ languages and dialects. It natively supports a 32K token context window and can extend to 131K tokens with YaRN scaling.",
    "context_length": 40960,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": "qwen3"
    },
    "pricing": {
      "prompt": "0.00000005",
      "completion": "0.0000004",
      "input_cache_read": "0.00000005"
    },
    "top_provider": {
      "context_length": 40960,
      "max_completion_tokens": 8192,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen3-14b": {
    "canonical_slug": "qwen/qwen3-14b-04-28",
    "name": "Qwen: Qwen3 14B",
    "description": "Qwen3-14B is a dense 14.8B parameter causal language model from the Qwen3 series, designed for both complex reasoning and efficient dialogue. It supports seamless switching between a \"thinking\" mode for tasks like math, programming, and logical inference, and a \"non-thinking\" mode for general-purpose conversation. The model is fine-tuned for instruction-following, agent tool use, creative writing, and multilingual tasks across 100+ languages and dialects. It natively handles 32K token contexts and can extend to 131K tokens using YaRN-based scaling.",
    "context_length": 40960,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": "qwen3"
    },
    "pricing": {
      "prompt": "0.00000006",
      "completion": "0.00000024"
    },
    "top_provider": {
      "context_length": 40960,
      "max_completion_tokens": 40960,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logprobs",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen3-32b": {
    "canonical_slug": "qwen/qwen3-32b-04-28",
    "name": "Qwen: Qwen3 32B",
    "description": "Qwen3-32B is a dense 32.8B parameter causal language model from the Qwen3 series, optimized for both complex reasoning and efficient dialogue. It supports seamless switching between a \"thinking\" mode for tasks like math, coding, and logical inference, and a \"non-thinking\" mode for faster, general-purpose conversation. The model demonstrates strong performance in instruction-following, agent tool use, creative writing, and multilingual tasks across 100+ languages and dialects. It natively handles 32K token contexts and can extend to 131K tokens using YaRN-based scaling. ",
    "context_length": 40960,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": "qwen3"
    },
    "pricing": {
      "prompt": "0.00000008",
      "completion": "0.00000024",
      "input_cache_read": "0.00000004"
    },
    "top_provider": {
      "context_length": 40960,
      "max_completion_tokens": 40960,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen3-235b-a22b": {
    "canonical_slug": "qwen/qwen3-235b-a22b-04-28",
    "name": "Qwen: Qwen3 235B A22B",
    "description": "Qwen3-235B-A22B is a 235B parameter mixture-of-experts (MoE) model developed by Qwen, activating 22B parameters per forward pass. It supports seamless switching between a \"thinking\" mode for complex reasoning, math, and code tasks, and a \"non-thinking\" mode for general conversational efficiency. The model demonstrates strong reasoning ability, multilingual support (100+ languages and dialects), advanced instruction-following, and agent tool-calling capabilities. It natively handles a 32K token context window and extends up to 131K tokens using YaRN-based scaling.",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen3",
      "instruct_type": "qwen3"
    },
    "pricing": {
      "prompt": "0.000000455",
      "completion": "0.00000182"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 8192,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "seed",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/o4-mini-high": {
    "canonical_slug": "openai/o4-mini-high-2025-04-16",
    "name": "OpenAI: o4 Mini High",
    "description": "OpenAI o4-mini-high is the same model as [o4-mini](/openai/o4-mini) with reasoning_effort set to high. \n\nOpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining strong multimodal and agentic capabilities. It supports tool use and demonstrates competitive reasoning and coding performance across benchmarks like AIME (99.5% with Python) and SWE-bench, outperforming its predecessor o3-mini and even approaching o3 in some domains.\n\nDespite its smaller size, o4-mini exhibits high accuracy in STEM tasks, visual problem solving (e.g., MathVista, MMMU), and code editing. It is especially well-suited for high-throughput scenarios where latency or cost is critical. Thanks to its efficient architecture and refined reinforcement learning training, o4-mini can chain tools, generate structured outputs, and solve multi-step tasks with minimal delay—often in under a minute.",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "image",
        "text",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000011",
      "completion": "0.0000044",
      "web_search": "0.01",
      "input_cache_read": "0.000000275"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 100000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "openai/o3": {
    "canonical_slug": "openai/o3-2025-04-16",
    "name": "OpenAI: o3",
    "description": "o3 is a well-rounded and powerful model across domains. It sets a new standard for math, science, coding, and visual reasoning tasks. It also excels at technical writing and instruction-following. Use it to think through multi-step problems that involve analysis across text, code, and images. ",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "image",
        "text",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000002",
      "completion": "0.000008",
      "web_search": "0.01",
      "input_cache_read": "0.0000005"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 100000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/o4-mini": {
    "canonical_slug": "openai/o4-mini-2025-04-16",
    "name": "OpenAI: o4 Mini",
    "description": "OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining strong multimodal and agentic capabilities. It supports tool use and demonstrates competitive reasoning and coding performance across benchmarks like AIME (99.5% with Python) and SWE-bench, outperforming its predecessor o3-mini and even approaching o3 in some domains.\n\nDespite its smaller size, o4-mini exhibits high accuracy in STEM tasks, visual problem solving (e.g., MathVista, MMMU), and code editing. It is especially well-suited for high-throughput scenarios where latency or cost is critical. Thanks to its efficient architecture and refined reinforcement learning training, o4-mini can chain tools, generate structured outputs, and solve multi-step tasks with minimal delay—often in under a minute.",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "image",
        "text",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000011",
      "completion": "0.0000044",
      "web_search": "0.01",
      "input_cache_read": "0.000000275"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 100000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen2.5-coder-7b-instruct": {
    "canonical_slug": "qwen/qwen2.5-coder-7b-instruct",
    "name": "Qwen: Qwen2.5 Coder 7B Instruct",
    "description": "Qwen2.5-Coder-7B-Instruct is a 7B parameter instruction-tuned language model optimized for code-related tasks such as code generation, reasoning, and bug fixing. Based on the Qwen2.5 architecture, it incorporates enhancements like RoPE, SwiGLU, RMSNorm, and GQA attention with support for up to 128K tokens using YaRN-based extrapolation. It is trained on a large corpus of source code, synthetic data, and text-code grounding, providing robust performance across programming languages and agentic coding workflows.\n\nThis model is part of the Qwen2.5-Coder family and offers strong compatibility with tools like vLLM for efficient deployment. Released under the Apache 2.0 license.",
    "context_length": 32768,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000003",
      "completion": "0.00000009"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "structured_outputs",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4.1": {
    "canonical_slug": "openai/gpt-4.1-2025-04-14",
    "name": "OpenAI: GPT-4.1",
    "description": "GPT-4.1 is a flagship large language model optimized for advanced instruction following, real-world software engineering, and long-context reasoning. It supports a 1 million token context window and outperforms GPT-4o and GPT-4.5 across coding (54.6% SWE-bench Verified), instruction compliance (87.4% IFEval), and multimodal understanding benchmarks. It is tuned for precise code diffs, agent reliability, and high recall in large document contexts, making it ideal for agents, IDE tooling, and enterprise knowledge retrieval.",
    "context_length": 1047576,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "image",
        "text",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000002",
      "completion": "0.000008",
      "web_search": "0.01",
      "input_cache_read": "0.0000005"
    },
    "top_provider": {
      "context_length": 1047576,
      "max_completion_tokens": 32768,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4.1-mini": {
    "canonical_slug": "openai/gpt-4.1-mini-2025-04-14",
    "name": "OpenAI: GPT-4.1 Mini",
    "description": "GPT-4.1 Mini is a mid-sized model delivering performance competitive with GPT-4o at substantially lower latency and cost. It retains a 1 million token context window and scores 45.1% on hard instruction evals, 35.8% on MultiChallenge, and 84.1% on IFEval. Mini also shows strong coding ability (e.g., 31.6% on Aider’s polyglot diff benchmark) and vision understanding, making it suitable for interactive applications with tight performance constraints.",
    "context_length": 1047576,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "image",
        "text",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000004",
      "completion": "0.0000016",
      "web_search": "0.01",
      "input_cache_read": "0.0000001"
    },
    "top_provider": {
      "context_length": 1047576,
      "max_completion_tokens": 32768,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4.1-nano": {
    "canonical_slug": "openai/gpt-4.1-nano-2025-04-14",
    "name": "OpenAI: GPT-4.1 Nano",
    "description": "For tasks that demand low latency, GPT‑4.1 nano is the fastest and cheapest model in the GPT-4.1 series. It delivers exceptional performance at a small size with its 1 million token context window, and scores 80.1% on MMLU, 50.3% on GPQA, and 9.8% on Aider polyglot coding – even higher than GPT‑4o mini. It’s ideal for tasks like classification or autocompletion.",
    "context_length": 1047576,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "image",
        "text",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000001",
      "completion": "0.0000004",
      "web_search": "0.01",
      "input_cache_read": "0.000000025"
    },
    "top_provider": {
      "context_length": 1047576,
      "max_completion_tokens": 32768,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "x-ai/grok-3-mini-beta": {
    "canonical_slug": "x-ai/grok-3-mini-beta",
    "name": "xAI: Grok 3 Mini Beta",
    "description": "Grok 3 Mini is a lightweight, smaller thinking model. Unlike traditional models that generate answers immediately, Grok 3 Mini thinks before responding. It’s ideal for reasoning-heavy tasks that don’t demand extensive domain knowledge, and shines in math-specific and quantitative use cases, such as solving challenging puzzles or math problems.\n\nTransparent \"thinking\" traces accessible. Defaults to low reasoning, can boost with setting `reasoning: { effort: \"high\" }`\n\nNote: That there are two xAI endpoints for this model. By default when using this model we will always route you to the base endpoint. If you want the fast endpoint you can add `provider: { sort: throughput}`, to sort by throughput instead. \n",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Grok",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000003",
      "completion": "0.0000005",
      "web_search": "0.005",
      "input_cache_read": "0.000000075"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "logprobs",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "x-ai/grok-3-beta": {
    "canonical_slug": "x-ai/grok-3-beta",
    "name": "xAI: Grok 3 Beta",
    "description": "Grok 3 is the latest model from xAI. It's their flagship model that excels at enterprise use cases like data extraction, coding, and text summarization. Possesses deep domain knowledge in finance, healthcare, law, and science.\n\nExcels in structured tasks and benchmarks like GPQA, LCB, and MMLU-Pro where it outperforms Grok 3 Mini even on high thinking. \n\nNote: That there are two xAI endpoints for this model. By default when using this model we will always route you to the base endpoint. If you want the fast endpoint you can add `provider: { sort: throughput}`, to sort by throughput instead. \n",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Grok",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000003",
      "completion": "0.000015",
      "web_search": "0.005",
      "input_cache_read": "0.00000075"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "meta-llama/llama-4-maverick": {
    "canonical_slug": "meta-llama/llama-4-maverick-17b-128e-instruct",
    "name": "Meta: Llama 4 Maverick",
    "description": "Llama 4 Maverick 17B Instruct (128E) is a high-capacity multimodal language model from Meta, built on a mixture-of-experts (MoE) architecture with 128 experts and 17 billion active parameters per forward pass (400B total). It supports multilingual text and image input, and produces multilingual text and code output across 12 supported languages. Optimized for vision-language tasks, Maverick is instruction-tuned for assistant-like behavior, image reasoning, and general-purpose multimodal interaction.\n\nMaverick features early fusion for native multimodality and a 1 million token context window. It was trained on a curated mixture of public, licensed, and Meta-platform data, covering ~22 trillion tokens, with a knowledge cutoff in August 2024. Released on April 5, 2025 under the Llama 4 Community License, Maverick is suited for research and commercial applications requiring advanced multimodal understanding and high model throughput.",
    "context_length": 1048576,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama4",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000015",
      "completion": "0.0000006"
    },
    "top_provider": {
      "context_length": 1048576,
      "max_completion_tokens": 16384,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "meta-llama/llama-4-scout": {
    "canonical_slug": "meta-llama/llama-4-scout-17b-16e-instruct",
    "name": "Meta: Llama 4 Scout",
    "description": "Llama 4 Scout 17B Instruct (16E) is a mixture-of-experts (MoE) language model developed by Meta, activating 17 billion parameters out of a total of 109B. It supports native multimodal input (text and image) and multilingual output (text and code) across 12 supported languages. Designed for assistant-style interaction and visual reasoning, Scout uses 16 experts per forward pass and features a context length of 10 million tokens, with a training corpus of ~40 trillion tokens.\n\nBuilt for high efficiency and local or commercial deployment, Llama 4 Scout incorporates early fusion for seamless modality integration. It is instruction-tuned for use in multilingual chat, captioning, and image understanding tasks. Released under the Llama 4 Community License, it was last trained on data up to August 2024 and launched publicly on April 5, 2025.",
    "context_length": 327680,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama4",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000008",
      "completion": "0.0000003"
    },
    "top_provider": {
      "context_length": 327680,
      "max_completion_tokens": 16384,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen2.5-vl-32b-instruct": {
    "canonical_slug": "qwen/qwen2.5-vl-32b-instruct",
    "name": "Qwen: Qwen2.5 VL 32B Instruct",
    "description": "Qwen2.5-VL-32B is a multimodal vision-language model fine-tuned through reinforcement learning for enhanced mathematical reasoning, structured outputs, and visual problem-solving capabilities. It excels at visual analysis tasks, including object recognition, textual interpretation within images, and precise event localization in extended videos. Qwen2.5-VL-32B demonstrates state-of-the-art performance across multimodal benchmarks such as MMMU, MathVista, and VideoMME, while maintaining strong reasoning and clarity in text-based tasks like MMLU, mathematical problem-solving, and code generation.",
    "context_length": 128000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000002",
      "completion": "0.0000006"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "deepseek/deepseek-chat-v3-0324": {
    "canonical_slug": "deepseek/deepseek-chat-v3-0324",
    "name": "DeepSeek: DeepSeek V3 0324",
    "description": "DeepSeek V3, a 685B-parameter, mixture-of-experts model, is the latest iteration of the flagship chat model family from the DeepSeek team.\n\nIt succeeds the [DeepSeek V3](/deepseek/deepseek-chat-v3) model and performs really well on a variety of tasks.",
    "context_length": 163840,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "DeepSeek",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000002",
      "completion": "0.00000077",
      "input_cache_read": "0.00000013"
    },
    "top_provider": {
      "context_length": 163840,
      "max_completion_tokens": 163840,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/o1-pro": {
    "canonical_slug": "openai/o1-pro",
    "name": "OpenAI: o1-pro",
    "description": "The o1 series of models are trained with reinforcement learning to think before they answer and perform complex reasoning. The o1-pro model uses more compute to think harder and provide consistently better answers.",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00015",
      "completion": "0.0006"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 100000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "response_format",
      "seed",
      "structured_outputs"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "google/gemma-3-4b-it:free": {
    "canonical_slug": "google/gemma-3-4b-it",
    "name": "Google: Gemma 3 4B (free)",
    "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling.",
    "context_length": 32768,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": "gemma"
    },
    "pricing": {
      "prompt": "0",
      "completion": "0"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": 8192,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "stop",
      "temperature",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "google/gemma-3-4b-it": {
    "canonical_slug": "google/gemma-3-4b-it",
    "name": "Google: Gemma 3 4B",
    "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling.",
    "context_length": 131072,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": "gemma"
    },
    "pricing": {
      "prompt": "0.00000004",
      "completion": "0.00000008"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "google/gemma-3-12b-it:free": {
    "canonical_slug": "google/gemma-3-12b-it",
    "name": "Google: Gemma 3 12B (free)",
    "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling. Gemma 3 12B is the second largest in the family of Gemma 3 models after [Gemma 3 27B](google/gemma-3-27b-it)",
    "context_length": 32768,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": "gemma"
    },
    "pricing": {
      "prompt": "0",
      "completion": "0"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": 8192,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "seed",
      "stop",
      "temperature",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "google/gemma-3-12b-it": {
    "canonical_slug": "google/gemma-3-12b-it",
    "name": "Google: Gemma 3 12B",
    "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling. Gemma 3 12B is the second largest in the family of Gemma 3 models after [Gemma 3 27B](google/gemma-3-27b-it)",
    "context_length": 131072,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": "gemma"
    },
    "pricing": {
      "prompt": "0.00000004",
      "completion": "0.00000013"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4o-mini-search-preview": {
    "canonical_slug": "openai/gpt-4o-mini-search-preview-2025-03-11",
    "name": "OpenAI: GPT-4o-mini Search Preview",
    "description": "GPT-4o mini Search Preview is a specialized model for web search in Chat Completions. It is trained to understand and execute web search queries.",
    "context_length": 128000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000015",
      "completion": "0.0000006",
      "web_search": "0.0275"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 16384,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "structured_outputs",
      "web_search_options"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4o-search-preview": {
    "canonical_slug": "openai/gpt-4o-search-preview-2025-03-11",
    "name": "OpenAI: GPT-4o Search Preview",
    "description": "GPT-4o Search Previewis a specialized model for web search in Chat Completions. It is trained to understand and execute web search queries.",
    "context_length": 128000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000025",
      "completion": "0.00001",
      "web_search": "0.035"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 16384,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "structured_outputs",
      "web_search_options"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "google/gemma-3-27b-it:free": {
    "canonical_slug": "google/gemma-3-27b-it",
    "name": "Google: Gemma 3 27B (free)",
    "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling. Gemma 3 27B is Google's latest open source model, successor to [Gemma 2](google/gemma-2-27b-it)",
    "context_length": 131072,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": "gemma"
    },
    "pricing": {
      "prompt": "0",
      "completion": "0"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 8192,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "google/gemma-3-27b-it": {
    "canonical_slug": "google/gemma-3-27b-it",
    "name": "Google: Gemma 3 27B",
    "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling. Gemma 3 27B is Google's latest open source model, successor to [Gemma 2](google/gemma-2-27b-it)",
    "context_length": 128000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": "gemma"
    },
    "pricing": {
      "prompt": "0.00000004",
      "completion": "0.00000015",
      "input_cache_read": "0.00000002"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 65536,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwq-32b": {
    "canonical_slug": "qwen/qwq-32b",
    "name": "Qwen: QwQ 32B",
    "description": "QwQ is the reasoning model of the Qwen series. Compared with conventional instruction-tuned models, QwQ, which is capable of thinking and reasoning, can achieve significantly enhanced performance in downstream tasks, especially hard problems. QwQ-32B is the medium-sized reasoning model, which is capable of achieving competitive performance against state-of-the-art reasoning models, e.g., DeepSeek-R1, o1-mini.",
    "context_length": 32768,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": "qwq"
    },
    "pricing": {
      "prompt": "0.00000015",
      "completion": "0.0000004"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "google/gemini-2.0-flash-lite-001": {
    "canonical_slug": "google/gemini-2.0-flash-lite-001",
    "name": "Google: Gemini 2.0 Flash Lite",
    "description": "Gemini 2.0 Flash Lite offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/gemini-pro-1.5), all at extremely economical token prices.",
    "context_length": 1048576,
    "architecture": {
      "modality": "text+image+file+audio+video->text",
      "input_modalities": [
        "text",
        "image",
        "file",
        "audio",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000000075",
      "completion": "0.0000003",
      "image": "0.000000075",
      "audio": "0.000000075",
      "internal_reasoning": "0.0000003"
    },
    "top_provider": {
      "context_length": 1048576,
      "max_completion_tokens": 8192,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": "2026-03-03"
  },
  "anthropic/claude-3.7-sonnet": {
    "canonical_slug": "anthropic/claude-3-7-sonnet-20250219",
    "name": "Anthropic: Claude 3.7 Sonnet",
    "description": "Claude 3.7 Sonnet is an advanced large language model with improved reasoning, coding, and problem-solving capabilities. It introduces a hybrid reasoning approach, allowing users to choose between rapid responses and extended, step-by-step processing for complex tasks. The model demonstrates notable improvements in coding, particularly in front-end development and full-stack updates, and excels in agentic workflows, where it can autonomously navigate multi-step processes. \n\nClaude 3.7 Sonnet maintains performance parity with its predecessor in standard mode while offering an extended reasoning mode for enhanced accuracy in math, coding, and instruction-following tasks.\n\nRead more at the [blog post here](https://www.anthropic.com/news/claude-3-7-sonnet)",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Claude",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000003",
      "completion": "0.000015",
      "web_search": "0.01",
      "input_cache_read": "0.0000003",
      "input_cache_write": "0.00000375"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 64000,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": "2026-05-05"
  },
  "anthropic/claude-3.7-sonnet:thinking": {
    "canonical_slug": "anthropic/claude-3-7-sonnet-20250219",
    "name": "Anthropic: Claude 3.7 Sonnet (thinking)",
    "description": "Claude 3.7 Sonnet is an advanced large language model with improved reasoning, coding, and problem-solving capabilities. It introduces a hybrid reasoning approach, allowing users to choose between rapid responses and extended, step-by-step processing for complex tasks. The model demonstrates notable improvements in coding, particularly in front-end development and full-stack updates, and excels in agentic workflows, where it can autonomously navigate multi-step processes. \n\nClaude 3.7 Sonnet maintains performance parity with its predecessor in standard mode while offering an extended reasoning mode for enhanced accuracy in math, coding, and instruction-following tasks.\n\nRead more at the [blog post here](https://www.anthropic.com/news/claude-3-7-sonnet)",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Claude",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000003",
      "completion": "0.000015",
      "web_search": "0.01",
      "input_cache_read": "0.0000003",
      "input_cache_write": "0.00000375"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 64000,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "include_reasoning",
      "max_tokens",
      "reasoning",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": "2026-05-05"
  },
  "meta-llama/llama-guard-3-8b": {
    "canonical_slug": "meta-llama/llama-guard-3-8b",
    "name": "Llama Guard 3 8B",
    "description": "Llama Guard 3 is a Llama-3.1-8B pretrained model, fine-tuned for content safety classification. Similar to previous versions, it can be used to classify content in both LLM inputs (prompt classification) and in LLM responses (response classification). It acts as an LLM – it generates text in its output that indicates whether a given prompt or response is safe or unsafe, and if unsafe, it also lists the content categories violated.\n\nLlama Guard 3 was aligned to safeguard against the MLCommons standardized hazards taxonomy and designed to support Llama 3.1 capabilities. Specifically, it provides content moderation in 8 languages, and was optimized to support safety and security for search and code interpreter tool calls.\n",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama3",
      "instruct_type": "none"
    },
    "pricing": {
      "prompt": "0.00000002",
      "completion": "0.00000006"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "presence_penalty",
      "repetition_penalty",
      "seed",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/o3-mini-high": {
    "canonical_slug": "openai/o3-mini-high-2025-01-31",
    "name": "OpenAI: o3 Mini High",
    "description": "OpenAI o3-mini-high is the same model as [o3-mini](/openai/o3-mini) with reasoning_effort set to high. \n\no3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, mathematics, and coding. The model features three adjustable reasoning effort levels and supports key developer capabilities including function calling, structured outputs, and streaming, though it does not include vision processing capabilities.\n\nThe model demonstrates significant improvements over its predecessor, with expert testers preferring its responses 56% of the time and noting a 39% reduction in major errors on complex questions. With medium reasoning effort settings, o3-mini matches the performance of the larger o1 model on challenging reasoning evaluations like AIME and GPQA, while maintaining lower latency and cost.",
    "context_length": 200000,
    "architecture": {
      "modality": "text+file->text",
      "input_modalities": [
        "text",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000011",
      "completion": "0.0000044",
      "input_cache_read": "0.00000055"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 100000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "google/gemini-2.0-flash-001": {
    "canonical_slug": "google/gemini-2.0-flash-001",
    "name": "Google: Gemini 2.0 Flash",
    "description": "Gemini Flash 2.0 offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/gemini-pro-1.5). It introduces notable enhancements in multimodal understanding, coding capabilities, complex instruction following, and function calling. These advancements come together to deliver more seamless and robust agentic experiences.",
    "context_length": 1048576,
    "architecture": {
      "modality": "text+image+file+audio+video->text",
      "input_modalities": [
        "text",
        "image",
        "file",
        "audio",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000001",
      "completion": "0.0000004",
      "image": "0.0000001",
      "audio": "0.0000007",
      "internal_reasoning": "0.0000004",
      "input_cache_read": "0.000000025",
      "input_cache_write": "0.00000008333333333333334"
    },
    "top_provider": {
      "context_length": 1048576,
      "max_completion_tokens": 8192,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": "2026-03-31"
  },
  "qwen/qwen-vl-plus": {
    "canonical_slug": "qwen/qwen-vl-plus",
    "name": "Qwen: Qwen VL Plus",
    "description": "Qwen's Enhanced Large Visual Language Model. Significantly upgraded for detailed recognition capabilities and text recognition abilities, supporting ultra-high pixel resolutions up to millions of pixels and extreme aspect ratios for image input. It delivers significant performance across a broad range of visual tasks.\n",
    "context_length": 131072,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000001365",
      "completion": "0.0000004095",
      "input_cache_read": "0.0000000273"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 8192,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "temperature",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen-vl-max": {
    "canonical_slug": "qwen/qwen-vl-max-2025-01-25",
    "name": "Qwen: Qwen VL Max",
    "description": "Qwen VL Max is a visual understanding model with 7500 tokens context length. It excels in delivering optimal performance for a broader spectrum of complex tasks.\n",
    "context_length": 131072,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000008",
      "completion": "0.0000032"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "qwen/qwen-turbo": {
    "canonical_slug": "qwen/qwen-turbo-2024-11-01",
    "name": "Qwen: Qwen-Turbo",
    "description": "Qwen-Turbo, based on Qwen2.5, is a 1M context model that provides fast speed and low cost, suitable for simple tasks.",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000000325",
      "completion": "0.00000013",
      "input_cache_read": "0.0000000065"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 8192,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen2.5-vl-72b-instruct": {
    "canonical_slug": "qwen/qwen2.5-vl-72b-instruct",
    "name": "Qwen: Qwen2.5 VL 72B Instruct",
    "description": "Qwen2.5-VL is proficient in recognizing common objects such as flowers, birds, fish, and insects. It is also highly capable of analyzing texts, charts, icons, graphics, and layouts within images.",
    "context_length": 32768,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000008",
      "completion": "0.0000008"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen-plus": {
    "canonical_slug": "qwen/qwen-plus-2025-01-25",
    "name": "Qwen: Qwen-Plus",
    "description": "Qwen-Plus, based on the Qwen2.5 foundation model, is a 131K context model with a balanced performance, speed, and cost combination.",
    "context_length": 1000000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000004",
      "completion": "0.0000012",
      "input_cache_read": "0.00000008"
    },
    "top_provider": {
      "context_length": 1000000,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen-max": {
    "canonical_slug": "qwen/qwen-max-2025-01-25",
    "name": "Qwen: Qwen-Max ",
    "description": "Qwen-Max, based on Qwen2.5, provides the best inference performance among [Qwen models](/qwen), especially for complex multi-step tasks. It's a large-scale MoE model that has been pretrained on over 20 trillion tokens and further post-trained with curated Supervised Fine-Tuning (SFT) and Reinforcement Learning from Human Feedback (RLHF) methodologies. The parameter count is unknown.",
    "context_length": 32768,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000104",
      "completion": "0.00000416",
      "input_cache_read": "0.000000208"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": 8192,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/o3-mini": {
    "canonical_slug": "openai/o3-mini-2025-01-31",
    "name": "OpenAI: o3 Mini",
    "description": "OpenAI o3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, mathematics, and coding.\n\nThis model supports the `reasoning_effort` parameter, which can be set to \"high\", \"medium\", or \"low\" to control the thinking time of the model. The default is \"medium\". OpenRouter also offers the model slug `openai/o3-mini-high` to default the parameter to \"high\".\n\nThe model features three adjustable reasoning effort levels and supports key developer capabilities including function calling, structured outputs, and streaming, though it does not include vision processing capabilities.\n\nThe model demonstrates significant improvements over its predecessor, with expert testers preferring its responses 56% of the time and noting a 39% reduction in major errors on complex questions. With medium reasoning effort settings, o3-mini matches the performance of the larger o1 model on challenging reasoning evaluations like AIME and GPQA, while maintaining lower latency and cost.",
    "context_length": 200000,
    "architecture": {
      "modality": "text+file->text",
      "input_modalities": [
        "text",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000011",
      "completion": "0.0000044",
      "input_cache_read": "0.00000055"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 100000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "deepseek/deepseek-r1-distill-qwen-32b": {
    "canonical_slug": "deepseek/deepseek-r1-distill-qwen-32b",
    "name": "DeepSeek: R1 Distill Qwen 32B",
    "description": "DeepSeek R1 Distill Qwen 32B is a distilled large language model based on [Qwen 2.5 32B](https://huggingface.co/Qwen/Qwen2.5-32B), using outputs from [DeepSeek R1](/deepseek/deepseek-r1). It outperforms OpenAI's o1-mini across various benchmarks, achieving new state-of-the-art results for dense models.\\n\\nOther benchmark results include:\\n\\n- AIME 2024 pass@1: 72.6\\n- MATH-500 pass@1: 94.3\\n- CodeForces Rating: 1691\\n\\nThe model leverages fine-tuning from DeepSeek R1's outputs, enabling competitive performance comparable to larger frontier models.",
    "context_length": 32768,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": "deepseek-r1"
    },
    "pricing": {
      "prompt": "0.00000029",
      "completion": "0.00000029"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "top_k",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "deepseek/deepseek-r1-distill-llama-70b": {
    "canonical_slug": "deepseek/deepseek-r1-distill-llama-70b",
    "name": "DeepSeek: R1 Distill Llama 70B",
    "description": "DeepSeek R1 Distill Llama 70B is a distilled large language model based on [Llama-3.3-70B-Instruct](/meta-llama/llama-3.3-70b-instruct), using outputs from [DeepSeek R1](/deepseek/deepseek-r1). The model combines advanced distillation techniques to achieve high performance across multiple benchmarks, including:\n\n- AIME 2024 pass@1: 70.0\n- MATH-500 pass@1: 94.5\n- CodeForces Rating: 1633\n\nThe model leverages fine-tuning from DeepSeek R1's outputs, enabling competitive performance comparable to larger frontier models.",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama3",
      "instruct_type": "deepseek-r1"
    },
    "pricing": {
      "prompt": "0.0000007",
      "completion": "0.0000008"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 16384,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "deepseek/deepseek-r1": {
    "canonical_slug": "deepseek/deepseek-r1",
    "name": "DeepSeek: R1",
    "description": "DeepSeek R1 is here: Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active in an inference pass.\n\nFully open-source model & [technical report](https://api-docs.deepseek.com/news/news250120).\n\nMIT licensed: Distill & commercialize freely!",
    "context_length": 64000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "DeepSeek",
      "instruct_type": "deepseek-r1"
    },
    "pricing": {
      "prompt": "0.0000007",
      "completion": "0.0000025"
    },
    "top_provider": {
      "context_length": 64000,
      "max_completion_tokens": 16000,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "repetition_penalty",
      "seed",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "minimax/minimax-01": {
    "canonical_slug": "minimax/minimax-01",
    "name": "MiniMax: MiniMax-01",
    "description": "MiniMax-01 is a combines MiniMax-Text-01 for text generation and MiniMax-VL-01 for image understanding. It has 456 billion parameters, with 45.9 billion parameters activated per inference, and can handle a context of up to 4 million tokens.\n\nThe text model adopts a hybrid architecture that combines Lightning Attention, Softmax Attention, and Mixture-of-Experts (MoE). The image model adopts the “ViT-MLP-LLM” framework and is trained on top of the text model.\n\nTo read more about the release, see: https://www.minimaxi.com/en/news/minimax-01-series-2",
    "context_length": 1000192,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Other",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000002",
      "completion": "0.0000011"
    },
    "top_provider": {
      "context_length": 1000192,
      "max_completion_tokens": 1000192,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "temperature",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "deepseek/deepseek-chat": {
    "canonical_slug": "deepseek/deepseek-chat-v3",
    "name": "DeepSeek: DeepSeek V3",
    "description": "DeepSeek-V3 is the latest model from the DeepSeek team, building upon the instruction following and coding abilities of the previous versions. Pre-trained on nearly 15 trillion tokens, the reported evaluations reveal that the model outperforms other open-source models and rivals leading closed-source models.\n\nFor model details, please visit [the DeepSeek-V3 repo](https://github.com/deepseek-ai/DeepSeek-V3) for more information, or see the [launch announcement](https://api-docs.deepseek.com/news/news1226).",
    "context_length": 163840,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "DeepSeek",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000032",
      "completion": "0.00000089"
    },
    "top_provider": {
      "context_length": 163840,
      "max_completion_tokens": 163840,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/o1": {
    "canonical_slug": "openai/o1-2024-12-17",
    "name": "OpenAI: o1",
    "description": "The latest and strongest model family from OpenAI, o1 is designed to spend more time thinking before responding. The o1 model series is trained with large-scale reinforcement learning to reason using chain of thought. \n\nThe o1 models are optimized for math, science, programming, and other STEM-related tasks. They consistently exhibit PhD-level accuracy on benchmarks in physics, chemistry, and biology. Learn more in the [launch announcement](https://openai.com/o1).\n",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000015",
      "completion": "0.00006",
      "input_cache_read": "0.0000075"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 100000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "response_format",
      "seed",
      "structured_outputs",
      "tool_choice",
      "tools"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "meta-llama/llama-3.3-70b-instruct:free": {
    "canonical_slug": "meta-llama/llama-3.3-70b-instruct",
    "name": "Meta: Llama 3.3 70B Instruct (free)",
    "description": "The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model is optimized for multilingual dialogue use cases and outperforms many of the available open source and closed chat models on common industry benchmarks.\n\nSupported languages: English, German, French, Italian, Portuguese, Hindi, Spanish, and Thai.\n\n[Model Card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md)",
    "context_length": 128000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama3",
      "instruct_type": "llama3"
    },
    "pricing": {
      "prompt": "0",
      "completion": "0"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 128000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "presence_penalty",
      "seed",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "meta-llama/llama-3.3-70b-instruct": {
    "canonical_slug": "meta-llama/llama-3.3-70b-instruct",
    "name": "Meta: Llama 3.3 70B Instruct",
    "description": "The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model is optimized for multilingual dialogue use cases and outperforms many of the available open source and closed chat models on common industry benchmarks.\n\nSupported languages: English, German, French, Italian, Portuguese, Hindi, Spanish, and Thai.\n\n[Model Card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md)",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama3",
      "instruct_type": "llama3"
    },
    "pricing": {
      "prompt": "0.0000001",
      "completion": "0.00000032"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 16384,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4o-2024-11-20": {
    "canonical_slug": "openai/gpt-4o-2024-11-20",
    "name": "OpenAI: GPT-4o (2024-11-20)",
    "description": "The 2024-11-20 version of GPT-4o offers a leveled-up creative writing ability with more natural, engaging, and tailored writing to improve relevance & readability. It’s also better at working with uploaded files, providing deeper insights & more thorough responses.\n\nGPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities.",
    "context_length": 128000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000025",
      "completion": "0.00001",
      "input_cache_read": "0.00000125"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 16384,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p",
      "web_search_options"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen-2.5-coder-32b-instruct": {
    "canonical_slug": "qwen/qwen-2.5-coder-32b-instruct",
    "name": "Qwen2.5 Coder 32B Instruct",
    "description": "Qwen2.5-Coder is the latest series of Code-Specific Qwen large language models (formerly known as CodeQwen). Qwen2.5-Coder brings the following improvements upon CodeQwen1.5:\n\n- Significantly improvements in **code generation**, **code reasoning** and **code fixing**. \n- A more comprehensive foundation for real-world applications such as **Code Agents**. Not only enhancing coding capabilities but also maintaining its strengths in mathematics and general competencies.\n\nTo read more about its evaluation results, check out [Qwen 2.5 Coder's blog](https://qwenlm.github.io/blog/qwen2.5-coder-family/).",
    "context_length": 32768,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": "chatml"
    },
    "pricing": {
      "prompt": "0.00000020000000000000002",
      "completion": "0.00000020000000000000002"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": 8192,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "seed",
      "stop",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "anthropic/claude-3.5-haiku": {
    "canonical_slug": "anthropic/claude-3-5-haiku",
    "name": "Anthropic: Claude 3.5 Haiku",
    "description": "Claude 3.5 Haiku features offers enhanced capabilities in speed, coding accuracy, and tool use. Engineered to excel in real-time applications, it delivers quick response times that are essential for dynamic tasks such as chat interactions and immediate coding suggestions.\n\nThis makes it highly suitable for environments that demand both speed and precision, such as software development, customer service bots, and data management systems.\n\nThis model is currently pointing to [Claude 3.5 Haiku (2024-10-22)](/anthropic/claude-3-5-haiku-20241022).",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Claude",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000008",
      "completion": "0.000004",
      "web_search": "0.01",
      "input_cache_read": "0.00000008",
      "input_cache_write": "0.000001"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 8192,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "anthropic/claude-3.5-sonnet": {
    "canonical_slug": "anthropic/claude-3.5-sonnet",
    "name": "Anthropic: Claude 3.5 Sonnet",
    "description": "New Claude 3.5 Sonnet delivers better-than-Opus capabilities, faster-than-Sonnet speeds, at the same Sonnet prices. Sonnet is particularly good at:\n\n- Coding: Scores ~49% on SWE-Bench Verified, higher than the last best score, and without any fancy prompt scaffolding\n- Data science: Augments human data science expertise; navigates unstructured data while using multiple tools for insights\n- Visual processing: excelling at interpreting charts, graphs, and images, accurately transcribing text to derive insights beyond just the text alone\n- Agentic tasks: exceptional tool use, making it great at agentic tasks (i.e. complex, multi-step problem solving tasks that require engaging with other systems)\n\n#multimodal",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Claude",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000006",
      "completion": "0.00003",
      "input_cache_read": "0.0000006",
      "input_cache_write": "0.0000075"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 8192,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen-2.5-7b-instruct": {
    "canonical_slug": "qwen/qwen-2.5-7b-instruct",
    "name": "Qwen: Qwen2.5 7B Instruct",
    "description": "Qwen2.5 7B is the latest series of Qwen large language models. Qwen2.5 brings the following improvements upon Qwen2:\n\n- Significantly more knowledge and has greatly improved capabilities in coding and mathematics, thanks to our specialized expert models in these domains.\n\n- Significant improvements in instruction following, generating long texts (over 8K tokens), understanding structured data (e.g, tables), and generating structured outputs especially JSON. More resilient to the diversity of system prompts, enhancing role-play implementation and condition-setting for chatbots.\n\n- Long-context Support up to 128K tokens and can generate up to 8K tokens.\n\n- Multilingual support for over 29 languages, including Chinese, English, French, Spanish, Portuguese, German, Italian, Russian, Japanese, Korean, Vietnamese, Thai, Arabic, and more.\n\nUsage of this model is subject to [Tongyi Qianwen LICENSE AGREEMENT](https://huggingface.co/Qwen/Qwen1.5-110B-Chat/blob/main/LICENSE).",
    "context_length": 32768,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": "chatml"
    },
    "pricing": {
      "prompt": "0.00000004",
      "completion": "0.0000001"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {
      "temperature": null,
      "top_p": null,
      "frequency_penalty": null
    },
    "expiration_date": null
  },
  "meta-llama/llama-3.2-1b-instruct": {
    "canonical_slug": "meta-llama/llama-3.2-1b-instruct",
    "name": "Meta: Llama 3.2 1B Instruct",
    "description": "Llama 3.2 1B is a 1-billion-parameter language model focused on efficiently performing natural language tasks, such as summarization, dialogue, and multilingual text analysis. Its smaller size allows it to operate efficiently in low-resource environments while maintaining strong task performance.\n\nSupporting eight core languages and fine-tunable for more, Llama 1.3B is ideal for businesses or developers seeking lightweight yet powerful AI solutions that can operate in diverse multilingual settings without the high computational demand of larger models.\n\nClick here for the [original model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD.md).\n\nUsage of this model is subject to [Meta's Acceptable Use Policy](https://www.llama.com/llama3/use-policy/).",
    "context_length": 60000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama3",
      "instruct_type": "llama3"
    },
    "pricing": {
      "prompt": "0.000000027",
      "completion": "0.0000002"
    },
    "top_provider": {
      "context_length": 60000,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "presence_penalty",
      "repetition_penalty",
      "seed",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "meta-llama/llama-3.2-11b-vision-instruct": {
    "canonical_slug": "meta-llama/llama-3.2-11b-vision-instruct",
    "name": "Meta: Llama 3.2 11B Vision Instruct",
    "description": "Llama 3.2 11B Vision is a multimodal model with 11 billion parameters, designed to handle tasks combining visual and textual data. It excels in tasks such as image captioning and visual question answering, bridging the gap between language generation and visual reasoning. Pre-trained on a massive dataset of image-text pairs, it performs well in complex, high-accuracy image analysis.\n\nIts ability to integrate visual understanding with language processing makes it an ideal solution for industries requiring comprehensive visual-linguistic AI applications, such as content creation, AI-driven customer service, and research.\n\nClick here for the [original model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD_VISION.md).\n\nUsage of this model is subject to [Meta's Acceptable Use Policy](https://www.llama.com/llama3/use-policy/).",
    "context_length": 131072,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama3",
      "instruct_type": "llama3"
    },
    "pricing": {
      "prompt": "0.000000049",
      "completion": "0.000000049"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": 16384,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "meta-llama/llama-3.2-3b-instruct:free": {
    "canonical_slug": "meta-llama/llama-3.2-3b-instruct",
    "name": "Meta: Llama 3.2 3B Instruct (free)",
    "description": "Llama 3.2 3B is a 3-billion-parameter multilingual large language model, optimized for advanced natural language processing tasks like dialogue generation, reasoning, and summarization. Designed with the latest transformer architecture, it supports eight languages, including English, Spanish, and Hindi, and is adaptable for additional languages.\n\nTrained on 9 trillion tokens, the Llama 3.2 3B model excels in instruction-following, complex reasoning, and tool use. Its balanced performance makes it ideal for applications needing accuracy and efficiency in text generation across multilingual settings.\n\nClick here for the [original model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD.md).\n\nUsage of this model is subject to [Meta's Acceptable Use Policy](https://www.llama.com/llama3/use-policy/).",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama3",
      "instruct_type": "llama3"
    },
    "pricing": {
      "prompt": "0",
      "completion": "0"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "presence_penalty",
      "stop",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "meta-llama/llama-3.2-3b-instruct": {
    "canonical_slug": "meta-llama/llama-3.2-3b-instruct",
    "name": "Meta: Llama 3.2 3B Instruct",
    "description": "Llama 3.2 3B is a 3-billion-parameter multilingual large language model, optimized for advanced natural language processing tasks like dialogue generation, reasoning, and summarization. Designed with the latest transformer architecture, it supports eight languages, including English, Spanish, and Hindi, and is adaptable for additional languages.\n\nTrained on 9 trillion tokens, the Llama 3.2 3B model excels in instruction-following, complex reasoning, and tool use. Its balanced performance makes it ideal for applications needing accuracy and efficiency in text generation across multilingual settings.\n\nClick here for the [original model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD.md).\n\nUsage of this model is subject to [Meta's Acceptable Use Policy](https://www.llama.com/llama3/use-policy/).",
    "context_length": 80000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama3",
      "instruct_type": "llama3"
    },
    "pricing": {
      "prompt": "0.000000051",
      "completion": "0.00000034"
    },
    "top_provider": {
      "context_length": 80000,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "seed",
      "stop",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen-2.5-72b-instruct": {
    "canonical_slug": "qwen/qwen-2.5-72b-instruct",
    "name": "Qwen2.5 72B Instruct",
    "description": "Qwen2.5 72B is the latest series of Qwen large language models. Qwen2.5 brings the following improvements upon Qwen2:\n\n- Significantly more knowledge and has greatly improved capabilities in coding and mathematics, thanks to our specialized expert models in these domains.\n\n- Significant improvements in instruction following, generating long texts (over 8K tokens), understanding structured data (e.g, tables), and generating structured outputs especially JSON. More resilient to the diversity of system prompts, enhancing role-play implementation and condition-setting for chatbots.\n\n- Long-context Support up to 128K tokens and can generate up to 8K tokens.\n\n- Multilingual support for over 29 languages, including Chinese, English, French, Spanish, Portuguese, German, Italian, Russian, Japanese, Korean, Vietnamese, Thai, Arabic, and more.\n\nUsage of this model is subject to [Tongyi Qianwen LICENSE AGREEMENT](https://huggingface.co/Qwen/Qwen1.5-110B-Chat/blob/main/LICENSE).",
    "context_length": 32768,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": "chatml"
    },
    "pricing": {
      "prompt": "0.00000012",
      "completion": "0.00000039"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": 16384,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "qwen/qwen-2.5-vl-7b-instruct": {
    "canonical_slug": "qwen/qwen-2-vl-7b-instruct",
    "name": "Qwen: Qwen2.5-VL 7B Instruct",
    "description": "Qwen2.5 VL 7B is a multimodal LLM from the Qwen Team with the following key enhancements:\n\n- SoTA understanding of images of various resolution & ratio: Qwen2.5-VL achieves state-of-the-art performance on visual understanding benchmarks, including MathVista, DocVQA, RealWorldQA, MTVQA, etc.\n\n- Understanding videos of 20min+: Qwen2.5-VL can understand videos over 20 minutes for high-quality video-based question answering, dialog, content creation, etc.\n\n- Agent that can operate your mobiles, robots, etc.: with the abilities of complex reasoning and decision making, Qwen2.5-VL can be integrated with devices like mobile phones, robots, etc., for automatic operation based on visual environment and text instructions.\n\n- Multilingual Support: to serve global users, besides English and Chinese, Qwen2.5-VL now supports the understanding of texts in different languages inside images, including most European languages, Japanese, Korean, Arabic, Vietnamese, etc.\n\nFor more details, see this [blog post](https://qwenlm.github.io/blog/qwen2-vl/) and [GitHub repo](https://github.com/QwenLM/Qwen2-VL).\n\nUsage of this model is subject to [Tongyi Qianwen LICENSE AGREEMENT](https://huggingface.co/Qwen/Qwen1.5-110B-Chat/blob/main/LICENSE).",
    "context_length": 32768,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Qwen",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000020000000000000002",
      "completion": "0.00000020000000000000002"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "seed",
      "stop",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4o-2024-08-06": {
    "canonical_slug": "openai/gpt-4o-2024-08-06",
    "name": "OpenAI: GPT-4o (2024-08-06)",
    "description": "The 2024-08-06 version of GPT-4o offers improved performance in structured outputs, with the ability to supply a JSON schema in the respone_format. Read more [here](https://openai.com/index/introducing-structured-outputs-in-the-api/).\n\nGPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities.\n\nFor benchmarking against other models, it was briefly called [\"im-also-a-good-gpt2-chatbot\"](https://twitter.com/LiamFedus/status/1790064963966370209)",
    "context_length": 128000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000025",
      "completion": "0.00001",
      "input_cache_read": "0.00000125"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 16384,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p",
      "web_search_options"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "meta-llama/llama-3.1-405b": {
    "canonical_slug": "meta-llama/llama-3.1-405b",
    "name": "Meta: Llama 3.1 405B (base)",
    "description": "Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This is the base 405B pre-trained version.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
    "context_length": 32768,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama3",
      "instruct_type": "none"
    },
    "pricing": {
      "prompt": "0.000004",
      "completion": "0.000004"
    },
    "top_provider": {
      "context_length": 32768,
      "max_completion_tokens": 32768,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "seed",
      "stop",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "meta-llama/llama-3.1-70b-instruct": {
    "canonical_slug": "meta-llama/llama-3.1-70b-instruct",
    "name": "Meta: Llama 3.1 70B Instruct",
    "description": "Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This 70B instruct-tuned version is optimized for high quality dialogue usecases.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3-1/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
    "context_length": 131072,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama3",
      "instruct_type": "llama3"
    },
    "pricing": {
      "prompt": "0.0000004",
      "completion": "0.0000004"
    },
    "top_provider": {
      "context_length": 131072,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "meta-llama/llama-3.1-405b-instruct": {
    "canonical_slug": "meta-llama/llama-3.1-405b-instruct",
    "name": "Meta: Llama 3.1 405B Instruct",
    "description": "The highly anticipated 400B class of Llama3 is here! Clocking in at 128k context with impressive eval scores, the Meta AI team continues to push the frontier of open-source LLMs.\n\nMeta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This 405B instruct-tuned version is optimized for high quality dialogue usecases.\n\nIt has demonstrated strong performance compared to leading closed-source models including GPT-4o and Claude 3.5 Sonnet in evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3-1/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
    "context_length": 131000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama3",
      "instruct_type": "llama3"
    },
    "pricing": {
      "prompt": "0.000004",
      "completion": "0.000004"
    },
    "top_provider": {
      "context_length": 131000,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "meta-llama/llama-3.1-8b-instruct": {
    "canonical_slug": "meta-llama/llama-3.1-8b-instruct",
    "name": "Meta: Llama 3.1 8B Instruct",
    "description": "Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This 8B instruct-tuned version is fast and efficient.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3-1/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
    "context_length": 16384,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama3",
      "instruct_type": "llama3"
    },
    "pricing": {
      "prompt": "0.00000002",
      "completion": "0.00000005"
    },
    "top_provider": {
      "context_length": 16384,
      "max_completion_tokens": 16384,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4o-mini-2024-07-18": {
    "canonical_slug": "openai/gpt-4o-mini-2024-07-18",
    "name": "OpenAI: GPT-4o-mini (2024-07-18)",
    "description": "GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs.\n\nAs their most advanced small model, it is many multiples more affordable than other recent frontier models, and more than 60% cheaper than [GPT-3.5 Turbo](/models/openai/gpt-3.5-turbo). It maintains SOTA intelligence, while being significantly more cost-effective.\n\nGPT-4o mini achieves an 82% score on MMLU and presently ranks higher than GPT-4 on chat preferences [common leaderboards](https://arena.lmsys.org/).\n\nCheck out the [launch announcement](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/) to learn more.\n\n#multimodal",
    "context_length": 128000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000015",
      "completion": "0.0000006",
      "input_cache_read": "0.000000075"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 16384,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p",
      "web_search_options"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4o-mini": {
    "canonical_slug": "openai/gpt-4o-mini",
    "name": "OpenAI: GPT-4o-mini",
    "description": "GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs.\n\nAs their most advanced small model, it is many multiples more affordable than other recent frontier models, and more than 60% cheaper than [GPT-3.5 Turbo](/models/openai/gpt-3.5-turbo). It maintains SOTA intelligence, while being significantly more cost-effective.\n\nGPT-4o mini achieves an 82% score on MMLU and presently ranks higher than GPT-4 on chat preferences [common leaderboards](https://arena.lmsys.org/).\n\nCheck out the [launch announcement](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/) to learn more.\n\n#multimodal",
    "context_length": 128000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000015",
      "completion": "0.0000006",
      "input_cache_read": "0.000000075"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 16384,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p",
      "web_search_options"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "google/gemma-2-27b-it": {
    "canonical_slug": "google/gemma-2-27b-it",
    "name": "Google: Gemma 2 27B",
    "description": "Gemma 2 27B by Google is an open model built from the same research and technology used to create the [Gemini models](/models?q=gemini).\n\nGemma models are well-suited for a variety of text generation tasks, including question answering, summarization, and reasoning.\n\nSee the [launch announcement](https://blog.google/technology/developers/google-gemma-2/) for more details. Usage of Gemma is subject to Google's [Gemma Terms of Use](https://ai.google.dev/gemma/terms).",
    "context_length": 8192,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": "gemma"
    },
    "pricing": {
      "prompt": "0.00000065",
      "completion": "0.00000065"
    },
    "top_provider": {
      "context_length": 8192,
      "max_completion_tokens": 2048,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "stop",
      "structured_outputs",
      "temperature",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "google/gemma-2-9b-it": {
    "canonical_slug": "google/gemma-2-9b-it",
    "name": "Google: Gemma 2 9B",
    "description": "Gemma 2 9B by Google is an advanced, open-source language model that sets a new standard for efficiency and performance in its size class.\n\nDesigned for a wide variety of tasks, it empowers developers and researchers to build innovative applications, while maintaining accessibility, safety, and cost-effectiveness.\n\nSee the [launch announcement](https://blog.google/technology/developers/google-gemma-2/) for more details. Usage of Gemma is subject to Google's [Gemma Terms of Use](https://ai.google.dev/gemma/terms).",
    "context_length": 8192,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Gemini",
      "instruct_type": "gemma"
    },
    "pricing": {
      "prompt": "0.00000003",
      "completion": "0.00000009"
    },
    "top_provider": {
      "context_length": 8192,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "presence_penalty",
      "repetition_penalty",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "meta-llama/llama-guard-2-8b": {
    "canonical_slug": "meta-llama/llama-guard-2-8b",
    "name": "Meta: LlamaGuard 2 8B",
    "description": "This safeguard model has 8B parameters and is based on the Llama 3 family. Just like is predecessor, [LlamaGuard 1](https://huggingface.co/meta-llama/LlamaGuard-7b), it can do both prompt and response classification.\n\nLlamaGuard 2 acts as a normal LLM would, generating text that indicates whether the given input/output is safe/unsafe. If deemed unsafe, it will also share the content categories violated.\n\nFor best results, please use raw prompt input or the `/completions` endpoint, instead of the chat API.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
    "context_length": 8192,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama3",
      "instruct_type": "none"
    },
    "pricing": {
      "prompt": "0.0000002",
      "completion": "0.0000002"
    },
    "top_provider": {
      "context_length": 8192,
      "max_completion_tokens": null,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "stop",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": "2026-02-25"
  },
  "openai/gpt-4o-2024-05-13": {
    "canonical_slug": "openai/gpt-4o-2024-05-13",
    "name": "OpenAI: GPT-4o (2024-05-13)",
    "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities.\n\nFor benchmarking against other models, it was briefly called [\"im-also-a-good-gpt2-chatbot\"](https://twitter.com/LiamFedus/status/1790064963966370209)\n\n#multimodal",
    "context_length": 128000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000005",
      "completion": "0.000015"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 4096,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p",
      "web_search_options"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4o": {
    "canonical_slug": "openai/gpt-4o",
    "name": "OpenAI: GPT-4o",
    "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities.\n\nFor benchmarking against other models, it was briefly called [\"im-also-a-good-gpt2-chatbot\"](https://twitter.com/LiamFedus/status/1790064963966370209)\n\n#multimodal",
    "context_length": 128000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000025",
      "completion": "0.00001",
      "input_cache_read": "0.00000125"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 16384,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p",
      "web_search_options"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4o:extended": {
    "canonical_slug": "openai/gpt-4o",
    "name": "OpenAI: GPT-4o (extended)",
    "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities.\n\nFor benchmarking against other models, it was briefly called [\"im-also-a-good-gpt2-chatbot\"](https://twitter.com/LiamFedus/status/1790064963966370209)\n\n#multimodal",
    "context_length": 128000,
    "architecture": {
      "modality": "text+image+file->text",
      "input_modalities": [
        "text",
        "image",
        "file"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000006",
      "completion": "0.000018"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 64000,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p",
      "web_search_options"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "meta-llama/llama-3-8b-instruct": {
    "canonical_slug": "meta-llama/llama-3-8b-instruct",
    "name": "Meta: Llama 3 8B Instruct",
    "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 8B instruct-tuned version was optimized for high quality dialogue usecases.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
    "context_length": 8192,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama3",
      "instruct_type": "llama3"
    },
    "pricing": {
      "prompt": "0.00000003",
      "completion": "0.00000004"
    },
    "top_provider": {
      "context_length": 8192,
      "max_completion_tokens": 16384,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "max_tokens",
      "min_p",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "meta-llama/llama-3-70b-instruct": {
    "canonical_slug": "meta-llama/llama-3-70b-instruct",
    "name": "Meta: Llama 3 70B Instruct",
    "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 70B instruct-tuned version was optimized for high quality dialogue usecases.\n\nIt has demonstrated strong performance compared to leading closed-source models in human evaluations.\n\nTo read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
    "context_length": 8192,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Llama3",
      "instruct_type": "llama3"
    },
    "pricing": {
      "prompt": "0.00000051",
      "completion": "0.00000074"
    },
    "top_provider": {
      "context_length": 8192,
      "max_completion_tokens": 8000,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "max_tokens",
      "presence_penalty",
      "repetition_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4-turbo": {
    "canonical_slug": "openai/gpt-4-turbo",
    "name": "OpenAI: GPT-4 Turbo",
    "description": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling.\n\nTraining data: up to December 2023.",
    "context_length": 128000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00001",
      "completion": "0.00003"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 4096,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "anthropic/claude-3-haiku": {
    "canonical_slug": "anthropic/claude-3-haiku",
    "name": "Anthropic: Claude 3 Haiku",
    "description": "Claude 3 Haiku is Anthropic's fastest and most compact model for\nnear-instant responsiveness. Quick and accurate targeted performance.\n\nSee the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-haiku)\n\n#multimodal",
    "context_length": 200000,
    "architecture": {
      "modality": "text+image->text",
      "input_modalities": [
        "text",
        "image"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Claude",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00000025",
      "completion": "0.00000125",
      "input_cache_read": "0.00000003",
      "input_cache_write": "0.0000003"
    },
    "top_provider": {
      "context_length": 200000,
      "max_completion_tokens": 4096,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "max_tokens",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_k",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4-turbo-preview": {
    "canonical_slug": "openai/gpt-4-turbo-preview",
    "name": "OpenAI: GPT-4 Turbo Preview",
    "description": "The preview GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Training data: up to Dec 2023.\n\n**Note:** heavily rate limited by OpenAI while in preview.",
    "context_length": 128000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00001",
      "completion": "0.00003"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 4096,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-3.5-turbo-0613": {
    "canonical_slug": "openai/gpt-3.5-turbo-0613",
    "name": "OpenAI: GPT-3.5 Turbo (older v0613)",
    "description": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks.\n\nTraining data up to Sep 2021.",
    "context_length": 4095,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000001",
      "completion": "0.000002"
    },
    "top_provider": {
      "context_length": 4095,
      "max_completion_tokens": 4096,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4-1106-preview": {
    "canonical_slug": "openai/gpt-4-1106-preview",
    "name": "OpenAI: GPT-4 Turbo (older v1106)",
    "description": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling.\n\nTraining data: up to April 2023.",
    "context_length": 128000,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00001",
      "completion": "0.00003"
    },
    "top_provider": {
      "context_length": 128000,
      "max_completion_tokens": 4096,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-3.5-turbo-instruct": {
    "canonical_slug": "openai/gpt-3.5-turbo-instruct",
    "name": "OpenAI: GPT-3.5 Turbo Instruct",
    "description": "This model is a variant of GPT-3.5 Turbo tuned for instructional prompts and omitting chat-related optimizations. Training data: up to Sep 2021.",
    "context_length": 4095,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": "chatml"
    },
    "pricing": {
      "prompt": "0.0000015",
      "completion": "0.000002"
    },
    "top_provider": {
      "context_length": 4095,
      "max_completion_tokens": 4096,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-3.5-turbo-16k": {
    "canonical_slug": "openai/gpt-3.5-turbo-16k",
    "name": "OpenAI: GPT-3.5 Turbo 16k",
    "description": "This model offers four times the context length of gpt-3.5-turbo, allowing it to support approximately 20 pages of text in a single request at a higher cost. Training data: up to Sep 2021.",
    "context_length": 16385,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.000003",
      "completion": "0.000004"
    },
    "top_provider": {
      "context_length": 16385,
      "max_completion_tokens": 4096,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-3.5-turbo": {
    "canonical_slug": "openai/gpt-3.5-turbo",
    "name": "OpenAI: GPT-3.5 Turbo",
    "description": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks.\n\nTraining data up to Sep 2021.",
    "context_length": 16385,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.0000005",
      "completion": "0.0000015"
    },
    "top_provider": {
      "context_length": 16385,
      "max_completion_tokens": 4096,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4-0314": {
    "canonical_slug": "openai/gpt-4-0314",
    "name": "OpenAI: GPT-4 (older v0314)",
    "description": "GPT-4-0314 is the first version of GPT-4 released, with a context length of 8,192 tokens, and was supported until June 14. Training data: up to Sep 2021.",
    "context_length": 8191,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00003",
      "completion": "0.00006"
    },
    "top_provider": {
      "context_length": 8191,
      "max_completion_tokens": 4096,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openai/gpt-4": {
    "canonical_slug": "openai/gpt-4",
    "name": "OpenAI: GPT-4",
    "description": "OpenAI's flagship model, GPT-4 is a large-scale multimodal language model capable of solving difficult problems with greater accuracy than previous models due to its broader general knowledge and advanced reasoning capabilities. Training data: up to Sep 2021.",
    "context_length": 8191,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "GPT",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0.00003",
      "completion": "0.00006"
    },
    "top_provider": {
      "context_length": 8191,
      "max_completion_tokens": 4096,
      "is_moderated": true
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "logit_bias",
      "logprobs",
      "max_tokens",
      "presence_penalty",
      "response_format",
      "seed",
      "stop",
      "structured_outputs",
      "temperature",
      "tool_choice",
      "tools",
      "top_logprobs",
      "top_p"
    ],
    "default_parameters": {},
    "expiration_date": null
  },
  "openrouter/hunter-alpha": {
    "canonical_slug": "openrouter/hunter-alpha",
    "hugging_face_id": "",
    "name": "Hunter Alpha",
    "created": 1773260671,
    "description": "Hunter Alpha is a 1 Trillion parameter + 1M token context frontier intelligence model built for agentic use. It excels at long-horizon planning, complex reasoning, and sustained multi-step task execution, with the reliability and instruction-following precision that frameworks like OpenClaw need.\n\n**Note:** All prompts and completions for this model are logged by the provider and may be used to improve the model.",
    "context_length": 1048576,
    "architecture": {
      "modality": "text->text",
      "input_modalities": [
        "text"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Other",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0",
      "completion": "0",
      "request": "0",
      "image": "0",
      "web_search": "0",
      "internal_reasoning": "0"
    },
    "top_provider": {
      "context_length": 1048576,
      "max_completion_tokens": 32000,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 1,
      "top_p": 0.95,
      "top_k": null,
      "frequency_penalty": null,
      "presence_penalty": null,
      "repetition_penalty": null
    },
    "expiration_date": null
  },
  "openrouter/healer-alpha": {
    "canonical_slug": "openrouter/healer-alpha",
    "hugging_face_id": "",
    "name": "Healer Alpha",
    "created": 1773260668,
    "description": "Healer Alpha is a frontier omni-modal model with vision, hearing, reasoning, and action capabilities. It brings the full power of agentic intelligence into the real world: natively perceiving visual and audio inputs, reasoning across modalities, and executing complex multi-step tasks with precision and reliability.\n\n**Note:** All prompts and completions for this model are logged by the provider and may be used to improve the model.",
    "context_length": 262144,
    "architecture": {
      "modality": "text+image+audio+video->text",
      "input_modalities": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output_modalities": [
        "text"
      ],
      "tokenizer": "Other",
      "instruct_type": null
    },
    "pricing": {
      "prompt": "0",
      "completion": "0",
      "request": "0",
      "image": "0",
      "web_search": "0",
      "internal_reasoning": "0"
    },
    "top_provider": {
      "context_length": 262144,
      "max_completion_tokens": 32000,
      "is_moderated": false
    },
    "per_request_limits": null,
    "supported_parameters": [
      "frequency_penalty",
      "include_reasoning",
      "max_tokens",
      "presence_penalty",
      "reasoning",
      "response_format",
      "stop",
      "temperature",
      "tool_choice",
      "tools",
      "top_p"
    ],
    "default_parameters": {
      "temperature": 1,
      "top_p": 0.95,
      "top_k": null,
      "frequency_penalty": null,
      "presence_penalty": null,
      "repetition_penalty": null
    },
    "expiration_date": null
  }
} as const;

export const modelContextWindow = (modelId: (keyof typeof OPENROUTER_MODELS)): typeof OPENROUTER_MODELS[(keyof typeof OPENROUTER_MODELS)]["top_provider"]["context_length"] => {
  return OPENROUTER_MODELS[modelId]["top_provider"]["context_length"];
}

export const modelMaxCompletionTokens = (modelId: (keyof typeof OPENROUTER_MODELS)): typeof OPENROUTER_MODELS[(keyof typeof OPENROUTER_MODELS)]["top_provider"]["max_completion_tokens"] => {
  return OPENROUTER_MODELS[modelId]["top_provider"]["max_completion_tokens"];
}

export const modelInputPricePer1m = (modelId: (keyof typeof OPENROUTER_MODELS)): typeof OPENROUTER_MODELS[(keyof typeof OPENROUTER_MODELS)]["pricing"]["prompt"] => {
  return OPENROUTER_MODELS[modelId]["pricing"]["prompt"];
}

export const modelOutputPricePer1m = (modelId: (keyof typeof OPENROUTER_MODELS)): number => {
  return parseFloat(OPENROUTER_MODELS[modelId]["pricing"]["completion"]) * 1_000_000;
}

export default OPENROUTER_MODELS;
