import { renderToString } from 'react-dom/server';
import { createAppTree } from '../app/createAppTree.tsx';
import { createHeadHtml } from '../app/meta.ts';
import { loadPageData, serializePageDataCache } from '../app/page-data.ts';
import { prerenderRoutes, resolveRoute } from '../app/routes.ts';
import { getLocaleFromUrl } from '../i18n/index.tsx';
import { prependBasePath } from '../shared/base-path.ts';

export const render = async (url: string) => {
	const parsedUrl = new URL(url, 'http://localhost');
	const pathname = parsedUrl.pathname;
	const search = parsedUrl.search.startsWith('?')
		? parsedUrl.search.slice(1)
		: parsedUrl.search;
	const locale = getLocaleFromUrl(url);
	const route = resolveRoute(prependBasePath(pathname));

	await loadPageData(route.page, locale);
	const appHtml = renderToString(
		createAppTree({ pathname: prependBasePath(pathname), search }),
	);
	const headHtml = `${createHeadHtml(prependBasePath(pathname), locale)}${serializePageDataCache()}`;

	return { appHtml, headHtml };
};

export { prerenderRoutes };
