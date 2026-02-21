<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<div
	bind:this={ref}
	data-slot="sidebar-header"
	data-sidebar="header"
	class={cn("flex flex-col gap-2 pt-safe! relative m-1 mb-0 space-y-1 p-0", className)}
	{...restProps}
>
	{@render children?.()}
</div>
