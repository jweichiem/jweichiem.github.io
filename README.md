# Joakim CV

Personal website built with React + Vite on the frontend and Fastify for SSR/SSG.

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
- `client/app/`: app shell, route registry, shared app logic
- `client/pages/`: page components with colocated `meta.ts` and `style.scss`
- `client/entry/`: client and server entrypoints
- `server/`: Fastify SSR server, environment configs, SSG script, tests
- `index.html`: shared HTML template for both client and SSR rendering

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

## Notes

- Route metadata (`title`, `description`) is generated from the route registry and applied in both client navigation and SSR output.
- Static prerender routes default to the routes marked for prerendering in the app route registry.
