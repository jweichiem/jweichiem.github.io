import { createElement } from 'react';
import SkillsList from '../skills-list';
import './style.scss';

type ProfileBannerProps = {
	title: string;
	careerDescription: string;
	subtitle: string;
	careerStatus: string;
	contactDetails: readonly {
		label: string;
		href: string;
	}[];
	desktopSections: {
		experienceFocus: {
			items: readonly {
				label: string;
				value: string;
			}[];
		};
		keySkills: {
			title: string;
			items: readonly string[];
		};
	};
	titleTagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	profileImage: {
		src: string;
		alt: string;
	} & React.ImgHTMLAttributes<HTMLImageElement>;
};

const ProfileBanner: React.FC<ProfileBannerProps> = ({
	profileImage,
	title,
	careerDescription,
	subtitle,
	contactDetails,
	careerStatus,
	desktopSections,
	titleTagName = 'h1',
}) => {
	return (
		<section className="profile-banner">
			<div className="page-layout profile-banner__layout">
				<div className="profile-banner__avatar">
					<img
						className="profile-banner__image"
						src={profileImage.src}
						alt={profileImage.alt}
					/>
				</div>
				<div className="profile-banner__description">
					{createElement(
						titleTagName,
						{ className: 'profile-banner__title' },
						title,
						<span className="profile-banner__career-description">
							{careerDescription}
						</span>,
					)}
					<p className="profile-banner__subtitle">{subtitle}</p>
					<p className="profile-banner__career-status">{careerStatus}</p>
				</div>
			</div>
			<ul className="profile-banner__contact-details page-layout">
				{contactDetails.map((contact) => (
					<li key={contact.label} className="profile-banner__contact-info">
						<a
							href={contact.href}
							className="profile-banner__contact-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							{contact.label}
						</a>
					</li>
				))}
			</ul>
			<div className="profile-banner__desktop-sections page-layout">
				<section className="profile-banner__desktop-section">
					<div className="profile-banner__desktop-metrics">
						{desktopSections.experienceFocus.items.map((item) => (
							<div className="profile-banner__desktop-metric" key={item.label}>
								<h2 className="profile-banner__desktop-heading">
									{item.label}
								</h2>
								<p className="profile-banner__desktop-value">{item.value}</p>
							</div>
						))}
					</div>
				</section>
				<section className="profile-banner__desktop-section">
					<h2 className="profile-banner__desktop-heading">
						{desktopSections.keySkills.title}
					</h2>
					<SkillsList
						items={desktopSections.keySkills.items}
						className="profile-banner__desktop-skills"
					/>
				</section>
			</div>
		</section>
	);
};

export default ProfileBanner;
