import common from 'eslint-config-mahir/common';
import node from 'eslint-config-mahir/node';
import typescript from 'eslint-config-mahir/typescript';
import module from 'eslint-config-mahir/module';
import react from 'eslint-config-mahir/react';
import next from 'eslint-config-mahir/next';
import edge from 'eslint-config-mahir/edge';
// @ts-expect-error -- tailwind plugin is not typed
import tailwind from 'eslint-plugin-tailwindcss';
/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
export default [
	...common,
	...node,
	...typescript,
	...module,
	...react,
	...next,
	...edge,
	...tailwind.configs['flat/recommended'],
	{
		settings: {
			tailwindcss: {
				callees: ['classNames', 'clsx', 'cn'],
			},
		},
	},
	{
		ignores: ['.github', '.yarn', 'dist'],
	},
];
