import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
	theme: Theme;
	toggleTheme: () => void;
}

const STORAGE_KEY = 'theme-preference';

const ThemeContext = createContext<ThemeContextValue | null>(null);

const getPreferredTheme = (): Theme => {
	if (typeof window === 'undefined') {
		return 'light';
	}

	const storedTheme = window.localStorage.getItem(STORAGE_KEY);

	if (storedTheme === 'light' || storedTheme === 'dark') {
		return storedTheme;
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>('light');
	const [hasResolvedTheme, setHasResolvedTheme] = useState(false);

	useEffect(() => {
		setTheme(getPreferredTheme());
		setHasResolvedTheme(true);
	}, []);

	useEffect(() => {
		if (!hasResolvedTheme) {
			return;
		}

		document.documentElement.dataset.theme = theme;
		document.documentElement.style.colorScheme = theme;
		window.localStorage.setItem(STORAGE_KEY, theme);
	}, [hasResolvedTheme, theme]);

	const value = useMemo<ThemeContextValue>(
		() => ({
			theme,
			toggleTheme: () => {
				setTheme((currentTheme) =>
					currentTheme === 'light' ? 'dark' : 'light',
				);
			},
		}),
		[theme],
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
};
