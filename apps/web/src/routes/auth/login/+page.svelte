<script lang="ts">
	import { authClient } from '$lib/auth';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as InputGroup from '$lib/components/ui/input-group/index.js';

	let mode = $state<'login' | 'signup'>('login');
	let email = $state('');
	let password = $state('');
	let name = $state('');
	let error = $state<string | null>(null);
	let isLoading = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isLoading = true;
		error = null;

		if (mode === 'login') {
			const { error: authError } = await authClient.signIn.email({ email, password });
			if (authError) {
				error = authError.message ?? 'Sign in failed';
				isLoading = false;
			} else {
				goto('/chat');
			}
		} else {
			const { error: authError } = await authClient.signUp.email({ email, password, name });
			if (authError) {
				error = authError.message ?? 'Sign up failed';
				isLoading = false;
			} else {
				goto('/chat');
			}
		}
	}

	async function handleGoogleSignIn() {
		await authClient.signIn.social({ provider: 'google', callbackURL: '/chat' });
	}
</script>

<div class="flex min-h-screen items-center justify-center bg-background p-4">
	<Card.Root class="w-full max-w-sm">
		<Card.Header class="text-center">
			<Card.Title class="text-2xl">
				{mode === 'login' ? 'Sign In' : 'Create Account'}
			</Card.Title>
			<Card.Description>
				{mode === 'login' ? 'Sign in to your Joory account' : 'Create a new Joory account'}
			</Card.Description>
		</Card.Header>

		<Card.Content class="space-y-4">
			{#if error}
				<div
					class="rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-2 text-sm text-destructive"
					role="alert"
				>
					{error}
				</div>
			{/if}

			<form onsubmit={handleSubmit} class="space-y-3">
				{#if mode === 'signup'}
					<InputGroup.Root>
						<InputGroup.Input
							type="text"
							placeholder="Your name"
							bind:value={name}
							autocomplete="name"
							required
						/>
					</InputGroup.Root>
				{/if}

				<InputGroup.Root>
					<InputGroup.Input
						type="email"
						placeholder="Email"
						bind:value={email}
						autocomplete="email"
						required
					/>
				</InputGroup.Root>

				<InputGroup.Root>
					<InputGroup.Input
						type="password"
						placeholder="Password"
						bind:value={password}
						autocomplete={mode === 'login' ? 'current-password' : 'new-password'}
						required
					/>
				</InputGroup.Root>

				<Button type="submit" class="w-full" disabled={isLoading}>
					{#if isLoading}
						{mode === 'login' ? 'Signing in…' : 'Creating account…'}
					{:else}
						{mode === 'login' ? 'Sign In' : 'Sign Up'}
					{/if}
				</Button>
			</form>

			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<span class="w-full border-t"></span>
				</div>
				<div class="relative flex justify-center text-xs uppercase">
					<span class="bg-card px-2 text-muted-foreground">or</span>
				</div>
			</div>

			<Button variant="outline" class="w-full" onclick={handleGoogleSignIn}>
				Continue with Google
			</Button>

			<p class="text-center text-sm text-muted-foreground">
				{mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
				<button
					type="button"
					class="text-primary underline-offset-4 hover:underline"
					onclick={() => {
						mode = mode === 'login' ? 'signup' : 'login';
						error = null;
					}}
				>
					{mode === 'login' ? 'Sign up' : 'Sign in'}
				</button>
			</p>
		</Card.Content>
	</Card.Root>
</div>
