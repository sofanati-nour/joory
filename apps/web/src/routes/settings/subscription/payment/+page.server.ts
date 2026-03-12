import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
    const { user } = await parent();
    if (!user) {
        redirect(302, '/auth/login');
    }

    return {
        shamcashAddress: env.SHAMCASH_ADDRESS ?? '',
    };
};
