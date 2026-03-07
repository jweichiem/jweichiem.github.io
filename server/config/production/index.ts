import type { FastifyInstance } from 'fastify';
import { createHtmlTemplateHandler } from '../../shared/createHtmlTemplateHandler.ts';
import type { Renderer } from '../../shared/types.ts';
import { registerAssets } from './registerAssets.ts';

export const fastifyAppConfig = async (
	app: FastifyInstance,
	rootDir: string,
) => {
	const { template, render } = await registerAssets(rootDir, app);
	const renderer: Renderer = {
		loadTemplate: async () => template,
		render,
	};

	app.get('/*', createHtmlTemplateHandler(renderer));
};
