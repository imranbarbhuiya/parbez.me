// @ts-check
import WindiCSSWebpackPlugin from 'windicss-webpack-plugin';

/** @type {import('next').NextConfig} */
export default {
	reactStrictMode: true,
	poweredByHeader: false,
	swcMinify: true,
	webpack(config) {
		config.plugins.push(new WindiCSSWebpackPlugin());
		return config;
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
};
