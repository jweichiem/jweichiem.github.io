import { Link } from 'wouter';
import './style.scss';

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

export default NotFound;
