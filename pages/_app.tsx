import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
// import { css, Global } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

import '@fontsource/poppins';
import 'windi.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>Sofi Card Game</title>
				<meta name="title" content="Sofi Card Game" />
				<link rel="icon" type="image/png" href="/favicon.png" />
				<meta
					name="description"
					content="A fun card collecting and battling game with over 40,000 characters to collect. It contains cards from anime, k-pop, pc games, pokemon, cartoons, original characters, and much more"
				/>
				<meta
					name="keywords"
					content="discord,freegames,genshin,valorant,karuta,tofu,anime,sofi,game,best,collect,gachapon,players,gems,wist,wisteria,sho,anime,games,more,fun,friends,multiplayer,to,play,fun2play"
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				<meta name="author" content="Sho" />

				<meta property="twitter:card" content="summary_large_image" />

				<meta property="og:image" content="/embed.png" />
				<meta property="twitter:image" content="/embed.png" />
			</Head>
			<MantineProvider
				theme={{
					colorScheme: 'dark',
				}}
				withNormalizeCSS
				withGlobalStyles
			>
				<NotificationsProvider>
					<NextNProgress
						color="#bf3df4"
						// transformCSS={(cssString) => {
						// 	const style = css`
						// 		${cssString}
						// 	`;
						// 	return <Global styles={style} />;
						// }}
					/>
					<AnimatePresence>
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
					</AnimatePresence>
				</NotificationsProvider>
			</MantineProvider>
		</div>
	);
}
