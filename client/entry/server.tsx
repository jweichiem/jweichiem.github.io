import { renderToString } from 'react-dom/server';
import { createAppTree } from '../app/createAppTree.tsx';
import { createHeadHtml } from '../app/meta.ts';
import { prerenderRoutes } from '../app/routes.ts';
import { getLocaleFromUrl } from '../i18n/index.tsx';

export const render = (url: string) => {
	const parsedUrl = new URL(url, 'http://localhost');
	const pathname = parsedUrl.pathname;
	const search = parsedUrl.search.startsWith('?')
		? parsedUrl.search.slice(1)
		: parsedUrl.search;
	const locale = getLocaleFromUrl(url);
	const appHtml = renderToString(createAppTree({ pathname, search }));
	const headHtml = createHeadHtml(pathname, locale);

	return { appHtml, headHtml };
};

export { prerenderRoutes };
