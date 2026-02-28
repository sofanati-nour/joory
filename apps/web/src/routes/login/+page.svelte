<script lang="ts">
    import { goto } from '$app/navigation';
	import Card from '$lib/components/ui/card/card.svelte';

    let token = '';

    const handleLogin = () => {
        if (token) {
            localStorage.setItem('chat_token', token);
            goto('/');
        }
    };
</script>
