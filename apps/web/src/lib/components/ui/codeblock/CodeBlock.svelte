<script lang="ts">
	import { Copy, Check, Download, WrapText } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	let { code, language = 'text', showLineNumbers = false, children }: { code: string, language?: string, showLineNumbers?: boolean, children?: Snippet } = $props();

	let copied = $state(false);
	let wrapped = $state(false);

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}

	function downloadCode() {
		const blob = new Blob([code], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `code.${language}`;
		a.click();
		URL.revokeObjectURL(url);
	}

	function toggleWrap() {
		wrapped = !wrapped;
	}
</script>

<div class="code-block-wrapper" dir="ltr">
	<!-- Header -->
	<div class="code-block-header">
		<span class="language-label">{language}</span>
		<div class="code-block-actions">
			<button
				class="action-btn"
				onclick={downloadCode}
				type="button"
				aria-label="Download code"
			>
				<Download size={16} />
			</button>
			<button
				class="action-btn"
				onclick={toggleWrap}
				type="button"
				aria-label="Toggle text wrapping"
			>
				<WrapText size={16} />
			</button>
			<button
				class="action-btn copy-btn"
				onclick={copyToClipboard}
				type="button"
				aria-label="Copy code to clipboard"
			>
				{#if copied}
					<Check size={16} class="check-icon" />
				{:else}
					<Copy size={16} class="copy-icon" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Code Content -->
	<div class="code-block-content" class:wrapped dir="ltr">
		{@render children?.()}
	</div>
</div>

<style>
	.code-block-wrapper {
		margin: 1rem 0;
		border-radius: 0.5rem;
		overflow: hidden;
		background: var(--code-bg, #1e1e2e);
		border: 1px solid var(--code-border, #313244);
	}

	.code-block-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 1rem;
		background: var(--code-header-bg, #181825);
		border-bottom: 1px solid var(--code-border, #313244);
	}

	.language-label {
		font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono',
			monospace;
		font-size: 0.875rem;
		color: var(--code-label-color, #cdd6f4);
		font-weight: 500;
	}

	.code-block-actions {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.action-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		padding: 0.5rem;
		border: none;
		border-radius: 0.375rem;
		background: transparent;
		color: var(--code-action-color, #9399b2);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.action-btn:hover {
		background: var(--code-action-hover-bg, #313244);
		color: var(--code-action-hover-color, #cdd6f4);
	}

	.code-block-content {
		overflow-x: auto;
		max-width: 100%;
	}

	.code-block-content.wrapped :global(pre) {
		white-space: pre-wrap;
		word-break: break-word;
	}

	.code-block-content :global(pre) {
		margin: 0 !important;
		padding: 1rem !important;
		background: transparent !important;
		overflow-x: auto;
	}

	.code-block-content :global(code) {
		font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono',
			monospace;
		font-size: 0.875rem;
		line-height: 1.5;
	}

	/* Animations */
	:global(.check-icon) {
		animation: checkmark 0.3s ease-in-out;
	}

	@keyframes checkmark {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}
</style>