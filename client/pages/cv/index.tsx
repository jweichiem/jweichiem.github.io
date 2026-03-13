import { usePageData } from '../../app/page-data.ts';
import './style.scss';

const Cv = () => {
	const pageData = usePageData('cv');

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
		</>
	);
};

export default Cv;
