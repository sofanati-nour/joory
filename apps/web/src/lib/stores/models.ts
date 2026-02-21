import { writable } from 'svelte/store';
import AllModels from "$lib/models";
import allowedModels from '$lib/allowed';
type Parameter = "temperature"
    | "top_p"
    | "top_k"
    | "min_p"
    | "top_a"
    | "frequency_penalty"
    | "presence_penalty"
    | "repetition_penalty"
    | "max_tokens"
    | "logit_bias"
    | "logprobs"
    | "top_logprobs"
    | "seed"
    | "response_format"
    | "structured_outputs"
    | "stop"
    | "tools"
    | "tool_choice"
    | "parallel_tool_calls"
    | "include_reasoning"
    | "reasoning"
    | "reasoning_effort"
    | "web_search_options"
    | "verbosity";
export type Model = {
    id: string;
    canonical_slug: string;
    hugging_face_id: string | null;
    name: string;
    created: number;
    pricing: {
        prompt: string;
        completion: string;
        request: string;
        image: string;
        web_search?: string;
        internal_reasoning?: string;
        input_cache_read?: string;
        input_cache_write?: string;
        audio?: string;
    };
    context_length: number | null;
    architecture: {
        modality: string | null;
        input_modalities: Array<string>;
        output_modalities: Array<string>;
        tokenizer: string;
        instruct_type: string | null;
    };
    top_provider: {
        is_moderated: boolean;
        context_length: number | null;
        max_completion_tokens: number | null;
    };
    per_request_limits: {
        prompt_tokens: number;
        completion_tokens: number;
    } | null;
    supported_parameters: Array<Parameter>;
    default_parameters: {
        temperature: number | null;
        top_p: number | null;
        frequency_penalty: number | null
    }

    description: string | null;

}

export const models = writable<Model[]>(
    AllModels.filter(model => allowedModels.some(allowedModel => allowedModel.id === model.id))
);