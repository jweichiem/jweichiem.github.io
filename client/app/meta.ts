import type { Locale } from '../i18n/index.tsx';
import type { RouteMeta } from './routes.ts';
import { resolveRoute } from './routes.ts';

export const getRouteMeta = (path: string, locale: Locale): RouteMeta => {
	return resolveRoute(path).getMeta(locale);
};

const escapeHtml = (value: string) => {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
};

export const createHeadHtml = (path: string, locale: Locale) => {
	const meta = getRouteMeta(path, locale);
	return [
		`<title>${escapeHtml(meta.title)}</title>`,
		`<meta name="description" content="${escapeHtml(meta.description)}" />`,
	].join('');
};

export const applyRouteMeta = (path: string, locale: Locale) => {
	const meta = getRouteMeta(path, locale);
	document.title = meta.title;

	const existingMeta = document.querySelector('meta[name="description"]');
	if (existingMeta) {
		existingMeta.setAttribute('content', meta.description);
		return;
	}

	const descriptionMeta = document.createElement('meta');
	descriptionMeta.setAttribute('name', 'description');
	descriptionMeta.setAttribute('content', meta.description);
	document.head.append(descriptionMeta);
};
