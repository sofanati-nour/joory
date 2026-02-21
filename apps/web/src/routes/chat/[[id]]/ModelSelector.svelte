<script lang="ts">
	import { models } from '$lib/stores/models';
	import { userState } from '$lib/stores/user.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import * as InputGroup from '$lib/components/ui/input-group';
	import Button from '$lib/components/ui/button/button.svelte';
	import allowedModels from '$lib/allowed';

	import {
		ChevronDown as ChevronDownIcon,
		Search as SearchIcon,
		Star,
		Filter,
		Eye as EyeIcon,
		FileText,
		ImagePlus,
		Brain as ReasoningIcon
	} from '@lucide/svelte';
	import * as Icon from '$lib/components/icons';
	import { _ } from 'svelte-i18n';
	import { localeStore } from '$lib/stores/locale.svelte';

	let { model = $bindable() } = $props();

	let searchModel = $state('');
	let selectedProvider = $state('all');
	let isPremium = $derived(userState.subscription?.subscription === 'paid');
	let isPopoverOpen = $state(false);

	const providers = [
		{ id: 'all', icon: Star, label: 'All' },
		{ id: 'anthropic', icon: Icon.Anthropic, label: 'Anthropic' },
		{ id: 'deepseek', icon: Icon.Deepseek, label: 'DeepSeek' },
		{ id: 'google', icon: Icon.Google, label: 'Google' },
		{ id: 'meta-llama', icon: Icon.Meta, label: 'Meta' },
		{ id: 'minimax', icon: Icon.Minimax, label: 'Minimax' },
		{ id: 'moonshotai', icon: Icon.Moonshot, label: 'Moonshot' },
		{ id: 'openai', icon: Icon.OpenAI, label: 'OpenAI' },
		{ id: 'x-ai', icon: Icon.XAi, label: 'X AI' },
		{ id: 'z-ai', icon: Icon.ZAi, label: 'Z AI' }
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
					{#if model.endsWith(':reasoning')}
						{@const baseId = model.split(':')[0]}
						{($models.find((m) => m.id === baseId)?.name || 'Unknown') + ' (Reasoning)'}
					{:else}
						{$models.find((m) => m.id === model)?.name || $_('models.selectModel')}
					{/if}
				</div>
			</div>
			<ChevronDownIcon class="size-3.5 transition-transform duration-100 {isPopoverOpen ? 'rotate-180' : 'rotate-0'} opacity-50" />
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
					{@const filtered = $models.flatMap((m) => {
						const matchesSearch = m.name.toLowerCase().includes(searchModel.toLowerCase());
						const matchesCategory =
							selectedProvider === 'all'
								? true
								: m.id.toLowerCase().includes(selectedProvider) ||
									m.name.toLowerCase().includes(selectedProvider);

						if (!matchesSearch || !matchesCategory) return [];

						const result = [m];
						if (m.supported_parameters.includes('reasoning')) {
							result.push({
								...m,
								id: `${m.id}:reasoning`,
								name: `${m.name} (Reasoning)`
							});
						}
						return result;
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
							disabled={!allowedModels.find((am) => am.id === m.id.split(':')[0])?.free &&
								!isPremium}
							onclick={() => (model = m.id)}
						>
							<div class="flex w-full items-center justify-between">
								<div class="flex items-center gap-2">
									<!-- Icon placeholder based on name/id -->
									{#if selectedProvider == 'all'}
										{#if m.id.startsWith('google/')}
											<Icon.Google class="size-4 text-muted-foreground" />
										{:else if m.id.includes('openai/')}
											<Icon.OpenAI class="size-4 text-muted-foreground" />
										{:else if m.id.includes('anthropic/')}
											<Icon.Anthropic class="size-4 text-muted-foreground" />
										{:else if m.id.includes('deepseek/')}
											<Icon.Deepseek class="size-4 text-muted-foreground" />
										{:else if m.id.includes('meta-llama/')}
											<Icon.Meta class="size-4 text-muted-foreground" />
										{:else if m.id.includes('minimax/')}
											<Icon.Minimax class="size-4 text-muted-foreground" />
										{:else if m.id.includes('moonshotai/')}
											<Icon.Moonshot class="size-4 text-muted-foreground" />
										{:else if m.id.includes('z-ai/')}
											<Icon.ZAi class="size-4 text-muted-foreground" />
										{:else if m.id.includes('x-ai/')}
											<Icon.XAi class="size-4 text-muted-foreground" />
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
									{#if m.architecture.input_modalities.includes('image')}
										<Tooltip.Root>
											<Tooltip.Trigger class="inline-flex size-5">
												<span class="inline-flex">
													<div
														class="relative flex size-5 items-center justify-center overflow-hidden text-(--color) dark:text-(--color-dark)"
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

									{#if m.architecture.input_modalities.includes('file')}
										<Tooltip.Root>
											<Tooltip.Trigger class="inline-flex size-5">
												<span class="inline-flex">
													<div
														class="relative flex size-5 items-center justify-center overflow-hidden text-(--color) dark:text-(--color-dark)"
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
									{#if m.architecture.output_modalities.includes('image')}
										<Tooltip.Root>
											<Tooltip.Trigger class="inline-flex size-5">
												<span class="inline-flex">
													<div
														class="relative flex size-5 items-center justify-center overflow-hidden text-(--color) dark:text-(--color-dark)"
													>
														<ImagePlus class="size-3.5 text-orange-500" />
													</div>
												</span>
											</Tooltip.Trigger>
											<Tooltip.Content class="bg-primary">
												<p>{$_('models.imageGeneration')}</p>
											</Tooltip.Content>
										</Tooltip.Root>
									{/if}
									{#if m.id.endsWith(':reasoning')}
										<Tooltip.Root>
											<Tooltip.Trigger class="inline-flex size-5">
												<span class="inline-flex">
													<div
														class="relative flex size-5 items-center justify-center overflow-hidden text-(--color) dark:text-(--color-dark)"
													>
														<ReasoningIcon class="size-3.5 text-purple-500" />
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
							<div class="flex w-full items-start justify-between gap-4">
								<Tooltip.Root>
									<Tooltip.Trigger class=" min-w-0">
										<span
											class="line-clamp-1 truncate text-xs leading-relaxed text-muted-foreground"
										>
											{m.description || 'Capable model for general tasks.'}
										</span>
									</Tooltip.Trigger>
									<Tooltip.Content class="border-reflect bg-accent text-accent-foreground">
										<p class=" max-w-2xs">{m.description}</p>
									</Tooltip.Content>
								</Tooltip.Root>
							</div>
						</Button>
					{/each}
				{/if}
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
