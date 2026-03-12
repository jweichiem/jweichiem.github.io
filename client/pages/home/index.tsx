import ikeaLogo from '../../assets/ikea-logo.svg';
import knowItLogo from '../../assets/knowit-logo.svg';
import luxidLogo from '../../assets/luxid-logo.svg';
import placeholder from '../../assets/placeholder.svg';
import { usePageData } from '../../app/page-data.ts';
import ProfileBanner from '../../shared/profile-banner';
import SkillsList from '../../shared/skills-list';
import './style.scss';

const WORK_LOGO_MAX_WIDTH = 56;

const workExperienceLogos = [
	{
		src: ikeaLogo,
		width: WORK_LOGO_MAX_WIDTH,
		height: 23,
	},
	{
		src: knowItLogo,
		width: WORK_LOGO_MAX_WIDTH,
		height: 13,
	},
	{
		src: luxidLogo,
		width: WORK_LOGO_MAX_WIDTH,
		height: 22,
	},
] as const;

const Home = () => {
	const pageData = usePageData('home');

	if (!pageData) {
		return null;
	}

	return (
		<div className="home-page">
			<ProfileBanner
				title={pageData.banner.name}
				careerDescription={pageData.banner.careerDescription}
				subtitle={pageData.banner.subtitle}
				profileImage={{
					src: placeholder,
					alt: pageData.banner.profileImageAlt,
				}}
				careerStatus={pageData.banner.careerStatus}
				contactDetails={pageData.banner.contactDetails}
				desktopSections={pageData.banner.desktopSections}
			/>
			<div className="page-layout home-layout">
				<section>
					<h2>{pageData.intro.title}</h2>
					<p>{pageData.intro.description}</p>
				</section>
				<section>
					<h3>{pageData.workExperienceTitle}</h3>
					{pageData.workExperience.map((experience, experienceIndex) => {
						const logo = workExperienceLogos[experienceIndex];

						return (
							<div className="work-experience" key={experience.company}>
								<div className="work-experience__logo-wrapper">
									<img
										className="work-experience__logo"
										src={logo.src}
										alt={experience.logoAlt}
										width={logo.width}
										height={logo.height}
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
												{role.shortDescription}
											</p>
										</div>
									</div>
								))}
							</div>
						);
					})}
				</section>
				<section className="card card--skills">
					<h3>{pageData.skillsTitle}</h3>
					{pageData.skills.map((skill) => (
						<div key={skill.title}>
							<h4>{skill.title}</h4>
							<SkillsList items={skill.items} />
						</div>
					))}
				</section>
			</div>
		</div>
	);
};

export default Home;
