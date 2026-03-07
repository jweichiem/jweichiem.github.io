import { Router } from 'wouter';
import App from './App.tsx';

interface CreateAppTreeOptions {
	pathname: string;
	search: string;
}

export const createAppTree = ({ pathname, search }: CreateAppTreeOptions) => {
	return (
		<Router ssrPath={pathname} ssrSearch={search}>
			<App />
		</Router>
	);
};
