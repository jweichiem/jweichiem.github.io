import { expect, test } from 'vitest';
import { prerenderRoutes, render } from '../server.tsx';

test('render returns swedish metadata and content for localized routes', async () => {
	const renderedPage = await render('/sv/about');

	expect(renderedPage.headHtml).toContain(
		'<title>Om | Joakim Weise-Chiem</title>',
	);
	expect(renderedPage.headHtml).toContain(
		'content="Läs mer om den här webbplatsen och arbetet bakom hur den byggdes."',
	);
	expect(renderedPage.appHtml).toContain('Om den här webbplatsen');
	expect(renderedPage.appHtml).toContain(
		'Den här webbplatsen byggdes för att visa lite av mitt arbete, min erfarenhet och hur jag tänker kring produktutveckling som Senior Software Engineer.',
	);
	expect(renderedPage.appHtml).toContain('aria-label="Språkval"');
	expect(renderedPage.appHtml).toContain('href="/about"');
	expect(renderedPage.appHtml).toContain('href="/sv/about"');
});

test('render returns swedish homepage content for /sv', async () => {
	const renderedPage = await render('/sv');

	expect(renderedPage.headHtml).toContain(
		'content="Frontendingenjör med fokus på designsystem, tillgänglighet och underhållbar webbarkitektur."',
	);
	expect(renderedPage.appHtml).toContain('<h1 class="profile-banner__title"');
	expect(renderedPage.appHtml).toContain('Introduktion');
	expect(renderedPage.appHtml).toContain('Utforska webbplatsen');
	expect(renderedPage.appHtml).toContain('Visa tillgänglighet');
});

test('ssr prerender routes include localized swedish paths', () => {
	expect(prerenderRoutes).toEqual([
		'/',
		'/sv',
		'/engineering',
		'/sv/engineering',
		'/accessibility',
		'/sv/accessibility',
		'/cv',
		'/sv/cv',
		'/about',
		'/sv/about',
	]);
});

test('generic pages render a single h1 alongside the shared banner', async () => {
	const renderedPage = await render('/about');
	const h1Matches = renderedPage.appHtml.match(/<h1\b/g) ?? [];

	expect(h1Matches).toHaveLength(1);
	expect(renderedPage.appHtml).toContain('<h2 class="profile-banner__title"');
	expect(renderedPage.appHtml).toContain('Joakim Weise-Chiem');
	expect(renderedPage.appHtml).toContain('About this website');
});
