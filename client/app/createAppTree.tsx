import { Router } from 'wouter';
import { I18nProvider, type Locale } from '../i18n/index.tsx';
import Footer from './page-footer/index.tsx';
import Header from './page-header/index.tsx';
import Main from './page-main/index.tsx';

interface CreateAppTreeOptions {
	locale: Locale;
	pathname: string;
	search: string;
}

export const createAppTree = ({
	locale,
	pathname,
	search,
}: CreateAppTreeOptions) => {
	return (
		<I18nProvider locale={locale}>
			<Router ssrPath={pathname} ssrSearch={search}>
				<Header />
				<Main />
				<Footer />
			</Router>
		</I18nProvider>
	);
};
