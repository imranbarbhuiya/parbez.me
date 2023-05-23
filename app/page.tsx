import { IconBrandGithub, IconBrandDiscord, IconWorld } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

import { Card } from './Card';
import catImage from './cat.webp';

export default function Page() {
	return (
		<main className="h-full w-full flex flex-col items-start justify-center lt-lg:items-center">
			<div className="w-250 flex items-center justify-between lt-lg:w-3/4">
				<div className="flex flex-col items-start justify-center">
					<h1 className="text-8">
						Hi, I'm <span className="rng-text">Imran Barbhuiya</span>
					</h1>
					<h2 className="text-5">
						Also known as <span className="underline">Parbez</span>
					</h2>
				</div>
				<Image alt="avatar" className="rounded-full" src={catImage} width={120} />
			</div>
			<div className="mt-10 w-250 flex flex-col items-start justify-center gap-5 text-base lt-lg:w-3/4">
				<p>
					I'm a <span className="color-cyan">Full Stack Developer</span> who enjoys building and exploring new things. I
					love helping people and contributing to open source projects. Meeting new people and making friends is
					something I truly enjoy, and I'm always eager to try new stacks and learn new things. Over the years, I have
					coded in various languages such as{' '}
					<span className="color-cyan">
						Rust, TypeScript, JavaScript, Python, C, C++, PHP, Dart, Flutter, and many more
					</span>
					, and I have experience with frameworks and libraries like{' '}
					<span className="color-teal">React, Next.js, Remix, Svelte, React Native, Tauri, Nest.js, and many more</span>
					. I am a self-taught developer and a fast learner. Furthermore, I have knowledge in AI/ML, ethical hacking,
					and pentesting.
				</p>
				<div className="flex items-center justify-start gap-5">
					<Link
						className="transform cursor-pointer transition duration-500 hover:scale-110"
						href="https://github.com/imranbarbhuiya"
						target="_blank"
					>
						<IconBrandGithub />
					</Link>
					<Link
						className="transform cursor-pointer transition duration-500 hover:scale-110"
						href="https://discord.com/users/758880890159235083"
						target="_blank"
					>
						<IconBrandDiscord size={32} />
					</Link>
					<Link className="transform cursor-pointer transition duration-500 hover:scale-110" href="https://parbez.me">
						<IconWorld size={32} />
					</Link>
				</div>
			</div>
			<div className="mt-10 flex flex-col gap-2">
				<h2 className="text-8 underline">Currently working at</h2>
				<div className="mt-5 w-250 flex items-center justify-between lt-lg:mx-auto lt-lg:w-3/4 lt-lg:flex-col lt-lg:justify-center lt-lg:gap-5">
					<Card
						description="A discord game bot with more than 10M users"
						image="https://cdn.discordapp.com/avatars/853629533855809596/09c303d5b941e08f8c933d9f65a4bd5f.webp?size=256"
						position="Full Stack Developer"
						title="Sofi"
						url="https://sofi.gg"
					/>
					<Card
						description="A multipurpose discord bot with more than 3.5M users"
						image="https://cdn.discordapp.com/avatars/903690362114158632/7a445665ba9718d0df60d317067c4b0e.webp?size=256"
						position="Owner"
						title="Roti"
						url="https://rotibot.xyz"
					/>
					<Card
						description="A platform to find flat and flatmates"
						image="https://cdn.discordapp.com/attachments/910956656387567686/1110488678737911848/flatshare.png"
						position="Backend Developer"
						title="Flatshare"
						url="https://joinflatshare.com"
					/>
				</div>
			</div>
		</main>
	);
}
