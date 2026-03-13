import PresentationalCard from '../../presentational-card/index.tsx';
import type { CardLayoutPageData } from '../../types.ts';
import './style.scss';

interface CardLayoutProps {
	pageData: CardLayoutPageData;
}

const CardLayout = ({ pageData }: CardLayoutProps) => {
	return (
		<div className="card-layout">
			<section className="section card-layout__section">
				<h1 className="card-layout__section-heading">{pageData.title}</h1>
				{pageData.paragraphs.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</section>
			{pageData.sections.map((section) => (
				<section className="card-layout__section" key={section.title}>
					<h2>{section.title}</h2>
					<div className="card-layout__grid">
						{section.cards.map((card) => (
							<PresentationalCard
								key={card.title}
								title={card.title}
								description={card.description}
								className="card-layout__card"
							>
								<ul>
									{card.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</PresentationalCard>
						))}
					</div>
				</section>
			))}
			{pageData.footnote && (
				<section className="card-layout__section">
					<p className="card-layout__footnote">
						<small>{pageData.footnote}</small>
					</p>
				</section>
			)}
		</div>
	);
};

export default CardLayout;
