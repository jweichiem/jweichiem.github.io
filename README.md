# Joakim CV

Personal website built with React on the frontend and Fastify on the backend, with SSR in development and production plus optional static prerendering.

## Stack

- React 19
- Vite 7
- Fastify 5
- TypeScript
- Wouter
- Biome (lint + format)
- Vitest (server tests)

## Project Structure

- `client/`: frontend application code
- `client/app/`: app shell, route registry, metadata helpers, shared layout, and theme context
- `client/pages/`: route-level page components with colocated styles and page data
- `client/entry/`: browser hydration entry and server render entry
- `client/i18n/`: locale helpers, path utilities, and the i18n context
- `client/shared/`: reusable UI building blocks and design tokens
- `server/`: Fastify app setup, environment-specific SSR config, and SSG support
- `server/shared/`: shared SSR template utilities and types
- `index.html`: shared HTML template used by both SSR and the client build

## Frontend Architecture

- `client/entry/client.tsx` hydrates SSR markup when it exists and falls back to client rendering if the root is empty.
- `client/app/createAppTree.tsx` assembles the router, `I18nProvider`, `ThemeProvider`, header, main content area, and footer.
- `client/app/page-main/index.tsx` renders the route switch and reapplies route metadata on client-side navigation.
- `client/shared/profile-banner/` holds the reusable banner used on the home page.

## Routing

- Routes are registered once in `client/app/routes.ts`.
- Each route owns:
  - its path
  - the component to render
  - localized navigation labels
  - localized `<title>` and meta description values
  - a `prerender` flag used by the static generator
- `resolveRoute()` normalizes incoming paths, strips locale prefixes, and maps requests to either a known route or the fallback page.
- `prerenderRoutes` is derived from the same route registry, so navigation, metadata, SSR, and SSG all use one source of truth.

## i18n

- Supported locales are defined in `client/i18n/index.tsx`.
- English is the default locale and uses canonical paths such as `/` and `/about`.
- Swedish is path-prefixed, for example `/sv` and `/sv/about`.
- `createLocalizedPath()` rewrites a URL into the requested locale while preserving query strings and hashes.
- `getLocaleFromPathname()` and related helpers are shared by both the client and server so locale resolution stays consistent.

## Theming

- `client/app/theme.tsx` provides `ThemeProvider` and `useTheme()`.
- The active theme is resolved on the client from:
  1. `localStorage`
  2. `prefers-color-scheme`
  3. the default light theme during SSR
- Once resolved, the provider writes `data-theme` and `color-scheme` to the document root so the SCSS layer can react to the active theme.
- The theme toggle lives in the header and persists the selection.

## SSR and SSG

- `server/index.ts` creates the Fastify app and delegates environment setup to `server/config/index.ts`.
- Development mode runs Vite in middleware mode, uses `vite.transformIndexHtml()`, and loads the latest server entry with `vite.ssrLoadModule()`.
- Production mode serves built assets, loads the built SSR entry, and renders HTML by combining `index.html` with the rendered React app and route-specific metadata.
- `client/entry/server.tsx` returns both `appHtml` and head metadata for SSR and prerendering.
- `server/static-site-generator.ts` reuses the production renderer to write HTML files for every route listed in `prerenderRoutes`, or a custom `PRERENDER_ROUTES` override.

## Tests

- Tests are colocated near the modules they exercise.
- `client/i18n/test/` covers locale path handling, metadata, and route localization behavior.
- `client/entry/test/` covers SSR rendering output and prerendered route generation.
- `server/config/test/` verifies environment-specific Fastify config selection.
- `server/shared/test/` verifies the shared HTML template handler.

## Scripts

- `npm run dev`: Vite development server
- `npm run dev:ssr`: Fastify SSR server in development mode
- `npm run build`: TypeScript build + client/SSR bundle build
- `npm run build:ssg`: build then prerender static routes
- `npm run start:ssr`: start production SSR server
- `npm run test:server`: run server test suite
- `npm run lint`: run Biome checks
- `npm run lint:fix`: run Biome with auto-fixes
- `npm run format`: run Biome write pass (includes import ordering)
- `npm run test`: start Vitest in watch mode
- `npm run test:server`: run the current test suite once

## Deployment

- Set `VITE_BASE_PATH` when the site is hosted under a subpath, for example `VITE_BASE_PATH=/joakim-cv npm run build:ssg`.
- Leave `VITE_BASE_PATH` unset when the site is hosted at the domain root.
- GitHub Pages should publish the generated files from `dist/client/`.

## Notes

- Route metadata is generated from the route registry and applied in both client navigation and SSR output.
- The header navigation is built from the route registry, while locale switching uses the current URL and rewrites it with `createLocalizedPath()`.
- Static prerender routes default to the routes marked for prerendering in the app route registry.
