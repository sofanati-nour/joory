<script lang="ts">
	import * as Alert from '$lib/components/ui/alert';
	import { AlertTriangle } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';
	import { slide } from 'svelte/transition';

	let { remainingCredits, currentTier }: { remainingCredits: number; currentTier: string } =
		$props();
</script>

{#if remainingCredits < 10}
	<div class="pointer-events-auto mx-auto w-fit" transition:slide={{ duration: 300 }}>
		<Alert.Root
			variant="destructive"
			class="z-50 w-auto max-w-lg min-w-[300px] rounded-b-none bg-background/90 text-muted-foreground shadow-lg backdrop-blur-2xl"
		>
			<AlertTriangle class="size-4 stroke-muted-foreground" />
			<Alert.Title class="ml-2 font-semibold">{$_('chat.lowCredits')}</Alert.Title>
			<Alert.Description class="text-xs text-muted-foreground!">
				{$_('chat.lowCreditsMsg', {
					values: {
						count: remainingCredits,
						type:
							currentTier === 'premium' ? $_('chat.premiumCredit') : $_('chat.standardCredit')
					}
				})}
			</Alert.Description>
		</Alert.Root>
	</div>
{/if}
