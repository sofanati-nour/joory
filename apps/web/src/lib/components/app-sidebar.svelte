<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Avatar from '$lib/components/ui/avatar';
	import Button from './ui/button/button.svelte';
	import { chatState, type Chat } from '$lib/stores/chats.svelte';
	import { onMount } from 'svelte';
	import {
		LogIn,
		Plus as PlusIcon,
		Trash2 as TrashIcon,
		MessageSquare as MessageSquareIcon,
		Pin as PinIcon,
		PinOff as PinOffIcon,
		ChevronDown as ChevronDownIcon,
		ChevronRight as ChevronRightIcon
	} from '@lucide/svelte';
	import Spinner from './ui/spinner/spinner.svelte';
	import { _ } from 'svelte-i18n';
	import { userState } from '$lib/stores/user.svelte';
	import { Skeleton } from './ui/skeleton';

	let { user, currentChatId } = $props();

	let isPinnedOpen = $state(true);

	onMount(() => {
		chatState.fetchChats();
	});

	function handleDeleteChat(e: Event, id: string) {
		e.preventDefault();
		e.stopPropagation();
		if (confirm($_('chat.confirmDeleteChat'))) {
			chatState.deleteChat(id);
		}
	}

	function handleTogglePin(e: Event, id: string) {
		e.preventDefault();
		e.stopPropagation();
		chatState.togglePin(id);
	}
</script>

