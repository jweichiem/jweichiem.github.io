import type { Locale } from '../../../i18n/index.tsx';
import type { GenericPageData } from '../../shared-page-data.ts';
import en from './en.ts';
import sv from './sv.ts';

export type AccessibilityPageData = GenericPageData;

const accessibilityPageData: Record<Locale, AccessibilityPageData> = {
	en,
	sv,
};

export default accessibilityPageData;
