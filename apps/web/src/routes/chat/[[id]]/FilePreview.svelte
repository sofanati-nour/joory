<script lang="ts">
	import { X as XIcon, File as FileIcon, Image as ImageIcon } from '@lucide/svelte';

	let { file, onRemove }: { file: File; onRemove: () => void } = $props();

	let isImage = $derived(file.type.startsWith('image/'));
</script>

<div
	class="group relative flex animate-in items-center gap-2 rounded-lg border border-border/50 bg-background/80 px-3 py-1.5 text-xs zoom-in-95 fade-in"
>
	{#if isImage}
		<ImageIcon class="size-3.5 text-emerald-500" />
	{:else}
		<FileIcon class="size-3.5 text-blue-500" />
	{/if}
	<span class="max-w-[150px] truncate font-medium">{file.name}</span>
	<button
		class="ml-1 rounded-full p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
		onclick={onRemove}
		type="button"
	>
		<XIcon class="size-3" />
	</button>
</div>
