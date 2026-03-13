import {
	normalizeBasePath,
	prependConfiguredBasePath,
} from '../../client/shared/base-path-utils.ts';

const defaultSiteUrl = 'https://jweichiem.github.io';

const escapeXml = (value: string) => {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
};

const getEffectiveBasePath = (siteUrl: URL, configuredBasePath?: string) => {
	const explicitBasePath = normalizeBasePath(configuredBasePath);

	if (explicitBasePath) {
		return explicitBasePath;
	}

	return normalizeBasePath(siteUrl.pathname);
};

export const createSitemapXml = (
	routes: readonly string[],
	options?: {
		siteUrl?: string;
		basePath?: string;
	},
) => {
	const canonicalSiteUrl = new URL(options?.siteUrl ?? defaultSiteUrl);
	const effectiveBasePath = getEffectiveBasePath(
		canonicalSiteUrl,
		options?.basePath,
	);
	const baseOrigin = canonicalSiteUrl.origin;

	const urls = routes
		.map((route) =>
			new URL(
				prependConfiguredBasePath(route, effectiveBasePath),
				baseOrigin,
			).toString(),
		)
		.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`)
		.join('\n');

	return [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		urls,
		'</urlset>',
	].join('\n');
};
