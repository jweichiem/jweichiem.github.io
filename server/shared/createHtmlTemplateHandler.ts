import type { FastifyReply, FastifyRequest } from 'fastify';
import type { Renderer } from './types.ts';

export const createHtmlTemplateHandler =
	(renderer: Renderer) =>
	async (request: FastifyRequest, reply: FastifyReply) => {
		try {
			const template = await renderer.loadTemplate(request.url);
			const transformedTemplate = renderer.transformTemplate
				? await renderer.transformTemplate(request.url, template)
				: template;
			const appHtml = await renderer.render(request.url);
			const html = transformedTemplate.replace('<!--app-html-->', appHtml);

			reply.type('text/html').send(html);
		} catch (error) {
			if (error instanceof Error && renderer.fixStacktrace) {
				renderer.fixStacktrace(error);
			}
			reply.code(500).type('text/plain').send(String(error));
		}
	};
