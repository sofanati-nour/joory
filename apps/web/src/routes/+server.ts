import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
export const GET: RequestHandler = ({ url }) => {
    return redirect(302, '/chat');
};