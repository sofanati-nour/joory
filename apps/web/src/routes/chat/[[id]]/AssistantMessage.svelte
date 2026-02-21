<script lang="ts">
	import DOMPurify from 'isomorphic-dompurify';
	import { getHighlighter, getHighlighterInstance } from '$lib/highlighter';
	import { markdownParser } from '$lib/markdown';
	import { isGenerating } from '$lib/stores/chat';
	import { getSmartDirection } from '$lib/utils';
	import CodeBlock from '$lib/components/ui/codeblock/CodeBlock.svelte';
	import { onMount } from 'svelte';
	import { Brain, Loader2 } from '@lucide/svelte';

	let { msg } = $props();

	type ContentPart = 
		| { type: 'html'; content: string }
		| { type: 'code'; code: string; lang: string; highlighted: string };

	let contentParts = $state<ContentPart[]>([]);
	let parseTimeout: ReturnType<typeof setTimeout>;
	let highlighterReady = $state(!!getHighlighterInstance());

	// Initialize highlighter if needed
	onMount(() => {
		if (!highlighterReady) {
			getHighlighter().then(() => {
				highlighterReady = true;
				// Force re-process to apply highlighting
				processContent(msg.content); 
			});
		}
	});

	async function processContent(content: string) {
		try {
			// Use synchronous instance if available
			const highlighter = getHighlighterInstance();

			// Split content by code blocks first
			const parts: ContentPart[] = [];
			const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
			let lastIndex = 0;
			let match;

			while ((match = codeBlockRegex.exec(content)) !== null) {
				// Add text before code block
				if (match.index > lastIndex) {
					const textContent = content.slice(lastIndex, match.index);
					if (textContent.trim()) {
						const parsed = await markdownParser.parse(textContent);
						const sanitized = DOMPurify.sanitize(parsed);
						parts.push({ type: 'html', content: sanitized });
					}
				}

				// Add code block
				const lang = match[1] || 'text';
				const code = match[2].trim();
				
				let highlighted = '';
				if (highlighter) {
					try {
						const validLang = highlighter.getLoadedLanguages().includes(lang) ? lang : 'text';
						highlighted = highlighter.codeToHtml(code, { lang: validLang, theme: 'nord' });
					} catch (e) {
						highlighted = `<pre><code>${code}</code></pre>`;
					}
				} else {
					// Fallback if highlighter not ready
					highlighted = `<pre><code>${code}</code></pre>`;
				}

				parts.push({
					type: 'code',
					code: code,
					lang: lang,
					highlighted: highlighted
				});

				lastIndex = match.index + match[0].length;
			}

			// Add remaining text
			if (lastIndex < content.length) {
				const textContent = content.slice(lastIndex);
				if (textContent.trim()) {
					const parsed = await markdownParser.parse(textContent);
					const sanitized = DOMPurify.sanitize(parsed);
					parts.push({ type: 'html', content: sanitized });
				}
			}

			contentParts = parts;
		} catch (err) {
			console.error(err);
		}
	}

	$effect(() => {
		const content = msg.content;
		clearTimeout(parseTimeout);

		// If this is the first render or we have no parts yet, run immediately
		if (contentParts.length === 0 && content) {
			processContent(content);
		} else {
			// Debounce subsequent updates (streaming)
			parseTimeout = setTimeout(() => {
				processContent(content);
			}, 8);
		}

		return () => clearTimeout(parseTimeout);
	});

	let dir = $derived(getSmartDirection(msg.content));
</script>

<div class="flex flex-col break-after-avoid justify-start gap-3 md:gap-4">
	<div class="shrink-0 flex flex-col relative items-start">
		<div class="flex size-8 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
			<img src="/favicon.svg" alt="AI" class="size-5" />
		</div>
	</div>

	<div class="group @container relative w-full max-w-full space-y-4 wrap-break-word overflow-hidden">
		<div id={msg.messageId}>
			<span class="sr-only">Assistant Reply:</span>
			
			<!-- Status / Tool Use -->
			{#if msg.status && $isGenerating}
				<div class="flex items-center gap-2 text-xs text-muted-foreground mb-2 animate-pulse">
					<Loader2 class="size-3 animate-spin" />
					<span>{msg.status}</span>
				</div>
			{/if}

			<!-- Reasoning -->
			{#if msg.reasoning}
				<details class="mb-4 rounded-lg border border-border/50 bg-muted/30 open:bg-muted/50 transition-colors">
					<summary class="flex cursor-pointer select-none items-center gap-2 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground">
						<Brain class="size-3.5" />
						<span>Process of thought</span>
					</summary>
					<div class="px-3 pb-3 pt-1 text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed font-mono">
						{msg.reasoning}
					</div>
				</details>
			{/if}

			<article
				class="prose prose-pink dark:prose-invert max-w-none"
				dir={dir}
			>
				{#if contentParts.length > 0}
					{#each contentParts as part}
						{#if part.type === 'html'}
							{@html part.content}
						{:else}
							<CodeBlock code={part.code} language={part.lang}>
								{@html part.highlighted}
							</CodeBlock>
						{/if}
					{/each}
				{:else if $isGenerating && !msg.status && !msg.reasoning}
					<div class="typing-indicator">
						<svg class="star" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M50 0 C50 0 65 35 100 50 C65 65 50 100 50 100 C50 100 35 65 0 50 C35 35 50 0 50 0Z"
							/>
						</svg>
						<svg class="star" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M50 0 C50 0 65 35 100 50 C65 65 50 100 50 100 C50 100 35 65 0 50 C35 35 50 0 50 0Z"
							/>
						</svg>
						<svg class="star" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M50 0 C50 0 65 35 100 50 C65 65 50 100 50 100 C50 100 35 65 0 50 C35 35 50 0 50 0Z"
							/>
						</svg>
					</div>
				{/if}
			</article>
		</div>
	</div>
</div>

<style>
	.typing-indicator {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		padding: 20px 30px;
		border-radius: 50px;
	}

	.star {
		width: 24px;
		height: 24px;
		fill: #ffd700;
		animation: bounce 1.4s infinite ease-in-out both;
	}

	.star:nth-child(1) {
		animation-delay: -0.32s;
	}

	.star:nth-child(2) {
		animation-delay: -0.16s;
	}

	.star:nth-child(3) {
		animation-delay: 0s;
	}

	@keyframes bounce {
		0%,
		80%,
		100% {
			transform: scale(0.6) translateY(0);
			opacity: 0.5;
		}
		40% {
			transform: scale(1) translateY(-5px);
			opacity: 1;
		}
	}
</style>