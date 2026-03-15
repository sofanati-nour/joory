<script lang="ts">
	import DOMPurify from 'isomorphic-dompurify';
	import type { Token, Tokens } from 'marked';
	import Self from './MarkdownTokens.svelte';
	import MarkdownInlineTokens from './MarkdownInlineTokens.svelte';
	import HighlightedCodeBlock from './HighlightedCodeBlock.svelte';

	let {
		tokens,
		id = '',
		top = true,
		isStreaming = false
	}: { tokens: Token[]; id?: string; top?: boolean; isStreaming?: boolean } = $props();
</script>

{#each tokens as token, tokenIdx (tokenIdx)}
	{@const isLast = isStreaming && tokenIdx === tokens.length - 1}
	{#if token.type === 'hr'}
		<hr />
	{:else if token.type === 'heading'}
		{@const heading = token as Tokens.Heading}
		<svelte:element this={`h${heading.depth}`} dir="auto" class:streaming-last={isLast}>
			<MarkdownInlineTokens id={`${id}-${tokenIdx}-h`} tokens={heading.tokens} />
			{#if isLast}<span class="typing-cursor">▋</span>{/if}
		</svelte:element>
	{:else if token.type === 'code'}
		{@const code = token as Tokens.Code}
		<div class:streaming-last={isLast}>
			{#if code.raw.includes('```')}
				<HighlightedCodeBlock code={code.text} language={code.lang || 'text'} />
			{:else}
				<pre><code>{code.text}</code></pre>
			{/if}
			{#if isLast}<span class="typing-cursor">▋</span>{/if}
		</div>
	{:else if token.type === 'table'}
		{@const table = token as Tokens.Table}
		<div class="scrollbar-hidden relative overflow-x-auto max-w-full">
			<table dir="auto">
				<thead>
					<tr>
						{#each table.header as header, headerIdx}
							<th
								style={table.align[headerIdx]
									? `text-align: ${table.align[headerIdx]}`
									: ''}
							>
								<MarkdownInlineTokens
									id={`${id}-${tokenIdx}-th-${headerIdx}`}
									tokens={header.tokens}
								/>
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each table.rows as row, rowIdx}
						<tr>
							{#each row as cell, cellIdx}
								<td
									style={table.align[cellIdx]
										? `text-align: ${table.align[cellIdx]}`
										: ''}
								>
									<MarkdownInlineTokens
										id={`${id}-${tokenIdx}-td-${rowIdx}-${cellIdx}`}
										tokens={cell.tokens}
									/>
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{:else if token.type === 'blockquote'}
		<blockquote dir="auto">
			<Self
				id={`${id}-${tokenIdx}-bq`}
				tokens={(token as Tokens.Blockquote).tokens}
			/>
		</blockquote>
	{:else if token.type === 'list'}
		{@const list = token as Tokens.List}
		{#if list.ordered}
			<ol start={list.start || 1} dir="auto">
				{#each list.items as item, itemIdx}
					<li>
						{#if item.task}
							<input type="checkbox" checked={item.checked} disabled />
						{/if}
						<Self
							id={`${id}-${tokenIdx}-li-${itemIdx}`}
							tokens={item.tokens}
							top={list.loose}
						/>
					</li>
				{/each}
			</ol>
		{:else}
			<ul dir="auto">
				{#each list.items as item, itemIdx}
					<li>
						{#if item.task}
							<input type="checkbox" checked={item.checked} disabled />
						{/if}
						<Self
							id={`${id}-${tokenIdx}-li-${itemIdx}`}
							tokens={item.tokens}
							top={list.loose}
						/>
					</li>
				{/each}
			</ul>
		{/if}
	{:else if token.type === 'paragraph'}
		<p dir="auto" class:streaming-last={isLast}>
			<MarkdownInlineTokens
				id={`${id}-${tokenIdx}-p`}
				tokens={(token as Tokens.Paragraph).tokens}
			/>{#if isLast}<span class="typing-cursor">▋</span>{/if}
		</p>
	{:else if token.type === 'html'}
		{@html DOMPurify.sanitize((token as Tokens.HTML).text)}
	{:else if token.type === 'text'}
		{@const textToken = token as Tokens.Text}
		{#if top}
			<p>
				{#if textToken.tokens}
					<MarkdownInlineTokens
						id={`${id}-${tokenIdx}-t`}
						tokens={textToken.tokens}
					/>{#if isLast}<span class="typing-cursor">▋</span>{/if}
				{:else}
					{textToken.text}{#if isLast}<span class="typing-cursor">▋</span>{/if}
				{/if}
			</p>
		{:else if textToken.tokens}
			<MarkdownInlineTokens
				id={`${id}-${tokenIdx}-t`}
				tokens={textToken.tokens}
			/>{#if isLast}<span class="typing-cursor">▋</span>{/if}
		{:else}
			{textToken.text}{#if isLast}<span class="typing-cursor">▋</span>{/if}
		{/if}
	{:else if token.type === 'space'}
		<!-- space -->
	{/if}
{/each}

<style>
	:global(.streaming-last) {
		animation: token-fade-in 50ms ease-out;
	}

	@keyframes token-fade-in {
		from { opacity: 0.2; }
		to { opacity: 1; }
	}
</style>
