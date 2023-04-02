import { defineConfig, presetUno, presetTypography } from 'unocss';

export default defineConfig({
	presets: [presetUno(), presetTypography()],
	include: [/.[jt]sx$/, /.mdx?$/],
	shortcuts: {
		'flex-center': 'flex justify-center items-center',
	},
});
