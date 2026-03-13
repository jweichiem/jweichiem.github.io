export interface ContentPageCard {
	title: string;
	description: string;
	items: readonly string[];
}

export interface ContentPageSection {
	title: string;
	cards: readonly ContentPageCard[];
}

export interface GenericPageBannerData {
	title: string;
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
}

export interface CardLayoutPageData {
	title: string;
	paragraphs: readonly string[];
	sections: readonly ContentPageSection[];
	footnote: string;
}

export interface EntrypointCard {
	title: string;
	description: string;
	href: string;
	ctaLabel: string;
}

export interface EntrypointCardLayoutPageData {
	intro: {
		title: string;
		description: string;
	};
	showcaseTitle: string;
	cards: readonly EntrypointCard[];
}

export interface CvPageData {
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
}
