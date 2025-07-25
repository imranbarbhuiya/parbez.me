import { Analytics } from '@vercel/analytics/react';
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
			<body className={`${jetbrainsMono.variable} font-mono`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
