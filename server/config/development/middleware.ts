import middie from '@fastify/middie';
import type { FastifyInstance } from 'fastify';
import type { ViteDevServer } from 'vite';

export const registerViteMiddlewares = async (
	app: FastifyInstance,
	vite: ViteDevServer,
) => {
	await app.register(middie);
	app.use(vite.middlewares);
};
