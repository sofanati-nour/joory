import { Marked } from 'marked';

export const markdownParser = new Marked({
	breaks: true,
	gfm: true
});
