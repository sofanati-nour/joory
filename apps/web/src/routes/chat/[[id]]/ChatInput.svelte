<script lang="ts">
	import { sendMessage, isGenerating, chatId } from '$lib/stores/chat';
	import { userState } from '$lib/stores/user.svelte';
	import { inputState } from '$lib/stores/input.svelte';
	import allowedModels from '$lib/allowed';
	import { fileToBase64 } from '$lib/utils';
	import { _ } from 'svelte-i18n';
	import { cubicOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';

	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import LowCreditsAlert from './LowCreditsAlert.svelte';
	import FilePreview from './FilePreview.svelte';
	import InputActions from './InputActions.svelte';

	// Props
	let { isAlertVisible = $bindable(false), isFloating = $bindable(false) } = $props();

	// Refs
	let fileInput: HTMLInputElement;
	let textareaElement: HTMLTextAreaElement | null = $state(null);

	// Local state
	let isProcessingFiles = $state(false);
	let fileError = $state<string | null>(null);

	// Constants
	const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
	const ALLOWED_FILE_TYPES = ['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'application/pdf'];

	// Animation
	let floatingProgress = new Tween(isFloating ? 1 : 0, { duration: 300, easing: cubicOut });
	$effect(() => {
		floatingProgress.set(isFloating ? 1 : 0);
	});

	let translateY = $derived(
		`calc(${floatingProgress.current * -50}vh + ${floatingProgress.current * 50}%)`
	);

	// User subscription logic
	let isPremium = $derived(userState.subscription?.subscription === 'paid');
	let currentTier = $derived(
		allowedModels.find((m) => m.id === inputState.model)?.tier || 'standard'
	);
	let remainingCredits = $derived.by(() => {
		if (!userState.subscription) return 100;
		return currentTier === 'premium'
			? userState.subscription.premium
			: userState.subscription.standard;
	});

	$effect(() => {
		isAlertVisible = remainingCredits < 10;
	});

	// Input state
	let hasContent = $derived(inputState.text.trim() !== '' || inputState.attachedFiles.length > 0);
	let formBorderRadius = $derived(isFloating ? '1rem' : '1rem 1rem 0 0');
	let formBoxShadow = $derived(
		`0 -4px 20px -4px ${isFloating ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.1)'}`
	);
	let canSubmit = $derived(hasContent && !$isGenerating && !isProcessingFiles);

	// Handlers
	async function handleSubmit(event?: Event) {
		if (event) event.preventDefault();
		if (!canSubmit) return;

		// Store original state for rollback on error
		const originalText = inputState.text;
		const originalFiles = [...inputState.attachedFiles];
		const originalSubscription = userState.subscription ? { ...userState.subscription } : null;

		try {
			// Optimistic credit update
			if (userState.subscription) {
				if (currentTier === 'premium') {
					userState.subscription.premium = Math.max(0, userState.subscription.premium - 1);
				} else {
					userState.subscription.standard = Math.max(0, userState.subscription.standard - 1);
				}
			}

			// Prepare files
			const filesToSend = inputState.attachedFiles.map((f) => ({
				name: f.file.name,
				type: f.file.type,
				data: f.base64
			}));

			// Parse model for reasoning mode
			let modelId = inputState.model;
			let reasoning = false;
			if (modelId.endsWith(':reasoning')) {
				modelId = modelId.replace(':reasoning', '');
				reasoning = true;
			}

			isFloating = false;

			// Clear input immediately for better UX
			inputState.text = '';
			inputState.attachedFiles = [];

			await sendMessage(originalText, modelId, $chatId, {
				webSearch: inputState.webSearchEnabled,
				reasoning,
				files: filesToSend
			});

			// Refresh subscription after successful send
			userState.fetchSubscription();
		} catch (error) {
			console.error('Failed to send message:', error);

			// Rollback on error
			inputState.text = originalText;
			inputState.attachedFiles = originalFiles;
			if (originalSubscription && userState.subscription) {
				userState.subscription = originalSubscription;
			}

			// TODO: Show user-friendly error toast
		}
	}

	async function handleFileChange(e: Event) {
		const target = e.target as HTMLInputElement;
		if (!target.files) return;

		isProcessingFiles = true;
		fileError = null;

		const files = Array.from(target.files);

		// Validate files first
		const validFiles = files.filter(file => {
			if (file.size > MAX_FILE_SIZE) {
				fileError = `${file.name} exceeds 10MB limit`;
				return false;
			}
			if (!ALLOWED_FILE_TYPES.includes(file.type)) {
				fileError = `${file.name} is not a supported file type`;
				return false;
			}
			return true;
		});

		// Process files in parallel
		try {
			const processedFiles = await Promise.all(
				validFiles.map(async (file) => {
					try {
						const base64 = await fileToBase64(file);
						return { file, base64 };
					} catch (err) {
						console.error('Failed to process file:', file.name, err);
						throw err;
					}
				})
			);

			inputState.attachedFiles.push(...processedFiles);
		} catch (err) {
			fileError = 'Failed to process some files';
		} finally {
			isProcessingFiles = false;
			target.value = '';
		}

		// Clear error after 5 seconds
		if (fileError) {
			setTimeout(() => { fileError = null; }, 5000);
		}
	}

	function removeFile(index: number) {
		inputState.attachedFiles = inputState.attachedFiles.filter((_, i) => i !== index);
	}

	function toggleWebSearch() {
		if (isPremium) inputState.webSearchEnabled = !inputState.webSearchEnabled;
	}

	function triggerFileInput() {
		if (isPremium) fileInput.click();
	}

	function handleEnter(event: KeyboardEvent) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			handleSubmit();
		}
	}
