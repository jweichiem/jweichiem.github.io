const sv = {
	route: {
		label: 'Om',
		meta: {
			title: 'Om | Joakim Weise-Chiem',
			description:
				'Läs mer om den här webbplatsen och arbetet bakom hur den byggdes.',
		},
	},
	title: 'Om den här webbplatsen',
	paragraphs: [
		'Den här webbplatsen byggdes för att visa lite av mitt arbete, min erfarenhet och hur jag tänker kring produktutveckling som Senior Software Engineer.',
		'Det är ett mindre personligt projekt som lyfter frontend-arkitektur, flerspråkig routing, server-side rendering, statisk sidgenerering och den typ av genomtänkta implementationsdetaljer jag bryr mig om när jag bygger underhållbara användarnära system.',
	],
	footnote:
		'Not: Den här sidan byggdes med AI-stöd, främst med hjälp av GPT-5.3 Codex.',
	sections: [
		{
			title: 'Teknisk stack',
			cards: [
				{
					title: 'Frontend',
					description:
						'Gränssnittet är byggt med React, TypeScript och SCSS ovanpå Vite.',
					items: [
						'React 19 används för komponentmodellen och renderingsflödena på serversidan.',
						'TypeScript ger tydligare datamodellering för routes, sidinnehåll och rendering.',
						'SCSS används för strukturerad styling med delade design tokens och förutsägbara komponentstilar.',
						'Vite ger snabb lokal utveckling och en enkel produktionspipeline.',
					],
				},
				{
					title: 'Routing och lokalisering',
					description:
						'Routinglagret är medvetet lättviktigt och lokaliseras från en gemensam källa.',
					items: [
						'Wouter håller routinglagret litet men stödjer fortfarande SSR och lokaliserade paths.',
						'Engelska använder kanoniska routes medan svenska är språkprefixad för läsbara URL:er.',
						'Route-metadata, etiketter och prerender-beteende definieras tillsammans för att undvika att de glider isär.',
					],
				},
				{
					title: 'Rendering och deployment',
					description:
						'Projektet stödjer både server-renderad och statisk hosting.',
					items: [
						'Fastify används för SSR-servern när webbplatsen körs i en Node-miljö.',
						'Ett steg för statisk sidgenerering prerenderar utvalda routes för GitHub Pages eller andra statiska värdar.',
						'Bygget kan konfigureras med en base path när webbplatsen behöver hostas under en reposökväg.',
					],
				},
			],
		},
		{
			title: 'Varför de här valen',
			cards: [
				{
					title: 'Håll arkitekturen liten',
					description:
						'Jag ville att projektet skulle vara lätt att förstå utan att ge upp användbara möjligheter.',
					items: [
						'För ett projekt som stödjer både SSR och SSG förblir stacken relativt kompakt och håller tydliga gränser mellan olika ansvar.',
						'Samma route-konfiguration driver navigation, metadata, SSR och SSG för att minska duplicerad logik.',
						'Strukturen är tänkt att kännas som riktig produktionskod, inte bara som en statisk portfolio-mockup.',
					],
				},
				{
					title: 'Visa praktiska tekniska avvägningar',
					description:
						'Projektet är också ett sätt att visa vilka beslut jag brukar fatta i verkligt produktarbete.',
					items: [
						'SSR och SSG stöds båda eftersom deploymentsförutsättningar skiljer sig mellan olika miljöer.',
						'Flerspråkig routing hanteras centralt så att fler routes eller språk kan läggas till på ett förutsägbart sätt.',
						'Koden prioriterar underhållbarhet, explicita datastrukturer och återanvändbar UI-komposition framför tunga ramverksabstraktioner.',
					],
				},
				{
					title: 'Fokus på användarnära kvalitet',
					description: 'Även i ett litet projekt spelar detaljerna roll.',
					items: [
						'Metadata genereras per route för bättre delning och upptäckbarhet.',
						'Temahantering, route-beteende och fallback-sidor behandlas som förstklassiga delar av upplevelsen.',
						'Resultatet är tänkt att vara enkelt att navigera, snabbt att deploya och lätt att bygga vidare på.',
					],
				},
			],
		},
		{
			title: 'Varför den nuvarande strukturen skalar',
			cards: [
				{
					title: 'En stabil grund att växa från',
					description:
						'Även om det här är en liten webbplats är strukturen organiserad på ett sätt som kan bära en betydligt större yta.',
					items: [
						'Routes, metadata, lokalisering och prerender-beteende hålls samlat så att nya sidor kan läggas till med mindre friktion.',
						'Uppdelningen mellan appkod, entry points och serverkonfiguration gör det enklare att utveckla rendering och deployment oberoende av varandra.',
						'Stylingupplägget förblir komponerbart, vilket spelar roll om designsystemet, innehållsmodellen eller antalet sidor växer över tid.',
					],
				},
				{
					title: 'Hur det skulle kunna skala vidare',
					description:
						'Om webbplatsen skulle behöva stödja mer komplexitet över tid ger den nuvarande strukturen en rimlig utgångspunkt i stället för något som måste kastas bort.',
					items: [
						'Sidinnehåll skulle kunna flyttas från statiska page-data-filer till ett CMS, API eller en innehållstjänst utan att routing- och renderingsflödet behöver göras om.',
						'Delade domäntyper och server-side datahämtning skulle kunna introduceras utan att klient- och servergränserna behöver kollapsa.',
						'Caching, observability, autentisering och mer avancerade leveransrelaterade behov skulle kunna läggas till på serversidan när applikationen växer.',
					],
				},
				{
					title: 'Om det fanns ett riktigt backend',
					description:
						'Om projektet skulle växa till något med verkliga backend-funktioner skulle jag sannolikt gå mot ett tydligare kontrakt mellan frontend och backend.',
					items: [
						'Ett dedikerat backend-for-frontend eller API-lager vore rimligt för att forma data, koordinera flera tjänster och låta UI:t fokusera på presentationsansvaret.',
						'SSR skulle då kunna användas mer medvetet för datadriven rendering, personalisering, SEO-kritiska sidor eller autentiserade upplevelser.',
						'Det nuvarande projektet är medvetet enklare än så, men strukturen gör de nästa stegen rimliga i stället för klumpiga.',
					],
				},
			],
		},
	],
} as const;

export default sv;
