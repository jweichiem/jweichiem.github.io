import { readFile } from 'node:fs/promises';
import type { FastifyInstance } from 'fastify';
import { createServer as createViteServer } from 'vite';
import { createHtmlTemplateHandler } from '../../shared/createHtmlTemplateHandler.ts';
import { resolveServerPaths } from '../../shared/paths.ts';
import type { Renderer } from '../../shared/types.ts';
import { registerViteMiddlewares } from './middleware.ts';

const createViteServerForDevelopment = async (rootDir: string) => {
	const isVitest = process.env.VITEST === 'true';

	return createViteServer({
		root: rootDir,
		appType: 'custom',
		server: {
			middlewareMode: true,
			hmr: isVitest ? false : undefined,
		},
	});
};

export const fastifyAppConfig = async (
	app: FastifyInstance,
	rootDir: string,
) => {
	const vite = await createViteServerForDevelopment(rootDir);
	await registerViteMiddlewares(app, vite);
	app.addHook('onClose', async () => {
		await vite.close();
	});

	const { indexHtml } = resolveServerPaths(rootDir);

	const renderer: Renderer = {
		loadTemplate: () => readFile(indexHtml, 'utf-8'),
		transformTemplate: (url, template) =>
			vite.transformIndexHtml(url, template),
		render: async (url) => {
			const { render } = await vite.ssrLoadModule('/client/entry/server.tsx');
			return render(url);
		},
		fixStacktrace: (error) => vite.ssrFixStacktrace(error),
	};

	app.all('/*', createHtmlTemplateHandler(renderer));
};
