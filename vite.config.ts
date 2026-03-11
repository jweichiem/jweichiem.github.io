import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { normalizeBasePath } from './client/shared/base-path-utils.ts';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		base: normalizeBasePath(env.VITE_BASE_PATH) || '/',
		plugins: [
			react({
				babel: {
					plugins: [['babel-plugin-react-compiler']],
				},
			}),
		],
	};
});
