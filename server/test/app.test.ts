import Fastify from 'fastify';
import { expect, test } from 'vitest';
import { createHtmlTemplateHandler } from '../shared/createHtmlTemplateHandler.ts';
import type { Renderer } from '../shared/types.ts';

const createTestApp = (
	mode: 'development' | 'production',
	renderer: Renderer,
) => {
	const app = Fastify();
	const method = mode === 'development' ? app.all.bind(app) : app.get.bind(app);
	method('/*', createHtmlTemplateHandler(renderer));

	return app;
};

test('production mode returns rendered HTML', async () => {
	const app = createTestApp('production', {
		loadTemplate: async () => '<html><body><!--app-html--></body></html>',
		render: async () => '<h1>Hello SSR</h1>',
	});

	const response = await app.inject({
		method: 'GET',
		url: '/',
	});

	expect(response.statusCode).toBe(200);
	expect(response.headers['content-type'] ?? '').toMatch(/^text\/html/);
	expect(response.body).toMatch(/<h1>Hello SSR<\/h1>/);
	await app.close();
});

test('development mode applies template transform', async () => {
	const app = createTestApp('development', {
		loadTemplate: async () => '<div><!--app-html--></div>',
		transformTemplate: async (_url, template) =>
			template.replace('<div>', '<div data-env="dev">'),
		render: async () => '<p>Dev SSR</p>',
	});

	const response = await app.inject({
		method: 'GET',
		url: '/about',
	});

	expect(response.statusCode).toBe(200);
	expect(response.body).toMatch(/data-env="dev"/);
	expect(response.body).toMatch(/<p>Dev SSR<\/p>/);
	await app.close();
});

test('returns 500 when renderer throws', async () => {
	const app = createTestApp('production', {
		loadTemplate: async () => '<div><!--app-html--></div>',
		render: async () => {
			throw new Error('render failed');
		},
	});

	const response = await app.inject({
		method: 'GET',
		url: '/boom',
	});

	expect(response.statusCode).toBe(500);
	expect(response.body).toMatch(/render failed/);
	await app.close();
});
