import type { LayoutServerLoad } from './$types';
import { env } from '$env/dynamic/public';

export const ssr = false;

export const load: LayoutServerLoad = async ({ fetch, request }) => {
    const API_BASE = env.PUBLIC_API_BASE;
    const cookieHeader = request.headers.get('cookie') ?? '';

    try {
        const res = await fetch(`${API_BASE}/api/auth/get-session`, {
            headers: { cookie: cookieHeader },
        });
        if (res.ok) {
            const data = await res.json();
            return { user: data?.user ?? null };
        }
    } catch (error) {
        console.error(error);
    }
    
    return { user: null };
};
