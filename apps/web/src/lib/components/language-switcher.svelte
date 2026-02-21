<script lang="ts">
	import Button from './ui/button/button.svelte';
	import { localeStore, supportedLocales } from '$lib/stores/locale.svelte';
	import { Languages as LanguagesIcon } from '@lucide/svelte';

	type Variant = 'toggle' | 'dropdown' | 'compact';
	let { variant = 'toggle' }: { variant?: Variant } = $props();

	function handleToggle() {
		localeStore.toggle();
	}
</script>

{#if variant === 'compact'}
	<Button
		variant="ghost"
		size="icon-sm"
		class="h-8 w-8"
		onclick={handleToggle}
		title={localeStore.current === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
	>
		<span class="text-xs font-medium">
			{localeStore.current === 'ar' ? 'EN' : 'ع'}
		</span>
	</Button>
{:else if variant === 'toggle'}
	<Button variant="outline" size="sm" class="gap-2" onclick={handleToggle}>
		<LanguagesIcon class="size-6" />
		<span>{localeStore.current === 'ar' ? 'English' : 'العربية'}</span>
	</Button>
{:else}
	<div class="flex gap-2">
		{#each supportedLocales as loc}
			<Button
				variant={localeStore.current === loc.code ? 'default' : 'outline'}
				size="sm"
				onclick={() => localeStore.setLocale(loc.code)}
			>
				{loc.name}
			</Button>
		{/each}
	</div>
{/if}
