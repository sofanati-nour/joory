import type { Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

const API_BASE = env.PUBLIC_API_BASE ?? 'http://localhost:3001';

// Derive the API origin (scheme + host) for connect-src
function getApiOrigin(base: string): string {
    try {
        return new URL(base).origin;
    } catch {
        return base;
    }
}

export const handle: Handle = async ({ event, resolve }) => {
    const response = await resolve(event);

    const apiOrigin = getApiOrigin(API_BASE);

    // Content-Security-Policy
    // Notes:
    //   - 'unsafe-inline' for scripts: SvelteKit injects a small inline bootstrap script in the HTML shell.
    //   - 'unsafe-inline' for styles: Tailwind v4 generates styles via <style> tags.
    //   - img-src includes data: for QR code data URLs and https: for remote avatars/images.
    //   - connect-src includes the API origin for fetch() calls.
    const csp = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",
        // Allow the Google Fonts stylesheet
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        `connect-src 'self' ${apiOrigin}`,
        "img-src 'self' data: https:",
        "font-src 'self' data: https://fonts.gstatic.com",
        "frame-src 'none'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
    ].join('; ');

    response.headers.set('Content-Security-Policy', csp);

    // Prevent MIME-type sniffing
    response.headers.set('X-Content-Type-Options', 'nosniff');

    // Prevent clickjacking
    response.headers.set('X-Frame-Options', 'DENY');

    // Force HTTPS in production (1 year, include subdomains)
    if (event.url.protocol === 'https:') {
        response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    }

    return response;
};
