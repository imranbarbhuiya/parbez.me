import { Jost } from 'next/font/google';

import '@unocss/reset/tailwind-compat.css';

import './global.css';
import './unocss.css';

export const metadata = {
	title: 'Parbez',
	description: 'My Personal Website',
	metadataBase: new URL('https://parbez.me'),
};

const jost = Jost({
	subsets: ['latin'],
	weight: '500',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="m-0 box-border min-h-screen w-full flex-center bg-dark-500 p-0 text-white">
				<div className="mx-auto max-w-[88rem] min-h-full flex-center py-10" style={jost.style}>
					{children}
				</div>
			</body>
		</html>
	);
}
