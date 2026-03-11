import type { ComponentType } from 'react';
import type { Locale } from '../i18n/index.tsx';
import {
	createLocalizedPath,
	stripLocaleFromPathname,
	supportedLocales,
} from '../i18n/index.tsx';
import About from '../pages/about/index.tsx';
import aboutPageData from '../pages/about/page-data/index.ts';
import Home from '../pages/home/index.tsx';
import homePageData from '../pages/home/page-data/index.ts';
import NotFound from '../pages/not-found/index.tsx';
import notFoundPageData from '../pages/not-found/page-data/index.ts';

export interface RouteMeta {
	title: string;
	description: string;
}

export interface AppRoute {
	path: string;
	component: ComponentType;
	getLabel: (locale: Locale) => string;
	getMeta: (locale: Locale) => RouteMeta;
	prerender: boolean;
}

export interface FallbackRoute {
	component: ComponentType;
	getMeta: (locale: Locale) => RouteMeta;
}

export const appRoutes: AppRoute[] = [
	{
		path: '/',
		component: Home,
		getLabel: (locale) => homePageData[locale].route.label,
		getMeta: (locale) => homePageData[locale].route.meta,
		prerender: true,
	},
	{
		path: '/about',
		component: About,
		getLabel: (locale) => aboutPageData[locale].route.label,
		getMeta: (locale) => aboutPageData[locale].route.meta,
		prerender: true,
	},
];

export const fallbackRoute: FallbackRoute = {
	component: NotFound,
	getMeta: (locale) => notFoundPageData[locale].route.meta,
};

const normalizePath = (inputPath: string) => {
	const pathWithoutQuery = stripLocaleFromPathname(
		inputPath.split('?')[0].split('#')[0],
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
