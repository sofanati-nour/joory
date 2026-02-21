<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Kbd from '$lib/components/ui/kbd';
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';

	let modKey = $state('⌘');

	onMount(() => {
		const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
		modKey = isMac ? '⌘' : 'Ctrl';
	});
</script>

<Card.Root class="w-full">
	<Card.Header>
		<Card.Title>{$_('shortcuts.title')}</Card.Title>
	</Card.Header>
	<Card.Content>
		<div class="grid gap-4">
			<div class="flex items-center justify-between">
				<span class="text-sm font-medium">{$_('shortcuts.search')}</span>
				<div class="flex gap-1">
					<Kbd.Group>
						<Kbd.Root>{modKey}</Kbd.Root>
						<Kbd.Root>K</Kbd.Root>
					</Kbd.Group>
				</div>
			</div>
			<div class="flex items-center justify-between">
				<span class="text-sm font-medium">{$_('shortcuts.newChat')}</span>
				<div class="flex gap-1">
					<Kbd.Group>
						<Kbd.Root>{modKey}</Kbd.Root>
						<Kbd.Root>Shift</Kbd.Root>
						<Kbd.Root>O</Kbd.Root>
					</Kbd.Group>
				</div>
			</div>
			<div class="flex items-center justify-between">
				<span class="text-sm font-medium">{$_('shortcuts.toggleSidebar')}</span>
				<div class="flex gap-1">
					<Kbd.Group>
						<Kbd.Root>{modKey}</Kbd.Root>
						<Kbd.Root>B</Kbd.Root>
					</Kbd.Group>
				</div>
			</div>
			<div class="flex items-center justify-between">
				<span class="text-sm font-medium">{$_('shortcuts.openModelMenu')}</span>
				<div class="flex gap-1">
					<Kbd.Group>
						<Kbd.Root>{modKey}</Kbd.Root>
						<Kbd.Root>&sol;</Kbd.Root>
					</Kbd.Group>
				</div>
			</div>
		</div>
	</Card.Content>
</Card.Root>

