import './style.scss';
import ikeaLogo from '../../assets/ikea-logo.svg';
import knowItLogo from '../../assets/knowit-logo.svg';
import luxidLogo from '../../assets/luxid-logo.svg';
import placeholder from '../../assets/placeholder.svg';
import { useI18n } from '../../i18n/index.tsx';
import ProfileBanner from '../../shared/profile-banner';
import homePageData from './page-data/index.ts';

const Home = () => {
	const { locale } = useI18n();
	const workExperienceLogos = [ikeaLogo, knowItLogo, luxidLogo];
	const pageData = homePageData[locale];

	return (
		<>
			<ProfileBanner
				title={pageData.banner.name}
				careerDescription={pageData.banner.careerDescription}
				subtitle={pageData.banner.subtitle}
				profileImage={{
					src: placeholder,
					alt: pageData.banner.profileImageAlt,
				}}
				careerStatus={pageData.banner.careerStatus}
				contactDetails={[
					{
						label: pageData.banner.contactGithub,
						href: 'https://github.com/jweichiem',
					},
				]}
			/>
			<section className="page-layout home-layout">
				<h2>{pageData.intro.title}</h2>
				<p>{pageData.intro.description}</p>
			</section>
			<div className="page-layout home-layout">
				<section className="">
					<h3>{pageData.workExperienceTitle}</h3>
					{pageData.workExperience.map((experience, experienceIndex) => (
						<div className="work-experience" key={experience.company}>
							<div className="work-experience__logo-wrapper">
								<img
									className="work-experience__logo"
									src={workExperienceLogos[experienceIndex]}
									alt={experience.logoAlt}
								/>
								<h4 className="work-experience__company">
									{experience.company}
								</h4>
							</div>
							{experience.roles.map((role) => (
								<div
									className="work-experience__role"
									key={`${role.title}-${role.dates}`}
								>
									<div className="work-experience__role-info">
										<p className="work-experience__text" lang="en">
											{role.title}
										</p>
										<p className="work-experience__text work-experience__text--secondary">
											{role.dates}
										</p>
										<p className="work-experience__text work-experience__text--tertiary">
											{role.description}
										</p>
									</div>
								</div>
							))}
						</div>
					))}
				</section>
			</div>
			<div className="page-layout home-layout">
				<section className="card card--skills">
					<h3>{pageData.skillsTitle}</h3>
					{pageData.skills.map((skill) => (
						<div key={skill.title}>
							<h4>{skill.title}</h4>
							<ul className="skills">
								{skill.items.map((item) => (
									<li className="skills__item" key={item}>
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</section>
			</div>
		</>
	);
};

export default Home;
