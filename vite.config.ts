import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { analyzer } from 'vite-bundle-analyzer';
import { normalizeBasePath } from './client/shared/base-path-utils.ts';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const isAnalyzeMode = mode === 'analyze';

	return {
		base: normalizeBasePath(env.VITE_BASE_PATH) || '/',
		plugins: [
			react({
				babel: {
					plugins: [['babel-plugin-react-compiler']],
				},
			}),
			analyzer({
				analyzerMode: 'static',
				fileName: 'bundle-report',
				openAnalyzer: false,
				enabled: isAnalyzeMode,
			}),
		],
	};
});
