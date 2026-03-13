<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import { initI18n } from '$lib/i18n';
	import { localeStore } from '$lib/stores/locale.svelte';
	import { isLoading } from 'svelte-i18n';
	import { pwaInfo } from 'virtual:pwa-info';

	initI18n();

	let { children } = $props();

	// Inject SW registration script into <head> — required for SvelteKit SSR
	const swScript = pwaInfo?.registerSW?.scriptTag ?? '';

	onMount(() => {
		localeStore.init();
	});
</script>

<svelte:head>
	{@html swScript}
</svelte:head>

{#if $isLoading}
	<div class="flex h-screen items-center justify-center">
		<div class="animate-pulse text-muted-foreground">Loading...</div>
	</div>
{:else}
	<main>
		{@render children?.()}
	</main>
{/if}