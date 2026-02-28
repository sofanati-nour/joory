<script lang="ts">
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';

	let { domains }: { domains: string[] } = $props();
</script>

<span class="favicon-group ml-1.5 inline-flex items-center -space-x-1 align-middle">
	{#each domains as domain (domain)}
		<Avatar class="size-4 ring-1 ring-background" title={domain}>
			<AvatarImage
				src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url={domain}&size=16"
				alt={domain}
			/>
			<AvatarFallback class="rounded-sm text-[6px]">
				{domain[0]?.toUpperCase() ?? '?'}
			</AvatarFallback>
		</Avatar>
	{/each}
</span>
