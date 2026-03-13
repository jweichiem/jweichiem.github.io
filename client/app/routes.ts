import type { ComponentType } from 'react';
import type { Locale } from '../i18n/index.tsx';
import {
	createLocalizedPath,
	stripLocaleFromPathname,
	supportedLocales,
} from '../i18n/index.tsx';
import About from '../pages/about/index.tsx';
import Accessibility from '../pages/accessibility/index.tsx';
import Cv from '../pages/cv/index.tsx';
import Engineering from '../pages/engineering/index.tsx';
import Home from '../pages/home/index.tsx';
import NotFound from '../pages/not-found/index.tsx';
import { stripBasePath } from '../shared/base-path.ts';
import type { PageKey } from './page-data.ts';

export interface RouteMeta {
	title: string;
	description: string;
}

export interface AppRoute {
	path: string;
	page: PageKey;
	component: ComponentType;
	getLabel: (locale: Locale) => string;
	getMeta: (locale: Locale) => RouteMeta;
	prerender: boolean;
}

export interface FallbackRoute {
	page: PageKey;
	component: ComponentType;
	getMeta: (locale: Locale) => RouteMeta;
}

const homeRouteCopy: Record<Locale, { label: string; meta: RouteMeta }> = {
	en: {
		label: 'Home',
		meta: {
			title: 'Home | Joakim Weise-Chiem',
			description:
				'Frontend engineer focused on design systems, accessibility, and maintainable web architecture.',
		},
	},
	sv: {
		label: 'Hem',
		meta: {
			title: 'Hem | Joakim Weise-Chiem',
			description:
				'Frontendingenjör med fokus på designsystem, tillgänglighet och underhållbar webbarkitektur.',
		},
	},
};

const aboutRouteCopy: Record<Locale, { label: string; meta: RouteMeta }> = {
	en: {
		label: 'About',
		meta: {
			title: 'About | Joakim Weise-Chiem',
			description:
				'Learn more about this website and the work behind building it.',
		},
	},
	sv: {
		label: 'Om',
		meta: {
			title: 'Om | Joakim Weise-Chiem',
			description:
				'Läs mer om den här webbplatsen och arbetet bakom hur den byggdes.',
		},
	},
};

const engineeringRouteCopy: Record<Locale, { label: string; meta: RouteMeta }> =
	{
		en: {
			label: 'Engineering',
			meta: {
				title: 'Engineering | Joakim Weise-Chiem',
				description:
					'Architecture notes, engineering decisions, and quality standards behind this site.',
			},
		},
		sv: {
			label: 'Engineering',
			meta: {
				title: 'Engineering | Joakim Weise-Chiem',
				description:
					'Arkitekturnoter, tekniska beslut och kvalitetsnivåer bakom den här webbplatsen.',
			},
		},
	};

const accessibilityRouteCopy: Record<
	Locale,
	{ label: string; meta: RouteMeta }
> = {
	en: {
		label: 'Accessibility',
		meta: {
			title: 'Accessibility | Joakim Weise-Chiem',
			description:
				'Accessibility approach, implementation notes, and quality checks used on this site.',
		},
	},
	sv: {
		label: 'Tillgänglighet',
		meta: {
			title: 'Tillgänglighet | Joakim Weise-Chiem',
			description:
				'Tillgänglighetsstrategi, implementationsanteckningar och kvalitetskontroller som används på den här webbplatsen.',
		},
	},
};

const cvRouteCopy: Record<Locale, { label: string; meta: RouteMeta }> = {
	en: {
		label: 'CV',
		meta: {
			title: 'CV | Joakim Weise-Chiem',
			description:
				'Experience, selected impact, and core capabilities for Joakim Weise-Chiem.',
		},
	},
	sv: {
		label: 'CV',
		meta: {
			title: 'CV | Joakim Weise-Chiem',
			description:
				'Erfarenhet, utvalda resultat och kärnkompetenser för Joakim Weise-Chiem.',
		},
	},
};

const notFoundRouteCopy: Record<Locale, { meta: RouteMeta }> = {
	en: {
		meta: {
			title: 'Page Not Found | Joakim Weise-Chiem',
			description: 'The requested page could not be found.',
		},
	},
	sv: {
		meta: {
			title: 'Sidan Kunde Inte Hittas | Joakim Weise-Chiem',
			description: 'Sidan du begärde kunde inte hittas.',
		},
	},
};

export const appRoutes: AppRoute[] = [
	{
		path: '/',
		page: 'home',
		component: Home,
		getLabel: (locale) => homeRouteCopy[locale].label,
		getMeta: (locale) => homeRouteCopy[locale].meta,
		prerender: true,
	},
	{
		path: '/engineering',
		page: 'engineering',
		component: Engineering,
		getLabel: (locale) => engineeringRouteCopy[locale].label,
		getMeta: (locale) => engineeringRouteCopy[locale].meta,
		prerender: true,
	},
	{
		path: '/accessibility',
		page: 'accessibility',
		component: Accessibility,
		getLabel: (locale) => accessibilityRouteCopy[locale].label,
		getMeta: (locale) => accessibilityRouteCopy[locale].meta,
		prerender: true,
	},
	{
		path: '/cv',
		page: 'cv',
		component: Cv,
		getLabel: (locale) => cvRouteCopy[locale].label,
		getMeta: (locale) => cvRouteCopy[locale].meta,
		prerender: true,
	},
	{
		path: '/about',
		page: 'about',
		component: About,
		getLabel: (locale) => aboutRouteCopy[locale].label,
		getMeta: (locale) => aboutRouteCopy[locale].meta,
		prerender: true,
	},
];

export const fallbackRoute: FallbackRoute = {
	page: 'not-found',
	component: NotFound,
	getMeta: (locale) => notFoundRouteCopy[locale].meta,
};

const normalizePath = (inputPath: string) => {
	const pathWithoutQuery = stripLocaleFromPathname(
		stripBasePath(inputPath).split('?')[0].split('#')[0],
	);
	const normalizedPath = pathWithoutQuery.replace(/\/+$/, '');
	return normalizedPath === '' ? '/' : normalizedPath;
};

export const resolveRoute = (path: string) => {
	const normalizedPath = normalizePath(path);
	return (
		appRoutes.find((route) => normalizePath(route.path) === normalizedPath) ??
		fallbackRoute
	);
};

export const prerenderRoutes = appRoutes
	.filter((route) => route.prerender)
	.flatMap((route) =>
		supportedLocales.map((locale) => createLocalizedPath(route.path, locale)),
	);
