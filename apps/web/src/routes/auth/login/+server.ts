import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
const redirect_uri = `${publicEnv.PUBLIC_ORIGIN}/auth/callback`;
const passport_uri = `${publicEnv.PUBLIC_AUTH_PROVIDER_URL}/oauth/authorize`;
export const GET: RequestHandler = () => {
    const redirectUrl = new URL(passport_uri);
    redirectUrl.searchParams.append("client_id", privateEnv.PRIVATE_CLIENT_ID);
    redirectUrl.searchParams.append("redirect_uri", redirect_uri);
    redirectUrl.searchParams.append("response_type", "code");

    return redirect(302, redirectUrl);
};