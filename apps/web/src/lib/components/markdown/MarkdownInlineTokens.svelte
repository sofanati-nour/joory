<script lang="ts">
	import DOMPurify from 'isomorphic-dompurify';
	import type { Token, Tokens } from 'marked';
	import Self from './MarkdownInlineTokens.svelte';

	let { tokens, id = '' }: { tokens: Token[]; id?: string } = $props();
</script>

{#each tokens as token, tokenIdx (tokenIdx)}
	{#if token.type === 'escape'}
		{(token as Tokens.Escape).text}
	{:else if token.type === 'text'}
		{#if (token as Tokens.Text).tokens}
			<Self id={`${id}-t${tokenIdx}`} tokens={(token as Tokens.Text).tokens!} />
		{:else}
			{@html (token as Tokens.Text).text}
		{/if}
	{:else if token.type === 'strong'}
		<strong>
			<Self id={`${id}-s${tokenIdx}`} tokens={(token as Tokens.Strong).tokens} />
		</strong>
	{:else if token.type === 'em'}
		<em>
			<Self id={`${id}-e${tokenIdx}`} tokens={(token as Tokens.Em).tokens} />
		</em>
	{:else if token.type === 'codespan'}
		<code>{(token as Tokens.Codespan).text}</code>
	{:else if token.type === 'br'}
		<br />
	{:else if token.type === 'del'}
		<del>
			<Self id={`${id}-d${tokenIdx}`} tokens={(token as Tokens.Del).tokens} />
		</del>
	{:else if token.type === 'link'}
		{@const link = token as Tokens.Link}
		<a href={link.href} target="_blank" rel="nofollow noopener" title={link.title}>
			{#if link.tokens}
				<Self id={`${id}-a${tokenIdx}`} tokens={link.tokens} />
			{:else}
				{link.text}
			{/if}
		</a>
	{:else if token.type === 'image'}
		{@const img = token as Tokens.Image}
		<img src={img.href} alt={img.text} title={img.title} />
	{:else if token.type === 'html'}
		{@html DOMPurify.sanitize((token as Tokens.HTML).text)}
	{/if}
{/each}
