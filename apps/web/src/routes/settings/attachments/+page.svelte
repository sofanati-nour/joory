<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Progress } from '$lib/components/ui/progress';
	import {
		File as FileIcon,
		Image as ImageIcon,
		Trash2 as TrashIcon,
		CloudUpload as CloudUploadIcon
	} from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { API_BASE } from '$lib/constants';
	import { toast } from 'svelte-sonner';
	import { _, locale } from 'svelte-i18n';

	type FileData = {
		id: string;
		name: string;
		size: number;
		type: string;
		created_at: string;
	};

	let files = $state<FileData[]>([]);
	let loadError = $state<string | null>(null);

	// Stats
	let usage = $derived(files.reduce((acc, f) => acc + f.size, 0));
	let limit = 1000 * 1024 * 1024; // 1GB in bytes
	let usagePercent = $derived((usage / limit) * 100);

	function formatSize(bytes: number) {
		if (bytes === 0) return '0 B';
		const k = 1024;
		const sizes = ['B', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
	}

	function formatDate(dateStr: string) {
		return new Date(dateStr).toLocaleDateString($locale ?? 'ar');
	}

	onMount(async () => {
		try {
			const res = await fetch(`${API_BASE}/api/files`, { credentials: 'include' });
			if (res.ok) {
				files = await res.json();
			} else {
				loadError = $_('common.loadError');
			}
		} catch (e) {
			console.error("Failed to load files", e);
			loadError = $_('common.loadError');
		}
	});

	async function deleteFile(id: string) {
		const originalFiles = files;
		files = files.filter(f => f.id !== id);

		try {
			const res = await fetch(`${API_BASE}/api/files/${id}`, {
				method: 'DELETE',
				credentials: 'include'
			});
			if (!res.ok) throw new Error("Delete failed");
			toast.success($_('attachments.fileDeleted'));
		} catch (e) {
			files = originalFiles;
			toast.error($_('attachments.fileDeleteFailed'));
		}
	}
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-2xl font-bold tracking-tight">{$_('attachments.title')}</h2>
			<p class="text-muted-foreground">{$_('attachments.description')}</p>
		</div>
		<Button variant="outline">
			<CloudUploadIcon class="size-4 ml-2" />
			{$_('attachments.uploadFile')}
		</Button>
	</div>

	<Card.Root>
		<Card.Header>
			<Card.Title class="text-base">{$_('attachments.storageTitle')}</Card.Title>
		</Card.Header>
		<Card.Content class="space-y-2">
			<div class="flex justify-between text-sm">
				<span>{$_('common.used')}: {formatSize(usage)}</span>
				<span class="text-muted-foreground">{$_('common.from')} 1 GB</span>
			</div>
			<Progress value={usagePercent} />
		</Card.Content>
	</Card.Root>

	{#if loadError}
		<div class="rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
			{loadError}
		</div>
	{/if}

	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each files as file}
			<Card.Root class="group relative overflow-hidden transition-all hover:border-primary/50">
				<Card.Content class="p-4 flex items-start gap-4">
					<div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
						{#if file.type === 'image'}
							<ImageIcon class="size-5 text-emerald-600" />
						{:else}
							<FileIcon class="size-5 text-blue-600" />
						{/if}
					</div>
					<div class="min-w-0 flex-1 space-y-1">
						<p class="truncate font-medium leading-none">{file.name}</p>
						<p class="text-xs text-muted-foreground">{formatSize(file.size)} • {formatDate(file.created_at)}</p>
					</div>
					<Button
						variant="ghost"
						size="icon-sm"
						class="absolute top-2 left-2 opacity-0 transition-opacity group-hover:opacity-100 text-destructive hover:bg-destructive/10"
						onclick={() => deleteFile(file.id)}
					>
						<TrashIcon class="size-4" />
					</Button>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>

	{#if files.length === 0}
		<div class="py-12 text-center border-2 border-dashed rounded-xl">
			<p class="text-muted-foreground">{$_('attachments.noFiles')}</p>
		</div>
	{/if}
</div>
