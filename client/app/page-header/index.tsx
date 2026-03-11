import './style.scss';
import { Link, useLocation } from 'wouter';
import { stripLocaleFromPathname, useI18n } from '../../i18n/index.tsx';
import { appRoutes } from '../routes';
import pageHeaderData from './page-data/index.ts';

const normalizePath = (inputPath: string) => {
	const pathWithoutQuery = stripLocaleFromPathname(
		inputPath.split('?')[0].split('#')[0],
	);
	const normalizedPath = pathWithoutQuery.replace(/\/+$/, '');
	return normalizedPath === '' ? '/' : normalizedPath;
};

const Header = () => {
	const [location] = useLocation();
	const currentPath = normalizePath(location);
	const { locale, localizePath } = useI18n();
	const headerData = pageHeaderData[locale];

	return (
		<header className="page-header">
			<div className="page-layout page-header__content">
				<div className="page-header__logo">
					<Link
						href={localizePath('/')}
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
						<span className="sr-only">{headerData.logoLabel}</span>
					</Link>
				</div>
				<nav
					className="page-header__nav"
					aria-label={headerData.primaryNavigation}
				>
					<ul className="page-header__nav-list">
						{appRoutes.map((appRoute) => (
							<li key={appRoute.path} className="page-header__nav-list-item">
								<Link
									aria-current={
										normalizePath(appRoute.path) === currentPath
											? 'page'
											: undefined
									}
									className="page-header__link"
									href={localizePath(appRoute.path)}
								>
									{appRoute.getLabel(locale)}
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
