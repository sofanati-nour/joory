<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Field from '$lib/components/ui/field/index.js';
	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import * as Select from '$lib/components/ui/select';
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		Mail as MailIcon,
		MessageSquare as MessageSquareIcon,
		Send as SendIcon
	} from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import { _ } from 'svelte-i18n';

	let subject = $state('');
	let message = $state('');
	let category = $state('support');
	let isSubmitting = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!message.trim() || !subject.trim()) return;

		isSubmitting = true;
		// Mock API call
		await new Promise(resolve => setTimeout(resolve, 1500));

		toast.success($_('contact.sentSuccess'));
		subject = '';
		message = '';
		isSubmitting = false;
	}

	let categoryLabel = $derived(
		category === 'support' ? $_('contact.support') :
		category === 'feedback' ? $_('contact.feedback') :
		category === 'billing' ? $_('contact.billing') :
		$_('contact.other')
	);
</script>

<div class="flex flex-col gap-6 max-w-2xl">
	<div>
		<h2 class="text-2xl font-bold tracking-tight">{$_('contact.title')}</h2>
		<p class="text-muted-foreground">{$_('contact.description')}</p>
	</div>

	<div class="grid gap-4 md:grid-cols-2">
		<Card.Root class="bg-primary/5 border-primary/20">
			<Card.Content class="p-6 flex flex-col items-center text-center gap-2">
				<MailIcon class="size-8 text-primary mb-2" />
				<h3 class="font-semibold">{$_('contact.email')}</h3>
				<p class="text-sm text-muted-foreground">support@joory.chat</p>
			</Card.Content>
		</Card.Root>
		<Card.Root class="bg-blue-500/5 border-blue-500/20">
			<Card.Content class="p-6 flex flex-col items-center text-center gap-2">
				<MessageSquareIcon class="size-8 text-blue-600 mb-2" />
				<h3 class="font-semibold">{$_('contact.discord')}</h3>
				<p class="text-sm text-muted-foreground">{$_('contact.joinCommunity')}</p>
			</Card.Content>
		</Card.Root>
	</div>

	<Card.Root>
		<Card.Content class="p-6">
			<form onsubmit={handleSubmit} class="space-y-6">
				<Field.Field>
					<Field.Label>{$_('contact.messageType')}</Field.Label>
					<Select.Root type="single" bind:value={category}>
						<Select.Trigger class="w-full text-right dir-rtl">
							{categoryLabel}
						</Select.Trigger>
						<Select.Content dir="rtl">
							<Select.Item value="support">{$_('contact.support')}</Select.Item>
							<Select.Item value="feedback">{$_('contact.feedback')}</Select.Item>
							<Select.Item value="billing">{$_('contact.billing')}</Select.Item>
							<Select.Item value="other">{$_('contact.other')}</Select.Item>
						</Select.Content>
					</Select.Root>
				</Field.Field>

				<Field.Field>
					<Field.Label>{$_('contact.subject')}</Field.Label>
					<InputGroup.Root>
						<InputGroup.Input bind:value={subject} placeholder={$_('contact.subjectPlaceholder')} required />
					</InputGroup.Root>
				</Field.Field>

				<Field.Field>
					<Field.Label>{$_('contact.message')}</Field.Label>
					<InputGroup.Root>
						<InputGroup.Textarea
							bind:value={message}
							placeholder={$_('contact.messagePlaceholder')}
							class="min-h-[150px]"
							required
						/>
					</InputGroup.Root>
				</Field.Field>

				<div class="flex justify-end">
					<Button type="submit" disabled={isSubmitting} class="gap-2">
						{#if isSubmitting}
							{$_('common.sending')}
						{:else}
							{$_('common.send')} <SendIcon class="size-4" />
						{/if}
					</Button>
				</div>
			</form>
		</Card.Content>
	</Card.Root>
</div>