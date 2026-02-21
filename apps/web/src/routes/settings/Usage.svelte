<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Info as InfoIcon } from '@lucide/svelte';
	import { Progress } from '$lib/components/ui/progress';
	import { Confetti } from 'svelte-confetti';
	import { Toaster } from '$lib/components/ui/sonner';
	import { toast } from 'svelte-sonner';
	import { userState, PLAN_LIMITS } from '$lib/stores/user.svelte';
	import { formatRelativeTime } from '$lib/utils';
	import { _, locale } from 'svelte-i18n';

	let plan = $derived(userState.subscription?.subscription ?? 'free');
	let limits = $derived(PLAN_LIMITS[plan]);
	
	let standardTotal = $derived(limits.standard);
	let standardRemaining = $derived(userState.subscription?.standard ?? 0);
	let standardUsed = $derived(standardTotal - standardRemaining);

	let premiumTotal = $derived(limits.premium);
	let premiumRemaining = $derived(userState.subscription?.premium ?? 0);
	let premiumUsed = $derived(premiumTotal - premiumRemaining);

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
			if (userState.subscription) {
				userState.subscription.standard += 5;
			}
			toast.success($_('usage.cheatCodeSuccess'));
            if(audioContainer){
                audioContainer.play();
            }
		}
	};
</script>

<svelte:body onkeyup={handleCheatCode} />

{#if userState.subscription}
<audio id="congratulations" src="/contra.mp3" bind:this={audioContainer}></audio>


<Card.Root class="w-full">
	<Card.Header>
		<Card.Title>{$_('usage.title')}</Card.Title>
		<Card.Description>{$_('usage.resetsIn', { values: { time: formatRelativeTime(userState.subscription.next_reset_at, $locale ?? 'ar') } })}</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex flex-col gap-6">
			<!-- Standard Usage -->
			<div class="flex flex-col gap-2">
				<div class="flex justify-between">
					<h3 class="text-sm font-medium">{$_('usage.standardCredits')}</h3>
					<p class="text-sm text-muted-foreground">
						{standardUsed}/{standardTotal}
						{#if cheatCodeActivated}
							<Confetti x={[-0.5, 0.5]} y={[-0.5, 0.5]} />
						{/if}
					</p>
				</div>
				<Progress value={standardUsed} max={standardTotal} />
				<p class="text-sm text-muted-foreground">{$_('usage.remainingStandard', { values: { count: standardRemaining } })}</p>
			</div>

			<!-- Premium Usage (Only for paid plans) -->
			{#if plan === 'paid'}
				<div class="flex flex-col gap-2">
					<div class="flex justify-between">
						<h3 class="text-sm font-medium">{$_('usage.premiumCredits')}</h3>
						<p class="text-sm text-muted-foreground">
							{premiumUsed}/{premiumTotal}
						</p>
					</div>
					<Progress value={premiumUsed} max={premiumTotal} class="bg-primary/20" />
					<p class="text-sm text-muted-foreground">{$_('usage.remainingPremium', { values: { count: premiumRemaining } })}</p>
				</div>
			{/if}
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
