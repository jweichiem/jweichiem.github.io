import { Route, Switch } from 'wouter';
import { appRoutes, fallbackRoute } from './routes.ts';

const App = () => {
	return (
		<Switch>
			{appRoutes.map((route) => (
				<Route key={route.path} path={route.path} component={route.component} />
			))}
			<Route component={fallbackRoute.component} />
		</Switch>
	);
};

export default App;
