<script lang="ts">
	import DOMPurify from 'isomorphic-dompurify';
	import { getHighlighter, getHighlighterInstance } from '$lib/highlighter';
	import { markdownParser } from '$lib/markdown';
	import { isGenerating } from '$lib/stores/chat';
	import type { Message } from '$lib/stores/chat';
	import { getSmartDirection } from '$lib/utils';
	import CodeBlock from '$lib/components/ui/codeblock/CodeBlock.svelte';
	import LinkPreview from '$lib/components/ui/link-preview/LinkPreview.svelte';
	import { onMount, onDestroy, untrack } from 'svelte';
	import { Brain, Check, Loader2, Wrench } from '@lucide/svelte';

	let { msg }: { msg: Message } = $props();

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

	onDestroy(() => {
		clearTimeout(parseTimeout);
	});

	// During streaming, infer incomplete syntax so content renders stably
	// rather than flashing as it transitions from partial → complete form.
	function inferContent(content: string): string {
		let result = content;

		// 1. Unclosed code fence → infer closing fence
		//    Odd number of ``` means one block is still open.
		const segments = result.split('```');
		if (segments.length % 2 === 0) {
			result = result + '\n```';
		}

		// 2. Unclosed markdown link URL: [text](url  →  [text](url)
		result = result.replace(/(\[[^\]]*\]\([^)]*$)/, '$1)');

		// 3. Unclosed markdown link label: [text  →  text (client-only heuristic)
		//    Strip the leading [ so it renders as plain text instead of a
		//    broken fragment that later snaps into a clickable link.
		result = result.replace(/\[([^\]]*$)/, '$1');

		return result;
	}

	async function processContent(rawContent: string) {
		try {
			const content = inferContent(rawContent);
			const highlighter = getHighlighterInstance();

			// Use marked's lexer to tokenize — handles all valid code fence variants
			// (different backtick counts, optional trailing spaces on the fence line, etc.)
			// rather than a fragile custom regex.
			const tokens = markdownParser.lexer(content);
			// Preserve the links map so parser() resolves reference-style links correctly.
			const links = (tokens as any).links ?? {};
			const parts: ContentPart[] = [];
			let nonCodeTokens: (typeof tokens)[number][] = [];

			const flushNonCode = () => {
				if (nonCodeTokens.length === 0) return;
				const subList = Object.assign([...nonCodeTokens], { links });
				nonCodeTokens = [];
				// Sanitize AFTER parsing so DOMPurify inspects the actual HTML output,
				// not just the raw markdown source.
				const sanitized = DOMPurify.sanitize(markdownParser.parser(subList as any));
				if (sanitized.trim()) {
					parts.push({ type: 'html', content: sanitized });
				}
			};

			for (const token of tokens) {
				if (token.type === 'code') {
					flushNonCode();
					const lang = token.lang || 'text';
					const code = token.text;

					let highlighted = '';
					if (highlighter) {
						try {
							// Await loadLanguage before checking getLoadedLanguages() so the
							// result reflects the completed load, not an in-flight one.
							if (!highlighter.getLoadedLanguages().includes(lang)) {
								try {
									// @ts-ignore — loadLanguage exists at runtime
									await highlighter.loadLanguage(lang);
								} catch {
									// Language not supported by shiki — fall back to 'text'
								}
							}
							const validLang = highlighter.getLoadedLanguages().includes(lang) ? lang : 'text';
							highlighted = highlighter.codeToHtml(code, { lang: validLang, theme: 'nord' });
						} catch {
							highlighted = `<pre><code>${code}</code></pre>`;
						}
					} else {
						// Fallback if highlighter not ready
						highlighted = `<pre><code>${code}</code></pre>`;
					}

					parts.push({ type: 'code', code, lang, highlighted });
				} else {
					nonCodeTokens.push(token);
				}
			}

			flushNonCode();
			contentParts = parts;
		} catch (err) {
			console.error(err);
		}
	}

	$effect(() => {
		const content = msg.content;
		clearTimeout(parseTimeout);

		// If this is the first render or we have no parts yet, run immediately
		if (untrack(() => contentParts.length) === 0 && content) {
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

	const TOOL_LABELS: Record<string, string> = {
		fetchSanaFeed: 'Fetching SANA news',
		fetchSpToday: 'Fetching exchange rates',
		fetchAlikhbariaFeed: 'Fetching Alikhbaria news'
	};
	function formatToolName(name: string): string {
		return TOOL_LABELS[name] ?? name.replace(/([A-Z])/g, ' $1').trim();
	}

	// Extract unique HTTP(S) links from the raw markdown, capped at 5.
	// Skips image URLs (preceded by '!') since those render inline already.
	// Use RegExp constructor (not a literal) so forward slashes in the pattern
	// don't require escaping and can't accidentally terminate the regex literal.
	const LINK_RE = new RegExp(
		'(?<!!)\\[[^\\]]*\\]\\((https?://[^)]+)\\)|(?<![!(\\[])https?://\\S+',
		'g'
	);
	let previewUrls = $derived.by(() => {
		if ($isGenerating) return [];
		const urls = new Set<string>();
		let match: RegExpExecArray | null;
		LINK_RE.lastIndex = 0;
		while ((match = LINK_RE.exec(msg.content)) !== null) {
			const url = match[1] ?? match[0];
			try {
				new URL(url);
				urls.add(url);
				if (urls.size >= 5) break;
			} catch {
				// skip malformed
			}
		}
		return [...urls];
	});
</script>

<div class="flex break-after-avoid flex-col justify-start gap-3 md:gap-4">
	<div class="relative flex shrink-0 flex-col items-start">
		<div
			class="flex size-8 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
		>
			<img src="/favicon.svg" alt="AI" class="size-5" />
		</div>
	</div>

	<div
		class="group @container relative w-full max-w-full space-y-4 overflow-hidden wrap-break-word"
	>
		<div id={msg.messageId}>
			<span class="sr-only">Assistant Reply:</span>

			<!-- Status / Tool Use -->
			{#if msg.status && $isGenerating}
				<div class="mb-2 flex animate-pulse items-center gap-2 text-xs text-muted-foreground">
					<Loader2 class="size-3 animate-spin" />
					<span>{msg.status}</span>
				</div>
			{/if}

			<!-- Tool Calls -->
			{#if msg.toolCalls && msg.toolCalls.length > 0}
				<div class="mb-3 flex flex-col gap-1.5">
					{#each msg.toolCalls as tc (tc.id)}
						<div class="flex items-center gap-2 text-xs text-muted-foreground">
							{#if tc.done}
								<Check class="size-3 text-green-500" />
							{:else}
								<Loader2 class="size-3 animate-spin" />
							{/if}
							<Wrench class="size-3 opacity-50" />
							<span>{formatToolName(tc.name)}</span>
						</div>
					{/each}
				</div>
			{/if}

			<!-- Reasoning -->
			{#if msg.reasoning}
				<details
					class="mb-4 rounded-lg border border-border/50 bg-muted/30 transition-colors open:bg-muted/50"
				>
					<summary
						class="flex cursor-pointer items-center gap-2 px-3 py-2 text-xs font-medium text-muted-foreground select-none hover:text-foreground"
					>
						<Brain class="size-3.5" />
						<span>Process of thought</span>
					</summary>
					<div
						class="px-3 pt-1 pb-3 font-mono text-xs leading-relaxed whitespace-pre-wrap text-muted-foreground"
					>
						{msg.reasoning}
					</div>
				</details>
			{/if}

			<article class="prose max-w-none prose-pink dark:prose-invert" {dir}>
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
				{:else if $isGenerating && msg.content}
					<span class="break-words whitespace-pre-wrap">{msg.content}</span>
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

		{#if previewUrls.length > 0}
			<div class="flex flex-col gap-2">
				{#each previewUrls as url (url)}
					<LinkPreview {url} />
				{/each}
			</div>
		{/if}
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
