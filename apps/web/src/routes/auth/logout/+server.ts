import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env as publicEnv } from '$env/dynamic/public';

export const GET: RequestHandler = async ({ url, cookies, fetch }) => {
    let cookieDomain = url.hostname;

    if (cookieDomain !== 'localhost' && !cookieDomain.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)) {
        if (cookieDomain.endsWith('.syrian.test')) cookieDomain = '.syrian.test';
        else if (cookieDomain.endsWith('.syrian.zone')) cookieDomain = '.syrian.zone';
    }

    const cookieOptions = {
        path: '/',
        httpOnly: true,
        secure: import.meta.env.PROD,
        sameSite: 'lax' as const
    };

    if (cookieDomain !== 'localhost') {
        // @ts-ignore
        cookieOptions.domain = cookieDomain;
    }

    const accessToken = cookies.get('access_token');
    if (accessToken) {
        try {
            await fetch(`${publicEnv.PUBLIC_AUTH_PROVIDER_URL}/logout`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept': 'application/json'
                }
            });
        } catch (error) {
            console.error('Error logging out from provider:', error);
        }
    }

    cookies.delete('access_token', cookieOptions);

    throw redirect(302, '/chat');
};