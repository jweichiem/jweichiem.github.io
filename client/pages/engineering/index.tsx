import { usePageData } from '../../app/page-data.ts';
import GenericPage from '../../shared/generic-page/index.tsx';

const Engineering = () => {
	const pageData = usePageData('engineering');

	if (!pageData) {
		return null;
	}

	return <GenericPage layout="card" pageData={pageData} />;
};

export default Engineering;
