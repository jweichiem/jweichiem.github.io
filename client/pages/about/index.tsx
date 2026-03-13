import { usePageData } from '../../app/page-data.ts';
import GenericPage from '../../shared/generic-page/index.tsx';

const About = () => {
	const pageData = usePageData('about');

	if (!pageData) {
		return null;
	}

	return <GenericPage layout="card" pageData={pageData} />;
};

export default About;
