import type { Locale } from '../../../i18n/index.tsx';
import en from './en.ts';
import sv from './sv.ts';

export type PageHeaderData = {
	logoLabel: string;
	primaryNavigation: string;
};

const pageHeaderData: Record<Locale, PageHeaderData> = {
	en,
	sv,
};

export default pageHeaderData;
