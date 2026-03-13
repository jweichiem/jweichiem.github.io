const sv = {
	intro: {
		title: 'Introduktion',
		description:
			'Frontendingenjör med fokus på designsystem, tillgänglighet och underhållbar webbarkitektur. Den här webbplatsen är en kompakt showcase för hur jag tänker kring teknisk kvalitet, användarnära system och tekniska avvägningar.',
	},
	showcaseTitle: 'Utforska webbplatsen',
	cards: [
		{
			title: 'Engineering',
			description:
				'Arkitekturbeslut, routing, renderingsstrategi, lokalisering, kvalitetsnivå och tekniska avvägningar.',
			href: '/engineering',
			ctaLabel: 'Visa engineering',
		},
		{
			title: 'Tillgänglighet',
			description:
				'Principer för tillgänglighet, implementationsanteckningar, granskningar, begränsningar och hur arbetssättet kan skala.',
			href: '/accessibility',
			ctaLabel: 'Visa tillgänglighet',
		},
		{
			title: 'CV',
			description:
				'Erfarenhet, utvalda resultat, kärnkompetenser och rollerna som format mitt arbetssätt som ingenjör.',
			href: '/cv',
			ctaLabel: 'Visa CV',
		},
		{
			title: 'Om',
			description:
				'Varför webbplatsen finns, hur den är strukturerad och hur den kompletterar de djupare showcase-sidorna.',
			href: '/about',
			ctaLabel: 'Visa om',
		},
	],
} as const;

export default sv;
