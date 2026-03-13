import type { Locale } from '../../../i18n/index.tsx';
import type { GenericPageBannerData } from '../../types.ts';

const pageBannerData: Record<Locale, GenericPageBannerData> = {
	en: {
		title: 'Joakim Weise-Chiem',
		careerDescription: 'Senior Software Engineer',
		subtitle: 'Berlin, Germany.',
		careerStatus: 'Available for work',
		profileImageAlt: 'Profile picture of Joakim Weise-Chiem',
		contactDetails: [
			{
				label: 'GitHub',
				href: 'https://github.com/jweichiem',
			},
			{
				label: 'E-mail',
				href: 'mailto:joakim.chiem@gmail.com',
			},
		],
		desktopSections: {
			experienceFocus: {
				items: [
					{
						label: 'Focus',
						value: 'Frontend architecture',
					},
					{
						label: 'Strength',
						value: 'Design systems and accessibility',
					},
				],
			},
			keySkills: {
				title: 'Themes',
				items: [
					'Engineering',
					'Accessibility',
					'Systems thinking',
					'Frontend quality',
				],
			},
		},
	},
	sv: {
		title: 'Joakim Weise-Chiem',
		careerDescription: 'Senior Software Engineer',
		subtitle: 'Berlin, Tyskland.',
		careerStatus: 'Letar efter en ny roll',
		profileImageAlt: 'Profilbild på Joakim Weise-Chiem',
		contactDetails: [
			{
				label: 'GitHub',
				href: 'https://github.com/jweichiem',
			},
			{
				label: 'E-post',
				href: 'mailto:joakim.chiem@gmail.com',
			},
		],
		desktopSections: {
			experienceFocus: {
				items: [
					{
						label: 'Fokus',
						value: 'Frontendarkitektur',
					},
					{
						label: 'Styrka',
						value: 'Designsystem och tillgänglighet',
					},
				],
			},
			keySkills: {
				title: 'Teman',
				items: [
					'Engineering',
					'Tillgänglighet',
					'Systemtänkande',
					'Frontendkvalitet',
				],
			},
		},
	},
};

export default pageBannerData;
