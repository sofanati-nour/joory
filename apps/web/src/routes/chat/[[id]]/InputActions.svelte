<script lang="ts">
	import { ArrowUp as ArrowUpIcon, Search as SearchIcon, Paperclip as PaperclipIcon } from '@lucide/svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Spinner from '$lib/components/ui/spinner/spinner.svelte';
	import ModelSelector from './ModelSelector.svelte';
	import UpgradePopover from '$lib/components/upgrade-popover.svelte';
	import { _ } from 'svelte-i18n';

	let {
		model = $bindable(),
		hasContent,
		isGenerating,
		webSearchEnabled,
		onToggleWebSearch,
		onAttachFile
	}: {
		model: string;
		hasContent: boolean;
		isGenerating: boolean;
		webSearchEnabled: boolean;
		onToggleWebSearch: () => void;
		onAttachFile: () => void;
	} = $props();
</script>

<div class="@container mt-1 -mb-px flex w-full min-w-0 flex-row-reverse justify-between pb-1">
	<!-- Send Button -->
	<div class="-mt-0.5 -mr-0.5 flex shrink-0 items-center justify-center gap-2" aria-label="Message actions">
		<Button
			size="icon-sm"
			type="submit"
			aria-label="Send message"
			class="{hasContent
				? 'bg-primary text-primary-foreground hover:bg-primary/90'
				: 'border-2 border-primary/50 bg-background text-muted-foreground'} transition-colors duration-200"
			disabled={isGenerating || !hasContent}
		>
			{#if isGenerating}
				<Spinner class="size-4" />
			{:else}
				<ArrowUpIcon class="size-5" />
			{/if}
		</Button>
	</div>

	<!-- Model Selector & Actions -->
	<div class="flex min-w-0 items-center gap-2">
		<div class="min-w-0 flex-1">
			<ModelSelector bind:model />
		</div>

		<!-- Web Search Toggle -->
		<div class="shrink-0">
			<UpgradePopover>
				<Button
					aria-label="Web search"
					type="button"
					variant="ghost"
					class="h-8 gap-2 {webSearchEnabled
						? 'bg-primary/10 text-primary ring-1 ring-primary/20 hover:bg-primary/20'
						: 'bg-sidebar/60'} rounded-full border px-5 text-xs font-normal hover:bg-sidebar"
					size="sm"
					onclick={onToggleWebSearch}
					disabled={isGenerating}
				>
					<SearchIcon class="size-3.5" />
					<span class="hidden @md:block">{$_('common.search')}</span>
				</Button>
			</UpgradePopover>
		</div>

		<!-- File Attach -->
		<div class="shrink-0">
			<UpgradePopover>
				<Button
					aria-label="Attach file"
					type="button"
					variant="ghost"
					class="h-8 gap-2 rounded-full border bg-sidebar/60 px-5 text-xs font-normal hover:bg-sidebar"
					size="sm"
					onclick={onAttachFile}
					disabled={isGenerating}
				>
					<PaperclipIcon class="size-4" />
				</Button>
			</UpgradePopover>
		</div>
	</div>
</div>
