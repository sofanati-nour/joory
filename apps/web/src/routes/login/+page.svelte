<script lang="ts">
    import { goto } from '$app/navigation';
	import Card from '$lib/components/ui/card/card.svelte';
    import { connect } from '$lib/stores/chat';

    let token = '';

    const handleLogin = () => {
        if (token) {
            localStorage.setItem('chat_token', token);
            connect(token);
            goto('/');
        }
    };
</script>
