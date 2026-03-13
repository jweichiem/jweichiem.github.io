import { useEffect, useState } from 'react';
import type { Locale } from '../i18n/index.tsx';
import { useI18n } from '../i18n/index.tsx';
import type { AboutPageData } from '../pages/about/page-data/index.ts';
import type { AccessibilityPageData } from '../pages/accessibility/page-data/index.ts';
import type { CvPageData } from '../pages/cv/page-data/index.ts';
import type { EngineeringPageData } from '../pages/engineering/page-data/index.ts';
import type { HomePageData } from '../pages/home/page-data/index.ts';
import type { NotFoundPageData } from '../pages/not-found/page-data/index.ts';

export type PageKey =
	| 'about'
	| 'home'
	| 'not-found'
	| 'accessibility'
	| 'engineering'
	| 'cv';

export interface PageDataMap {
	about: AboutPageData;
	home: HomePageData;
	'not-found': NotFoundPageData;
	accessibility: AccessibilityPageData;
	engineering: EngineeringPageData;
	cv: CvPageData;
}

type PageDataLoader<TPageKey extends PageKey> = (
	locale: Locale,
) => Promise<PageDataMap[TPageKey]>;

const pageDataLoaders: { [TPageKey in PageKey]: PageDataLoader<TPageKey> } = {
	about: async (locale) =>
		locale === 'sv'
			? (await import('../pages/about/page-data/sv.ts')).default
			: (await import('../pages/about/page-data/en.ts')).default,
	home: async (locale) =>
		locale === 'sv'
			? (await import('../pages/home/page-data/sv.ts')).default
			: (await import('../pages/home/page-data/en.ts')).default,
	'not-found': async (locale) =>
		locale === 'sv'
			? (await import('../pages/not-found/page-data/sv.ts')).default
			: (await import('../pages/not-found/page-data/en.ts')).default,
	accessibility: async (locale) =>
		locale === 'sv'
			? (await import('../pages/accessibility/page-data/sv.ts')).default
			: (await import('../pages/accessibility/page-data/en.ts')).default,
	engineering: async (locale) =>
		locale === 'sv'
			? (await import('../pages/engineering/page-data/sv.ts')).default
			: (await import('../pages/engineering/page-data/en.ts')).default,
	cv: async (locale) =>
		locale === 'sv'
			? (await import('../pages/cv/page-data/sv.ts')).default
			: (await import('../pages/cv/page-data/en.ts')).default,
};

const pageDataCache = new Map<string, PageDataMap[PageKey]>();

declare global {
	interface Window {
		__PAGE_DATA__?: Partial<Record<string, PageDataMap[PageKey]>>;
	}
}

const createCacheKey = (page: PageKey, locale: Locale) => `${page}:${locale}`;

export const getCachedPageData = <TPageKey extends PageKey>(
	page: TPageKey,
	locale: Locale,
) =>
	pageDataCache.get(createCacheKey(page, locale)) as
		| PageDataMap[TPageKey]
		| undefined;

const setCachedPageData = <TPageKey extends PageKey>(
	page: TPageKey,
	locale: Locale,
	data: PageDataMap[TPageKey],
) => {
	pageDataCache.set(createCacheKey(page, locale), data);
	return data;
};

export const loadPageData = async <TPageKey extends PageKey>(
	page: TPageKey,
	locale: Locale,
) => {
	const cachedData = getCachedPageData(page, locale);

	if (cachedData) {
		return cachedData;
	}

	return setCachedPageData(page, locale, await pageDataLoaders[page](locale));
};

export const hydratePageDataCache = (
	data: Partial<Record<string, PageDataMap[PageKey]>>,
) => {
	for (const [key, value] of Object.entries(data)) {
		if (value) {
			pageDataCache.set(key, value);
		}
	}
};

export const hydratePageDataCacheFromWindow = () => {
	if (typeof window === 'undefined' || !window.__PAGE_DATA__) {
		return;
	}

	hydratePageDataCache(window.__PAGE_DATA__);
};

const escapeScriptValue = (value: string) =>
	value.replaceAll('<', '\\u003c').replaceAll('</script', '<\\/script');

export const serializePageDataCache = () => {
	if (pageDataCache.size === 0) {
		return '';
	}

	return `<script>window.__PAGE_DATA__=${escapeScriptValue(
		JSON.stringify(Object.fromEntries(pageDataCache.entries())),
	)}</script>`;
};

export const usePageData = <TPageKey extends PageKey>(page: TPageKey) => {
	const { locale } = useI18n();
	const [data, setData] = useState<PageDataMap[TPageKey] | undefined>(() =>
		getCachedPageData(page, locale),
	);

	useEffect(() => {
		const cachedData = getCachedPageData(page, locale);

		if (cachedData) {
			setData(cachedData);
			return;
		}

		let cancelled = false;

		void loadPageData(page, locale).then((loadedData) => {
			if (!cancelled) {
				setData(loadedData);
			}
		});

		return () => {
			cancelled = true;
		};
	}, [locale, page]);

	return data;
};
