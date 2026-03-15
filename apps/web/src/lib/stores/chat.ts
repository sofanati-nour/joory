import { goto } from '$app/navigation';
import { API_BASE } from '$lib/constants';
import { get, writable } from 'svelte/store';
import { t } from 'svelte-i18n';
import { chatState } from '$lib/stores/chats.svelte';
import { models } from '$lib/stores/models';
import { inputState } from './input.svelte';
import type { ModelId } from '@app/shared';

type ChatFile = { name: string; type: string; data: string };

export type ToolCall = { id: string; name: string; done: boolean };

export type Message = {
	role: 'user' | 'assistant';
	content: string;
	reasoning?: string;
	status?: string;
	model?: string;
	messageId?: string;
	files?: ChatFile[];
	toolCalls?: ToolCall[];
};

export const messages = writable<Message[]>([]);
export const chatId = writable<string>('');
export const isGenerating = writable<boolean>(false);
export const isDone = writable<boolean>(false);

const validateMessageBeforeSending = (
	content: string,
	modelId: string,
	hasFiles: boolean
): Array<Error> | null => {
	let errorBag: Array<Error> = [];
	if (modelId.trim() === '' || !modelId) {
		errorBag.push(new Error('You need to select a Model before sending'));
	}
	if (!get(models).some((model) => model.id === modelId)) {
		errorBag.push(new Error('Model not found'));
	}
	if (content.trim() === '' && !hasFiles) {
		errorBag.push(new Error('You need to enter a message or attach a file before sending'));
	}

	if (errorBag.length > 0) {
		return errorBag;
	}

	return null;
};

