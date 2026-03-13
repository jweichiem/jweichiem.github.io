import type { Locale } from '../../../i18n/index.tsx';
import type { CardLayoutPageData } from '../../../shared/types.ts';
import en from './en.ts';
import sv from './sv.ts';

export type AboutPageData = CardLayoutPageData;

const aboutPageData: Record<Locale, AboutPageData> = {
	en,
	sv,
};

export default aboutPageData;
