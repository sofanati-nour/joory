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
			external: ['shiki', 'shiki/core', 'shiki/engine/javascript', 'shiki/langs', 'shiki/themes/nord']
		}
	},
	envDir: resolve(__dirname, '../..')
});
