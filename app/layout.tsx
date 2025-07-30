import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { JetBrains_Mono } from 'next/font/google';

import type { Metadata } from 'next';

import './global.css';

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
});

export const metadata: Metadata = {
	title: 'Parbez',
	description: 'I am a software engineer who loves to build things.',
	openGraph: {
		images: ['/banner.png'],
		siteName: 'Parbez',
		url: 'https://parbez.me',
	},
	metadataBase: new URL('https://parbez.me'),
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				{process.env.NODE_ENV === 'development' ? (
					// eslint-disable-next-line @next/next/no-sync-scripts
					<script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js" />
				) : null}
			</head>
			<body className={`${jetbrainsMono.variable} font-mono`}>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
