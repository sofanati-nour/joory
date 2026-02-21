import { goto } from '$app/navigation';
import { API_BASE } from '$lib/constants';
import { get, writable } from 'svelte/store';
import { chatState } from '$lib/stores/chats.svelte';
import { models } from '$lib/stores/models';

export type Message = {
	role: 'user' | 'assistant';
	content: string;
	reasoning?: string;
	status?: string;
	model?: string;
	messageId?: string;
	files?: any[];
};

export const messages = writable<Message[]>([]);
export const quota = writable<number | null>(null);
export const chatId = writable<string>('');
export const isGenerating = writable<boolean>(false);
export const isDone = writable<boolean>(false);

let authToken = '';

export const connect = (token: string) => {
	authToken = token;
};

const validateMessageBeforeSending = (content: string, modelId: string, hasFiles: boolean): Array<Error> | null => {
	let errorBag: Array<Error> = [];
	if (modelId.trim() === '' || !modelId) {
		errorBag.push(new Error("You need to select a Model before sending"));
	}
	if (!get(models).some((model) => model.id === modelId)) {
		errorBag.push(new Error("Model not found"));
	}
	if (content.trim() === '' && !hasFiles) {
		errorBag.push(new Error("You need to enter a message or attach a file before sending"));
	}

	if (errorBag.length > 0) {
		return errorBag;
	}

	return null;
}

export const sendMessage = async (content: string, model: string, chatUUID: string, options: { webSearch?: boolean, reasoning?: boolean, files?: any[] } = {}) => {
	const errors = validateMessageBeforeSending(content, model, (options.files?.length ?? 0) > 0);
	if (errors) {
		errors.forEach((error) => {
			throw error;
		});
	}


	isGenerating.set(true);
	messages.update((msgs) => [
		...msgs,
		{ role: 'user', content, model, messageId: undefined, files: options.files },
		{ role: 'assistant', content: '', reasoning: '', status: '', model, messageId: undefined }
	]);

	const selectedModel = get(models).find((m) => m.id === model);
	// Only use image generation endpoint if the model is strictly text-to-image.
	// Multimodal models (text+image->text+image) use chat completions.
	const isImageGeneration = selectedModel?.architecture.modality === 'text->image';

	try {
		const res = await fetch(`${API_BASE}/api/chat`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				message: content,
				model,
				chatId: chatUUID,
				webSearch: options.webSearch,
				reasoning: options.reasoning,
				imageGeneration: isImageGeneration,
				files: options.files
			})
		});

		if (!res.ok) {
			isGenerating.set(false);
			if (res.status === 429) {
				// {
				// 	"error": {
				// 		"code": "quota_exceeded_standard",
				// 		"details": {
				// 			"quota_type": "standard"
				// 		},
				// 		"message": "You have exhausted your Standard Request quota for this period."
				// 	}
				// }
				const errorDetails = await res.json();
				console.error(errorDetails);
				throw new Error(errorDetails.error.message);
			}
			throw new Error(`Error: ${res.statusText}`);
		}

		const newChatId = res.headers.get('X-Chat-ID');
		if (newChatId && chatUUID !== newChatId) {
			chatId.set(newChatId);
			chatState.appendChat({ id: newChatId, title: null });
			goto(`/chat/${newChatId}`, { replaceState: true, invalidateAll: false });
		}

		// Handle Stream
		const reader = res.body?.getReader();
		if (!reader) return;

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

				const lines = part.split('\n');
				let event = 'message';
				let dataLines: string[] = [];

				for (const line of lines) {
					if (line.startsWith('event:')) {
						event = line.slice(6).trim();
					} else if (line.startsWith('data:')) {
						let d = line.slice(5);
						// if (d.startsWith(' ')) d = d.slice(1);
						dataLines.push(d);
					}
				}

				const data = dataLines.join('\n');

				if (event === 'done') {
					isGenerating.set(false);
					isDone.set(true);
					return;
				} else if (event === 'error') {
					console.error('SSE Error:', data);
					messages.update((msgs) => {
						const last = msgs[msgs.length - 1];
						if (last && last.role === 'assistant') {
							return [...msgs.slice(0, -1), { ...last, content: last.content + `\n[Error: ${data}]` }];
						}
						return msgs;
					});
					isGenerating.set(false);
					return;
				} else if (event === 'message') {
					messages.update((msgs) => {
						const last = msgs[msgs.length - 1];
						if (last && last.role === 'assistant') {
							return [...msgs.slice(0, -1), { ...last, content: last.content + data }];
						}
						return msgs;
					});
				} else if (event === 'reasoning') {
					messages.update((msgs) => {
						const last = msgs[msgs.length - 1];
						if (last && last.role === 'assistant') {
							return [...msgs.slice(0, -1), { ...last, reasoning: (last.reasoning || '') + data }];
						}
						return msgs;
					});
				} else if (event === 'status') {
					messages.update((msgs) => {
						const last = msgs[msgs.length - 1];
						if (last && last.role === 'assistant') {
							return [...msgs.slice(0, -1), { ...last, status: data }];
						}
						return msgs;
					});
				} else if (event === 'title') {
					chatState.updateTitle(get(chatId), data);
				}
			}
		}
	} catch (error) {
		console.error('Error sending message:', error);
		messages.update((msgs) => [...msgs, { role: 'assistant', content: `Error: ${error}` }]);
		isGenerating.set(false);
	}
};

export const loadChat = async (token: string | null, chatID: string) => {
	clearMessages();

	chatId.set(chatID);

	const headers: HeadersInit = {
		'Content-Type': 'application/json',
	};

	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}

	const response = await fetch(`${API_BASE}/api/chat/${chatID}`, {
		method: "POST",
		credentials: 'include',
		headers
	});

	if (!response.ok) {
		throw new Error('Failed to load chat');
	}

	const data = await response.json();
	messages.update((msgs) => [...msgs, ...data]);
};

export const clearMessages = () => {
	messages.update(() => []);
};
