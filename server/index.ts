import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Fastify from 'fastify';
import { fastifyAppConfig } from './config/index.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

export const createApp = async (appRootDir = rootDir) => {
	const app = Fastify();
	await fastifyAppConfig(app, appRootDir);
	return app;
};

export const startServer = async () => {
	const port = Number(process.env.PORT ?? 3000);
	const host = process.env.HOST ?? '0.0.0.0';

	const app = await createApp(rootDir);
	const address = await app.listen({ port, host });
	const localHost = host === '0.0.0.0' ? 'localhost' : host;

	console.log(`[ssr] server listening on http://${localHost}:${port}`);
	console.log(`[ssr] bound address ${address}`);
};

const runIfMain = async () => {
	const currentFilePath = fileURLToPath(import.meta.url);
	const entryFilePath = process.argv[1] ? path.resolve(process.argv[1]) : '';

	if (entryFilePath === currentFilePath) {
		await startServer();
	}
};

void runIfMain();
