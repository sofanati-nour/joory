<script lang="ts">
	import { models } from '$lib/stores/models';
	import { userState } from '$lib/stores/user.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import * as InputGroup from '$lib/components/ui/input-group';
	import Button from '$lib/components/ui/button/button.svelte';
	import { MODEL_CATALOG } from '@app/shared';

	import {
		ChevronDown as ChevronDownIcon,
		Search as SearchIcon,
		Star,
		Filter,
		Eye as EyeIcon,
		FileText,
		Brain
	} from '@lucide/svelte';
	import * as Icon from '$lib/components/icons';
	import { _ } from 'svelte-i18n';
	import { localeStore } from '$lib/stores/locale.svelte';

	let { model = $bindable() } = $props();

	let searchModel = $state('');
	let selectedProvider = $state('all');
	let isPremium = $derived(userState.subscription?.subscription === 'paid');
	let isPopoverOpen = $state(false);

	type ProviderInfo = { icon: any; label: string };
	const PROVIDER_ICON_MAP: Record<string, ProviderInfo> = {
		anthropic: { icon: Icon.Anthropic, label: 'Anthropic' },
		openai: { icon: Icon.OpenAI, label: 'OpenAI' },
		google: { icon: Icon.Google, label: 'Google' },
		'x-ai': { icon: Icon.XAi, label: 'X AI' },
		deepseek: { icon: Icon.Deepseek, label: 'DeepSeek' },
		'meta-llama': { icon: Icon.Meta, label: 'Meta' }
	};

	const providers = [
		{ id: 'all', icon: Star, label: 'All' },
		...MODEL_CATALOG.map((m) => m.id.split('/')[0])
			.filter((p, i, arr) => arr.indexOf(p) === i && p in PROVIDER_ICON_MAP)
			.map((p) => ({ id: p, ...PROVIDER_ICON_MAP[p] }))
	];
</script>

