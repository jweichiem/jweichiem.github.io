# Server for SSR is built using fastify

- `index.ts`: Server entrypoint; exports `createApp` and `startServer`.
- `shared/types.ts`: Shared renderer types.
- `shared/paths.ts`: Shared path resolution for server artifacts.
- `config/index.ts`: Picks development or production config based on `NODE_ENV`.
- `config/development/index.ts`: `fastifyAppConfig(app, rootDir)` for development.
- `config/development/middleware.ts`: Development middleware bridge.
- `config/production/index.ts`: `fastifyAppConfig(app, rootDir)` for production.
- `config/production/registerAssets.ts`: Production template + SSR bundle loader.
- `static-site-generator.ts`: SSG generation script.
- `test/app.test.ts`: Fastify app tests using `app.inject()`.
