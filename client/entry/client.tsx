import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { createAppTree } from '../app/createAppTree.tsx';
import { applyRouteMeta } from '../app/meta.ts';
import '../app/index.scss';

const rootElement = document.getElementById('root');

if (!rootElement) {
	throw new Error('Root element #root was not found');
}

const pathname = window.location.pathname;
applyRouteMeta(pathname);

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
