<script lang="ts">
	import CodeBlock from '$lib/components/ui/codeblock/CodeBlock.svelte';
	import { getHighlighterInstance, ensureLanguageLoaded, getHighlighter } from '$lib/highlighter';
	import { onMount } from 'svelte';

	let {
		code,
		language = 'text'
	}: { code: string; language?: string } = $props();

	let highlighted = $state('');

	function escapeHtml(str: string): string {
		return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

	function fallbackHtml(c: string): string {
		return `<pre><code>${escapeHtml(c)}</code></pre>`;
	}

	async function highlight() {
		const highlighter = getHighlighterInstance();
		if (highlighter) {
			try {
				await ensureLanguageLoaded(language);
				const validLang = highlighter.getLoadedLanguages().includes(language) ? language : 'text';
				highlighted = highlighter.codeToHtml(code, { lang: validLang, theme: 'nord' });
			} catch {
				highlighted = fallbackHtml(code);
			}
		} else {
			highlighted = fallbackHtml(code);
		}
	}

	$effect(() => {
		void code;
		void language;
		highlight();
	});

	onMount(() => {
		if (!getHighlighterInstance()) {
			getHighlighter().then(() => highlight());
		}
	});
</script>

<CodeBlock {code} {language}>
	{@html highlighted || fallbackHtml(code)}
</CodeBlock>
