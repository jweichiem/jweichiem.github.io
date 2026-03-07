import { Link } from 'wouter';
import './style.scss';

const About = () => {
	return (
		<section className="section">
			<h1>About</h1>
			<p>A short page with route-specific metadata.</p>
			<p>
				<Link href="/">Back to home</Link>
			</p>
		</section>
	);
};

export default About;
