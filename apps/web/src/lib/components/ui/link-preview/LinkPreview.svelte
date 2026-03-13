<script lang="ts">
	import { API_BASE } from '$lib/constants';

	let { url }: { url: string } = $props();

	type Preview = {
		title: string | null;
		description: string | null;
		image: string | null;
		siteName: string | null;
	};

	let preview = $state<Preview | null>(null);
	let failed = $state(false);

	// Private / reserved IP ranges that must never be reachable via SSRF.
	// Covers: loopback, RFC-1918 private, link-local (incl. AWS metadata 169.254.169.254),
	// IPv6 loopback/link-local/unique-local, and the "unspecified" address.
	const PRIVATE_IP_RE =
	/^(127\.|10\.|172\.(1[6-9]|2[0-9]|3[01])\.|192\.168\.|169\.254\.|0\.0\.0\.0$|::1$|fc00:|fd[0-9a-f]{2}:|fe80:)/i;

	const BLOCKED_HOSTNAMES = new Set([
	"localhost",
	"0.0.0.0",
	"metadata.google.internal",
	"metadata.internal",
	]);

	$effect(() => {
		failed = false;
		preview = null;
		if (BLOCKED_HOSTNAMES.has(url.toLowerCase())) return;
		// If the hostname itself looks like a private IP, block immediately
		if (PRIVATE_IP_RE.test(url)) return;

		fetch(`${API_BASE}/api/unfurl?url=${encodeURIComponent(url)}`, { credentials: 'include' })
			.then((r) => r.json())
			.then((data) => {
				if (data.error) {
					failed = true;
					return;
				}
				preview = data;
			})
			.catch(() => {
				failed = true;
			});
	});
</script>

{#if preview && !failed}
	<a
		href={url}
		target="_blank"
		rel="noopener noreferrer"
		class="not-prose mt-2 flex overflow-hidden rounded-lg border border-border bg-muted/40 transition-colors hover:bg-muted/70 no-underline"
	>
		{#if preview.image}
			<img
				src={preview.image}
				alt={preview.title ?? ''}
				class="h-24 w-32 shrink-0 object-cover"
				onerror={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
			/>
		{/if}
		<div class="flex min-w-0 flex-col justify-center gap-0.5 px-3 py-2">
			{#if preview.siteName}
				<span class="truncate text-xs text-muted-foreground">{preview.siteName}</span>
			{/if}
			{#if preview.title}
				<p class="truncate text-sm font-medium text-foreground">{preview.title}</p>
			{/if}
			{#if preview.description}
				<p class="line-clamp-2 text-xs text-muted-foreground">{preview.description}</p>
			{/if}
		</div>
	</a>
{/if}
