<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Info as InfoIcon } from '@lucide/svelte';
	import { Progress } from '$lib/components/ui/progress';
	import { Confetti } from 'svelte-confetti';
	import { Toaster } from '$lib/components/ui/sonner';
	import { toast } from 'svelte-sonner';
	import { userState } from '$lib/stores/user.svelte';
	import { formatRelativeTime } from '$lib/utils';
	import { _, locale } from 'svelte-i18n';

	let usage = $derived(userState.usage);

	let windowUsed = $derived(usage ? Math.round((usage.windowCapacity - usage.windowRemaining) * 100) / 100 : 0);
	let overageUsed = $derived(usage ? Math.round((usage.overageCapacity - usage.overageRemaining) * 100) / 100 : 0);
	let totalUsed = $derived(usage ? Math.round((usage.totalCapacity - usage.totalRemaining) * 100) / 100 : 0);

	let cheatCodeActivated = $state(false);
	let cheatCode = $state<Array<String>>([]);
	let audioContainer: HTMLAudioElement | undefined = $state();
	const cheatCodeSequence = [
		'ArrowUp',
		'ArrowUp',
		'ArrowDown',
		'ArrowDown',
		'ArrowLeft',
		'ArrowRight',
		'ArrowLeft',
		'ArrowRight',
		'b',
		'a'
	];

	const handleCheatCode = (e: KeyboardEvent) => {
		if (!cheatCodeSequence.includes(e.key)) return;
		if (cheatCode.length === 0) {
			if (e.key === cheatCodeSequence[cheatCode.length]) {
				cheatCode.push(e.key);
			} else {
				return;
			}
		} else {
			if (e.key === cheatCodeSequence[cheatCode.length]) {
				cheatCode.push(e.key);
			} else {
				cheatCode = [];
				return;
			}
		}
		if (cheatCode.length === cheatCodeSequence.length) {
			cheatCodeActivated = true;
			if (userState.usage) {
				userState.usage.windowRemaining += 5;
				userState.usage.totalRemaining += 5;
			}
			toast.success($_('usage.cheatCodeSuccess'));
			if (audioContainer) {
				audioContainer.play();
			}
		}
	};
</script>

<svelte:body onkeyup={handleCheatCode} />

{#if usage}
<audio id="congratulations" src="/contra.mp3" bind:this={audioContainer}></audio>

<Card.Root class="w-full">
	<Card.Header>
		<Card.Title>{$_('usage.title')}</Card.Title>
		<Card.Description>
			{$_('usage.windowResetsIn', { values: { time: formatRelativeTime(usage.windowResetsAt, $locale ?? 'ar') } })}
			&middot;
			{$_('usage.overageResetsIn', { values: { time: formatRelativeTime(usage.overageResetsAt, $locale ?? 'ar') } })}
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex flex-col gap-6">
			<!-- Overall combined bar -->
			<div class="flex flex-col gap-2">
				<div class="flex items-center justify-between gap-2">
					<h3 class="shrink-0 text-sm font-medium">{$_('usage.overallUsage')}</h3>
					<p class="shrink-0 text-sm text-muted-foreground">
						{$_('usage.percentRemaining', { values: { percent: Math.round(usage.percentRemaining) } })}
						{#if cheatCodeActivated}
							<Confetti x={[-0.5, 0.5]} y={[-0.5, 0.5]} />
						{/if}
					</p>
				</div>
				<Progress value={totalUsed} max={usage.totalCapacity} />
			</div>

			<!-- Window bucket -->
			<div class="flex flex-col gap-2">
				<div class="flex items-center justify-between gap-2">
					<h3 class="shrink-0 text-sm font-medium">{$_('usage.windowBucket')}</h3>
					<p class="shrink-0 text-sm text-muted-foreground">
						{windowUsed}/{usage.windowCapacity}
					</p>
				</div>
				<Progress value={windowUsed} max={usage.windowCapacity} />
				<p class="text-sm text-muted-foreground">{$_('usage.remaining', { values: { count: Math.round(usage.windowRemaining * 100) / 100 } })}</p>
			</div>

			<!-- Overage bucket -->
			<div class="flex flex-col gap-2">
				<div class="flex items-center justify-between gap-2">
					<h3 class="shrink-0 text-sm font-medium">{$_('usage.overageBucket')}</h3>
					<p class="shrink-0 text-sm text-muted-foreground">
						{overageUsed}/{usage.overageCapacity}
					</p>
				</div>
				<Progress value={overageUsed} max={usage.overageCapacity} class="bg-primary/20" />
				<p class="text-sm text-muted-foreground">{$_('usage.remaining', { values: { count: Math.round(usage.overageRemaining * 100) / 100 } })}</p>
			</div>
		</div>
	</Card.Content>
	<Card.Footer>
		<i class="mt-4 block w-0 min-w-full text-xs text-muted-foreground/80">
			<InfoIcon class="-mt-0.5 ml-1 inline-flex size-3 shrink-0" aria-hidden="true" />
			{$_('usage.toolUsageNote')}
		</i>
	</Card.Footer>
</Card.Root>

<Toaster />
{/if}
