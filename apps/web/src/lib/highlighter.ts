import { createHighlighter, type Highlighter } from 'shiki';

let highlighterPromise: Promise<Highlighter> | null = null;
let highlighterInstance: Highlighter | null = null;

export const getHighlighter = () => {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighter({
			themes: ['nord'],
			langs: ['javascript', 'typescript', 'html', 'css', 'python', 'bash', 'json', 'svelte', 'text']
		}).then(h => {
            highlighterInstance = h;
            return h;
        });
	}
	return highlighterPromise;
};

// Synchronous access
export const getHighlighterInstance = () => highlighterInstance;