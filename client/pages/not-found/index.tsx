import { Link } from 'wouter';
import './style.scss';

const NotFound = () => {
	return (
		<section className="section">
			<h1>Not Found</h1>
			<p>The page you requested does not exist.</p>
			<p>
				<Link href="/">Go back home</Link>
			</p>
		</section>
	);
};

export default NotFound;
