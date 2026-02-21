<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import { env } from '$env/dynamic/public';
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/ui/button/button.svelte';
	import { CheckCircle, XCircle, Loader2, Copy, Clock } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';
	import { toast } from 'svelte-sonner';
	import QRCode from 'qrcode';

	interface PaymentIntent {
		id: string;
		payment_code: string;
		amount_syp: number;
		expires_at: string;
		instructions: string;
		status?: string;
	}

	let paymentIntent: PaymentIntent | null = $state(null);
	let status: 'loading' | 'active' | 'completed' | 'expired' | 'error' = $state('loading');
	let qrCodeDataUrl: string = $state('');
	let pollInterval: ReturnType<typeof setInterval> | null = null;
	let errorMessage: string = $state('');

	// Format ShamCash address with payment code
	$effect(() => {
		if (paymentIntent) {
			const shamcashAddress = `a69459250969583a20a68b82970ec080`;
			generateQRCode(shamcashAddress);
		}
	});

	async function generateQRCode(text: string) {
		try {
			const dataUrl = await QRCode.toDataURL(text, {
				width: 300,
				margin: 2,
				color: {
					dark: '#000000',
					light: '#ffffff'
				}
			});
			qrCodeDataUrl = dataUrl;
		} catch (err) {
			console.error('Failed to generate QR code:', err);
		}
	}

	async function initiatePayment() {
		try {
			const response = await fetch(`${env.PUBLIC_API_BASE}/api/payments/subscribe`, {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (!response.ok) {
				throw new Error('Failed to initiate payment');
			}

			const data = await response.json();
			paymentIntent = data;
			status = 'active';

			// Start polling for payment status
			startPolling();
		} catch (err) {
			console.error('Payment initiation error:', err);
			status = 'error';
			errorMessage = err instanceof Error ? err.message : 'Failed to initiate payment';
		}
	}

	async function checkPaymentStatus() {
		if (!paymentIntent) return;

		try {
			const response = await fetch(`${env.PUBLIC_API_BASE}/api/payments/${paymentIntent.id}`, {
				credentials: 'include'
			});

			if (!response.ok) {
				throw new Error('Failed to check payment status');
			}

			const data = await response.json();

			if (data.status === 'completed') {
				status = 'completed';
				stopPolling();
				toast.success($_('payment.paymentCompleted'));

				// Redirect to subscription page after 2 seconds
				setTimeout(() => {
					goto('/settings/subscription');
				}, 2000);
			} else if (data.status === 'expired') {
				status = 'expired';
				stopPolling();
			}
		} catch (err) {
			console.error('Status check error:', err);
		}
	}

	function startPolling() {
		// Poll every 5 seconds
		pollInterval = setInterval(checkPaymentStatus, 5000);
	}

	function stopPolling() {
		if (pollInterval) {
			clearInterval(pollInterval);
			pollInterval = null;
		}
	}

	async function copyToClipboard(text: string) {
		try {
			await navigator.clipboard.writeText(text);
			toast.success($_('payment.copiedToClipboard'));
		} catch (err) {
			console.error('Failed to copy:', err);
			toast.error($_('payment.copyFailed'));
		}
	}

	function formatExpiryTime(expiresAt: string): string {
		const now = new Date();
		const expiry = new Date(expiresAt);
		const diff = expiry.getTime() - now.getTime();
		const minutes = Math.floor(diff / 60000);

		if (minutes <= 0) return '0 minutes';
		return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
	}

	onMount(() => {
		initiatePayment();
	});

	onDestroy(() => {
		stopPolling();
	});
</script>

<main class="mx-auto max-w-2xl space-y-6 py-8">
	{#if status === 'loading'}
		<Card.Root>
			<Card.Content class="flex flex-col items-center justify-center py-12">
				<Loader2 class="h-12 w-12 animate-spin text-primary" />
				<p class="mt-4 text-muted-foreground">{$_('payment.initiatingPayment')}</p>
			</Card.Content>
		</Card.Root>
	{:else if status === 'error'}
		<Card.Root>
			<Card.Content class="flex flex-col items-center justify-center py-12">
				<XCircle class="h-12 w-12 text-destructive" />
				<h3 class="mt-4 text-xl font-semibold">{$_('payment.paymentError')}</h3>
				<p class="mt-2 text-center text-muted-foreground">{errorMessage}</p>
				<Button onclick={() => goto('/settings/subscription')} class="mt-6">
					{$_('common.back')}
				</Button>
			</Card.Content>
		</Card.Root>
	{:else if status === 'completed'}
		<Card.Root>
			<Card.Content class="flex flex-col items-center justify-center py-12">
				<CheckCircle class="h-16 w-16 text-green-500" />
				<h3 class="mt-4 text-2xl font-bold">{$_('payment.paymentCompleted')}</h3>
				<p class="mt-2 text-center text-muted-foreground">
					{$_('payment.upgradedToProSuccessfully')}
				</p>
				<p class="mt-2 text-sm text-muted-foreground">{$_('payment.redirecting')}</p>
			</Card.Content>
		</Card.Root>
	{:else if status === 'expired'}
		<Card.Root>
			<Card.Content class="flex flex-col items-center justify-center py-12">
				<Clock class="h-12 w-12 text-amber-500" />
				<h3 class="mt-4 text-xl font-semibold">{$_('payment.paymentExpired')}</h3>
				<p class="mt-2 text-center text-muted-foreground">{$_('payment.paymentExpiredDesc')}</p>
				<Button onclick={() => goto('/settings/subscription')} class="mt-6">
					{$_('common.back')}
				</Button>
			</Card.Content>
		</Card.Root>
	{:else if status === 'active' && paymentIntent}
		<div class="space-y-6">
			<!-- Payment Header -->
			<div class="text-center">
				<h2 class="text-2xl font-bold">{$_('payment.completeYourPayment')}</h2>
				<p class="mt-2 text-muted-foreground">
					{$_('payment.sendExactAmount', {
						values: { amount: paymentIntent.amount_syp }
					})}
				</p>
			</div>

			<!-- QR Code Card -->
			<Card.Root>
				<Card.Header>
					<Card.Title class="text-center">{$_('payment.scanQRCode')}</Card.Title>
				</Card.Header>
				<Card.Content class="flex flex-col items-center space-y-4">
					{#if qrCodeDataUrl}
						<div class="rounded-lg border-4 border-border bg-white p-4">
							<img src={qrCodeDataUrl} alt="Payment QR Code" class="h-64 w-64" />
						</div>
					{/if}

					<div class="w-full space-y-3">
						<!-- Payment Code -->
						<div class="rounded-lg bg-muted p-4">
							<p class="mb-2 text-sm font-medium text-muted-foreground">
								{$_('payment.paymentCode')}
							</p>
							<div class="flex items-center justify-between">
								<code class="text-2xl font-bold tracking-wider">
									{paymentIntent.payment_code}
								</code>
								<Button
									size="sm"
									variant="outline"
									onclick={() => paymentIntent && copyToClipboard(paymentIntent.payment_code)}
								>
									<Copy class="h-4 w-4" />
								</Button>
							</div>
						</div>

						<!-- Amount -->
						<div class="rounded-lg bg-muted p-4">
							<p class="mb-2 text-sm font-medium text-muted-foreground">{$_('payment.amount')}</p>
							<p class="text-2xl font-bold">
								{(paymentIntent.amount_syp / 100).toFixed(0)} SYP
							</p>
						</div>
					</div>
				</Card.Content>
			</Card.Root>

			<!-- Instructions Card -->
			<Card.Root>
				<Card.Header>
					<Card.Title>{$_('payment.instructions')}</Card.Title>
				</Card.Header>
				<Card.Content class="space-y-4">
					<ol class="list-decimal space-y-2 pl-5 text-sm">
						<li>{$_('payment.instructionStep1')}</li>
						<li>{$_('payment.instructionStep2')}</li>
						<li>
							{$_('payment.instructionStep3', {
								values: { code: paymentIntent.payment_code }
							})}
						</li>
						<li>{$_('payment.instructionStep4')}</li>
					</ol>

					<div class="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/20">
						<p class="text-sm text-amber-800 dark:text-amber-200">
							<Clock class="mr-2 mb-1 inline h-4 w-4" />
							{$_('payment.expiresIn', {
								values: { time: formatExpiryTime(paymentIntent.expires_at) }
							})}
						</p>
					</div>
				</Card.Content>
			</Card.Root>

			<!-- Checking Status Indicator -->
			<div class="flex items-center justify-center gap-2 text-sm text-muted-foreground">
				<Loader2 class="h-4 w-4 animate-spin" />
				<span>{$_('payment.checkingPaymentStatus')}</span>
			</div>

			<!-- Cancel Button -->
			<div class="flex justify-center">
				<Button variant="outline" onclick={() => goto('/settings/subscription')}>
					{$_('common.cancel')}
				</Button>
			</div>
		</div>
	{/if}
</main>
