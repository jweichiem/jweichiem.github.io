import './style.scss';
import { useI18n } from '../../i18n/index.tsx';
import aboutPageData from './page-data/index.ts';

const About = () => {
	const { locale } = useI18n();
	const pageData = aboutPageData[locale];

	return (
		<section className="section page-layout">
			<h1>{pageData.title}</h1>
			<p>{pageData.description}</p>
		</section>
	);
};

export default About;
