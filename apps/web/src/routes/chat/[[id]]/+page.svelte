<script lang="ts">
	import { tick } from 'svelte';
	import { messages, loadChat, clearMessages, chatId, isGenerating } from '$lib/stores/chat';
	import { inputState } from '$lib/stores/input.svelte';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { ArrowDown } from '@lucide/svelte';
	import ChatInput from './ChatInput.svelte';
	import UserMessage from './UserMessage.svelte';
	import AssistantMessage from './AssistantMessage.svelte';
	import type { PageProps } from './$types';

	let { params }: PageProps = $props();
	let isGuest = $derived(!$page.data?.user);
	let chatContainer: HTMLElement;
	let isAlertVisible = $state(false);
	let chatUUID = $state('');

	// --- Auto-scroll ---
	// Mirrors Open WebUI's approach: autoScroll is toggled purely by onscroll.
	// No rAF loop, no wheel/touch detection — just check position on every scroll event.
	let autoScroll = $state(true);
	let scrollRaf: number | null = null;

	function handleScroll() {
		if (!chatContainer) return;
		const distFromBottom = chatContainer.scrollHeight - chatContainer.scrollTop - chatContainer.clientHeight;
		autoScroll = distFromBottom < 50;
	}

	// Deduplicate rapid scroll calls (multiple chunks per frame) into one rAF.
	function scheduleScrollToBottom() {
		if (scrollRaf !== null) return;
		scrollRaf = requestAnimationFrame(() => {
			scrollRaf = null;
			if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
		});
	}

	async function scrollToBottom(behavior: ScrollBehavior = 'instant') {
		await tick();
		if (chatContainer) {
			chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior });
		}
	}

	function jumpToBottom() {
		autoScroll = true;
		scrollToBottom('smooth');
	}

	// Redirect guests trying to access saved chats
	$effect(() => {
		if (isGuest && params.id) {
			goto('/chat', { replaceState: true });
		}
	});

	// Handle route changes (including initial load)
	$effect(() => {
		if (params.id && params.id !== chatUUID) {
			if ($isGenerating) { chatUUID = params.id; return; }
			autoScroll = true;
			clearMessages();
			loadChat(params.id);
			chatUUID = params.id;
			setTimeout(() => scrollToBottom(), 0);
		} else if (!params.id && chatUUID) {
			autoScroll = true;
			clearMessages();
			chatId.set('');
			inputState.reset();
			chatUUID = '';
		}
	});

	// Scroll on each message update
	$effect(() => {
		if ($messages && autoScroll) {
			scheduleScrollToBottom();
		}
	});

	// Re-engage auto-scroll when user sends a new message
	$effect(() => {
		if ($isGenerating) {
			autoScroll = true;
		}
	});
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
		onscroll={handleScroll}
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

	<!-- Scroll to bottom button -->
	{#if !autoScroll && $messages.length > 0}
		<button
			onclick={jumpToBottom}
			class="absolute bottom-36 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
			aria-label="Scroll to bottom"
			transition:fly={{ y: 10, duration: 200 }}
		>
			<ArrowDown class="h-4 w-4 text-slate-600 dark:text-slate-300" />
		</button>
	{/if}

	<!-- Chat Input -->
	<ChatInput bind:isAlertVisible isFloating={!params.id} />
</main>
