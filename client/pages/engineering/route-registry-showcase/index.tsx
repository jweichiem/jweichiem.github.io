import { useI18n } from '../../../i18n/index.tsx';
import PresentationalCard from '../../../shared/presentational-card/index.tsx';
import './style.scss';

const routeRegistryExcerpt = `export const appRoutes: AppRoute[] = [
  {
    path: '/',
    page: 'home',
    component: Home,
    getLabel: (locale) => homeRouteCopy[locale].label,
    getMeta: (locale) => homeRouteCopy[locale].meta,
    prerender: true,
  },
  {
    path: '/engineering',
    page: 'engineering',
    component: Engineering,
    getLabel: (locale) => engineeringRouteCopy[locale].label,
    getMeta: (locale) => engineeringRouteCopy[locale].meta,
    prerender: true,
  },
];`;

const copy = {
	en: {
		sectionTitle: 'Shared route registry in practice',
		excerptTitle: 'Route registry excerpt',
		excerptCaption:
			'Visual representation of the shared app route registry that drives navigation, metadata, rendering, and prerendering.',
		excerptDescription:
			'This is the central pattern: one explicit route definition carries path, rendering, metadata, navigation, and prerender intent together.',
		excerptPoints: [
			'The same registry feeds header navigation.',
			'The same registry resolves route metadata for SSR and client navigation.',
			'The same registry determines which localized pages are prerendered for static output.',
		],
	},
	sv: {
		sectionTitle: 'Delat route-register i praktiken',
		excerptTitle: 'Utdrag ur route-registret',
		excerptCaption:
			'Visuell representation av det delade app-route-registret som styr navigation, metadata, rendering och prerendering.',
		excerptDescription:
			'Det här är det centrala mönstret: en explicit route-definition bär path, rendering, metadata, navigation och prerender-intention tillsammans.',
		excerptPoints: [
			'Samma register matar header-navigationen.',
			'Samma register används för route-metadata i SSR och vid klientnavigation.',
			'Samma register avgör vilka lokaliserade sidor som prerenderas för statisk output.',
		],
	},
} as const;

const EngineeringRouteRegistryShowcase = () => {
	const { locale } = useI18n();
	const pageCopy = copy[locale];

	return (
		<section className="card-layout__section route-registry-showcase">
			<h2>{pageCopy.sectionTitle}</h2>
			<div className="card-layout__grid">
				<PresentationalCard
					title={pageCopy.excerptTitle}
					description={pageCopy.excerptDescription}
					className="card-layout__card route-registry-showcase__card"
				>
					<figure className="route-registry-showcase__figure">
						<pre
							className="route-registry-showcase__code-block"
							aria-hidden="true"
						>
							<code>{routeRegistryExcerpt}</code>
						</pre>
						<figcaption className="sr-only">
							{pageCopy.excerptCaption}
						</figcaption>
					</figure>
					<ul>
						{pageCopy.excerptPoints.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</PresentationalCard>
			</div>
		</section>
	);
};

export default EngineeringRouteRegistryShowcase;
