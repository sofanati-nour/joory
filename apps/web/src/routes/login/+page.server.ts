import { redirect } from '@sveltejs/kit';

// This route previously used localStorage tokens — permanently redirect to the secure auth route.
export const load = () => {
    redirect(301, '/auth/login');
};