<Sidebar.Root>
	<Sidebar.Header>
		<div class="flex flex-col items-center justify-center gap-2 pt-3">
			<h1
				class="flex shrink-0 items-center justify-center tracking-tight text-muted-foreground transition-opacity"
			>
				<a href="/chat" class="flex items-center gap-2 text-lg">
					<span>Joory</span>
				</a>
			</h1>
			<div class="w-full px-3">
				<Button
					type="button"
					class="border-reflect w-full justify-center gap-2 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
					href="/chat"
					disabled={!user}
				>
					<span>{$_('nav.newChat')}</span>
				</Button>
			</div>
		</div>
	</Sidebar.Header>
	<Sidebar.Content>
		{#if chatState.isLoading && chatState.chats.length === 0}
			<div class="flex justify-center p-4">
				<Spinner class="size-5 text-muted-foreground" />
			</div>
		{:else if chatState.chats.length === 0}
			<div
				class="flex flex-col items-center justify-center gap-2 py-8 text-center text-sm text-muted-foreground/60"
			>
				<MessageSquareIcon class="size-8 opacity-20" />
				<p>{$_('nav.noChats')}</p>
			</div>
		{:else}
			{@const groups = chatState.grouped}

			<!-- Pinned Chats -->
			{#if groups.pinned.length > 0}
				<Sidebar.Group>
					<Sidebar.GroupLabel class="px-2 py-0">
						<button
							class="flex w-full items-center justify-between text-xs font-medium text-muted-foreground hover:text-foreground"
							onclick={() => (isPinnedOpen = !isPinnedOpen)}
						>
							<span>{$_('nav.pinned')}</span>
							{#if isPinnedOpen}
								<ChevronDownIcon class="size-3" />
							{:else}
								<ChevronRightIcon class="size-3" />
							{/if}
						</button>
					</Sidebar.GroupLabel>
					{#if isPinnedOpen}
						<Sidebar.GroupContent>
							<Sidebar.Menu>
								{#each groups.pinned as chat (chat.id)}
									<Sidebar.MenuItem>
										<Sidebar.MenuButton isActive={chat.id === currentChatId} class="peer relative">
											{#snippet child({ props })}
												<a href={`/chat/${chat.id}`} {...props}>
													<span class="truncate font-medium">{chat.title || $_('nav.newChat')}</span
													>
												</a>
												<div
													class="absolute top-1/2 left-2 flex -translate-y-1/2 gap-1 opacity-0 transition-all peer-hover:opacity-100 hover:opacity-100"
												>
													<button
														class="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
														onclick={(e) => handleTogglePin(e, chat.id)}
														title={$_('nav.unpin')}
													>
														<PinOffIcon class="size-3.5" />
													</button>
												</div>
											{/snippet}
										</Sidebar.MenuButton>
									</Sidebar.MenuItem>
								{/each}
							</Sidebar.Menu>
						</Sidebar.GroupContent>
					{/if}
				</Sidebar.Group>
			{/if}

			<!-- Chronological Groups -->
			{#each [{ label: $_('nav.today'), items: groups.today }, { label: $_('nav.yesterday'), items: groups.yesterday }, { label: $_('nav.lastWeek'), items: groups.lastWeek }, { label: $_('nav.older'), items: groups.older }] as group}
				{#if group.items.length > 0}
					<Sidebar.Group>
						<Sidebar.GroupLabel class="px-2 text-xs font-medium text-muted-foreground/70">
							{group.label}
						</Sidebar.GroupLabel>
						<Sidebar.GroupContent>
							<Sidebar.Menu>
								{#each group.items as chat (chat.id)}
									<Sidebar.MenuItem>
										<Sidebar.MenuButton
											isActive={chat.id === currentChatId}
											class="group/item relative"
											id={'chat-' + chat.id}
										>
											{#snippet child({ props })}
												<a href={`/chat/${chat.id}`} {...props}>
													<span class="truncate">{chat.title || $_('nav.newChat')}</span>
													<div class="ml-auto flex gap-1 opacity-0 group-hover/item:opacity-100">
														<button
															class="rounded-md p-1 text-center text-muted-foreground hover:bg-muted hover:text-foreground"
															onclick={(e) => handleTogglePin(e, chat.id)}
															title={$_('nav.pin')}
														>
															<PinIcon class="size-3" />
														</button>
														<button
															class="rounded-md p-1 text-center text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
															onclick={(e) => handleDeleteChat(e, chat.id)}
															title={$_('common.delete')}
														>
															<TrashIcon class="size-3" />
														</button>
													</div>
												</a>
											{/snippet}
										</Sidebar.MenuButton>
									</Sidebar.MenuItem>
								{/each}
							</Sidebar.Menu>
						</Sidebar.GroupContent>
					</Sidebar.Group>
				{/if}
			{/each}
		{/if}
	</Sidebar.Content>
	<Sidebar.Footer class="border-t border-sidebar-border p-4">
		{#if user}
			{#if userState.usage}
				<Button
					variant="ghost"
					class="h-auto w-full justify-start gap-3 px-2 py-2"
					href="/settings/subscription"
				>
					<Avatar.Root class="size-8 ring-1 ring-border">
						<Avatar.Image src={user.image} alt={user.name} />
						<Avatar.Fallback>{user.name?.charAt(0).toUpperCase() || 'U'}</Avatar.Fallback>
					</Avatar.Root>

					<div class="flex min-w-0 flex-col items-start text-sm">
						<span class="truncate font-medium text-foreground">{user.name}</span>
						<span class="truncate text-xs text-muted-foreground">
							{userState.tier === 'pro'
								? $_('nav.paidSubscription')
								: $_('nav.freeSubscription')}
						</span>
					</div>
				</Button>
			{:else}
				<div class="flex w-full justify-start gap-3 px-2 py-2">
					<Skeleton class="aspect-square size-8 rounded-full bg-emerald-200!" />
					<div class="my-auto flex w-full flex-col items-start gap-y-2">
						<Skeleton class="h-2 w-full bg-emerald-200!" />
						<Skeleton class="h-2 w-1/2 bg-emerald-200!" />
					</div>
				</div>
			{/if}
		{:else}
			<Button variant="outline" class="w-full gap-2" href="/auth/login">
				<LogIn class="size-4" />
				<span>{$_('common.login')}</span>
			</Button>
		{/if}
	</Sidebar.Footer>
</Sidebar.Root>
