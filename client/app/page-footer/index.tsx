import './style.scss';
import { Link, useLocation } from 'wouter';
import {
	createLocalizedPath,
	supportedLocales,
	useI18n,
} from '../../i18n/index.tsx';
import pageFooterData from './page-data/index.ts';

const Footer = () => {
	const [location] = useLocation();
	const { locale } = useI18n();
	const footerData = pageFooterData[locale];
	const currentLocalizedPath = location || '/';

	return (
		<footer className="page-footer">
			<div className="page-layout page-footer__content">
				<div className="page-footer__language-selector">
					<span className="page-footer__language-label">
						{footerData.languageLabel}
					</span>
					<nav aria-label={footerData.languageNavigation}>
						<ul className="page-footer__language-list">
							{supportedLocales.map((supportedLocale) => (
								<li key={supportedLocale}>
									<Link
										aria-current={
											supportedLocale === locale ? 'page' : undefined
										}
										className="page-footer__language-link"
										href={createLocalizedPath(
											currentLocalizedPath,
											supportedLocale,
										)}
										lang={supportedLocale}
									>
										{
											footerData.languages[
												supportedLocale as keyof typeof footerData.languages
											]
										}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<p>{footerData.copyright}</p>
			</div>
		</footer>
	);
};

export default Footer;
