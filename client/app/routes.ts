import type { ComponentType } from 'react';
import type { Locale } from '../i18n/index.tsx';
import type { PageKey } from './page-data.ts';
import {
	createLocalizedPath,
	stripLocaleFromPathname,
	supportedLocales,
} from '../i18n/index.tsx';
import About from '../pages/about/index.tsx';
import Home from '../pages/home/index.tsx';
import NotFound from '../pages/not-found/index.tsx';
import { stripBasePath } from '../shared/base-path.ts';

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
			description: 'Personal website and profile for Joakim Weise-Chiem.',
		},
	},
	sv: {
		label: 'Hem',
		meta: {
			title: 'Hem | Joakim Weise-Chiem',
			description: 'Personlig webbplats och profil för Joakim Weise-Chiem.',
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
