import type { FastifyInstance } from 'fastify';

const isProduction = () => process.env.NODE_ENV === 'production';

export const fastifyAppConfig = async (
	app: FastifyInstance,
	rootDir: string,
) => {
	if (isProduction()) {
		const { fastifyAppConfig: productionConfig } = await import(
			'./production/index.ts'
		);
		await productionConfig(app, rootDir);
		return;
	}

	const { fastifyAppConfig: developmentConfig } = await import(
		'./development/index.ts'
	);
	await developmentConfig(app, rootDir);
};
