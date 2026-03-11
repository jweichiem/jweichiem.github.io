import { Router, useLocation } from 'wouter';
import { getLocaleFromPathname, I18nProvider } from '../i18n/index.tsx';
import Footer from './page-footer/index.tsx';
import Header from './page-header/index.tsx';
import Main from './page-main/index.tsx';
import { ThemeProvider } from './theme.tsx';

interface CreateAppTreeOptions {
	pathname: string;
	search: string;
}

const LocalizedAppTree = () => {
	const [location] = useLocation();
	const locale = getLocaleFromPathname(location);

	return (
		<I18nProvider locale={locale}>
			<ThemeProvider>
				<Header />
				<Main />
				<Footer />
			</ThemeProvider>
		</I18nProvider>
	);
};

export const createAppTree = ({ pathname, search }: CreateAppTreeOptions) => {
	return (
		<Router ssrPath={pathname} ssrSearch={search}>
			<LocalizedAppTree />
		</Router>
	);
};
