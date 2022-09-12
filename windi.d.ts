declare module '@windicss/plugin-animations' {
	import type { PluginOutput } from 'windicss/types/interfaces';

	const AnimationsPlugin: PluginOutput;
	export default AnimationsPlugin;
}

declare module '@windicss/plugin-scrollbar' {
	// eslint-disable-next-line @typescript-eslint/no-duplicate-imports
	import type { PluginOutput } from 'windicss/types/interfaces';

	const ScrollbarPlugin: PluginOutput;
	export default ScrollbarPlugin;
}
