import { Container } from '@mantine/core';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<Container className="flex h-screen w-full items-center justify-center container mx-auto px-8 text-center">
			<h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">Comming Soon</h1>
		</Container>
	);
};

export default Home;
