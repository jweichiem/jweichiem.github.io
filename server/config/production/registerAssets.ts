import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import fastifyStatic from '@fastify/static';
import type { FastifyInstance } from 'fastify';
import { resolveServerPaths } from '../../shared/paths.ts';

type RenderModule = {
	render: (url: string) => string | Promise<string>;
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
	const { render } = (await import(
		pathToFileURL(serverEntry).href
	)) as RenderModule;

	return {
		clientDist,
		template,
		render: async (url: string) => Promise.resolve(render(url)),
	};
};
