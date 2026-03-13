import type { Locale } from '../../../i18n/index.tsx';
import type { CardLayoutPageData } from '../../../shared/types.ts';
import en from './en.ts';
import sv from './sv.ts';

export type EngineeringPageData = CardLayoutPageData;

const engineeringPageData: Record<Locale, EngineeringPageData> = {
	en,
	sv,
};

export default engineeringPageData;
