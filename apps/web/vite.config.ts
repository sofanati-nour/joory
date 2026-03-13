import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: { allowedHosts: ['joory.chat'] },
	optimizeDeps: { exclude: ['@app/shared', 'zod'] },
	build: {
		rollupOptions: {
			external: [
				'shiki',
				'shiki/core',
				'shiki/engine/javascript',
				'shiki/langs',
				'shiki/themes/nord',
				'@shikijs/langs/javascript',
				'@shikijs/langs/typescript',
				'@shikijs/langs/html',
				'@shikijs/langs/css',
				'@shikijs/langs/python',
				'@shikijs/langs/bash',
				'@shikijs/langs/json',
				'@shikijs/langs/svelte',
				'@shikijs/langs/php'
			]
		}
	},
	envDir: resolve(__dirname, '../..')
});
