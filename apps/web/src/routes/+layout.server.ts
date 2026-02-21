import type { LayoutServerLoad } from './$types';
export const ssr = false;

export const load: LayoutServerLoad = async ({ cookies, fetch }) => {
    const AUTH_PROVIDER_URL = process.env.PUBLIC_AUTH_PROVIDER_URL;

    // 1. Get the token from the cookie
    const accessToken = cookies.get('access_token');

    // 2. If no token, user is not logged in
    if (!accessToken) {
        return { user: null };
    }

    // 3. Use the token to fetch user details from your Passport App
    // Note: We use the SvelteKit 'fetch' wrapper here
    const response = await fetch(`${AUTH_PROVIDER_URL}/api/user`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        const user = await response.json();
        return { user };
    } else {
        const text = await response.text();
        return { user: null };
    }
};