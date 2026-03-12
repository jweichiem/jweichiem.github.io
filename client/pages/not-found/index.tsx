import { Link } from 'wouter';
import { usePageData } from '../../app/page-data.ts';
import { useI18n } from '../../i18n/index.tsx';
import './style.scss';

const NotFound = () => {
	const { localizePath } = useI18n();
	const pageData = usePageData('not-found');

	if (!pageData) {
		return null;
	}

	return (
		<section className="section">
			<h1>{pageData.title}</h1>
			<p>{pageData.description}</p>
			<p>
				<Link href={localizePath('/')}>{pageData.backHome}</Link>
			</p>
		</section>
	);
};

export default NotFound;
