import { expect, test } from 'vitest';
import { createSitemapXml } from '../sitemap.ts';

test('createSitemapXml builds absolute URLs for prerendered routes', () => {
	const xml = createSitemapXml(['/', '/engineering', '/sv/about'], {
		siteUrl: 'https://jweichiem.github.io',
	});

	expect(xml).toContain(
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
	);
	expect(xml).toContain('<loc>https://jweichiem.github.io/</loc>');
	expect(xml).toContain('<loc>https://jweichiem.github.io/engineering</loc>');
	expect(xml).toContain('<loc>https://jweichiem.github.io/sv/about</loc>');
});

test('createSitemapXml respects a configured base path', () => {
	const xml = createSitemapXml(['/', '/about'], {
		siteUrl: 'https://example.com',
		basePath: '/joakim-cv',
	});

	expect(xml).toContain('<loc>https://example.com/joakim-cv</loc>');
	expect(xml).toContain('<loc>https://example.com/joakim-cv/about</loc>');
});
