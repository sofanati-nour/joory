<script lang="ts">
	import Usage from './Usage.svelte';
	import KeyboardShortcuts from './KeyboardShortcuts.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight as ArrowRightIcon, ArrowLeft as ArrowLeftIcon, Copy as CopyIcon } from '@lucide/svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { localeStore } from '$lib/stores/locale.svelte';
	import { userState } from '$lib/stores/user.svelte';
	import Spinner from '$lib/components/ui/spinner/spinner.svelte';
	import { _ } from 'svelte-i18n';
	import { toast } from 'svelte-sonner';

	let { children, data } = $props();
	let user = $derived(data.user);
	onMount(() => {
		userState.fetchSubscription();
	});

	const settings = $derived([
		{ label: $_('settings.account'), href: '/settings/subscription' },
		{ label: $_('settings.customization'), href: '/settings/customization' },
		{ label: $_('settings.history'), href: '/settings/history' },
		{ label: $_('settings.models'), href: '/settings/models' },
		{ label: $_('settings.api'), href: '/settings/api-keys' },
		{ label: $_('settings.attachments'), href: '/settings/attachments' },
		{ label: $_('settings.contactUs'), href: '/settings/contact-us' }
	]);
</script>

<div class="max-h-screen w-full overflow-y-auto">
	<div class="mx-auto flex max-w-300 flex-col overflow-y-auto px-4 pt-safe-offset-6 pb-24 md:px-6">
		<header class="flex items-center justify-between pb-8">
			<Button variant="ghost" href="/chat">
				{#if localeStore.dir === 'rtl'}
					<ArrowRightIcon class="size-4" />
				{:else}
					<ArrowLeftIcon class="size-4" />
				{/if}
				{$_('common.back')}
			</Button>
			<div class="flex flex-row items-center gap-2">
				<Button variant="ghost" href="/auth/logout">{$_('common.logout')}</Button>
			</div>
		</header>
		<div class="grid grid-cols-1 gap-16 md:grid-cols-[auto_1fr]">
			<div class="hidden space-y-8 md:block">
				<div class="relative flex flex-col items-center">
					<Avatar.Root class="size-40">
						<Avatar.Image
							src={user.avatar}
						/>
					</Avatar.Root>
					<h1 class="mt-4 text-2xl font-bold whitespace-nowrap transition-opacity duration-200">
						{user.name}
					</h1>
					<button
						type="button"
						class="perspective-1000 group relative h-6 cursor-pointer break-all text-muted-foreground [&>span]:absolute [&>span]:inset-y-0 [&>span]:left-1/2 [&>span]:-translate-x-1/2 [&>span]:transition-transform [&>span]:duration-300 [&>span]:backface-hidden [&>span]:transform-3d"
						aria-label="Copy user ID to clipboard"
						onclick={() => {
							navigator.clipboard.writeText(user.id);
							toast.success($_('settings.userIdCopied'));
						}}
					>
						<span class="truncate group-hover:transform-[rotateX(180deg)]">
							{user.email}
						</span>
						<span class="transform-[rotateX(180deg)] group-hover:transform-[rotateX(0deg)]">
							<span class="flex items-center gap-2 whitespace-nowrap">
								{$_('settings.copyUserId')}<CopyIcon class="size-4" />
							</span>
						</span>
					</button>
					<Badge variant="outline">
						{#if userState.subscription}
							{#if userState.subscription.subscription === 'free'}
								{$_('nav.freeSubscription')}
							{:else if userState.subscription.subscription === 'paid'}
								{$_('nav.paidSubscription')}
							{/if}
						{:else}
							<Spinner/>
						{/if}
					</Badge>

					<div class=" mt-4 w-full space-y-8">
						<Usage></Usage>
						<KeyboardShortcuts></KeyboardShortcuts>
					</div>
				</div>
			</div>
			<div class="flex min-w-0 flex-col">
				<div
					class="no-scrollbar mb-8 inline-flex h-9 w-fit max-w-full min-w-0 items-center justify-start gap-1 overflow-clip overflow-x-auto rounded-lg bg-secondary/80 p-1 text-secondary-foreground"
				>
					{#each settings as setting}
						{#if $page.url.pathname === setting.href}
							<Button size="sm" variant="default" href={setting.href}>
								{setting.label}
							</Button>
						{:else}
							<Button size="sm" variant="ghost" href={setting.href}>
								{setting.label}
							</Button>
						{/if}
					{/each}
				</div>

				{@render children?.()}
			</div>
		</div>
	</div>
</div>
