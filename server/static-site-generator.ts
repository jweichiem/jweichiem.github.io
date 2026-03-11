import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { registerAssets } from './config/production/registerAssets.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const {
	clientDist: clientDistPath,
	prerenderRoutes,
	template,
	render,
} = await registerAssets(projectRoot);

const defaultRoutes = prerenderRoutes.join(',');
const routes = (process.env.PRERENDER_ROUTES ?? defaultRoutes)
	.split(',')
	.map((route) => route.trim())
	.filter(Boolean)
	.map((route) => (route.startsWith('/') ? route : `/${route}`));

for (const route of routes) {
	const renderedPage = await render(route);
	const html = template
		.replace('<!--app-head-->', renderedPage.headHtml ?? '')
		.replace('<!--app-html-->', renderedPage.appHtml);

	const outputPath =
		route === '/'
			? path.join(clientDistPath, 'index.html')
			: path.join(clientDistPath, route.slice(1), 'index.html');

	await mkdir(path.dirname(outputPath), { recursive: true });
	await writeFile(outputPath, html, 'utf-8');
	console.log(`Prerendered ${route} -> ${outputPath}`);
}

const notFoundRoute = '/404';
const renderedNotFoundPage = await render(notFoundRoute);
const notFoundHtml = template
	.replace('<!--app-head-->', renderedNotFoundPage.headHtml ?? '')
	.replace('<!--app-html-->', renderedNotFoundPage.appHtml);
const notFoundOutputPath = path.join(clientDistPath, '404.html');

await writeFile(notFoundOutputPath, notFoundHtml, 'utf-8');
console.log(`Prerendered ${notFoundRoute} -> ${notFoundOutputPath}`);
