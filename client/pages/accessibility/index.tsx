import { usePageData } from '../../app/page-data.ts';
import GenericPage from '../../shared/generic-page/index.tsx';

const Accessibility = () => {
	const pageData = usePageData('accessibility');

	if (!pageData) {
		return null;
	}

	return <GenericPage layout="card" pageData={pageData} />;
};

export default Accessibility;
