import { redirect, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';

export const GET: RequestHandler = async ({ url, cookies, fetch }) => {
    // 1. Retrieve the code sent by the provider
    const code = url.searchParams.get('code');

    if (!code) {
        return json({ error: 'No authorization code provided' }, { status: 400 });
    }

    let tokenResponse;
    // 2. Exchange the code for an Access Token
    try {
        tokenResponse = await fetch(`${publicEnv.PUBLIC_AUTH_PROVIDER_URL}/oauth/token`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                grant_type: 'authorization_code',
                client_id: privateEnv.PRIVATE_CLIENT_ID,
                client_secret: privateEnv.PRIVATE_CLIENT_SECRET,
                redirect_uri: `${publicEnv.PUBLIC_ORIGIN}/auth/callback`,
                code: code
            })
        });
    } catch (error) {
        console.error('Error exchanging code for token:', error);
        return json({ error: 'Failed to exchange code for token' }, { status: 500 });
    }

    const tokens = await tokenResponse.json();

    if (tokens.error) {
        return json({ error: tokens.error, message: tokens.message }, { status: 400 });
    }

    // Determine domain for cookie (strip port if present, handle localhost)
    let cookieDomain = url.hostname;
    if (cookieDomain !== 'localhost' && !cookieDomain.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)) {
        // If it's a subdomain like chat.syrian.test, we might want .syrian.test
        // Simple heuristic: if it has 2+ parts, take the last 2? 
        // For now, let's just stick to the current hostname or use a config if needed.
        // If the user wants to share cookies with subdomains, they should configure it.
        // Previous code hardcoded .syrian.test. I'll verify if that was intentional.
        // If url.hostname ends with .syrian.test, use .syrian.test
        if (cookieDomain.endsWith('.syrian.test')) cookieDomain = '.syrian.test';
        else if (cookieDomain.endsWith('.syrian.zone')) cookieDomain = '.syrian.zone';
    } else {
        // For localhost, cookie domain should usually be undefined or matching hostname (no dot)
        // cookieDomain = undefined; // SvelteKit cookies handles this if we don't set domain?
        // Let's explicitly NOT set domain for localhost to be safe
        // But the type requires a string if we set it. 
    }

    const cookieOptions = {
        path: '/',
        httpOnly: true,
        secure: import.meta.env.PROD,
        maxAge: tokens.expires_in,
        sameSite: 'lax' as const // specific string literal type
    };

    if (cookieDomain !== 'localhost') {
        // @ts-ignore - dynamic assignment
        cookieOptions.domain = cookieDomain;
    }

    // 3. Store the token
    cookies.set('access_token', tokens.access_token, cookieOptions);

    // 4. Initialize wallet on the backend (creates wallet with free credits if new user)
    try {
        await fetch(`${publicEnv.PUBLIC_API_URL}/api/subscription/init`, {
            method: 'POST',
            headers: {
                'Cookie': `access_token=${tokens.access_token}`
            }
        });
    } catch (error) {
        console.error('Error initializing wallet:', error);
        // Non-fatal: wallet will be created lazily on first chat request
    }

    // 5. Redirect the user
    throw redirect(303, '/chat');
};