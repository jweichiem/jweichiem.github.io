import './style.scss';
import ikeaLogo from '../../assets/ikea-logo.svg';
import knowItLogo from '../../assets/knowit-logo.svg';
import luxidLogo from '../../assets/luxid-logo.svg';
import placeholder from '../../assets/placeholder.svg';

const Home = () => {
	const workExperience = [
		{
			company: 'IKEA',
			logo: ikeaLogo,
			roles: [
				{
					title: 'Senior Software Engineer',
					dates: 'Dec 2022 – Present',
					description:
						'As a Senior Software Engineer at IKEA, I am a founding engineer for Skapa, IKEA’s design system used by more than 200 product teams across the company. My work involves designing and building reusable components, improving accessibility and performance, and creating tooling that helps teams ship customer-facing features faster and more consistently. I enjoy working closely with designers and product teams, solving real product problems with thoughtful technical solutions, and building systems that scale across large organizations.',
				},
				{
					title: 'Software Engineer',
					dates: 'Feb 2020 – Nov 2022',
					description:
						'In 2020 I joined IKEA directly to build a new design system based on the previous design system to drive the redesign of IKEA’s e-commerce experience. As one of the first engineers on the team, I had the opportunity to shape the technical direction of the design system and work closely with designers and product teams across the company to solve real product problems with thoughtful technical solutions.',
				},
			],
		},
		{
			company: 'Cybercom (KnowIT)',
			logo: knowItLogo,
			roles: [
				{
					title: 'Consultant',
					dates: 'Aug 2019 – Jan 2020',
					description:
						'Developed reusable, modular React components styled with SCSS for the first iteration of IKEA’s design system named Fundament, distributed via a private NPM registry (Verdaccio), with a strong focus on accessibility, scalability, and maintainability within a small cross-functional team.',
				},
			],
		},
		{
			company: 'Luxus Worldwide (Luxid Group)',
			logo: luxidLogo,
			roles: [
				{
					title: 'Developer',
					dates: 'Feb 2016 – Aug 2019',
					description:
						'Worked on delivering and maintaining digital experiences for enterprise clients, with a strong focus on developing responsive email templates and HTML5 banners for Luxus’ proprietary marketing automation platform, Drafthorse. Built reusable templates using HTML, CSS, and responsive email best practices, ensuring compatibility across major email clients and devices while supporting marketing and CRM campaigns. Eventually going on an assignment to work for IKEA as a consultant for a team that bridged the ui representation across the three different e-commerce solutions at the time.',
				},
				{
					title: 'CMS Operator',
					dates: 'Feb 2015 – Feb 2016',
					description:
						'Responsible for managing and maintaining multilingual website content for an enterprise client using FatWire CMS and Adobe Experience Manager (AEM). The role included updating content, troubleshooting technical issues, and ensuring websites functioned correctly across browsers and devices. I regularly adjusted CSS and JavaScript to ensure designs behaved as intended, and worked with Pug and YAML-based templating to structure and maintain reusable page layouts.',
				},
				{
					title: 'CMS Operator Intern',
					dates: 'Sep 2014 – Feb 2015',
					description:
						'Assisted in managing and updating website content for a client using FatWire CMS, focusing on content updates and basic SEO improvements. Supported front-end adjustments using HTML, CSS, jQuery, and Bootstrap, helping ensure pages rendered correctly across browsers and devices.',
				},
			],
		},
	];

	const skills = [
		{
			title: 'Frontend / Web',
			items: [
				'React',
				'Vue',
				'Web Components',
				'Storybook',
				'HTML',
				'CSS',
				'SCSS',
				'Typescript',
				'Node.js',
				'Responsive Design',
				'Design System',
				'Design Tokens',
				'Style Dictionary',
			],
		},
		{
			title: 'Tools / Workflow',
			items: [
				'Git',
				'GitHub Workflows',
				'Infrastructure as Code',
				'A/B Testing',
			],
		},
		{
			title: 'Accessibility',
			items: ['WCAG', 'Inclusive Design'],
		},
		{
			title: 'Methodologies',
			items: ['Agile', 'Problem Solving', 'Cross-functional Collaboration'],
		},
		{
			title: 'Languages',
			items: ['English (Fluent)', 'Swedish (Fluent)', 'German (Beginner)'],
		},
	];

	const intro = {
		title: 'Introduction',
		description:
			'I’m a Senior Software Engineer, currently based in Berlin, Germany. I have a lot of experience in frontend architecture, design systems, and building scalable UI components. Over the past several years at IKEA, I’m a founding engineer for Skapa, IKEA’s design system used by more than 200 product teams across the company. My work has involved designing and building reusable components, improving accessibility and performance, and creating tooling that helps teams ship customer-facing features faster and more consistently. I enjoy working closely with designers and product teams, solving real product problems with thoughtful technical solutions, and building systems that scale across large organizations.',
	};

	return (
		<>
			<ProfileBanner
				title="Joakim Weise-Chiem"
				careerDescription="Senior Software Engineer. Available for new opportunities."
				subtitle="Based in Berlin, Germany."
				profileImage={{
					src: placeholder,
					alt: 'Profile picture of Joakim Weise-Chiem',
				}}
				contactDetails={[
					{ label: 'GitHub', href: 'https://github.com/jweichiem' },
				]}
			/>
			<section className="page-layout home-layout">
				<h2>{intro.title}</h2>
				<p>{intro.description}</p>
			</section>
			<div className="page-layout home-layout">
				<section className="card">
					<h3>Work Experience</h3>
					{workExperience.map((experience) => (
						<div className="work-experience" key={experience.company}>
							<div className="work-experience__logo-wrapper">
								<h4 className="work-experience__company">
									{experience.company}
								</h4>
								<img
									className="work-experience__logo"
									src={experience.logo}
									alt={experience.company}
								/>
							</div>
							{experience.roles.map((role) => (
								<div className="work-experience__role" key={role.title}>
									<div className="work-experience__role-info">
										<p>{role.title}</p>
										<p>{role.dates}</p>
									</div>
									{role.description && (
										<div className="work-experience__role-description">
											<p>{role.description}</p>
										</div>
									)}
								</div>
							))}
						</div>
					))}
				</section>
			</div>
			<div className="page-layout home-layout">
				<section className="card card--skills">
					<h3>Skills</h3>
					{skills.map((skill) => (
						<>
							<h4>{skill.title}</h4>
							<ul>
								{skill.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</>
					))}
				</section>
			</div>
		</>
	);
};

export default Home;
