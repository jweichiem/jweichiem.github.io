const sv = {
	title: 'Tillgänglighet',
	paragraphs: [
		'Tillgänglighet är en del av hur jag bygger och granskar gränssnitt, inte ett separat slutsteg.',
		'Den här sidan beskriver principerna, implementationsdetaljerna, kontrollerna och begränsningarna som formar tillgänglighetsarbetet på den här webbplatsen.',
	],
	sections: [
		{
			title: 'Tillgänglighetsstrategi',
			cards: [
				{
					title: 'Bygg för tillgång från början',
					description:
						'Tillgänglighet bör påverka struktur, navigation och interaktionsmönster från start.',
					items: [
						'Prioritera semantiska landmarks och en förutsägbar dokumentstruktur.',
						'Gör tangentbordsanvändning till en normal väg, inte en reservväg.',
						'Se kontrast, fokusmarkeringar och läsbar navigation som grundläggande kvalitet.',
					],
				},
				{
					title: 'Håll implementationen praktisk',
					description:
						'Målet är att förbättra verklig användbarhet, inte bara uppfylla en checklista.',
					items: [
						'Prioritera tydlig informationshierarki.',
						'Använd meningsfulla etiketter och länktexter.',
						'Håll interaktioner tillräckligt enkla för att vara begripliga.',
					],
				},
			],
		},
		{
			title: 'Vad som är implementerat på den här webbplatsen',
			cards: [
				{
					title: 'Struktur och navigation',
					description:
						'Webbplatsen ska förbli lätt att förstå mellan sidor, routes och teman.',
					items: [
						'Sidor använder en tydlig rubrikhierarki.',
						'Navigationen är konsekvent och lokaliserad.',
						'Fallback-beteende behandlas som en del av användarupplevelsen.',
					],
				},
				{
					title: 'Tema och presentation',
					description:
						'Temahantering ska stödja läsbarhet och förutsägbar rendering.',
					items: [
						'Temaval är explicit och sparas.',
						'Webbplatsen respekterar systemets färgpreferens som utgångspunkt.',
						'Presentationsval bör bevara läsbarheten i båda teman.',
					],
				},
				{
					title: 'Lokaliserat innehåll',
					description:
						'Tillgänglighet och lokalisering ska inte motverka varandra.',
					items: [
						'Lokaliserade routes förblir läsbara.',
						'Sidstrukturen förblir konsekvent mellan språk.',
						'Innehåll ska vara begripligt utan att förlita sig på visuella ledtrådar.',
					],
				},
			],
		},
		{
			title: 'Tester och granskningar',
			cards: [
				{
					title: 'Kontroller jag förväntar mig att göra',
					description:
						'Tillgänglighetskvalitet kräver både manuell granskning och automatiskt stöd.',
					items: [
						'Tangentbordsgranskning av primär navigation och interaktiva element.',
						'Granskning av fokusmarkering.',
						'Automatiserade tillgänglighetskontroller där de tillför värde.',
					],
				},
				{
					title: 'Vad som bör bli mer synligt',
					description:
						'Webbplatsen bör med tiden visa mer konkret bevis på tillgänglighetsvalidering.',
					items: [
						'En enkel sammanfattning av granskningar.',
						'En kort not om manuella screen reader-kontroller.',
						'En liten checklista för att lägga till nya sidor utan regressioner.',
					],
				},
			],
		},
		{
			title: 'Kända begränsningar',
			cards: [
				{
					title: 'Ärliga begränsningar',
					description:
						'En trovärdig tillgänglighetssida bör erkänna vad som ännu inte är fullt demonstrerat.',
					items: [
						'Webbplatsen är liten, så alla avancerade tillgänglighetsmönster används inte här.',
						'Påståenden om tillgänglighet bör stå i proportion till vad som faktiskt kontrollerats.',
						'Ett fullständigt konformitetsanspråk skulle kräva mer formell validering.',
					],
				},
			],
		},
		{
			title: 'Hur tillgänglighet skulle kunna skala',
			cards: [
				{
					title: 'Att växa tillgänglighetsprocessen',
					description:
						'Om webbplatsen eller systemet växte bör tillgänglighetsprocessen växa med den.',
					items: [
						'Lägg till tillgänglighetskontroller i CI.',
						'Gör förväntningar på komponentnivå explicita.',
						'Granska fokusstyrning och interaktionsbeteende när nya UI-mönster introduceras.',
					],
				},
			],
		},
	],
	footnote:
		'Tillgänglighetskvalitet är som starkast när den blir en del av det normala ingenjörsarbetet.',
} as const;

export default sv;
