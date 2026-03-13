import { usePageData } from '../../app/page-data.ts';
import GenericPage from '../../shared/generic-page/index.tsx';

const Home = () => {
	const pageData = usePageData('home');

	if (!pageData) {
		return null;
	}

	return <GenericPage layout="entrypoint-card" pageData={pageData} />;
};

export default Home;
