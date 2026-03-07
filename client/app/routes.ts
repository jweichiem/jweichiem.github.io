import type { ComponentType } from 'react';
import About from '../pages/about/index.tsx';
import { aboutMeta } from '../pages/about/meta.ts';
import Home from '../pages/home/index.tsx';
import { homeMeta } from '../pages/home/meta.ts';
import NotFound from '../pages/not-found/index.tsx';
import { notFoundMeta } from '../pages/not-found/meta.ts';

export interface RouteMeta {
	title: string;
	description: string;
}

export interface AppRoute {
	path: string;
	component: ComponentType;
	meta: RouteMeta;
	prerender: boolean;
}

export interface FallbackRoute {
	component: ComponentType;
	meta: RouteMeta;
}

export const appRoutes: AppRoute[] = [
	{
		path: '/',
		component: Home,
		meta: homeMeta,
		prerender: true,
	},
	{
		path: '/about',
		component: About,
		meta: aboutMeta,
		prerender: true,
	},
];

export const fallbackRoute: FallbackRoute = {
	component: NotFound,
	meta: notFoundMeta,
};

const normalizePath = (inputPath: string) => {
	const pathWithoutQuery = inputPath.split('?')[0].split('#')[0];
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
	.map((route) => route.path);
