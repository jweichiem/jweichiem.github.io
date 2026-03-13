import type { Locale } from '../../../i18n/index.tsx';
import type { CvPageData } from '../../../shared/types.ts';
import en from './en.ts';
import sv from './sv.ts';

export type { CvPageData };

const cvPageData: Record<Locale, CvPageData> = {
	en,
	sv,
};

export default cvPageData;
