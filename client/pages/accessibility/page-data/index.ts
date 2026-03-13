import type { Locale } from '../../../i18n/index.tsx';
import type { CardLayoutPageData } from '../../../shared/types.ts';
import en from './en.ts';
import sv from './sv.ts';

export type AccessibilityPageData = CardLayoutPageData;

const accessibilityPageData: Record<Locale, AccessibilityPageData> = {
	en,
	sv,
};

export default accessibilityPageData;
