import './style.scss';
import { appRoutes } from '../routes';
import { Link } from 'wouter';

const Header = () => {
	return (
		<header className="page-header ">
			<div className="page-layout page-header__content">
				<div className="page-header__logo">TEMP</div>
				<nav className="page-header__nav">
					<ul className="page-header__nav-list">
						{appRoutes.map((appRoute) => (
							<li key={appRoute.label} className="page-header__nav-list-item">
								<Link href={appRoute.path}>{appRoute.label}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
