import { renderToString } from 'react-dom/server';
import { Router } from 'wouter';
import App, { getRouteMeta } from './App.tsx';

const escapeHtml = (value: string) => {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
};

export const render = (url: string) => {
	const parsedUrl = new URL(url, 'http://localhost');
	const pathname = parsedUrl.pathname;
	const search = parsedUrl.search.startsWith('?')
		? parsedUrl.search.slice(1)
		: parsedUrl.search;
	const appHtml = renderToString(
		<Router ssrPath={pathname} ssrSearch={search}>
			<App />
		</Router>,
	);
	const meta = getRouteMeta(pathname);
	const headHtml = [
		`<title>${escapeHtml(meta.title)}</title>`,
		`<meta name="description" content="${escapeHtml(meta.description)}" />`,
	].join('');

	return { appHtml, headHtml };
};
