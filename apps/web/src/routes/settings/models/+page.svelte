<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Search as SearchIcon, Gem as GemIcon } from '@lucide/svelte';
	import { page } from '$app/stores';
	import modelsData from '$lib/data/models.json';
	import allowedModels from '$lib/allowed';
	import type { Model } from '$lib/stores/models';
	import { _ } from 'svelte-i18n';

	let searchQuery = $state('');
	
	// Derive the filtered models
	let filteredModels = $derived.by(() => {
		const query = searchQuery.toLowerCase();
		const tierFilter = $page.url.searchParams.get('tier');
		const models = modelsData as unknown as Model[];

		return models.filter((model) => {
			const allowedInfo = allowedModels.find((a) => a.id === model.id);
			if (!allowedInfo) return false;

			const matchesSearch =
				model.name.toLowerCase().includes(query) ||
				(model.description && model.description.toLowerCase().includes(query)) ||
				model.id.toLowerCase().includes(query);

			const matchesTier = tierFilter ? allowedInfo.tier === tierFilter : true;

			return matchesSearch && matchesTier;
		});
	});
</script>

<div class="flex flex-col gap-6">
	<div>
		<h2 class="text-2xl font-bold tracking-tight">{$_('models.title')}</h2>
		<p class="text-muted-foreground">{$_('models.description')}</p>
	</div>

	<div class="relative">
		<InputGroup.Root>
			<InputGroup.Input
				type="search"
				placeholder={$_('models.searchPlaceholder')}
				bind:value={searchQuery}
			/>
			<InputGroup.Addon>
				<SearchIcon class="size-4 text-muted-foreground" />
			</InputGroup.Addon>
		</InputGroup.Root>
	</div>

	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
		{#each filteredModels as model}
			{@const allowedInfo = allowedModels.find((a) => a.id === model.id)}
			<Card.Root>
				<Card.Header class="pb-2">
					<div class="flex items-start justify-between">
						<Card.Title class="text-lg font-semibold">{model.name}</Card.Title>
						{#if allowedInfo?.tier === 'premium'}
							<Badge variant="secondary" class="gap-1 text-emerald-600 bg-emerald-50 border-emerald-200">
								<GemIcon class="size-3" /> {$_('common.premium')}
							</Badge>
						{:else}
							<Badge variant="outline">{$_('common.free')}</Badge>
						{/if}
					</div>
					<Card.Description class="line-clamp-2 min-h-[40px]">
						{model.description || $_('common.noDescription')}
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<div class="grid grid-cols-2 gap-2 text-sm">
						<div class="flex flex-col gap-0.5">
							<span class="text-muted-foreground text-xs">{$_('models.developer')}</span>
							<span class="font-medium">{model.id.split('/')[0]}</span>
						</div>
						<div class="flex flex-col gap-0.5">
							<span class="text-muted-foreground text-xs">{$_('models.contextLength')}</span>
							<span class="font-medium">{model.context_length ? (model.context_length / 1024).toFixed(0) + 'k' : 'N/A'} tokens</span>
						</div>
						<div class="col-span-2 flex flex-col gap-0.5 mt-2">
							<span class="text-muted-foreground text-xs">{$_('models.capabilities')}</span>
							<div class="flex flex-wrap gap-1">
								{#if model.architecture.input_modalities.includes('image')}
									<Badge variant="secondary" class="text-[10px]">{$_('common.images')}</Badge>
								{/if}
								{#if model.architecture.input_modalities.includes('video')}
									<Badge variant="secondary" class="text-[10px]">{$_('common.video')}</Badge>
								{/if}
								{#if model.supported_parameters.includes('reasoning')}
									<Badge variant="secondary" class="text-[10px]">{$_('models.reasoning')}</Badge>
								{/if}
								<Badge variant="secondary" class="text-[10px]">{$_('common.text')}</Badge>
							</div>
						</div>
					</div>
				</Card.Content>
			</Card.Root>
		{/each}

		{#if filteredModels.length === 0}
			<div class="col-span-full py-12 text-center text-muted-foreground">
				{$_('models.noModelsFound')}
			</div>
		{/if}
	</div>
</div>
