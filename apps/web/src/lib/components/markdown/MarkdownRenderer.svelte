<script lang="ts">
	import { onDestroy } from 'svelte';
	import { markdownParser } from '$lib/markdown';
	import type { Token } from 'marked';
	import MarkdownTokens from './MarkdownTokens.svelte';

	let {
		content,
		isStreaming = false,
		id = ''
	}: { content: string; isStreaming?: boolean; id?: string } = $props();

	let tokens = $state<Token[]>([]);
	let pendingUpdate: number | null = null;
	let lastContent = '';

	// During streaming, infer incomplete syntax so content renders stably.
	function inferContent(raw: string): string {
		let result = raw;

		// Unclosed code fence
		const withoutInline = result.replace(/`[^`]*`/g, '');
		const fenceCount = (withoutInline.match(/^`{3,}/gm) ?? []).length;
		if (fenceCount % 2 !== 0) {
			result = result + '\n```';
		}

		// Unclosed markdown link URL: [text](url  →  [text](url)
		result = result.replace(/(\[[^\]]*\]\([^)]*$)/, '$1)');

		// Unclosed markdown link label: [text  →  text
		result = result.replace(/(^|\n)\[([^\]]*$)/, '$1$2');

		return result;
	}

	function parseTokens() {
		if (content === lastContent) return;
		lastContent = content;
		const processed = isStreaming ? inferContent(content) : content;
		tokens = markdownParser.lexer(processed);
	}

	$effect(() => {
		if (content) {
			if (!isStreaming) {
				if (pendingUpdate !== null) {
					cancelAnimationFrame(pendingUpdate);
					pendingUpdate = null;
				}
				parseTokens();
			} else if (pendingUpdate === null) {
				pendingUpdate = requestAnimationFrame(() => {
					pendingUpdate = null;
					parseTokens();
				});
			}
		}
	});

	onDestroy(() => {
		if (pendingUpdate !== null) {
			cancelAnimationFrame(pendingUpdate);
		}
	});
</script>

<MarkdownTokens {tokens} {id} {isStreaming} />
