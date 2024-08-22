import { Analytics } from '@vercel/analytics/react';

import './global.css';

export const metadata = {
	title: 'Parbez',
	description: 'My Personal Website',
	metadataBase: new URL('https://parbez.me'),
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
