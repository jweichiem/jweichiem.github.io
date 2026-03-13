const en = {
	title: 'About this website',
	paragraphs: [
		'This website was built to showcase a bit of my work, experience, and how I approach building products as a Senior Software Engineer.',
		'It is a small personal project that highlights frontend architecture, multilingual routing, server-side rendering, static site generation, and the kind of thoughtful implementation details I care about when building maintainable user-facing systems.',
	],
	footnote:
		'Note: This page was built with AI assistance, primarily using GPT-5.3 Codex.',
	sections: [
		{
			title: 'Technology stack',
			cards: [
				{
					title: 'Frontend foundation',
					description:
						'The UI is built with React, TypeScript, and SCSS on top of Vite.',
					items: [
						'React 19 for the component model and server rendering entry points.',
						'TypeScript for stricter data modelling across routes, page content, and rendering.',
						'SCSS for structured styling with shared design tokens and predictable component-level styles.',
						'Vite for fast local iteration and a straightforward production build pipeline.',
					],
				},
				{
					title: 'Routing and localization',
					description:
						'Routing is intentionally lightweight and localized from one shared source of truth.',
					items: [
						'Wouter keeps the routing layer small while still supporting SSR and localized paths.',
						'English uses canonical routes, while Swedish is path-prefixed for readable localized URLs.',
						'Route metadata, labels, and prerender behavior are defined together to avoid drift.',
					],
				},
				{
					title: 'Rendering and deployment',
					description:
						'The project supports both server-rendered and static deployment paths.',
					items: [
						'Fastify is used for the SSR server setup when deploying to a Node runtime.',
						'A static generation step prerenders selected routes for GitHub Pages or other static hosts.',
						'The build can be configured with a base path for repo-subpath hosting when needed.',
					],
				},
			],
		},
		{
			title: 'Why these choices',
			cards: [
				{
					title: 'Keep the architecture small',
					description:
						'I wanted the project to stay understandable without giving up useful capabilities.',
					items: [
						'For a project that supports both SSR and SSG, the stack stays relatively compact and keeps clear boundaries between concerns.',
						'The same route configuration powers navigation, metadata, SSR, and SSG to reduce duplicate logic.',
						'The structure is meant to feel like production code, not just a static portfolio mock-up.',
					],
				},
				{
					title: 'Show practical engineering tradeoffs',
					description:
						'The project is also a way to demonstrate the kinds of decisions I make in real product work.',
					items: [
						'SSR and SSG are both supported because deployment constraints differ between environments.',
						'Localized routing is handled centrally so adding more routes or languages stays predictable.',
						'The code favors maintainability, explicit data structures, and reusable UI composition over framework-heavy abstractions.',
					],
				},
				{
					title: 'Focus on user-facing quality',
					description: 'Even in a small project, the details matter.',
					items: [
						'Metadata is generated per route for better sharing and discoverability.',
						'Theme handling, route behavior, and fallback pages are treated as first-class behavior rather than afterthoughts.',
						'The result is meant to be simple to navigate, fast to deploy, and easy to extend.',
					],
				},
			],
		},
		{
			title: 'Why the current structure scales',
			cards: [
				{
					title: 'A solid foundation for growth',
					description:
						'Even though this is a compact site, the structure is organized in a way that can support a much larger surface area.',
					items: [
						'Routes, metadata, localization, and prerender behavior are kept centralized so new pages can be added with less friction.',
						'The split between app code, entry points, and server configuration makes it easier to evolve rendering and deployment concerns independently.',
						'The styling approach stays composable, which matters if the design system, content model, or page count expands over time.',
					],
				},
				{
					title: 'How it could scale further',
					description:
						'If this site needed to support more complexity over time, the current structure gives a reasonable starting point rather than something that would need to be thrown away.',
					items: [
						'Page content could move from static page-data files into a CMS, API, or content service while preserving the existing routing and rendering flow.',
						'Shared domain types and server-side data loading could be introduced without needing to collapse the current client and server boundaries.',
						'Caching, observability, authentication, and more advanced delivery concerns could be layered onto the server side as the application grows.',
					],
				},
				{
					title: 'If there was a real backend',
					description:
						'If the project grew into something with real backend capabilities, I would likely move toward a more explicit frontend-backend contract.',
					items: [
						'A dedicated backend-for-frontend or API layer would make sense for shaping data, coordinating multiple services, and keeping the UI focused on presentation concerns.',
						'SSR could then be used more deliberately for data-driven rendering, personalization, SEO-sensitive pages, or authenticated experiences.',
						'The current project is intentionally simpler than that, but it is structured in a way that makes those next steps reasonable rather than awkward.',
					],
				},
			],
		},
	],
} as const;

export default en;
