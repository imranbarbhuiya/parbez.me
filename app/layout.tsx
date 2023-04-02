import '../styles/unocss.css';
import { Jost } from 'next/font/google';

export const metadata = {
	title: 'Parbez',
	description: 'My Personal Website',
};

const jost = Jost({
	subsets: ['latin'],
	weight: '500',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="m-0 box-border min-h-screen w-full flex-center bg-dark-500 p-0 text-white">
				<div className="mx-auto h-full max-w-[88rem] flex-center" style={jost.style}>
					{children}
				</div>
			</body>
		</html>
	);
}
