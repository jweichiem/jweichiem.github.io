import { createContext, type PropsWithChildren, useContext } from 'react';
import { stripBasePath } from '../shared/base-path.ts';

export const supportedLocales = ['en', 'sv'] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = 'en';

type I18nContextValue = {
	locale: Locale;
	localizePath: (path: string) => string;
};

const i18nContext = createContext<I18nContextValue | null>(null);

export const isSupportedLocale = (value: string): value is Locale =>
	supportedLocales.includes(value as Locale);

const normalizePath = (path: string) => {
	const normalizedPath = path.replace(/\/+$/, '');
	return normalizedPath === '' ? '/' : normalizedPath;
};

export const getLocaleFromSearch = (search: string): Locale => {
	const normalizedSearch = search.startsWith('?') ? search.slice(1) : search;
	const params = new URLSearchParams(normalizedSearch);
	const lang = params.get('lang');

	return lang && isSupportedLocale(lang) ? lang : defaultLocale;
};

export const getLocaleFromPathname = (pathname: string): Locale => {
	const normalizedPathname = stripBasePath(normalizePath(pathname));
	const [, maybeLocale] = normalizedPathname.split('/');
	return maybeLocale && isSupportedLocale(maybeLocale)
		? maybeLocale
		: defaultLocale;
};

export const stripLocaleFromPathname = (pathname: string) => {
	const normalizedPathname = stripBasePath(normalizePath(pathname));
	const [, maybeLocale, ...rest] = normalizedPathname.split('/');

	if (!maybeLocale || !isSupportedLocale(maybeLocale)) {
		return normalizedPathname;
	}

	const localizedPath = `/${rest.join('/')}`;
	return normalizePath(localizedPath);
};

export const getLocaleFromUrl = (url: string): Locale => {
	const parsedUrl = new URL(url, 'http://localhost');
	return (
		getLocaleFromPathname(parsedUrl.pathname) ||
		getLocaleFromSearch(parsedUrl.search)
	);
};

export const createLocalizedPath = (path: string, locale: Locale) => {
	const parsedUrl = new URL(path, 'http://localhost');
	const canonicalPath = stripLocaleFromPathname(parsedUrl.pathname);

	parsedUrl.searchParams.delete('lang');

	const query = parsedUrl.searchParams.toString();
	const localizedPath =
		locale === defaultLocale
			? canonicalPath
			: canonicalPath === '/'
				? `/${locale}`
				: `/${locale}${canonicalPath}`;

	return `${localizedPath}${query ? `?${query}` : ''}${parsedUrl.hash}`;
};

export const I18nProvider = ({
	children,
	locale,
}: PropsWithChildren<{ locale: Locale }>) => {
	return (
		<i18nContext.Provider
			value={{
				locale,
				localizePath: (path: string) => createLocalizedPath(path, locale),
			}}
		>
			{children}
		</i18nContext.Provider>
	);
};

export const useI18n = () => {
	const context = useContext(i18nContext);

	if (!context) {
		throw new Error('useI18n must be used within an I18nProvider');
	}

	return context;
};
