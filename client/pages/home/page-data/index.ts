import type { Locale } from '../../../i18n/index.tsx';
import type { EntrypointCardLayoutPageData } from '../../../shared/types.ts';
import en from './en.ts';
import sv from './sv.ts';

export type HomePageData = EntrypointCardLayoutPageData;

const homePageData: Record<Locale, HomePageData> = {
	en,
	sv,
};

export default homePageData;
