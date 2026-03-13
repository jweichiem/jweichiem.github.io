import ikeaLogo from '../../../assets/ikea-logo.svg';
import knowItLogo from '../../../assets/knowit-logo.svg';
import luxidLogo from '../../../assets/luxid-logo.svg';
import SkillsList from '../../skills-list/index.tsx';
import type { CvPageData } from '../../types.ts';
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

interface CvLayoutProps {
	pageData: CvPageData;
}

const CvLayout = ({ pageData }: CvLayoutProps) => {
	return (
		<div className="cv-layout">
			<section className="section cv-layout__section">
				<h1 className="cv-layout__section-heading">{pageData.intro.title}</h1>
				<p>{pageData.intro.description}</p>
			</section>
			<section className="cv-layout__section">
				<h2>{pageData.workExperienceTitle}</h2>
				{pageData.workExperience.map((experience, experienceIndex) => {
					const logo = workExperienceLogos[experienceIndex];

					return (
						<div
							className="cv-layout__work-experience"
							key={experience.company}
						>
							<div className="cv-layout__work-experience-logo-wrapper">
								<img
									className="cv-layout__work-experience-logo"
									src={logo.src}
									alt={experience.logoAlt}
									width={logo.width}
									height={logo.height}
								/>
								<h3 className="cv-layout__work-experience-company">
									{experience.company}
								</h3>
							</div>
							{experience.roles.map((role) => (
								<div
									className="cv-layout__work-experience-role"
									key={`${role.title}-${role.dates}`}
								>
									<div className="cv-layout__work-experience-role-info">
										<p className="cv-layout__work-experience-text" lang="en">
											{role.title}
										</p>
										<p className="cv-layout__work-experience-text cv-layout__work-experience-text--secondary">
											{role.dates}
										</p>
										<p className="cv-layout__work-experience-text cv-layout__work-experience-text--tertiary">
											{role.shortDescription}
										</p>
									</div>
								</div>
							))}
						</div>
					);
				})}
			</section>
			<section className="presentational-card cv-layout__section cv-layout__skills">
				<h2>{pageData.skillsTitle}</h2>
				{pageData.skills.map((skill) => (
					<div key={skill.title}>
						<h3>{skill.title}</h3>
						<SkillsList items={skill.items} />
					</div>
				))}
			</section>
		</div>
	);
};

export default CvLayout;
