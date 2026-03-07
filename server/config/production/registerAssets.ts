import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import fastifyStatic from '@fastify/static';
import type { FastifyInstance } from 'fastify';
import { resolveServerPaths } from '../../shared/paths.ts';
import type { RenderedPage } from '../../shared/types.ts';

type RenderModule = {
	render: (
		url: string,
	) => string | RenderedPage | Promise<string | RenderedPage>;
	prerenderRoutes?: string[];
};

export const registerAssets = async (
	rootDir: string,
	app?: FastifyInstance,
) => {
	const { clientDist, serverEntry } = resolveServerPaths(rootDir);
	if (app) {
		await app.register(fastifyStatic, {
			root: `${clientDist}/assets`,
			prefix: '/assets/',
		});
	}

	const template = await readFile(path.join(clientDist, 'index.html'), 'utf-8');
	const { prerenderRoutes, render } = (await import(
		pathToFileURL(serverEntry).href
	)) as RenderModule;

	const renderPage = async (url: string): Promise<RenderedPage> => {
		const rendered = await Promise.resolve(render(url));
		if (typeof rendered === 'string') {
			return { appHtml: rendered };
		}
		return rendered;
	};

	return {
		clientDist,
		prerenderRoutes: prerenderRoutes ?? ['/'],
		template,
		render: renderPage,
	};
};
