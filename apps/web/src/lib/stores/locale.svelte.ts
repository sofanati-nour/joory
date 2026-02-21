import { browser } from '$app/environment';
import { locale } from 'svelte-i18n';
import { getDirection, supportedLocales } from '$lib/i18n';

const STORAGE_KEY = 'locale';
const DEFAULT_LOCALE = 'ar';

class LocaleStore {
	current = $state<string>(DEFAULT_LOCALE);
	dir = $derived<'rtl' | 'ltr'>(getDirection(this.current));

	constructor() {
		if (browser) {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored && supportedLocales.some((l) => l.code === stored)) {
				this.current = stored;
			}
		}
	}

	setLocale(newLocale: string) {
		if (!supportedLocales.some((l) => l.code === newLocale)) return;

		this.current = newLocale;
		locale.set(newLocale);

		if (browser) {
			localStorage.setItem(STORAGE_KEY, newLocale);
			document.documentElement.lang = newLocale;
			document.documentElement.dir = getDirection(newLocale);
		}
	}

	toggle() {
		const newLocale = this.current === 'ar' ? 'en' : 'ar';
		this.setLocale(newLocale);
	}

	init() {
		if (browser) {
			locale.set(this.current);
			document.documentElement.lang = this.current;
			document.documentElement.dir = this.dir;
		}
	}
}

export const localeStore = new LocaleStore();
export { supportedLocales };
