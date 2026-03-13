const sv = {
	title: 'Engineering',
	paragraphs: [
		'Den här sidan visar hur webbplatsen är strukturerad, vilka avvägningar som gjorts och vilka kvalitetsnivåer som styr implementationen.',
		'Målet är inte att presentera den mest komplexa stacken möjliga, utan att visa explicit arkitektur, underhållbara gränser och genomtänkta beslut.',
	],
	sections: [
		{
			title: 'Vad webbplatsen visar',
			cards: [
				{
					title: 'Explicit arkitektur',
					description:
						'Projektet är litet, men medvetet strukturerat som produktionskod i stället för en engångsportfolio.',
					items: [
						'Delade route-definitioner styr navigation, metadata och prerender-beteende.',
						'Ansvar för klient, entry points och server hålls isär i stället för att blandas ihop.',
						'Lokalisering hanteras som en del av arkitekturen, inte som ett tillägg i efterhand.',
					],
				},
				{
					title: 'En liten men komplett stack',
					description:
						'Stacken hålls kompakt samtidigt som den stödjer flera deploymentsätt och en underhållbar innehållsmodell.',
					items: [
						'React, TypeScript och SCSS ger en förutsägbar frontendgrund.',
						'SSR och SSG stöds båda eftersom deploymentsförutsättningar varierar.',
						'Implementationen prioriterar kontroll och tydlighet framför tunga ramverksabstraktioner.',
					],
				},
			],
		},
		{
			title: 'Systemöversikt',
			cards: [
				{
					title: 'En routemodell, flera utfall',
					description:
						'Route-registret fungerar som en gemensam sanningskälla i applikationen.',
					items: [
						'Navigationsetiketter kommer från routemodellen.',
						'Route-metadata genereras från samma källa.',
						'Prerender-beteende definieras tillsammans med själva routen.',
					],
				},
				{
					title: 'Lokaliserad routing',
					description:
						'Kanoniska engelska routes och svensk-språkprefixade routes genereras konsekvent.',
					items: [
						'Lokaliserade URL:er förblir läsbara.',
						'Språkväxling bevarar sidans avsikt.',
						'Samma locale-hjälpfunktioner delas mellan klient- och serverkod.',
					],
				},
				{
					title: 'Renderingsstrategi',
					description:
						'Projektet stödjer både en SSR-väg i Node och statiskt prerenderat output.',
					items: [
						'SSR är användbart för att demonstrera apparkitektur och server rendering.',
						'Statisk output gör deployment enkelt på GitHub Pages.',
						'Renderingsupplägget är flexibelt utan att göra projektet beroende av ett stort ramverk.',
					],
				},
			],
		},
		{
			title: 'Viktiga beslut och avvägningar',
			cards: [
				{
					title: 'Varför stödja både SSR och SSG',
					description:
						'Webbplatsen är medvetet utformad för att visa både runtime- och statiska deploymentsalternativ.',
					items: [
						'Detta lägger till viss komplexitet, men visar portabilitet mellan olika miljöer.',
						'För en innehållsdriven webbplats hade ren statisk output kunnat räcka.',
						'Jag skulle omvärdera den dubbla vägen om webbplatsen förblev helt statisk.',
					],
				},
				{
					title: 'Varför hålla routing lättviktig',
					description:
						'Ett litet routinglager gör flödet enklare att förstå och enklare att kontrollera.',
					items: [
						'Route-registret förblir explicit.',
						'Lokaliserade paths blir lättare att resonera om.',
						'Nackdelen är mindre inbyggd konvention än vad ett större ramverk skulle ge.',
					],
				},
				{
					title: 'Varför det här medvetet hålls litet',
					description:
						'Webbplatsen ska visa omdöme, inte maximera implementationens storlek.',
					items: [
						'Inget CMS används eftersom innehållsytan fortfarande går att hantera i kod.',
						'Ingen backend-datamodell finns eftersom nuvarande användningsfall inte kräver det.',
						'Inget stort abstraktionslager introduceras förrän duplicering faktiskt uppstår.',
					],
				},
			],
		},
		{
			title: 'Kvalitetsnivå',
			cards: [
				{
					title: 'Grundläggande kontroller',
					description:
						'Även en liten webbplats bör visa grundläggande ingenjörsdisciplin.',
					items: [
						'Typat sidinnehåll och route-metadata.',
						'Linting och formatering som del av normal underhållning.',
						'Tester runt routing, rendering och template-beteende.',
					],
				},
				{
					title: 'Core Web Vitals',
					description:
						'För en applikation i den här storleken är Core Web Vitals viktiga, men inte särskilt svåra att hålla på en bra nivå.',
					items: [
						'Jag är medveten om code splitting och hur bundle-strategi blir viktiga verktyg när sidan växer.',
						'Målet är att hålla leveransen av JavaScript och CSS medveten utan att överoptimera en relativt liten yta.',
						'Allt arbete med bundle-storlek behöver fortfarande vägas mot övriga vitals, särskilt stabil rendering och responsiv interaktion.',
					],
				},
				{
					title: 'Vad jag skulle synliggöra härnäst',
					description:
						'Det finns utrymme att göra kvalitetshistorien mer synlig över tid.',
					items: [
						'Lägg till en tydligare CI-sammanfattning.',
						'Lägg till tillgänglighetskontroller och ett litet end-to-end smoke-test.',
						'Lägg till en lättviktig vy för prestanda och bundle-budget.',
					],
				},
			],
		},
		{
			title: 'Vad som är medvetet utelämnat',
			cards: [
				{
					title: 'Begränsningar som är avsiktliga',
					description:
						'Vissa saker finns inte här eftersom de ännu inte förbättrar produkten tillräckligt för att motivera kostnaden.',
					items: [
						'Inget CMS eller innehållstjänst.',
						'Ingen autentisering eller personalisering.',
						'Ingen observability-stack utöver vad en enkel webbplats behöver idag.',
					],
				},
			],
		},
		{
			title: 'Hur arkitekturen skulle utvecklas',
			cards: [
				{
					title: 'Om webbplatsen växte i omfattning',
					description:
						'Den nuvarande strukturen är tänkt att bära nästa steg utan att behöva skrivas om helt.',
					items: [
						'Innehåll skulle kunna flyttas till ett CMS eller API utan att route- och renderingsmodellen ändras.',
						'Ett tydligare backendkontrakt skulle kunna stödja rikare datadrivna sidor.',
						'Caching, observability och starkare deploymentskontroller skulle kunna läggas till gradvis.',
					],
				},
			],
		},
	],
	footnote:
		'Den här sidan är tänkt som en praktisk engineering-genomgång snarare än en allmän stackbeskrivning.',
} as const;

export default sv;
