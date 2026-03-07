import { Router } from 'wouter';
import Footer from './page-footer/index.tsx';
import Header from './page-header/index.tsx';
import Main from './page-main/index.tsx';

interface CreateAppTreeOptions {
	pathname: string;
	search: string;
}

export const createAppTree = ({ pathname, search }: CreateAppTreeOptions) => {
	return (
		<Router ssrPath={pathname} ssrSearch={search}>
			<Header />
			<Main />
			<Footer />
		</Router>
	);
};
