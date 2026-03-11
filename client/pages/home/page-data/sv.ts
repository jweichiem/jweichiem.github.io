const sv = {
	route: {
		label: 'Hem',
		meta: {
			title: 'Hem | Joakim Weise-Chiem',
			description: 'Personlig webbplats och profil för Joakim Weise-Chiem.',
		},
	},
	banner: {
		name: 'Joakim Weise-Chiem',
		careerDescription:
			'Senior Software Engineer. Tillgänglig för nya möjligheter.',
		subtitle: 'Baserad i Berlin, Tyskland.',
		profileImageAlt: 'Profilbild på Joakim Weise-Chiem',
		contactGithub: 'GitHub',
	},
	intro: {
		title: 'Introduktion',
		description:
			'Jag är en Senior Software Engineer och är för närvarande baserad i Berlin, Tyskland. Jag har lång erfarenhet av frontend-arkitektur, designsystem och att bygga skalbara UI-komponenter. Jag är en av de första ingenjörerna bakom Skapa, IKEAs designsystem som används av fler än 200 produktteam inom företaget. Mitt arbete har handlat om att utveckla återanvändbara komponenter, förbättra tillgänglighet och prestanda samt skapa verktyg som hjälper team att leverera kundnära funktioner snabbare och mer konsekvent. Jag tycker om att arbeta nära designers och produktteam, lösa verkliga produktproblem med genomtänkta tekniska lösningar och bygga system som skalar i stora organisationer.',
	},
	workExperienceTitle: 'Arbetslivserfarenhet',
	workExperience: [
		{
			company: 'IKEA',
			logoAlt: 'IKEA',
			roles: [
				{
					title: 'Senior Software Engineer',
					dates: 'Dec 2022 - Nu',
					description:
						'Som Senior Software Engineer på IKEA är jag en av de första ingenjörerna bakom Skapa, IKEAs designsystem som används av fler än 200 produktteam inom företaget. Mitt arbete omfattar att designa och bygga återanvändbara komponenter, förbättra tillgänglighet och prestanda samt skapa verktyg som hjälper team att leverera kundnära funktioner snabbare och mer konsekvent. Jag tycker om att arbeta nära designers och produktteam, lösa verkliga produktproblem med genomtänkta tekniska lösningar och bygga system som skalar i stora organisationer.',
				},
				{
					title: 'Software Engineer',
					dates: 'Feb 2020 - Nov 2022',
					description:
						'År 2020 började jag direkt på IKEA för att bygga ett nytt designsystem baserat på det tidigare designsystemet, med målet att driva omdesignen av IKEAs e-handelsupplevelse. Som en av de första ingenjörerna i teamet fick jag möjlighet att forma den tekniska riktningen för designsystemet och arbeta nära designers och produktteam i hela företaget för att lösa verkliga produktproblem med genomtänkta tekniska lösningar.',
				},
			],
		},
		{
			company: 'Cybercom (KnowIT)',
			logoAlt: 'Cybercom (KnowIT)',
			roles: [
				{
					title: 'Consultant',
					dates: 'Aug 2019 - Jan 2020',
					description:
						'Utvecklade återanvändbara och modulära React-komponenter med SCSS för den första versionen av IKEAs designsystem Fundament, distribuerat via ett privat NPM-register (Verdaccio), med starkt fokus på tillgänglighet, skalbarhet och långsiktig underhållbarhet i ett litet tvärfunktionellt team.',
				},
			],
		},
		{
			company: 'Luxus Worldwide (Luxid Group)',
			logoAlt: 'Luxus Worldwide (Luxid Group)',
			roles: [
				{
					title: 'Developer',
					dates: 'Feb 2016 - Aug 2019',
					description:
						'Arbetade med att leverera och underhålla digitala upplevelser för företagskunder, med starkt fokus på responsiva e-postmallar och HTML5-banners för Luxus egen plattform för marketing automation, Drafthorse. Jag byggde återanvändbara mallar med HTML, CSS och etablerade arbetssätt för responsiv e-post, och säkerställde kompatibilitet i stora e-postklienter och på olika enheter samtidigt som jag stöttade marknads- och CRM-kampanjer. Senare gick jag vidare till ett konsultuppdrag för IKEA i ett team som knöt ihop UI-representationen mellan de tre e-handelslösningarna som användes då.',
				},
				{
					title: 'CMS Operator',
					dates: 'Feb 2015 - Feb 2016',
					description:
						'Ansvarade för att hantera och underhålla flerspråkigt webbplatsinnehåll för en företagskund med FatWire CMS och Adobe Experience Manager (AEM). Rollen omfattade innehållsuppdateringar, felsökning av tekniska problem och att säkerställa att webbplatser fungerade korrekt i olika webbläsare och på olika enheter. Jag justerade regelbundet CSS och JavaScript för att säkerställa att designen fungerade som tänkt och arbetade med Pug- och YAML-baserad templating för att strukturera och underhålla återanvändbara sidlayouter.',
				},
				{
					title: 'CMS Operator Intern',
					dates: 'Sep 2014 - Feb 2015',
					description:
						'Bidrog till att hantera och uppdatera webbplatsinnehåll för en kund i FatWire CMS, med fokus på innehållsuppdateringar och grundläggande SEO-förbättringar. Stöttade frontend-justeringar med HTML, CSS, jQuery och Bootstrap för att säkerställa att sidor renderades korrekt i olika webbläsare och på olika enheter.',
				},
			],
		},
	],
	skillsTitle: 'Kompetenser',
	skills: [
		{
			title: 'Frontend / Webb',
			items: [
				'React',
				'Vue',
				'Web Components',
				'Storybook',
				'HTML',
				'CSS',
				'SCSS',
				'Typescript',
				'Node.js',
				'Responsiv Design',
				'Designsystem',
				'Design Tokens',
				'Style Dictionary',
			],
		},
		{
			title: 'Verktyg / Arbetsflöde',
			items: [
				'Git',
				'GitHub Workflows',
				'Infrastructure as Code',
				'A/B Testing',
			],
		},
		{
			title: 'Tillgänglighet',
			items: ['WCAG', 'Inkluderande design'],
		},
		{
			title: 'Metodiker',
			items: [
				'Agilt arbetssätt',
				'Problemlösning',
				'Tvärfunktionellt samarbete',
			],
		},
		{
			title: 'Språk',
			items: ['Engelska (flytande)', 'Svenska (flytande)', 'Tyska (nybörjare)'],
		},
	],
} as const;

export default sv;
