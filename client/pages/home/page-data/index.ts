import type { Locale } from '../../../i18n/index.tsx';
import en from './en.ts';
import sv from './sv.ts';

export type HomePageData = {
	route: {
		label: string;
		meta: {
			title: string;
			description: string;
		};
	};
	banner: {
		name: string;
		careerDescription: string;
		subtitle: string;
		careerStatus: string;
		profileImageAlt: string;
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
	};
	intro: {
		title: string;
		description: string;
	};
	workExperienceTitle: string;
	workExperience: readonly {
		company: string;
		logoAlt: string;
		roles: readonly {
			title: string;
			dates: string;
			description: string;
			shortDescription: string;
		}[];
	}[];
	skillsTitle: string;
	skills: readonly {
		title: string;
		items: readonly string[];
	}[];
};

const homePageData: Record<Locale, HomePageData> = {
	en,
	sv,
};

export default homePageData;
