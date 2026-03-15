<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { messages, loadChat, clearMessages, chatId, isGenerating } from '$lib/stores/chat';
	import { inputState } from '$lib/stores/input.svelte';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import ChatInput from './ChatInput.svelte';
	import UserMessage from './UserMessage.svelte';
	import AssistantMessage from './AssistantMessage.svelte';
	import type { PageProps } from './$types';

	let { params }: PageProps = $props();
	let isGuest = $derived(!$page.data?.user);
	let chatContainer: HTMLElement;
	let isAlertVisible = $state(false);
	let shouldSmoothScroll = $state(false);
	let chatUUID = $state('');

	// Redirect guests trying to access saved chats
	$effect(() => {
		if (isGuest && params.id) {
			goto('/chat', { replaceState: true });
		}
	});

	// Enable smooth scrolling after initial mount
	onMount(() => {
		setTimeout(() => {
			shouldSmoothScroll = true;
		}, 150);
	});

	// Handle route changes (including initial load)
	$effect(() => {
		if (params.id && params.id !== chatUUID) {
			// Don't interrupt if we're currently generating a response
			// (this happens when navigating from new chat to its assigned ID)
			if ($isGenerating) {
				chatUUID = params.id;
				return;
			}
			shouldSmoothScroll = false;
			clearMessages();
			loadChat(params.id);
			chatUUID = params.id;
			setTimeout(() => {
				shouldSmoothScroll = true;
			}, 150);
		} else if (!params.id && chatUUID) {
			// Switching back to new chat
			shouldSmoothScroll = false;
			clearMessages();
			chatId.set('');
			inputState.reset();
			chatUUID = '';
			setTimeout(() => {
				shouldSmoothScroll = true;
			}, 150);
		}
	});

	// Scroll to bottom whenever messages update
	$effect(() => {
		if ($messages) {
			scrollToBottom();
		}
	});

	async function scrollToBottom() {
		await tick();
		if (chatContainer) {
			chatContainer.scrollTo({
				top: chatContainer.scrollHeight,
				behavior: shouldSmoothScroll ? 'smooth' : 'instant'
			});
		}
	}
</script>

<main
	class="firefox-scrollbar-margin-fix min-h-pwa relative flex w-full flex-1 flex-col overflow-hidden transition-[width,height] print:absolute print:top-0 print:left-0 print:h-auto print:min-h-auto print:overflow-visible"
>
	<!-- Welcome Illustration (only for new chats) -->
	<div class="pointer-events-none absolute right-0 bottom-0 left-0 select-none">
		{#if !params.id && inputState.text.trim() === '' && $messages.length === 0}
			<img
				src="/stamps-nobg.avif"
				alt="Stamps"
				class="min-h-[300px] object-cover"
				in:fly={{ y: 100, duration: 100 }}
				out:fly={{ y: 50, duration: 300 }}
			/>
		{/if}
	</div>

	<!-- Chat Container -->
	<div
		id="chat-scroll-container"
		class="no-scrollbar absolute inset-0 overflow-y-scroll pt-8 sm:pt-3.5 print:visible print:static print:inset-auto print:block print:h-auto print:scroll-pb-0! print:overflow-visible print:pt-2 print:pb-0!"
		style="padding-bottom: {isAlertVisible
			? '240px'
			: '144px'}; scrollbar-gutter: stable both-edges; scroll-padding-bottom: {isAlertVisible
			? '208px'
			: '112px'}; transition: padding-bottom 0.3s ease-in-out;"
		bind:this={chatContainer}
		role="log"
		aria-live="polite"
		aria-label="Chat history"
	>
		<div style="view-transition-name: chat-messages;">
			<div
				class="relative mx-auto flex w-full max-w-3xl flex-col space-y-12 px-4 pt-safe-offset-10 pb-10 print:space-y-0 print:pt-0"
			>
				{#each $messages as msg, i}
					{#if msg.role === 'user'}
						<UserMessage {msg} />
					{/if}
					{#if msg.role === 'assistant'}
						<AssistantMessage {msg} isLast={$isGenerating && i === $messages.length - 1} />
					{/if}
				{/each}
			</div>
		</div>
	</div>

	<!-- Chat Input -->
	<ChatInput bind:isAlertVisible isFloating={!params.id} />
</main>