<Popover.Root bind:open={isPopoverOpen}>
	<Popover.Trigger role="combobox" aria-label="Select model">
		<Button
			variant="ghost"
			class="h-8 gap-2 border bg-sidebar/60 px-3 text-xs font-medium hover:bg-sidebar"
			size="sm"
		>
			<div class="min-w-0">
				<div class="truncate font-normal" dir={localeStore.dir}>
					{$models.find((m) => m.id === model)?.name || $_('models.selectModel')}
				</div>
			</div>
			<ChevronDownIcon
				class="size-3.5 transition-transform duration-100 {isPopoverOpen
					? 'rotate-180'
					: 'rotate-0'} opacity-50"
			/>
		</Button>
	</Popover.Trigger>
	<Popover.Content
		class="border-reflect w-[500px] overflow-hidden bg-emerald-50 p-0 dark:border-zinc-800 dark:bg-zinc-950"
		align="start"
		sideOffset={8}
		dir={localeStore.dir}
	>
		{#if userState.subscription?.subscription === 'free'}
			<!-- Upgrade Banner -->
			<div
				class="flex items-center justify-between border-b border-emerald-100 bg-linear-to-r from-emerald-100/80 to-purple-100/50 p-3 dark:border-zinc-800 dark:from-emerald-950/20 dark:to-purple-900/20"
			>
				<div class="flex flex-col gap-0.5">
					<span class="text-sm font-semibold text-foreground">
						{$_('models.unlockAllModels')}
					</span>
					<span class="text-xs font-medium text-emerald-600 dark:text-emerald-400"
						>$8<span class="font-normal text-muted-foreground">/{$_('common.monthly')}</span></span
					>
				</div>
				<Button size="sm" class="border-reflect rounded-md px-8 text-sm text-white ">
					<span>{$_('common.subscribe')}</span>
				</Button>
			</div>
		{/if}

		<!-- Search -->
		<div class="px-3 pt-3 pb-2">
			<div class="relative">
				<InputGroup.Root class="h-9 border-transparent bg-background/50 shadow-sm">
					<InputGroup.Addon class="pr-2 pl-3">
						<SearchIcon class="size-4 text-muted-foreground/60" />
					</InputGroup.Addon>
					<InputGroup.Input
						placeholder="Search models..."
						class="h-full border-0 bg-transparent px-0 focus-visible:ring-0"
						bind:value={searchModel}
					/>
					<InputGroup.Addon class="pr-2.5 pl-2">
						<button class="text-muted-foreground/60 hover:text-foreground">
							<Filter class="size-4" />
						</button>
					</InputGroup.Addon>
				</InputGroup.Root>
			</div>
		</div>

		<div class="flex h-[300px]">
			<!-- Sidebar -->
			<div
				class="no-scrollbar flex w-12 flex-col items-center gap-2 overflow-x-hidden overflow-y-auto border-r border-emerald-100/50 bg-background/30 py-2 dark:border-zinc-800/50"
			>
				{#each providers as provider}
					<Button
						size="icon"
						variant="ghost"
						class="relative {selectedProvider === provider.id
							? 'text-primary'
							: 'text-muted-foreground/80 hover:bg-primary/50 hover:text-primary-foreground'}"
						onclick={() => (selectedProvider = provider.id)}
						title={provider.label}
					>
						<provider.icon class="" />
						{#if selectedProvider === provider.id}
							<div
								class="absolute top-1/2 left-0 -ml-px h-6 w-0.5 -translate-x-1 -translate-y-1/2 rounded-r-full bg-primary"
							></div>
						{/if}
					</Button>
				{/each}
			</div>

			<!-- Model List -->
			<div
				class="flex-1 space-y-1 overflow-y-auto p-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-head]:hidden [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted-foreground/10 hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/30 [&::-webkit-scrollbar-track]:bg-transparent"
			>
				{#if $models.length === 0}
					<div class="py-10 text-center text-sm text-muted-foreground">
						{$_('models.noModelsLoaded')}
					</div>
				{:else}
					{@const filtered = $models.filter((m) => {
						const matchesSearch = m.name.toLowerCase().includes(searchModel.toLowerCase());
						const matchesCategory =
							selectedProvider === 'all' || m.id.split('/')[0] === selectedProvider;
						return matchesSearch && matchesCategory;
					})}

					{#if filtered.length === 0}
						<div class="py-10 text-center text-sm text-muted-foreground">
							{$_('models.noModelsFound')}
						</div>
					{/if}

					{#each filtered as m}
						<Button
							dir={localeStore.dir}
							class="flex h-fit w-full flex-col gap-1 rounded-lg p-3 text-left transition-all hover:bg-white/60 dark:hover:bg-zinc-900/60 {model ===
							m.id
								? 'bg-white shadow-sm ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10'
								: 'bg-transparent shadow-none ring-0'}"
							disabled={m.tier !== 'free' && !isPremium}
							onclick={() => (model = m.id)}
						>
							<div class="flex w-full items-center justify-between">
								<div class="flex items-center gap-2">
									{#if selectedProvider === 'all'}
										{@const prefix = m.id.split('/')[0]}
										{@const providerInfo = PROVIDER_ICON_MAP[prefix]}
										{#if providerInfo}
											<providerInfo.icon class="size-4 text-muted-foreground" />
										{/if}
									{/if}
									<span
										class="text-sm font-semibold {model === m.id
											? 'text-foreground'
											: 'text-muted-foreground'}"
									>
										{m.name}
									</span>
								</div>
								<div
									class="ml-auto flex items-center gap-0.5 rounded-full bg-muted-foreground/8 p-0.75"
								>
									{#if m.supportsImages}
										<Tooltip.Root>
											<Tooltip.Trigger class="inline-flex size-5">
												<span class="inline-flex">
													<div
														class="relative flex size-5 items-center justify-center overflow-hidden"
													>
														<EyeIcon class="size-3.5 text-emerald-500" />
													</div>
												</span>
											</Tooltip.Trigger>
											<Tooltip.Content class="bg-primary">
												<p>{$_('models.imageAnalysis')}</p>
											</Tooltip.Content>
										</Tooltip.Root>
									{/if}

									{#if m.supportsPdf}
										<Tooltip.Root>
											<Tooltip.Trigger class="inline-flex size-5">
												<span class="inline-flex">
													<div
														class="relative flex size-5 items-center justify-center overflow-hidden"
													>
														<FileText class="size-3.5 text-blue-600" />
													</div>
												</span>
											</Tooltip.Trigger>
											<Tooltip.Content class="bg-primary">
												<p>{$_('models.pdfAnalysis')}</p>
											</Tooltip.Content>
										</Tooltip.Root>
									{/if}

									{#if m.reasoning}
										<Tooltip.Root>
											<Tooltip.Trigger class="inline-flex size-5">
												<span class="inline-flex">
													<div
														class="relative flex size-5 items-center justify-center overflow-hidden"
													>
														<Brain class="size-3.5 text-purple-600" />
													</div>
												</span>
											</Tooltip.Trigger>
											<Tooltip.Content class="bg-primary">
												<p>{$_('models.reasoning')}</p>
											</Tooltip.Content>
										</Tooltip.Root>
									{/if}
								</div>
							</div>
						</Button>
					{/each}
				{/if}
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
