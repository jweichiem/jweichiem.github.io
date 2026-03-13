import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: [
			'client/**/test/**/*.test.ts',
			'client/**/test/**/*.test.tsx',
			'server/**/test/**/*.test.ts',
		],
		environment: 'node',
		globals: false,
		watch: false,
	},
});
