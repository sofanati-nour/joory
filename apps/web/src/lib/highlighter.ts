import { createHighlighterCore, type HighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import { bundledLanguages } from 'shiki/langs';
import { bundledThemes } from 'shiki/themes';

let highlighterPromise: Promise<HighlighterCore> | null = null;
let highlighterInstance: HighlighterCore | null = null;

// Pre-loaded languages — commonly used in chat responses.
const PRELOADED_LANG_KEYS = [
	'javascript',
	'typescript',
	'html',
	'css',
	'python',
	'bash',
	'json',
	'svelte',
	'php'
] as const;

export const getHighlighter = () => {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighterCore({
			themes: [bundledThemes['nord']],
			langs: PRELOADED_LANG_KEYS.map((k) => bundledLanguages[k]),
			// Use the pure-JS regex engine — avoids WASM loading issues in the browser.
			engine: createJavaScriptRegexEngine()
		}).then((h) => {
			highlighterInstance = h;
			return h;
		});
	}
	return highlighterPromise;
};

// Synchronous access — returns null until getHighlighter() resolves.
export const getHighlighterInstance = () => highlighterInstance;

/**
 * Attempt to load a language by name at runtime.
 * Returns true if the language is (now) available, false otherwise.
 */
export async function ensureLanguageLoaded(lang: string): Promise<boolean> {
	const h = highlighterInstance;
	if (!h) return false;
	if (h.getLoadedLanguages().includes(lang)) return true;

	// Check if shiki ships a grammar for this language.
	if (lang in bundledLanguages) {
		try {
			await h.loadLanguage((bundledLanguages as Record<string, any>)[lang]);
			return h.getLoadedLanguages().includes(lang);
		} catch {
			// Grammar failed to load — fall back to plaintext.
		}
	}
	return false;
}
