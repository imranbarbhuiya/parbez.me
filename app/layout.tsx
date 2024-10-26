import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from 'next';

import './global.css';

export const metadata: Metadata = {
	title: 'Parbez',
	description: 'I am a software engineer who loves to build things.',
	openGraph: {
		images: ['/cat.png'],
	},
	metadataBase: new URL('https://parbez.me'),
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-black">
				{children}
				<Analytics />
			</body>
		</html>
	);
}
