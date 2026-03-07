import { Link } from 'wouter';
import './style.scss';

const Home = () => {
	return (
		<section className="section">
			<h1>Joakim Weise-Chiem</h1>
			<p>Senior Software Engineer</p>
			<p>
				<Link href="/about">Open about page</Link>
			</p>
		</section>
	);
};

export default Home;
