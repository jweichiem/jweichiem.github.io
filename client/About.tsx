import { Link } from 'wouter';
import './Home.scss';

const About = () => {
	return (
		<div className="page">
			<h1>About</h1>
			<p>A short page with route-specific metadata.</p>
			<p>
				<Link href="/">Back to home</Link>
			</p>
		</div>
	);
};

export default About;
