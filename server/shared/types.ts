type Render = (url: string) => Promise<string>;
type LoadTemplate = (url: string) => Promise<string>;
type TransformTemplate = (url: string, template: string) => Promise<string>;

export interface Renderer {
	loadTemplate: LoadTemplate;
	render: Render;
	transformTemplate?: TransformTemplate;
	fixStacktrace?: (error: Error) => void;
}
