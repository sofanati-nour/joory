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

	$effect(() => {
		failed = false;
		preview = null;
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
