# CV Website

This website was built based on the Vite + Typescript + React compiler template from `npm create vite`.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Linting and Formatting

This repo uses [Biome](https://biomejs.dev/) for linting and formatting.

```bash
npm run lint
```

To apply automatic fixes:

```bash
npm run lint:fix
```

To format all files:

```bash
npm run format
```
