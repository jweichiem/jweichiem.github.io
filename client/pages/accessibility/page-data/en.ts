const en = {
	title: 'Accessibility',
	paragraphs: [
		'Accessibility is part of how I build and review interfaces, not a separate finishing step.',
		'This page outlines the principles, implementation details, checks, and limitations that shape accessibility work on this site.',
	],
	sections: [
		{
			title: 'Accessibility approach',
			cards: [
				{
					title: 'Build for access from the start',
					description:
						'Accessibility should influence structure, navigation, and interaction patterns from the beginning.',
					items: [
						'Prefer semantic landmarks and predictable document structure.',
						'Make keyboard use a normal path, not a fallback path.',
						'Treat contrast, focus states, and readable navigation as baseline quality.',
					],
				},
				{
					title: 'Keep the implementation practical',
					description:
						'The goal is to improve real usability, not just satisfy a checklist.',
					items: [
						'Favor clear information hierarchy.',
						'Use meaningful labels and link text.',
						'Keep interactions simple enough to stay understandable.',
					],
				},
			],
		},
		{
			title: 'What is implemented on this site',
			cards: [
				{
					title: 'Structure and navigation',
					description:
						'The site should remain easy to understand across pages, routes, and themes.',
					items: [
						'Pages use a clear heading hierarchy.',
						'Navigation is consistent and localized.',
						'Fallback behavior is treated as part of the user experience.',
					],
				},
				{
					title: 'Theme and presentation',
					description:
						'Theme handling should support readability and predictable rendering.',
					items: [
						'Theme selection is explicit and persistent.',
						'The site respects system color preference as a starting point.',
						'Presentation choices should preserve readability in both themes.',
					],
				},
				{
					title: 'Localized content',
					description:
						'Accessibility and localization should not compete with each other.',
					items: [
						'Localized routes stay readable.',
						'Page structure remains consistent across languages.',
						'Content should be understandable without relying on visual cues alone.',
					],
				},
			],
		},
		{
			title: 'Testing and audit checks',
			cards: [
				{
					title: 'Checks I expect to perform',
					description:
						'Accessibility quality needs both manual review and automated support.',
					items: [
						'Keyboard-only review of primary navigation and interactive elements.',
						'Focus visibility review.',
						'Automated accessibility linting or audit checks where they add value.',
					],
				},
				{
					title: 'What should become more visible',
					description:
						'The site should eventually expose more concrete evidence of accessibility validation.',
					items: [
						'A simple audit summary.',
						'A brief note on manual screen reader spot checks.',
						'A small checklist for adding new pages without regressions.',
					],
				},
			],
		},
		{
			title: 'Known limitations',
			cards: [
				{
					title: 'Honest constraints',
					description:
						'A credible accessibility page should acknowledge what is not yet fully demonstrated.',
					items: [
						'The site is small, so not every advanced accessibility pattern is exercised here.',
						'Accessibility claims should stay proportional to what has actually been checked.',
						'A full conformance claim would require more formal validation.',
					],
				},
			],
		},
		{
			title: 'How accessibility would scale',
			cards: [
				{
					title: 'Growing the accessibility process',
					description:
						'If the site or system grew, the accessibility process should grow with it.',
					items: [
						'Add accessibility checks to CI.',
						'Make component-level accessibility expectations explicit.',
						'Review focus management and interaction behavior whenever new UI patterns are introduced.',
					],
				},
			],
		},
	],
	footnote:
		'Accessibility quality is strongest when it becomes part of normal engineering practice.',
} as const;

export default en;
