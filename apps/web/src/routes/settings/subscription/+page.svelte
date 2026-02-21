<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import {
		Rocket as RocketIcon,
		Sparkles as SparklesIcon,
		Headset as HeadsetIcon,
		Gem as GemIcon,
		Crown as CrownIcon,
		Check as CheckIcon
	} from '@lucide/svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { _ } from 'svelte-i18n';
	import { userState, PLAN_LIMITS } from '$lib/stores/user.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		if (!userState.subscription) {
			userState.fetchSubscription();
		}
	});

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};
</script>

<main class="space-y-8">
	{#if userState.subscription?.subscription === 'paid'}
		<!-- Subscribed View -->
		<div class="space-y-6">
			<div class="flex flex-col md:flex-row md:items-center md:justify-between">
				<div class="flex items-center gap-3">
					<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
						<CrownIcon class="h-5 w-5 text-primary" />
					</div>
					<div>
						<h2 class="text-2xl font-bold">{$_('subscription.subscribedTitle')}</h2>
						<p class="text-sm text-muted-foreground">
							{$_('subscription.renewsOn', { values: { date: formatDate(userState.subscription.next_reset_at) } })}
						</p>
					</div>
				</div>
			</div>

			<div class="grid gap-4 md:grid-cols-2">
				<!-- Standard Credits Card -->
				<Card.Root class="gap-0">
					<Card.Header class="pb-2">
						<Card.Title class="flex items-center gap-2 text-base">
							<SparklesIcon class="h-5 w-5 text-primary" />
							{$_('usage.standardCredits')}
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<div class="flex items-end justify-between">
							<div class="text-3xl font-bold">
								{userState.subscription.standard}
								<span class="text-lg font-normal text-muted-foreground">/ {PLAN_LIMITS.paid.standard}</span>
							</div>
						</div>
						<div class="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
							<div
								class="h-full bg-primary transition-all"
								style="width: {(userState.subscription.standard / PLAN_LIMITS.paid.standard) * 100}%"
							></div>
						</div>
					</Card.Content>
				</Card.Root>

				<!-- Premium Credits Card -->
				<Card.Root class="gap-0">
					<Card.Header class="pb-2">
						<Card.Title class="flex items-center gap-2 text-base">
							<GemIcon class="h-5 w-5 text-amber-500" />
							{$_('usage.premiumCredits')}
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<div class="flex items-end justify-between">
							<div class="text-3xl font-bold">
								{userState.subscription.premium}
								<span class="text-lg font-normal text-muted-foreground">/ {PLAN_LIMITS.paid.premium}</span>
							</div>
						</div>
						<div class="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
							<div
								class="h-full bg-amber-500 transition-all"
								style="width: {(userState.subscription.premium / PLAN_LIMITS.paid.premium) * 100}%"
							></div>
						</div>
					</Card.Content>
				</Card.Root>
			</div>

			<!-- Features List -->
			<Card.Root class="gap-0 bg-card/50">
				<Card.Content class="pt-6">
					<div class="grid gap-3 md:grid-cols-3">
						<div class="flex items-center gap-2">
							<CheckIcon class="h-4 w-4 text-primary" />
							<span class="text-sm">{$_('subscription.accessAllModels')}</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckIcon class="h-4 w-4 text-primary" />
							<span class="text-sm">{$_('subscription.generousLimits')}</span>
						</div>
						<div class="flex items-center gap-2">
							<CheckIcon class="h-4 w-4 text-primary" />
							<span class="text-sm">{$_('subscription.prioritySupport')}</span>
						</div>
					</div>
				</Card.Content>
			</Card.Root>

			<div class="flex flex-col gap-4 md:flex-row">
				<Button variant="outline" class="h-9 w-full px-4 py-2 md:w-64">
					{$_('subscription.viewBilling')}
				</Button>
			</div>
		</div>
	{:else}
		<!-- Upgrade View -->
		<div class="space-y-6">
			<div class="flex flex-col md:flex-row md:items-center md:justify-between">
				<h2 class="text-2xl font-bold">{$_('subscription.upgradeTitle')}</h2>
				<div
					class="mt-2 flex flex-col items-center justify-center text-right md:mt-0 md:flex-row md:items-center md:justify-center md:text-right"
				>
					<div class="text-xl font-bold md:text-3xl">
						960 SYP<span class="text-lg text-secondary-foreground">&sol;{$_('common.monthly')}</span>
					</div>
				</div>
			</div>
			<div class="grid gap-3 md:grid-cols-3">
				<Card.Root class="gap-0 bg-card/50">
					<Card.Header>
						<Card.Title class="mb-2 flex items-center gap-2">
							<RocketIcon class="h-5 w-5 text-primary" />
							<span class="text-base font-semibold">{$_('subscription.accessAllModels')}</span>
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<p class="text-sm text-muted-foreground/80">
							{$_('subscription.accessAllModelsDesc')}
						</p>
					</Card.Content>
				</Card.Root>
				<Card.Root class="gap-0 bg-card/50">
					<Card.Header>
						<Card.Title class="mb-2 flex items-center gap-2">
							<SparklesIcon class="h-5 w-5 text-primary" />
							<span class="text-base font-semibold">{$_('subscription.generousLimits')}</span>
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<p class="text-sm text-muted-foreground/80">
							{@html $_('subscription.generousLimitsDesc', {
								values: { standard: '<b>1500</b>', premium: '<b>100</b>' }
							})}
						</p>
					</Card.Content>
				</Card.Root>
				<Card.Root class="gap-0 bg-card/50">
					<Card.Header>
						<Card.Title class="mb-2 flex items-center gap-2">
							<HeadsetIcon class="h-5 w-5 text-primary" />
							<span class="text-base font-semibold">{$_('subscription.prioritySupport')}</span>
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<p class="text-sm text-muted-foreground/80">
							{$_('subscription.prioritySupportDesc')}
						</p>
					</Card.Content>
				</Card.Root>
			</div>
			<div class="flex flex-col gap-4 md:flex-row">
				<Button
					variant="default"
					class="h-9 w-full px-4 py-2 md:w-64"
					href="/settings/subscription/payment">{$_('common.subscribeNow')}</Button
				>
				<Button variant="outline" class="h-9 w-full px-4 py-2 md:w-64"
					>{$_('subscription.viewBilling')}</Button
				>
			</div>
			<p class="text-sm text-muted-foreground/60">
				<span class="mx-0.5 text-base font-medium">*</span>{$_('subscription.premiumCreditsNote')}
				<a href="/settings/models?tier=premium" class="text-primary underline"
					>{$_('subscription.viewPremiumModels')}</a
				>
			</p>
		</div>
	{/if}
</main>
