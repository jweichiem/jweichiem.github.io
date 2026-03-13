import type { Locale } from '../../../i18n/index.tsx';
import type { GenericPageData } from '../../shared-page-data.ts';
import en from './en.ts';
import sv from './sv.ts';

export type CvPageData = GenericPageData;

const cvPageData: Record<Locale, CvPageData> = {
	en,
	sv,
};

export default cvPageData;
