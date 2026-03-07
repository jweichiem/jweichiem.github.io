import './index.scss';
import { Link, Route, Switch } from 'wouter';
import Home from './Home.tsx';
import About from './About.tsx';

export interface RouteMeta {
	title: string;
	description: string;
}

const normalizePath = (inputPath: string) => {
	const pathWithoutQuery = inputPath.split('?')[0].split('#')[0];
	const normalizedPath = pathWithoutQuery.replace(/\/+$/, '');
	return normalizedPath === '' ? '/' : normalizedPath;
};

export const getRouteMeta = (path: string): RouteMeta => {
	const normalizedPath = normalizePath(path);

	if (normalizedPath === '/about') {
		return {
			title: 'About | Joakim Weise-Chiem',
			description:
				'A short page with route-specific metadata.',
		};
	}

	if (normalizedPath === '/') {
		return {
			title: 'Joakim Weise-Chiem',
			description: 'Personal website and profile for Joakim Weise-Chiem.',
		};
	}

	return {
		title: 'Page Not Found | Joakim Weise-Chiem',
		description: 'The requested page could not be found.',
	};
};

const NotFound = () => {
	return (
		<div className="page">
			<h1>Not Found</h1>
			<p>The page you requested does not exist.</p>
			<p>
				<Link href="/">Go back home</Link>
			</p>
		</div>
	);
};

const App = () => {
	return (
		<Switch>
			<Route path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route component={NotFound} />
		</Switch>
	);
};

export default App;
