import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: { allowedHosts: ['chat.syrian.test', 'joory.test'] },
	optimizeDeps: { exclude: ['@app/shared', 'zod'] },
	ssr: {
		// shiki uses ESM subpath exports (shiki/core, shiki/langs, etc.)
		// that Rollup can't resolve when the package is externalized.
		// Bundle it directly into the SSR output instead.
		noExternal: ['shiki', '@shikijs/langs', '@shikijs/themes']
	},
	envDir: resolve(__dirname, '../..')
});
