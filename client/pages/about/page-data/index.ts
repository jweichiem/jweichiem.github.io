import type { Locale } from '../../../i18n/index.tsx';
import en from './en.ts';
import sv from './sv.ts';

export type AboutPageData = {
	route: {
		label: string;
		meta: {
			title: string;
			description: string;
		};
	};
	title: string;
	paragraphs: readonly string[];
	footnote: string;
	sections: readonly {
		title: string;
		cards: readonly {
			title: string;
			description: string;
			items: readonly string[];
		}[];
	}[];
};

const aboutPageData: Record<Locale, AboutPageData> = {
	en,
	sv,
};

export default aboutPageData;
