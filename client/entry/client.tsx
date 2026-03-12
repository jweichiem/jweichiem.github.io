import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { hydratePageDataCacheFromWindow } from '../app/page-data.ts';
import { createAppTree } from '../app/createAppTree.tsx';
import { applyRouteMeta } from '../app/meta.ts';
import { getLocaleFromPathname } from '../i18n/index.tsx';
import '../app/index.scss';

hydratePageDataCacheFromWindow();

const rootElement = document.getElementById('root');

if (!rootElement) {
	throw new Error('Root element #root was not found');
}

const pathname = window.location.pathname;
const locale = getLocaleFromPathname(pathname);

applyRouteMeta(pathname, locale);

const app = (
	<StrictMode>
		{createAppTree({
			pathname,
			search: window.location.search.slice(1),
		})}
	</StrictMode>
);

if (rootElement.hasChildNodes()) {
	hydrateRoot(rootElement, app);
} else {
	createRoot(rootElement).render(app);
}
