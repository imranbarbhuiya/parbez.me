import { css, Global } from '@emotion/react';
import { MantineProvider } from '@mantine/core';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

import type { AppProps } from 'next/app';

import 'windi.css';
import '../styles/globals.css';

const transformCSS = (cssString: string) => {
	const style = css`
		${cssString}
	`;
	return <Global styles={style} />;
};

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>Parbez</title>
				<meta content="Parbez - A Developer" name="title" />
				<link href="/favicon.ico" rel="icon" type="image/png" />
				<meta content="A Developer who loves to code" name="description" />
				<meta content="developer,webdeveloper,backenddeveloper" name="keywords" />
				<meta content="index, follow" name="robots" />
				<meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
				<meta content="English" name="language" />
				<meta content="Parbez" name="author" />
			</Head>
			<MantineProvider
				theme={{
					colorScheme: 'dark',
				}}
				withGlobalStyles
				withNormalizeCSS
			>
				<NextNProgress transformCSS={transformCSS} />
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
