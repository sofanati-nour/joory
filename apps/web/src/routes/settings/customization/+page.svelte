<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import * as Field from '$lib/components/ui/field/index.js';
	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { userState } from '$lib/stores/user.svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import { _ } from 'svelte-i18n';
	import LanguageSwitcher from '$lib/components/language-switcher.svelte';

	let trait = $state('');
	let isSaving = $state(false);

	onMount(() => {
		userState.fetchProfile();
	});

	function addTrait() {
		if (trait.trim().length === 0) {
			return;
		}
		if (userState.profile.traits.length >= 50) {
			return;
		}
		userState.profile.traits = [...userState.profile.traits, trait];
		trait = '';
	}

	function removeTrait(t: string) {
		userState.profile.traits = userState.profile.traits.filter(x => x !== t);
	}

	function handleAddTrait(e: KeyboardEvent) {
		if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission
			addTrait();
		}
	}

	async function save() {
		isSaving = true;
		try {
			await userState.updateProfile(userState.profile);
			toast.success($_('customization.savedSuccess'));
		} catch (e) {
			toast.error($_('customization.savedError'));
		} finally {
			isSaving = false;
		}
	}
</script>

<main class="flex flex-col gap-12">
	<!-- Language Selection -->
	<Field.Set>
		<Field.Legend
			class="mb-3 text-2xl! font-bold data-[variant=label]:text-sm data-[variant=legend]:text-base"
		>{$_('settings.language')}</Field.Legend>
		<Field.Group>
			<Field.Field>
				<LanguageSwitcher variant="dropdown" />
			</Field.Field>
		</Field.Group>
	</Field.Set>

	<form onsubmit={(e) => { e.preventDefault(); save(); }}>
		<Field.Set>
			<Field.Legend
				class="mb-3 text-2xl! font-bold data-[variant=label]:text-sm data-[variant=legend]:text-base"
				>{$_('customization.title')}</Field.Legend
			>
			<Field.Group>
				<Field.Field>
					<Field.Label for="name">{$_('customization.nameLabel')}</Field.Label>
					<InputGroup.Root>
						<InputGroup.Input
							id="name"
							autocomplete="off"
							placeholder={$_('customization.namePlaceholder')}
							maxlength={100}
							bind:value={userState.profile.name}
						/>
						<InputGroup.Addon align="inline-end">{userState.profile.name.length}/100</InputGroup.Addon>
					</InputGroup.Root>
				</Field.Field>
				<Field.Field>
					<Field.Label for="occupation">{$_('customization.occupationLabel')}</Field.Label>
					<InputGroup.Root>
						<InputGroup.Input
							id="occupation"
							autocomplete="off"
							placeholder={$_('customization.occupationPlaceholder')}
							maxlength={100}
							bind:value={userState.profile.occupation}
						/>
						<InputGroup.Addon align="inline-end"
							>{userState.profile.occupation.length}/100</InputGroup.Addon
						>
					</InputGroup.Root>
				</Field.Field>
				<Field.Field>
					<div class="flex items-center justify-between mb-2">
						<Field.Label for="traits">{$_('customization.traitsLabel')}</Field.Label>
						<span class="text-xs text-muted-foreground">{userState.profile.traits.length}/50 {$_('customization.traits')}</span>
					</div>
					<div class="flex gap-2 flex-wrap">
						{#each userState.profile.traits as t}
							<button type="button" onclick={() => removeTrait(t)}>
								<Badge variant="secondary" class="hover:bg-destructive hover:text-destructive-foreground cursor-pointer transition-colors">
									{t} &times;
								</Badge>
							</button>
						{/each}
					</div>
					<InputGroup.Root>
						<InputGroup.Input
							id="traits"
							autocomplete="off"
							placeholder={$_('customization.traitsPlaceholder')}
							maxlength={100}
							bind:value={trait}
							onkeydown={handleAddTrait}
							disabled={userState.profile.traits.length >= 50}
						/>
						<InputGroup.Addon align="inline-end">{trait.length}/100</InputGroup.Addon>
					</InputGroup.Root>
				</Field.Field>
				<Field.Field>
					<Field.Label for="other">{$_('customization.otherLabel')}</Field.Label>
					<InputGroup.Root>
						<InputGroup.Textarea
							id="other"
							autocomplete="off"
							placeholder={$_('customization.otherPlaceholder')}
							maxlength={3000}
							bind:value={userState.profile.other}
						/>
						<InputGroup.Addon align="block-end" dir="ltr"
							>{userState.profile.other.length}/3000</InputGroup.Addon
						>
					</InputGroup.Root>
				</Field.Field>

				<div class="flex justify-end pt-4">
					<Button type="submit" disabled={isSaving}>
						{#if isSaving}
							{$_('common.saving')}
						{:else}
							{$_('customization.saveChanges')}
						{/if}
					</Button>
				</div>
			</Field.Group>
		</Field.Set>
	</form>
</main>
