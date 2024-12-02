import { Analytics } from '@vercel/analytics/react';

import type { Metadata, Viewport } from 'next';

import './global.css';

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

export const viewport: Viewport = {
	themeColor: '#235fd3',
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-black" suppressHydrationWarning>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
