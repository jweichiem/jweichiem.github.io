import 'modern-normalize/modern-normalize.css';
import './style.scss';
import { Route, Switch } from 'wouter';
import { appRoutes, fallbackRoute } from '../routes.ts';

const Main = () => {
	return (
		<main className="page-main">
			<Switch>
				{appRoutes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						component={route.component}
					/>
				))}
				<Route component={fallbackRoute.component} />
			</Switch>
		</main>
	);
};

export default Main;
