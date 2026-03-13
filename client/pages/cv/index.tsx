import { usePageData } from '../../app/page-data.ts';
import GenericPage from '../../shared/generic-page/index.tsx';

const Cv = () => {
	const pageData = usePageData('cv');

	if (!pageData) {
		return null;
	}

	return <GenericPage layout="cv" pageData={pageData} />;
};

export default Cv;
