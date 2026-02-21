<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import {
		Download as DownloadIcon,
		Upload as UploadIcon,
		Trash2 as TrashIcon,
	} from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import { chatState } from '$lib/stores/chats.svelte';
	import { onMount } from 'svelte';
	import { formatRelativeTime } from '$lib/utils';
	import { _, locale } from 'svelte-i18n';

	let selectedChats = $state<string[]>([]);
	let isAllSelected = $derived(chatState.chats.length > 0 && selectedChats.length === chatState.chats.length);

	onMount(() => {
		chatState.fetchChats();
	});

	function toggleSelectAll() {
		if (isAllSelected) {
			selectedChats = [];
		} else {
			selectedChats = chatState.chats.map(c => c.id);
		}
	}

	function toggleSelect(id: string) {
		if (selectedChats.includes(id)) {
			selectedChats = selectedChats.filter(c => c !== id);
		} else {
			selectedChats = [...selectedChats, id];
		}
	}

	async function deleteSelected() {
		if (!confirm($_('history.confirmDelete', { values: { count: selectedChats.length } }))) return;

		for (const id of selectedChats) {
			chatState.deleteChat(id);
		}
		selectedChats = [];
		toast.success($_('history.deletedSuccess'));
	}

	async function exportHistory() {
		try {
			toast.info($_('history.exportingHistory'));

			// Create export data
			const exportData = {
				version: '1.0',
				exported_at: new Date().toISOString(),
				chats: chatState.chats.map(chat => ({
					id: chat.id,
					title: chat.title,
					created_at: chat.created_at,
					updated_at: chat.updated_at,
					// Note: Full message history would need to be fetched from API
					// This exports metadata only for now
				}))
			};

			// Create blob and download
			const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = `joory-chat-history-${new Date().toISOString().split('T')[0]}.json`;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);

			toast.success($_('history.exportedSuccess'));
		} catch (error) {
			toast.error($_('history.exportFailed'));
		}
	}

    async function handleImport() {
		// Mock import trigger
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = '.json';
		input.onchange = async () => {
			toast.info($_('history.importingChats'));
			await new Promise(resolve => setTimeout(resolve, 1500));
			toast.success($_('history.importedSuccess'));
		};
		input.click();
	}
</script>

<div class="flex flex-col gap-6">
	<div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
		<div>
			<h2 class="text-2xl font-bold tracking-tight">{$_('history.title')}</h2>
			<p class="text-muted-foreground">{$_('history.description')}</p>
		</div>
		<div class="flex items-center gap-2">
			<Button variant="outline" size="sm" class="gap-2" onclick={handleImport}>
				<UploadIcon class="size-4" />
				{$_('common.import')}
			</Button>
			<Button variant="default" size="sm" class="gap-2" onclick={exportHistory}>
				<DownloadIcon class="size-4" />
				{$_('common.exportAll')}
			</Button>
		</div>
	</div>

	<Card.Root class="overflow-hidden py-0 gap-0">
		<div class="px-4 py-3 border-b border-border/50 flex items-center justify-between bg-muted/40">
			<div class="flex items-center gap-3">
                <Checkbox
                    checked={isAllSelected}
                    onCheckedChange={toggleSelectAll}
                    aria-label={$_('history.selectAll')}
                />
				<span class="text-xs font-medium text-muted-foreground">
                    {selectedChats.length} {$_('common.of')} {chatState.chats.length} {$_('common.selected')}
                </span>
			</div>
			{#if selectedChats.length > 0}
				<div class="flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
					<Button variant="destructive" size="icon-sm" class="h-7 w-7" onclick={deleteSelected} title={$_('history.deleteSelected')}>
						<TrashIcon class="size-3.5" />
					</Button>
				</div>
			{/if}
		</div>

		<div class="relative w-full overflow-auto">
			<Table.Root class="text-xs">
				<Table.Header>
					<Table.Row class="hover:bg-transparent h-9 border-b border-border/60">
						<Table.Head class="w-[40px] px-2"></Table.Head>
						<Table.Head class="text-right font-medium text-muted-foreground h-9 px-4">{$_('history.conversation')}</Table.Head>
						<Table.Head class="text-right w-[150px] font-medium text-muted-foreground h-9 px-4">{$_('history.lastMessage')}</Table.Head>
						<Table.Head class="w-[60px] h-9 px-2"></Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each chatState.chats as chat (chat.id)}
						<Table.Row class="group h-9 hover:bg-muted/30 border-b border-border/40 data-[state=selected]:bg-muted">
							<Table.Cell class="px-2 py-0">
								<Checkbox
									class="size-3.5 translate-y-[1px]"
									checked={selectedChats.includes(chat.id)}
									onCheckedChange={() => toggleSelect(chat.id)}
								/>
							</Table.Cell>
							<Table.Cell class="font-medium px-4 py-0">
								<a href="/chat/{chat.id}" class="truncate block max-w-[300px] md:max-w-[500px] text-foreground/90 hover:text-primary transition-colors">
									{chat.title || $_('nav.newChat')}
								</a>
							</Table.Cell>
							<Table.Cell class="text-muted-foreground/70 font-mono px-4 py-0 whitespace-nowrap">
								{formatRelativeTime(chat.updated_at || new Date().toISOString(), $locale ?? 'ar')}
							</Table.Cell>
							<Table.Cell class="px-2 py-0 text-right">
								<div class="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
									<Button variant="ghost" size="icon-sm" class="h-6 w-6 text-muted-foreground hover:text-destructive" onclick={() => chatState.deleteChat(chat.id)}>
										<TrashIcon class="size-3" />
									</Button>
								</div>
							</Table.Cell>
						</Table.Row>
					{/each}
					{#if chatState.chats.length === 0}
						<Table.Row>
							<Table.Cell colspan={4} class="h-24 text-center text-muted-foreground">
								{$_('history.noChats')}
							</Table.Cell>
						</Table.Row>
					{/if}
				</Table.Body>
			</Table.Root>
		</div>
	</Card.Root>
</div>
