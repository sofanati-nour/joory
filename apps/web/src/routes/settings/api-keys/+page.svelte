<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import * as Field from '$lib/components/ui/field/index.js';
	import {
		Save,
		ShieldCheck,
		Info,
		Key as KeyIcon
	} from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import { onMount } from 'svelte';
	import { API_BASE } from '$lib/constants';
	import { _ } from 'svelte-i18n';

	type Provider = {
		id: string;
		name: string;
		descKey: string;
		placeholder: string;
		key: string;
		isSaved: boolean;
	};

	let providers = $state<Provider[]>([
		{
			id: 'openrouter',
			name: 'OpenRouter',
			descKey: 'apiKeys.openrouterDesc',
			placeholder: 'sk-or-v1-...',
			key: '',
			isSaved: false
		},
		{
			id: 'openai',
			name: 'OpenAI',
			descKey: 'apiKeys.openaiDesc',
			placeholder: 'sk-...',
			key: '',
			isSaved: false
		},
		{
			id: 'anthropic',
			name: 'Anthropic',
			descKey: 'apiKeys.anthropicDesc',
			placeholder: 'sk-ant-api03-...',
			key: '',
			isSaved: false
		},
		{
			id: 'google',
			name: 'Google Gemini',
			descKey: 'apiKeys.googleDesc',
			placeholder: 'AIzaSy...',
			key: '',
			isSaved: false
		},
		{
			id: 'deepseek',
			name: 'DeepSeek',
			descKey: 'apiKeys.deepseekDesc',
			placeholder: 'sk-...',
			key: '',
			isSaved: false
		}
	]);

	onMount(async () => {
		try {
			const res = await fetch(`${API_BASE}/api/api-keys`, { credentials: 'include' });
			if (res.ok) {
				const keys = await res.json();
				// Update providers
				for (const k of keys) {
					const p = providers.find(x => x.id === k.provider);
					if (p) {
						p.isSaved = true;
						p.key = k.api_key;
					}
				}
			}
		} catch (e) {
			console.error(e);
		}
	});

	let savingProvider = $state<string | null>(null);

	async function saveKey(id: string) {
		const provider = providers.find(p => p.id === id);
		if (!provider) return;

		savingProvider = id;
		toast.info($_('apiKeys.savingKey', { values: { provider: provider.name } }));

		try {
			// If key is empty, treat as delete? Or keep simple upsert.
			// Let's assume if empty, we delete.
			if (!provider.key.trim()) {
				const res = await fetch(`${API_BASE}/api/api-keys/${id}`, {
					method: 'DELETE',
					credentials: 'include'
				});
				if (!res.ok) throw new Error("Delete failed");
				provider.isSaved = false;
				toast.success($_('apiKeys.keyDeleted', { values: { provider: provider.name } }));
				return;
			}

			const res = await fetch(`${API_BASE}/api/api-keys`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
				body: JSON.stringify({ provider: id, key: provider.key })
			});

			if (!res.ok) throw new Error("Save failed");

			provider.isSaved = true;
			toast.success($_('apiKeys.keyUpdated', { values: { provider: provider.name } }));
		} catch (e) {
			toast.error($_('apiKeys.keyFailed', { values: { provider: provider.name } }));
		} finally {
			savingProvider = null;
		}
	}
</script>

<div class="flex flex-col gap-6">
	<div>
		<h2 class="text-2xl font-bold tracking-tight text-right">{$_('apiKeys.title')}</h2>
		<p class="text-muted-foreground text-right">
			{$_('apiKeys.description')}
		</p>
	</div>

	<Card.Root class="bg-blue-500/5 border-blue-500/20">
		<Card.Content class="p-4 flex gap-3 items-start">
			<ShieldCheck class="size-5 text-blue-600 shrink-0 mt-0.5" />
			<div class="space-y-1">
				<p class="text-sm font-medium text-blue-900 dark:text-blue-100">{$_('apiKeys.securityTitle')}</p>
				<p class="text-xs text-blue-800/70 dark:text-blue-200/70 leading-relaxed">
					{$_('apiKeys.securityDescription')}
				</p>
			</div>
		</Card.Content>
	</Card.Root>

	<div class="grid gap-6">
		{#each providers as provider}
			<Card.Root>
				<Card.Header class="pb-3">
					<div class="flex items-center justify-between">
						<Card.Title class="text-lg flex items-center gap-2">
							<KeyIcon class="size-4 text-primary" />
							{provider.name}
						</Card.Title>
						{#if provider.isSaved}
							<div class="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-full text-[10px] font-bold border border-emerald-200/50">
								<div class="size-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
								{$_('models.configured')}
							</div>
						{/if}
					</div>
					<Card.Description>{$_(provider.descKey)}</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="flex flex-col md:flex-row gap-3 items-end">
						<div class="flex-1 w-full space-y-2">
							<InputGroup.Root>
								<InputGroup.Input
									type="password"
									placeholder={provider.placeholder}
									bind:value={provider.key}
									class="font-mono"
									disabled={savingProvider === provider.id}
								/>
							</InputGroup.Root>
						</div>
						<Button
							size="sm"
							onclick={() => saveKey(provider.id)}
							class="gap-2 shrink-0 max-md:w-full"
							disabled={savingProvider === provider.id}
						>
							<Save class="size-4" />
							{#if savingProvider === provider.id}
								{$_('common.saving')}
							{:else}
								{$_('common.save')}
							{/if}
						</Button>
					</div>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>

	<div class="flex items-start gap-2 p-4 rounded-lg bg-muted/50 border border-border/50 mt-4">
		<Info class="size-4 text-muted-foreground shrink-0 mt-0.5" />
		<p class="text-xs text-muted-foreground leading-relaxed">
			{$_('apiKeys.openrouterNote')}
		</p>
	</div>
</div>