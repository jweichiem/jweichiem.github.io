// @vitest-environment jsdom

import axe from 'axe-core';
import { describe, expect, test } from 'vitest';
import { getLocaleFromUrl } from '../../i18n/index.tsx';
import { prerenderRoutes, render } from '../server.tsx';

const createTestDocument = (
	route: string,
	headHtml: string,
	appHtml: string,
) => {
	const locale = getLocaleFromUrl(route);

	return `<!doctype html>
<html lang="${locale}">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		${headHtml}
	</head>
	<body>
		<div id="root">${appHtml}</div>
	</body>
</html>`;
};

const formatViolations = (route: string, violations: axe.Result[]) =>
	violations
		.map((violation) => {
			const nodes = violation.nodes
				.map((node) => {
					const target = node.target.join(', ');
					return `  - ${target}: ${node.failureSummary ?? 'No failure summary provided.'}`;
				})
				.join('\n');

			return `${violation.id} (${violation.impact ?? 'unknown impact'}): ${violation.help}\n${nodes}`;
		})
		.join('\n\n')
		.trim()
		.concat(`\n\nRoute: ${route}`);

describe('SSG pages accessibility', () => {
	test.each(prerenderRoutes)('%s has no axe violations', async (route) => {
		const { appHtml, headHtml } = await render(route);

		document.documentElement.innerHTML = '';
		document.open();
		document.write(createTestDocument(route, headHtml, appHtml));
		document.close();

		const results = await axe.run(document, {
			rules: {
				// jsdom does not calculate rendered colors, so this rule is unreliable here.
				'color-contrast': { enabled: false },
			},
		});

		expect(
			results.violations,
			formatViolations(route, results.violations),
		).toHaveLength(0);
	});
});
