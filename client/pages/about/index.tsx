import { usePageData } from '../../app/page-data.ts';
import './style.scss';

const About = () => {
	const pageData = usePageData('about');

	if (!pageData) {
		return null;
	}

	return (
		<>
			<section className="section page-layout about-layout">
				<h1>{pageData.title}</h1>
				{pageData.paragraphs.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</section>
			{pageData.sections.map((section) => (
				<section className="page-layout about-layout" key={section.title}>
					<h2>{section.title}</h2>
					<div className="about-grid">
						{section.cards.map((card) => (
							<section className="card about-card" key={card.title}>
								<h3>{card.title}</h3>
								<p>{card.description}</p>
								<ul>
									{card.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</section>
						))}
					</div>
				</section>
			))}
			<section className="page-layout about-layout">
				<p className="about-footnote">
					<small>{pageData.footnote}</small>
				</p>
			</section>
		</>
	);
};

export default About;
