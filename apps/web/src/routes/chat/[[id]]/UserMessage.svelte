<script lang="ts">
	import { File as FileIcon, Image as ImageIcon } from '@lucide/svelte';
	let { msg } = $props();
</script>

<div class="flex break-after-avoid justify-end">
	<div
		class="group relative inline-block max-w-full rounded-2xl rounded-tr-sm border border-border/50 bg-muted/60 dark:bg-muted/30 wrap-break-word transition-colors **:[unicode-bidi:plaintext] md:max-w-[80%] animate-in fade-in-50"
		style="align-self: flex-start; transition-duration: 0.8s; width: auto;"
	>
		<form class="flex max-w-full grow flex-col overflow-hidden px-5 py-3.5 gap-3">
			{#if msg.files && msg.files.length > 0}
				<div class="flex flex-wrap gap-2 mb-2">
					{#each msg.files as file}
						<div class="flex flex-col gap-1 max-w-[200px]">
							{#if file.type.startsWith('image/')}
								<img src={file.data} alt={file.name} class="rounded-lg max-h-40 object-cover border border-border/50" />
							{:else}
								<div class="flex items-center gap-2 p-2 rounded-lg bg-background/50 border border-border/50 text-xs">
									<FileIcon class="size-4 text-blue-500" />
									<span class="truncate">{file.name}</span>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			{/if}
			{#if msg.content}
				<div
					class="prose max-w-none overflow-auto prose-pink dark:prose-invert prose-p:my-0 prose-pre:m-0 prose-pre:bg-transparent prose-pre:p-0"
				>
					<p>{msg.content}</p>
				</div>
			{/if}
		</form>
	</div>
</div>
