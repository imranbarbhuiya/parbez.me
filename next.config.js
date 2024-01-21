// @ts-check
/** @type {import('next').NextConfig} */
export default {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'cdn.discordapp.com' },
			{ protocol: 'https', hostname: 'sofi.gg' },
			{ protocol: 'https', hostname: 'xofi.gg' },
		]
	},
};
