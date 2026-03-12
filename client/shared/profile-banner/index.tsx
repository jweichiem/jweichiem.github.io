import { createElement } from 'react';
import './style.scss';

type ProfileBannerProps = {
	title: string;
	careerDescription: string;
	subtitle: string;
	careerStatus: string;
	contactDetails: {
		label: string;
		href: string;
	}[];
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
		</section>
	);
};

export default ProfileBanner;
