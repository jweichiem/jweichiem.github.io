import { renderToString } from 'react-dom/server';
import App from './App.tsx';

export const render = () => {
	return renderToString(<App />);
};
