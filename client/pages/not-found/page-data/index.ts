import type { Locale } from '../../../i18n/index.tsx';
import en from './en.ts';
import sv from './sv.ts';

export type NotFoundPageData = {
	title: string;
	description: string;
	backHome: string;
};

const notFoundPageData: Record<Locale, NotFoundPageData> = {
	en,
	sv,
};

export default notFoundPageData;
