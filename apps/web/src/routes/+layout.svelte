<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import { initI18n } from '$lib/i18n';
	import { localeStore } from '$lib/stores/locale.svelte';
	import { isLoading } from 'svelte-i18n';

	initI18n();

	let { children } = $props();

	onMount(() => {
		localeStore.init();
	});
</script>

{#if $isLoading}
	<div class="flex h-screen items-center justify-center">
		<div class="animate-pulse text-muted-foreground">Loading...</div>
	</div>
{:else}
	<main>
		{@render children?.()}
	</main>
{/if}