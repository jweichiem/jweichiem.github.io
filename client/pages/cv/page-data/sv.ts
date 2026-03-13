const sv = {
	title: 'CV',
	paragraphs: [
		'Senior Software Engineer med frontendfokus och erfarenhet inom designsystem, tillgänglighet, återanvändbar UI-arkitektur och användarnära produktkvalitet.',
		'Jag har arbetat i produktteam, konsultroller och plattformsnära arbete, med ett starkt intresse för underhållbara system som hjälper team att leverera konsekvent.',
	],
	sections: [
		{
			title: 'Utvalda resultat',
			cards: [
				{
					title: 'Designsystem i stor skala',
					description:
						'Ett återkommande tema i mitt arbete har varit att bygga återanvändbara system som stödjer fler team än en enskild produktyta.',
					items: [
						'Grundande ingenjör för Skapa, IKEAs designsystem.',
						'Bidrog till system som används av 200+ produktteam.',
						'Fokus på återanvändbara komponenter, tillgänglighet och skalbara implementationsmönster.',
					],
				},
				{
					title: 'Användarnära kvalitet',
					description:
						'Mitt arbete ligger ofta nära gränssnittet, där implementationsdetaljer får synlig effekt.',
					items: [
						'Förbättrade underhållbarheten i kundnära UI.',
						'Arbetade nära designers och produktteam.',
						'Balanserade praktisk leverans med långsiktig frontendkvalitet.',
					],
				},
			],
		},
		{
			title: 'Erfarenhet',
			cards: [
				{
					title: 'IKEA',
					description:
						'Senior Software Engineer och tidigare Software Engineer.',
					items: [
						'Senior Software Engineer — Dec 2022 till nu',
						'Software Engineer — Feb 2020 till Nov 2022',
						'Byggde och skalade grunden för designsystem, återanvändbara komponenter och verktyg.',
					],
				},
				{
					title: 'Cybercom (KnowIT)',
					description:
						'Konsult som arbetade med den första versionen av IKEAs designsystem.',
					items: [
						'Consultant — Aug 2019 till Jan 2020',
						'Byggde modulära React-komponenter med SCSS.',
						'Arbetade med tillgänglighet, skalbarhet och privat paketdistribution.',
					],
				},
				{
					title: 'Luxus Worldwide (Luxid Group)',
					description:
						'Utvecklar- och CMS-roller inom digital produktion och frontendunderhåll.',
					items: [
						'Developer — Feb 2016 till Aug 2019',
						'CMS Operator — Feb 2015 till Feb 2016',
						'CMS Operator Intern — Sep 2014 till Feb 2015',
					],
				},
			],
		},
		{
			title: 'Kompetenser',
			cards: [
				{
					title: 'Frontend engineering',
					description: 'Kärnstyrkor i implementation.',
					items: [
						'React',
						'Vue',
						'TypeScript',
						'SCSS',
						'Node.js',
						'Responsiva gränssnitt',
					],
				},
				{
					title: 'System och arbetssätt',
					description:
						'Områden där jag ofta arbetar bortom enskilda komponenter.',
					items: [
						'Designsystem',
						'Design tokens',
						'Storybook',
						'Git och GitHub workflows',
						'Tvärfunktionellt samarbete',
					],
				},
				{
					title: 'Tillgänglighet och kvalitet',
					description:
						'Kvalitetsområden som jag behandlar som en normal del av frontend engineering.',
					items: [
						'WCAG',
						'Inkluderande design',
						'Underhållbarhet',
						'Återanvändbar UI-arkitektur',
					],
				},
			],
		},
		{
			title: 'Språk',
			cards: [
				{
					title: 'Talade och skrivna språk',
					description: 'Arbetsspråk som är relevanta för min nuvarande profil.',
					items: [
						'Engelska — Flytande',
						'Svenska — Flytande',
						'Tyska — Nybörjare',
					],
				},
			],
		},
	],
	footnote: '',
} as const;

export default sv;