</script>

<div
	class="pointer-events-none absolute top-0 bottom-0 w-full print:static print:h-auto print:overflow-visible"
>
	<div
		class="pointer-events-none absolute bottom-0 z-10 w-full transform-gpu px-2 will-change-transform"
		style="transform: translateY({translateY});"
	>
		<div class="relative mx-auto flex w-full max-w-3xl flex-col text-center">
			<div class="pointer-events-auto">
				<!-- Low Credits Warning -->
				<LowCreditsAlert {remainingCredits} {currentTier} />

				<!-- File Error Alert -->
				{#if fileError}
					<div class="mb-2 rounded-lg border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
						{fileError}
					</div>
				{/if}

				<!-- File Processing Indicator -->
				{#if isProcessingFiles}
					<div class="mb-2 rounded-lg border border-primary/50 bg-primary/10 px-3 py-2 text-sm text-primary" role="status">
						Processing files...
					</div>
				{/if}

				<!-- Input Container -->
				<div
					class:rounded-b-[20px]={isFloating}
					class:pb-2={isFloating}
					class="border-reflect pointer-events-none min-w-0 overflow-visible rounded-t-[20px] bg-primary/40 p-2 pb-0 backdrop-blur-lg [--c:var(--chat-input-gradient)]!"
					style="border-radius: {isFloating ? '20px' : '20px 20px 0 0'};"
				>
					<!-- File Previews -->
					{#if inputState.attachedFiles.length > 0}
						<div
							class="pointer-events-auto flex flex-wrap gap-2 rounded-t-xl border border-b-0 border-border/40 bg-background/40 px-4 py-2 backdrop-blur-sm"
						>
							{#each inputState.attachedFiles as { file }, i}
								<FilePreview {file} onRemove={() => removeFile(i)} />
							{/each}
						</div>
					{/if}

					<!-- Form -->
					<form
						onsubmit={handleSubmit}
						class="pointer-events-auto relative flex w-full min-w-0 flex-col items-stretch gap-2 border border-b-0 border-border/40 bg-background/80 px-3 pt-3 pb-safe-offset-3 text-secondary-foreground backdrop-blur-xl max-sm:pb-6 sm:max-w-3xl"
						style="view-transition-name: chat-input; border-radius: {formBorderRadius}; box-shadow: {formBoxShadow};"
					>
						<!-- Textarea -->
						<InputGroup.Root class="border-0 bg-transparent shadow-none">
							<InputGroup.Textarea
								name="input"
								id="chat-input"
								bind:value={inputState.text}
								bind:this={textareaElement}
								placeholder={$_('chat.inputPlaceholder')}
								class="w-full min-w-0 resize-none bg-transparent py-2 text-base leading-6 text-foreground outline-none placeholder:text-muted-foreground/60 disabled:opacity-50"
								onkeydown={handleEnter}
								disabled={!canSubmit && $isGenerating}
								aria-busy={$isGenerating}
								style="max-height: 240px !important;"
							/>
						</InputGroup.Root>

						<div id="chat-input-description" class="sr-only">{$_('chat.inputHint')}</div>

						<!-- Hidden file input -->
						<input
							type="file"
							multiple
							accept="image/png,image/jpeg,image/gif,image/webp,application/pdf"
							class="hidden"
							bind:this={fileInput}
							onchange={handleFileChange}
							aria-label="Attach files (images or PDFs, max 10MB)"
						/>

						<!-- Actions -->
						<InputActions
							bind:model={inputState.model}
							{hasContent}
							isGenerating={$isGenerating}
							webSearchEnabled={inputState.webSearchEnabled}
							onToggleWebSearch={toggleWebSearch}
							onAttachFile={triggerFileInput}
						/>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
