import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from '#components/NextNProgress';

import 'windi.css';
import '../styles/globals.css';
import '../styles/nprogress.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>Parbez</title>
				<meta name="title" content="Parbez - A Developer" />
				<link rel="icon" type="image/png" href="/favicon.ico" />
				<meta name="description" content="A Developer who loves to code" />
				<meta name="keywords" content="developer,webdeveloper,backenddeveloper" />
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				<meta name="author" content="Parbez" />
			</Head>
			<MantineProvider
				theme={{
					colorScheme: 'dark',
				}}
				withNormalizeCSS
				withGlobalStyles
			>
				<NextNProgress />
				<div className="min-h-screen bg-true-gray-900 bg-fixed background-image select-none">
					{/* <nav >
										<Navbar />
									</nav> */}

					<div className="max-w-8xl mx-auto px-4 h-full">
						<Component {...pageProps} />
					</div>

					{/* <footer className="absolute left-0 w-full">
									<Footer />
								</footer> */}
				</div>
			</MantineProvider>
		</div>
	);
}
