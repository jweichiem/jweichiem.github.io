import type { FastifyReply, FastifyRequest } from 'fastify';
import type { RenderedPage, Renderer } from './types.ts';

const normalizeRenderedPage = (
	renderedPage: string | RenderedPage,
): RenderedPage => {
	if (typeof renderedPage === 'string') {
		return { appHtml: renderedPage };
	}

	return renderedPage;
};

export const createHtmlTemplateHandler =
	(renderer: Renderer) =>
	async (request: FastifyRequest, reply: FastifyReply) => {
		try {
			const template = await renderer.loadTemplate(request.url);
			const transformedTemplate = renderer.transformTemplate
				? await renderer.transformTemplate(request.url, template)
				: template;
			const renderedPage = normalizeRenderedPage(
				await renderer.render(request.url),
			);
			const html = transformedTemplate
				.replace('<!--app-head-->', renderedPage.headHtml ?? '')
				.replace('<!--app-html-->', renderedPage.appHtml);

			reply.type('text/html').send(html);
		} catch (error) {
			if (error instanceof Error && renderer.fixStacktrace) {
				renderer.fixStacktrace(error);
			}
			reply.code(500).type('text/plain').send(String(error));
		}
	};
