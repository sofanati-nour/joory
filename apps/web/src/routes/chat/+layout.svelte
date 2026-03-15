<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	// import LanguageSwitcher from '$lib/components/language-switcher.svelte';
	import { chatId } from '$lib/stores/chat';
	import { userState } from '$lib/stores/user.svelte';
	import { onMount } from 'svelte';
	// import { localeStore } from '$lib/stores/locale.svelte.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { PlusIcon } from '@lucide/svelte';

	let { children, data, params } = $props();

	let currentChatId = $derived($chatId === '' ? params.id : $chatId);
	let user = $derived(data.user);
	let sidebarOpen = $state(true);

	onMount(() => {
		if (user) {
			userState.fetchSubscription();
		}
	});
</script>

<Sidebar.Provider bind:open={sidebarOpen} onOpenChange={(value) => sidebarOpen = value}>
	<AppSidebar {user} {currentChatId} />
	<div
		class={[
			'pointer-events-auto fixed top-safe-offset-2 z-50 flex flex-row gap-0.5 p-1 inset-s-2',
		]}
	>
		<div
			class={[
				'pointer-events-none absolute inset-0 right-auto -z-10 rounded-md transition-[background-color,width] max-sm:delay-125 max-sm:duration-125',
				!sidebarOpen
					? 'blur-fallback:bg-sidebar w-19 bg-sidebar delay-125 duration-125 max-sm:bg-sidebar'
					: 'w-10 bg-transparent delay-0 duration-250 max-sm:w-19 max-sm:bg-sidebar'
			]}
		></div>
		<Sidebar.Trigger class="h-8 w-8" />
		<Button
			variant="ghost"
			size="icon-sm"
			disabled={!currentChatId}
			href="/chat"
			class={sidebarOpen ? 'max-sm:flex hidden' : ''}
		>
			<PlusIcon />
		</Button>
	</div>
	{@render children?.()}
</Sidebar.Provider>
