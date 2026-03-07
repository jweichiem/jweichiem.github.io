import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Router } from 'wouter';
import App, { getRouteMeta } from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
	throw new Error('Root element #root was not found');
}

const pathname = window.location.pathname;
const routeMeta = getRouteMeta(pathname);
document.title = routeMeta.title;

const upsertDescriptionMeta = (description: string) => {
	const existingMeta = document.querySelector('meta[name="description"]');
	if (existingMeta) {
		existingMeta.setAttribute('content', description);
		return;
	}

	const meta = document.createElement('meta');
	meta.setAttribute('name', 'description');
	meta.setAttribute('content', description);
	document.head.append(meta);
};

upsertDescriptionMeta(routeMeta.description);

const app = (
	<StrictMode>
		<Router ssrPath={pathname} ssrSearch={window.location.search.slice(1)}>
			<App />
		</Router>
	</StrictMode>
);

if (rootElement.hasChildNodes()) {
	hydrateRoot(rootElement, app);
} else {
	createRoot(rootElement).render(app);
}
