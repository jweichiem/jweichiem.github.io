import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { analyzer } from 'vite-bundle-analyzer';
import { normalizeBasePath } from './client/shared/base-path-utils.ts';

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const isAnalyzeMode = mode === 'analyze';
	const usePreactCompat = command === 'build';

	return {
		base: normalizeBasePath(env.VITE_BASE_PATH) || '/',
		resolve: usePreactCompat
			? {
					alias: {
						react: 'preact/compat',
						'react-dom': 'preact/compat',
						'react-dom/client': 'preact/compat/client',
						'react-dom/server': 'preact/compat/server',
						'react-dom/test-utils': 'preact/test-utils',
						'react/jsx-runtime': 'preact/jsx-runtime',
						'react/jsx-dev-runtime': 'preact/jsx-dev-runtime',
						wouter: 'wouter-preact',
					},
				}
			: undefined,
		plugins: [
			react({
				babel: usePreactCompat
					? undefined
					: {
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
