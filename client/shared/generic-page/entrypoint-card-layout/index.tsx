import CardEntrypoint from '../../card-entrypoint/index.tsx';
import type { EntrypointCardLayoutPageData } from '../../types.ts';
import './style.scss';

interface EntrypointCardLayoutProps {
	pageData: EntrypointCardLayoutPageData;
}

const EntrypointCardLayout = ({ pageData }: EntrypointCardLayoutProps) => {
	return (
		<div className="entrypoint-card-layout">
			<section className="section entrypoint-card-layout__section">
				<h2 className="entrypoint-card-layout__section-heading">
					{pageData.intro.title}
				</h2>
				<p>{pageData.intro.description}</p>
			</section>
			<section className="entrypoint-card-layout__section">
				<h2>{pageData.showcaseTitle}</h2>
				<div className="entrypoint-card-layout__grid">
					{pageData.cards.map((card) => (
						<CardEntrypoint
							key={card.href}
							title={card.title}
							description={card.description}
							href={card.href}
							ctaLabel={card.ctaLabel}
							className="entrypoint-card-layout__card"
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default EntrypointCardLayout;
