import './style.scss';
import { Link, useLocation } from 'wouter';
import { appRoutes } from '../routes';

const normalizePath = (inputPath: string) => {
	const pathWithoutQuery = inputPath.split('?')[0].split('#')[0];
	const normalizedPath = pathWithoutQuery.replace(/\/+$/, '');
	return normalizedPath === '' ? '/' : normalizedPath;
};

const Header = () => {
	const [location] = useLocation();
	const currentPath = normalizePath(location);

	return (
		<header className="page-header">
			<div className="page-layout page-header__content">
				<div className="page-header__logo">
					<Link
						href="/"
						aria-current={currentPath === '/' ? 'page' : undefined}
						className="page-header__logo"
					>
						<span className="page-header__letter page-header__letter--j">
							J
						</span>
						<span className="page-header__letter page-header__letter--w">
							W
						</span>
						<span className="page-header__letter page-header__letter--c">
							C
						</span>
						<span className="sr-only">(Initials of Joakim Weise-Chiem)</span>
					</Link>
				</div>
				<nav className="page-header__nav" aria-label="Primary">
					<ul className="page-header__nav-list">
						{appRoutes.map((appRoute) => (
							<li key={appRoute.label} className="page-header__nav-list-item">
								<Link
									aria-current={
										normalizePath(appRoute.path) === currentPath
											? 'page'
											: undefined
									}
									className="page-header__link"
									href={appRoute.path}
								>
									{appRoute.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
