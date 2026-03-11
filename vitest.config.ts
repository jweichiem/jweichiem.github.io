import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['client/**/test/**/*.test.ts', 'server/**/test/**/*.test.ts'],
		environment: 'node',
		globals: false,
		watch: false,
	},
});
