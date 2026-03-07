import path from 'node:path';

export interface ServerPaths {
	indexHtml: string;
	clientDist: string;
	serverEntry: string;
}

export const resolveServerPaths = (rootDir: string): ServerPaths => {
	return {
		indexHtml: path.join(rootDir, 'index.html'),
		clientDist: path.join(rootDir, 'dist/client'),
		serverEntry: path.join(rootDir, 'dist/server/entry-server.js'),
	};
};
