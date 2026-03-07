import { Link } from 'wouter';
import './style.scss';

const Home = () => {
	return (
		<div className="page">
			<h1>Joakim Weise-Chiem</h1>
			<p>
				<Link href="/about">Open about page</Link>
			</p>
		</div>
	);
};

export default Home;
