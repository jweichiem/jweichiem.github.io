import type { ReactNode } from 'react';
import placeholder from '../../assets/placeholder.svg';
import { useI18n } from '../../i18n/index.tsx';
import ProfileBanner from '../profile-banner/index.tsx';
import pageBannerData from '../profile-banner/page-data/index.ts';
import type {
	CardLayoutPageData,
	CvPageData,
	EntrypointCardLayoutPageData,
} from '../types.ts';
import CardLayout from './card-layout/index.tsx';
import CvLayout from './cv-layout/index.tsx';
import EntrypointCardLayout from './entrypoint-card-layout/index.tsx';
import './style.scss';

type GenericPageProps =
	| {
			layout: 'card';
			pageData: CardLayoutPageData;
			children?: ReactNode;
	  }
	| {
			layout: 'entrypoint-card';
			pageData: EntrypointCardLayoutPageData;
			children?: never;
	  }
	| {
			layout: 'cv';
			pageData: CvPageData;
			children?: never;
	  };

const GenericPage = ({ layout, pageData, children }: GenericPageProps) => {
	const { locale } = useI18n();
	const bannerData = pageBannerData[locale];
	const profileBannerData = layout === 'cv' ? pageData.banner : bannerData;
	const profileBannerTitle =
		layout === 'cv' ? pageData.banner.name : bannerData.title;

	return (
		<div className="generic-page">
			<ProfileBanner
				title={profileBannerTitle}
				careerDescription={profileBannerData.careerDescription}
				subtitle={profileBannerData.subtitle}
				profileImage={{
					src: placeholder,
					alt: profileBannerData.profileImageAlt,
				}}
				careerStatus={profileBannerData.careerStatus}
				contactDetails={profileBannerData.contactDetails}
				desktopSections={profileBannerData.desktopSections}
				titleTagName={layout === 'entrypoint-card' ? 'h1' : 'h2'}
			/>
			<div className="page-layout generic-page__layout">
				{layout === 'entrypoint-card' && (
					<EntrypointCardLayout pageData={pageData} />
				)}
				{layout === 'card' && (
					<CardLayout pageData={pageData}>{children}</CardLayout>
				)}
				{layout === 'cv' && <CvLayout pageData={pageData} />}
			</div>
		</div>
	);
};

export default GenericPage;
