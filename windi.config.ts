import AnimationsPlugin from '@windicss/plugin-animations';
import ScrollbarPlugin from '@windicss/plugin-scrollbar';
import { defineConfig } from 'windicss/helpers';
import TypographyPlugin from 'windicss/plugin/typography';

export default defineConfig({
	extract: {
		include: ['**/*.{jsx,tsx,css}'],
		exclude: ['node_modules', '.git', '.next'],
	},
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite',
			},
		},
	},
	plugins: [ScrollbarPlugin, AnimationsPlugin, TypographyPlugin()],
});