export const sendMessage = async (
	content: string,
	model: string,
	chatUUID: string,
	options: { webSearch?: boolean; reasoning?: boolean; files?: ChatFile[]; isGuest?: boolean; previousMessages?: Array<{ role: string; content: string }> } = {}
) => {
	const errors = validateMessageBeforeSending(content, model, (options.files?.length ?? 0) > 0);
	if (errors) throw errors[0];

	isGenerating.set(true);
	messages.update((msgs) => [
		...msgs,
		{ role: 'user', content, model, messageId: undefined, files: options.files },
		{ role: 'assistant', content: '', reasoning: '', status: '', model, messageId: undefined }
	]);

	// Only use image generation endpoint if the model is strictly text-to-image.
	// No text-to-image-only models are in the current catalog.
	const isImageGeneration = false;

	try {
		const res = await fetch(`${API_BASE}/api/chat`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'text/event-stream'
			},
			body: JSON.stringify({
				message: content,
				model,
				chatId: options.isGuest ? undefined : chatUUID,
				webSearch: options.webSearch,
				reasoning: options.reasoning,
				imageGeneration: isImageGeneration,
				files: options.files,
				...(options.isGuest && options.previousMessages ? { previousMessages: options.previousMessages } : {})
			})
		});

		if (!res.ok) {
			const $t = get(t);
			if (res.status === 401) throw new Error($t('chat.errorUnauthorized'));
			if (res.status === 429) throw new Error($t('chat.errorRateLimit'));
			if (res.status === 403) throw new Error('Guests can only use the free model');
			throw new Error($t('chat.errorGeneric'));
		}

		if (!options.isGuest) {
			const newChatId = res.headers.get('x-chat-id');
			if (newChatId && chatUUID !== newChatId) {
				chatId.set(newChatId);
				chatState.appendChat({ id: newChatId, title: null, pinned: false });
				goto(`/chat/${newChatId}`, { replaceState: true, invalidateAll: false });
			}
		}

		// Handle stream — each data line is a JSON-serialised AI SDK fullStream
		// part or a custom event ({ type, ... }). The AI SDK emits its own
		// 'finish' (with a 'response' field) before we send the title; our
		// custom 'finish' (no 'response') is the real done signal.
		const reader = res.body?.getReader();
		if (!reader) {
			isGenerating.set(false);
			return;
		}

		const decoder = new TextDecoder();
		let buffer = '';

		isDone.set(false);
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;

			buffer += decoder.decode(value, { stream: true });
			const parts = buffer.split('\n\n');
			buffer = parts.pop() ?? '';

			for (const part of parts) {
				if (!part.trim()) continue;

				for (const line of part.split('\n')) {
					if (line.startsWith('event:')) continue; // keepalive
					if (!line.startsWith('data:')) continue;

					let raw = line.slice(5);
					if (raw.startsWith(' ')) raw = raw.slice(1);
					if (!raw) continue;

					let event: Record<string, unknown>;
					try {
						event = JSON.parse(raw);
					} catch {
						continue;
					}

					switch (event.type) {
						case 'tool-call':
							messages.update((msgs) => {
								const last = msgs[msgs.length - 1];
								if (last?.role === 'assistant') {
									const toolCalls = [
										...(last.toolCalls ?? []),
										{ id: event.toolCallId as string, name: event.toolName as string, done: false }
									];
									return [...msgs.slice(0, -1), { ...last, toolCalls }];
								}
								return msgs;
							});
							break;

						case 'tool-result':
							messages.update((msgs) => {
								const last = msgs[msgs.length - 1];
								if (last?.role === 'assistant') {
									const toolCalls = (last.toolCalls ?? []).map((tc) =>
										tc.id === event.toolCallId ? { ...tc, done: true } : tc
									);
									return [...msgs.slice(0, -1), { ...last, toolCalls }];
								}
								return msgs;
							});
							break;

						case 'text-delta':
							messages.update((msgs) => {
								const last = msgs[msgs.length - 1];
								if (last?.role === 'assistant') {
									return [
										...msgs.slice(0, -1),
										{ ...last, content: last.content + event.textDelta }
									];
								}
								return msgs;
							});
							break;

						case 'reasoning':
							messages.update((msgs) => {
								const last = msgs[msgs.length - 1];
								if (last?.role === 'assistant') {
									return [
										...msgs.slice(0, -1),
										{ ...last, reasoning: (last.reasoning ?? '') + event.textDelta }
									];
								}
								return msgs;
							});
							break;

						case 'title':
							chatState.updateTitle(get(chatId), event.value as string);
							break;

						case 'finish':
							// The AI SDK emits 'finish' with a 'response' field before the
							// title is sent. Our custom 'finish' (no 'response') comes after
							// the title and is the real done signal.
							if (!('response' in event)) {
								isGenerating.set(false);
								isDone.set(true);
								return;
							}
							break;

						case 'error':
							messages.update((msgs) => {
								const last = msgs[msgs.length - 1];
								if (last?.role === 'assistant') {
									return [
										...msgs.slice(0, -1),
										{ ...last, content: last.content + `\n[Error: ${event.message}]` }
									];
								}
								return msgs;
							});
							isGenerating.set(false);
							return;
					}
				}
			}
		}
		// Stream ended without a finish event (e.g. network drop)
		isGenerating.set(false);
	} catch (error) {
		console.error('Error sending message:', error);
		messages.update((msgs) => {
			const last = msgs[msgs.length - 1];
			if (last?.role === 'assistant') {
				const msg = (error instanceof Error ? error.message : String(error)) || get(t)('chat.errorGeneric');
				return [...msgs.slice(0, -1), { ...last, content: last.content || msg }];
			}
			return msgs;
		});
		isGenerating.set(false);
	}
};

export const loadChat = async (chatID: string) => {
	clearMessages();

	chatId.set(chatID);

	const response = await fetch(`${API_BASE}/api/chat/${chatID}`, {
		method: 'GET',
		credentials: 'include',
	});

	if (!response.ok) {
		throw new Error('Failed to load chat');
	}

	const data = (await response.json()) as Message[];
	const assistantMessages = data.filter((msg) => msg.role === 'assistant');
	const lastMessageModel = assistantMessages[assistantMessages.length - 1]?.model;
	if (lastMessageModel) {
		inputState.setModel(lastMessageModel as ModelId);
	}
	messages.update((msgs) => [...msgs, ...data]);
};

export const clearMessages = () => {
	messages.update(() => []);
};
