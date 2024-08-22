/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
// @ts-expect-error -- internal file
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');
const plugin = require('tailwindcss/plugin');

// eslint-disable-next-line @typescript-eslint/unbound-method
const addVariablesForColors = plugin(({ addBase, theme }) => {
	const allColors = flattenColorPalette(theme('colors'));
	const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

	addBase({
		':root': newVars,
	});
});

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				accent: {
					50: '#f7f7f8',
					100: '#e6e7e8',
					200: '#d9dcdd',
					300: '#c8ccce',
					400: '#bdc2c5',
					500: '#adb3b6',
					600: '#9da3a6',
					700: '#7b7f81',
					800: '#5f6264',
					900: '#494b4c',
				},
				error: {
					50: '#ffe6e6',
					100: '#ffb2b2',
					200: '#ff8c8c',
					300: '#fe5858',
					400: '#fe3838',
					500: '#fe0606',
					600: '#e70505',
					700: '#b40404',
					800: '#8c0303',
					900: '#6b0303',
				},
				neutral: {
					50: '#eef0f2',
					100: '#ccd1d8',
					200: '#b3bac5',
					300: '#909baa',
					400: '#7a8799',
					500: '#596980',
					600: '#516074',
					700: '#3f4b5b',
					800: '#313a46',
					900: '#252c36',
				},
				'primary-a': {
					50: '#e8e8e8',
					100: '#b7b7b7',
					200: '#959595',
					300: '#646464',
					400: '#464646',
					500: '#181818',
					600: '#161616',
					700: '#111111',
					800: '#0d0d0d',
					900: '#0a0a0a',
				},
				'primary-b': {
					50: '#fdfdfd',
					100: '#f7f7f7',
					200: '#f4f4f4',
					300: '#eeeeee',
					400: '#ebebeb',
					500: '#e6e6e6',
					600: '#d1d1d1',
					700: '#a3a3a3',
					800: '#7f7f7f',
					900: '#616161',
				},
				success: {
					50: '#e8f9f2',
					100: '#b8edd7',
					200: '#96e4c3',
					300: '#66d7a8',
					400: '#49d097',
					500: '#1bc47d',
					600: '#19b272',
					700: '#138b59',
					800: '#0f6c45',
					900: '#0b5235',
				},
				warning: {
					50: '#fffde6',
					100: '#fff9b0',
					200: '#fff68a',
					300: '#fff254',
					400: '#ffef33',
					500: '#ffeb00',
					600: '#e8d600',
					700: '#b5a700',
					800: '#8c8100',
					900: '#6b6300',
				},
				red: {
					dark: {
						50: '#f7e8ed',
						100: '#e7b9c6',
						200: '#db97ab',
						300: '#cb6784',
						400: '#c1496d',
						500: '#b11c48',
						600: '#a11942',
						700: '#7e1433',
						800: '#610f28',
						900: '#4a0c1e',
					},
					light: {
						50: '#fee9f0',
						100: '#fdbcd0',
						200: '#fc9cb9',
						300: '#fb6e98',
						400: '#fa5285',
						500: '#f92766',
						600: '#e3235d',
						700: '#b11c48',
						800: '#891538',
						900: '#69102b',
					},
				},
				purple: {
					dark: {
						50: '#ede8f7',
						100: '#c7b9e7',
						200: '#ab97db',
						300: '#8567cb',
						400: '#6d49c1',
						500: '#491cb1',
						600: '#4219a1',
						700: '#34147e',
						800: '#280f61',
						900: '#1f0c4a',
					},
					light: {
						50: '#f0e9fe',
						100: '#d0bcfd',
						200: '#b99cfc',
						300: '#996efb',
						400: '#8552fa',
						500: '#6727f9',
						600: '#5e23e3',
						700: '#491cb1',
						800: '#391589',
						900: '#2b1069',
					},
				},
				orange: {
					dark: {
						50: '#f7f0e8',
						100: '#e6d0b6',
						200: '#dab993',
						300: '#c99962',
						400: '#bf8544',
						500: '#af6715',
						600: '#9f5e13',
						700: '#7c490f',
						800: '#60390c',
						900: '#4a2b09',
					},
					light: {
						50: '#fef4e9',
						100: '#fcddb9',
						200: '#fbcc98',
						300: '#f9b568',
						400: '#f8a74b',
						500: '#f6911e',
						600: '#e0841b',
						700: '#af6715',
						800: '#875011',
						900: '#673d0d',
					},
				},
				blue: {
					50: '#e9effb',
					100: '#bbcdf1',
					200: '#9ab5eb',
					300: '#6c94e2',
					400: '#4f7fdc',
					500: '#235fd3',
					600: '#2056c0',
					700: '#194396',
					800: '#133474',
					900: '#0f2859',
					dark: {
						50: '#e7eaf6',
						100: '#b5bce2',
						200: '#919cd5',
						300: '#5f6fc1',
						400: '#4053b5',
						500: '#1028a3',
						600: '#0f2494',
						700: '#0b1c74',
						800: '#09165a',
						900: '#071144',
					},
					light: {
						50: '#e8ebfc',
						100: '#b7c1f7',
						200: '#94a3f3',
						300: '#647aee',
						400: '#4560ea',
						500: '#1738e5',
						600: '#1533d0',
						700: '#1028a3',
						800: '#0d1f7e',
						900: '#0a1860',
					},
				},
				green: {
					50: '#e7f6ec',
					100: '#b3e2c3',
					200: '#8ed5a6',
					300: '#5bc17e',
					400: '#3bb565',
					500: '#0aa33e',
					600: '#099438',
					700: '#07742c',
					800: '#065a22',
					900: '#04441a',
				},
				transparent: 'transparent',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'top-scroll': {
					'0%': {
						// transform: 'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)',
						transform: 'translateY(0)',
					},
					'100%': {
						// transform: 'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)',
						transform: 'translateY(calc(-50% - 10px))',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'top-scroll': 'top-scroll 20s linear infinite',
			},
		},
		screens: {
			'lt-2xl': { max: '1730px' },
			'lt-xl': { max: '1441px' },
			'lt-lg': { max: '1165px' },
			'lt-mmd': { max: '725px' },
			'lt-md': { max: '601px' },
			'lt-sm': { max: '321px' },
			sm: '320px',
			md: '600px',
			lg: '1164px',
			xl: '1440px',
			'2xl': '1729px',
		},
	},
	plugins: [addVariablesForColors, require('tailwindcss-animate')],
};
