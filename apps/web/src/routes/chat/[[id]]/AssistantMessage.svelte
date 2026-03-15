<script lang="ts">
	import { isGenerating, messages } from '$lib/stores/chat';
	import type { Message } from '$lib/stores/chat';
	import { getSmartDirection } from '$lib/utils';
	import MarkdownRenderer from '$lib/components/markdown/MarkdownRenderer.svelte';
	import LinkPreview from '$lib/components/ui/link-preview/LinkPreview.svelte';
	import { Brain, Check, Loader2, Wrench } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';

	let { msg, isLast = false }: { msg: Message; isLast?: boolean } = $props();

	let dir = $derived(getSmartDirection(msg.content));
	let promptDir = $derived(
		getSmartDirection([...$messages].reverse().find((m) => m.role === 'user')?.content ?? '')
	);

	function formatToolName(name: string): string {
		const key = `tools.${name}`;
		const translated = $_(key);
		return translated !== key ? translated : name.replace(/([A-Z])/g, ' $1').trim();
	}

	// Extract unique HTTP(S) links from the raw markdown, capped at 5.
	// Skips image URLs (preceded by '!') since those render inline already.
	const LINK_RE = /(?<!!)\[[^\]]*\]\((https?:\/\/[^)]+)\)|(?<![!(\[])https?:\/\/\S+/g;
	let previewUrls = $derived.by(() => {
		if ($isGenerating) return [];
		const urls = new Set<string>();
		let match: RegExpExecArray | null;
		LINK_RE.lastIndex = 0;
		while ((match = LINK_RE.exec(msg.content)) !== null) {
			const url = match[1] ?? match[0];
			try {
				const parsed = new URL(url);
				if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') continue;
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
						<span>{$_('tools.reasoning')}</span>
					</summary>
					<div
						class="px-3 pt-1 pb-3 font-mono text-xs leading-relaxed whitespace-pre-wrap text-muted-foreground"
					>
						{msg.reasoning}
					</div>
				</details>
			{/if}

			<article class="prose max-w-none prose-pink dark:prose-invert" {dir}>
				{#if msg.content}
					<MarkdownRenderer
						content={msg.content}
						isStreaming={$isGenerating && isLast}
						id={msg.messageId ?? ''}
					/>
				{:else if isLast && $isGenerating && !msg.status && !msg.reasoning}
					<div class="waiting-for-generation-indicator" dir={promptDir}>
						{#each { length: 1 } as _}
							<svg class="star" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M50 0 C50 0 65 35 100 50 C65 65 50 100 50 100 C50 100 35 65 0 50 C35 35 50 0 50 0Z"
								/>
							</svg>
						{/each}
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
	.waiting-for-generation-indicator {
		gap: 12px;
		padding: 20px 0;
		border-radius: 50px;
	}

	.star {
		width: 24px;
		height: 24px;
		fill: #ffd700;
		animation: blink 1.4s infinite ease-in-out both;
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

	@keyframes blink {
		0% {
			opacity: 0.2;
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 0.2;
		}
	}

	:global(.typing-cursor) {
		display: inline;
		margin-inline-start: 1px;
		color: oklch(50.8% 0.118 165.612);
		opacity: 1;
		animation: cursor-blink 0.9s infinite ease-in-out both;
	}

	@keyframes cursor-blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}
</style>
