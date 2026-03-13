import { usePageData } from '../../app/page-data.ts';
import GenericPage from '../../shared/generic-page/index.tsx';
import EngineeringRouteRegistryShowcase from './route-registry-showcase/index.tsx';

const Engineering = () => {
	const pageData = usePageData('engineering');

	if (!pageData) {
		return null;
	}

	return (
		<GenericPage layout="card" pageData={pageData}>
			<EngineeringRouteRegistryShowcase />
		</GenericPage>
	);
};

export default Engineering;
