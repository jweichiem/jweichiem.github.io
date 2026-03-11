import type { Locale } from '../../../i18n/index.tsx';
import en from './en.ts';
import sv from './sv.ts';

export type PageFooterData = {
	copyright: string;
	languageNavigation: string;
	languageLabel: string;
	languages: {
		en: string;
		sv: string;
	};
};

const pageFooterData: Record<Locale, PageFooterData> = {
	en,
	sv,
};

export default pageFooterData;
