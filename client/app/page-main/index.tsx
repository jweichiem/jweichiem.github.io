import 'modern-normalize/modern-normalize.css';
import './style.scss';
import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import {
	createLocalizedPath,
	supportedLocales,
	useI18n,
} from '../../i18n/index.tsx';
import { applyRouteMeta } from '../meta.ts';
import { appRoutes, fallbackRoute } from '../routes.ts';

const Main = () => {
	const [location] = useLocation();
	const { locale } = useI18n();

	useEffect(() => {
		applyRouteMeta(location, locale);
	}, [locale, location]);

	return (
		<main className="page-main">
			<Switch>
				{appRoutes.flatMap((route) =>
					supportedLocales.map((supportedLocale) => (
						<Route
							key={`${supportedLocale}:${route.path}`}
							path={createLocalizedPath(route.path, supportedLocale)}
							component={route.component}
						/>
					)),
				)}
				<Route component={fallbackRoute.component} />
			</Switch>
		</main>
	);
};

export default Main;
