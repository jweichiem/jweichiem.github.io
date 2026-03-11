import { afterEach, describe, expect, test } from 'vitest';
import {
	applyRouteMeta,
	createHeadHtml,
	getRouteMeta,
} from '../../app/meta.ts';
import { prerenderRoutes, resolveRoute } from '../../app/routes.ts';
import {
	createLocalizedPath,
	getLocaleFromPathname,
	getLocaleFromUrl,
	stripLocaleFromPathname,
} from '../index.tsx';

type MockMetaElement = {
	content: string | null;
	name: string | null;
	setAttribute: (name: string, value: string) => void;
};

const createMockMetaElement = (): MockMetaElement => ({
	content: null,
	name: null,
	setAttribute(name, value) {
		if (name === 'content') {
			this.content = value;
		}

		if (name === 'name') {
			this.name = value;
		}
	},
});

const installMockDocument = () => {
	const state: {
		descriptionMeta: MockMetaElement | null;
		title: string;
	} = {
		descriptionMeta: null,
		title: '',
	};

	const documentMock = {
		get title() {
			return state.title;
		},
		set title(value: string) {
			state.title = value;
		},
		querySelector(selector: string) {
			if (selector === 'meta[name="description"]') {
				return state.descriptionMeta;
			}

			return null;
		},
		createElement(tagName: string) {
			if (tagName !== 'meta') {
				throw new Error(`Unexpected tag name: ${tagName}`);
			}

			return createMockMetaElement();
		},
		head: {
			append(element: MockMetaElement) {
				state.descriptionMeta = element;
			},
		},
	};

	Object.defineProperty(globalThis, 'document', {
		value: documentMock,
		configurable: true,
	});

	return state;
};

afterEach(() => {
	Reflect.deleteProperty(globalThis, 'document');
});

describe('i18n path helpers', () => {
	test('resolves locale from pathnames and urls', () => {
		expect(getLocaleFromPathname('/')).toBe('en');
		expect(getLocaleFromPathname('/about')).toBe('en');
		expect(getLocaleFromPathname('/sv')).toBe('sv');
		expect(getLocaleFromPathname('/sv/about')).toBe('sv');
		expect(getLocaleFromUrl('https://example.com/sv/about')).toBe('sv');
	});

	test('creates localized paths and strips locale prefixes', () => {
		expect(createLocalizedPath('/', 'en')).toBe('/');
		expect(createLocalizedPath('/', 'sv')).toBe('/sv');
		expect(createLocalizedPath('/about', 'sv')).toBe('/sv/about');
		expect(createLocalizedPath('/sv/about', 'en')).toBe('/about');
		expect(stripLocaleFromPathname('/sv/about')).toBe('/about');
		expect(stripLocaleFromPathname('/sv')).toBe('/');
	});
});

describe('localized route metadata', () => {
	test('resolves translated route metadata for localized paths', () => {
		expect(getRouteMeta('/about', 'en')).toEqual({
			title: 'About | Joakim Weise-Chiem',
			description:
				'Learn more about this website and the work behind building it.',
		});

		expect(getRouteMeta('/sv/about', 'sv')).toEqual({
			title: 'Om | Joakim Weise-Chiem',
			description:
				'Läs mer om den här webbplatsen och arbetet bakom hur den byggdes.',
		});
	});

	test('creates translated head html', () => {
		expect(createHeadHtml('/sv/about', 'sv')).toContain(
			'<title>Om | Joakim Weise-Chiem</title>',
		);
		expect(createHeadHtml('/sv/about', 'sv')).toContain(
			'content="Läs mer om den här webbplatsen och arbetet bakom hur den byggdes."',
		);
	});

	test('applies translated route metadata to the document', () => {
		const state = installMockDocument();

		applyRouteMeta('/sv/about', 'sv');
		expect(state.title).toBe('Om | Joakim Weise-Chiem');
		expect(state.descriptionMeta?.content).toBe(
			'Läs mer om den här webbplatsen och arbetet bakom hur den byggdes.',
		);

		applyRouteMeta('/about', 'en');
		expect(state.title).toBe('About | Joakim Weise-Chiem');
		expect(state.descriptionMeta?.content).toBe(
			'Learn more about this website and the work behind building it.',
		);
	});
});

describe('localized routes', () => {
	test('matches localized routes against canonical route definitions', () => {
		expect(resolveRoute('/sv').component).toBe(resolveRoute('/').component);
		expect(resolveRoute('/sv/about').component).toBe(
			resolveRoute('/about').component,
		);
	});

	test('prerender routes include both english and swedish paths', () => {
		expect(prerenderRoutes).toEqual(['/', '/sv', '/about', '/sv/about']);
	});
});
