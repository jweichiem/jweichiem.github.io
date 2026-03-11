import './style.scss';
import { useI18n } from '../../i18n/index.tsx';
import pageFooterData from './page-data/index.ts';

const Footer = () => {
	const { locale } = useI18n();
	const footerData = pageFooterData[locale];

	return (
		<footer className="page-footer">
			<div className="page-layout">
				<p>{footerData.copyright}</p>
			</div>
		</footer>
	);
};

export default Footer;
