import {
	normalizeBasePath,
	prependConfiguredBasePath,
	stripConfiguredBasePath,
} from './base-path-utils.ts';

export {
	normalizeBasePath,
	prependConfiguredBasePath,
	stripConfiguredBasePath,
};

export const basePath = normalizeBasePath(import.meta.env.BASE_URL);

export const stripBasePath = (pathname: string) =>
	stripConfiguredBasePath(pathname, basePath);

export const prependBasePath = (pathname: string) =>
	prependConfiguredBasePath(pathname, basePath);
