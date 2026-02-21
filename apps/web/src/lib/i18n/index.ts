import { browser } from '$app/environment';
import { init, register, getLocaleFromNavigator } from 'svelte-i18n';

const defaultLocale = 'en';

register('ar', () => import('./locales/ar.json'));
register('en', () => import('./locales/en.json'));
register('fr', () => import('./locales/fr.json'));
register('ku', () => import('./locales/ku.json'));
register('tr', () => import('./locales/tr.json'));

export function initI18n() {
	init({
		fallbackLocale: defaultLocale,
		initialLocale: browser ? localStorage.getItem('locale') ?? defaultLocale : defaultLocale
	});
}

export function getDirection(locale: string): 'rtl' | 'ltr' {
	return locale === 'ar' ? 'rtl' : 'ltr';
}

export const supportedLocales = [
	{ code: 'ar', name: 'العربية', dir: 'rtl' },
	{ code: 'en', name: 'English', dir: 'ltr' },
	{ code: 'fr', name: 'Français', dir: 'ltr' },
	{ code: 'ku', name: 'Kurdî (Kurmancî)', dir: 'ltr' },
	{ code: 'tr', name: 'Türkçe', dir: 'ltr' }
] as const;
