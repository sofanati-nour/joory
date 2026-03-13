import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			injectRegister: 'script',
			manifest: {
				name: 'Joory Chat',
				short_name: 'Joory',
				description: 'Advanced AI Assistant for Syria',
				theme_color: '#000000',
				background_color: '#000000',
				display: 'standalone',
				start_url: '/chat',
				scope: '/',
				orientation: 'portrait',
				lang: 'ar',
				dir: 'rtl',
				icons: [
					{
						src: '/icon-192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: '/icon-512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable'
					}
				],
				screenshots: [
					{
						src: '/desktop-screenshot.webp',
						sizes: '1280x720',
						type: 'image/webp',
						form_factor: 'wide',
						label: 'Chat Syrian Zone — Desktop'
					},
					{
						src: '/iphone-screenshot.png',
						sizes: '1290x2796',
						type: 'image/png',
						form_factor: 'narrow',
						label: 'Chat Syrian Zone — Mobile'
					}
				]
			},
			workbox: {
				// Cache all build assets
				globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
				globIgnores: ['**/stamps*.png', 'prerendered/**'],
				// Serve stale content while revalidating in background
				runtimeCaching: [
					{
						// Cache API responses for chat list (short-lived)
						urlPattern: /^https?:\/\/.*\/api\/chats$/,
						handler: 'NetworkFirst',
						options: {
							cacheName: 'api-chats',
							expiration: { maxEntries: 1, maxAgeSeconds: 60 }
						}
					},
					{
						// Cache Google Fonts stylesheets
						urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/,
						handler: 'StaleWhileRevalidate',
						options: { cacheName: 'google-fonts-stylesheets' }
					},
					{
						// Cache Google Fonts files long-term
						urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/,
						handler: 'CacheFirst',
						options: {
							cacheName: 'google-fonts-webfonts',
							expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 }
						}
					}
				],
				// Don't intercept API or auth routes
				navigateFallbackDenylist: [/^\/api\//]
			},
			devOptions: { enabled: true }
		})
	],
	server: { allowedHosts: ['joory.chat'] },
	optimizeDeps: { exclude: ['@app/shared', 'zod'] },
	envDir: resolve(__dirname, '../..')
});
