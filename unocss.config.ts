import { defineConfig, presetUno, presetTypography } from 'unocss';

export default defineConfig({
	presets: [presetUno(), presetTypography()],
	shortcuts: {
		'flex-center': 'flex justify-center items-center',
	},
});
