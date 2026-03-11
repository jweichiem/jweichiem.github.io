import type { FastifyInstance } from 'fastify';
import { afterEach, expect, test, vi } from 'vitest';

const { developmentConfigMock, productionConfigMock } = vi.hoisted(() => {
	return {
		developmentConfigMock: vi.fn(),
		productionConfigMock: vi.fn(),
	};
});

vi.mock('../development/index.ts', () => {
	return { fastifyAppConfig: developmentConfigMock };
});

vi.mock('../production/index.ts', () => {
	return { fastifyAppConfig: productionConfigMock };
});

afterEach(() => {
	developmentConfigMock.mockReset();
	productionConfigMock.mockReset();
	delete process.env.NODE_ENV;
});

test('config/index selects development config when NODE_ENV is not production', async () => {
	process.env.NODE_ENV = 'development';
	const { fastifyAppConfig } = await import('../index.ts');

	await fastifyAppConfig({} as FastifyInstance, '/repo-root');

	expect(developmentConfigMock).toHaveBeenCalledTimes(1);
	expect(developmentConfigMock).toHaveBeenCalledWith(
		expect.anything(),
		'/repo-root',
	);
	expect(productionConfigMock).not.toHaveBeenCalled();
});

test('config/index selects production config when NODE_ENV=production', async () => {
	process.env.NODE_ENV = 'production';
	const { fastifyAppConfig } = await import('../index.ts');

	await fastifyAppConfig({} as FastifyInstance, '/repo-root');

	expect(productionConfigMock).toHaveBeenCalledTimes(1);
	expect(productionConfigMock).toHaveBeenCalledWith(
		expect.anything(),
		'/repo-root',
	);
	expect(developmentConfigMock).not.toHaveBeenCalled();
});
