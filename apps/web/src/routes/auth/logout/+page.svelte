<script lang="ts">
	import { onMount } from 'svelte';
	import { authClient } from '$lib/auth';
	import { goto } from '$app/navigation';

	onMount(async () => {
		await authClient.signOut();
		goto('/chat');
	});
</script>

<div class="flex h-screen items-center justify-center">
	<p class="text-muted-foreground">Signing out…</p>
</div>
