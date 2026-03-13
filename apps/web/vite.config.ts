import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: { allowedHosts: ['joory.chat'] },
	optimizeDeps: { exclude: ['@app/shared', 'zod'] },
	envDir: resolve(__dirname, '../..')
});
