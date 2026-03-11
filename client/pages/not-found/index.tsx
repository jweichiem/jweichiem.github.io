import { Link } from 'wouter';
import './style.scss';
import { useI18n } from '../../i18n/index.tsx';
import notFoundPageData from './page-data/index.ts';

const NotFound = () => {
	const { locale, localizePath } = useI18n();
	const pageData = notFoundPageData[locale];

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
