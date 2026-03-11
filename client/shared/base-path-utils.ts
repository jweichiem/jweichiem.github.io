const normalizePathname = (value: string) => {
	const withLeadingSlash = value.startsWith('/') ? value : `/${value}`;
	const collapsedSlashes = withLeadingSlash.replace(/\/{2,}/g, '/');
	const normalizedPath = collapsedSlashes.replace(/\/+$/, '');
	return normalizedPath === '' ? '/' : normalizedPath;
};

export const normalizeBasePath = (value?: string) => {
	if (!value || value === '/') {
		return '';
	}

	return normalizePathname(value);
};

export const stripConfiguredBasePath = (
	pathname: string,
	configuredBasePath: string,
) => {
	const normalizedPathname = normalizePathname(pathname);
	const normalizedBasePath = normalizeBasePath(configuredBasePath);

	if (!normalizedBasePath) {
		return normalizedPathname;
	}

	return normalizedPathname
		.toLowerCase()
		.startsWith(normalizedBasePath.toLowerCase())
		? normalizePathname(
				normalizedPathname.slice(normalizedBasePath.length) || '/',
			)
		: normalizedPathname;
};

export const prependConfiguredBasePath = (
	pathname: string,
	configuredBasePath: string,
) => {
	const normalizedPathname = normalizePathname(pathname);
	const normalizedBasePath = normalizeBasePath(configuredBasePath);

	if (!normalizedBasePath) {
		return normalizedPathname;
	}

	return normalizedPathname === '/'
		? normalizedBasePath
		: normalizePathname(`${normalizedBasePath}${normalizedPathname}`);
};
