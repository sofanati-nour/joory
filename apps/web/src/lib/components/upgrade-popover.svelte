<script lang="ts">
	import * as Popover from '$lib/components/ui/popover';
	import Button from '$lib/components/ui/button/button.svelte';
	import { userState } from '$lib/stores/user.svelte';
	import { Sparkles as SparklesIcon } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';

	let { children } = $props();

	let isPremium = $derived(userState.tier === 'pro');
</script>

{#if isPremium}
	{@render children()}
{:else}
	<Popover.Root>
		<Popover.Trigger>
            {#snippet child({ props })}
                <div {...props} class="inline-block">
                    {@render children()}
                </div>
            {/snippet}
        </Popover.Trigger>
		<Popover.Content class="w-80 bg-linear-to-b from-primary/5 to-white" side="top">
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<div class="flex items-center gap-2">
						<div class="flex size-8 items-center justify-center rounded-md bg-primary/10">
							<SparklesIcon class="size-4 text-primary" />
						</div>
						<h4 class="font-medium leading-none">{$_('upgrade.proFeature')}</h4>
					</div>
					<p class="text-sm text-muted-foreground">
						{$_('upgrade.proFeatureDesc')}
					</p>
				</div>
				<Button size="sm" href="/settings/subscription" class="w-full">
					{$_('common.upgrade')}
				</Button>
			</div>
		</Popover.Content>
	</Popover.Root>
{/if}
