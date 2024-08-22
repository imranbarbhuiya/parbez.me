'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, X, Globe, Server, Code, Smartphone, Database, Cpu } from 'lucide-react';
import Image from 'next/image';

import cat from './cat.png';

const MotionImage = motion(Image);

const Bubble = ({
	size,
	position,
	delay,
}: {
	readonly delay: number;
	readonly position: { bottom?: string; left?: string; right?: string; top?: string };
	readonly size: number;
}) => (
	<motion.div
		animate={{
			y: [0, -20, 0],
			x: [0, 10, 0],
		}}
		className="absolute rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 opacity-40 blur-sm"
		style={{
			width: size,
			height: size,
			...position,
		}}
		transition={{
			duration: 5,
			repeat: Infinity,
			repeatType: 'reverse',
			delay,
		}}
		whileHover={{ scale: 1.2 }}
	/>
);

export default function HomePage() {
	const skills = [
		{ name: 'Node.js', icon: <Server className="size-6" /> },
		{ name: 'TypeScript', icon: <Code className="size-6" /> },
		{ name: 'React', icon: <Globe className="size-6" /> },
		{ name: 'Next.js', icon: <Globe className="size-6" /> },
		{ name: 'React Native', icon: <Smartphone className="size-6" /> },
		{ name: 'MongoDB', icon: <Database className="size-6" /> },
		{ name: 'PostgreSQL', icon: <Database className="size-6" /> },
		{ name: 'NestJs', icon: <Cpu className="size-6" /> },
		{ name: 'Python', icon: <Code className="size-6" /> },
		{ name: 'Go', icon: <Code className="size-6" /> },
		{ name: 'Docker', icon: <Server className="size-6" /> },
		{ name: 'Rust', icon: <Code className="size-6" /> },
	];

	const bubbles = [
		{ size: 100, position: { top: '10%', left: '5%' }, delay: 0 },
		{ size: 60, position: { top: '20%', right: '10%' }, delay: 1 },
		{ size: 80, position: { bottom: '15%', left: '15%' }, delay: 2 },
		{ size: 40, position: { bottom: '10%', right: '20%' }, delay: 3 },
		{ size: 70, position: { top: '40%', left: '25%' }, delay: 4 },
		{ size: 50, position: { top: '60%', right: '5%' }, delay: 5 },
		{ size: 90, position: { top: '70%', left: '40%' }, delay: 2.5 },
		{ size: 45, position: { top: '30%', right: '35%' }, delay: 3.5 },
		{ size: 65, position: { bottom: '30%', right: '45%' }, delay: 4.5 },
		{ size: 55, position: { top: '5%', left: '50%' }, delay: 1.5 },
	];

	return (
		<div className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-black px-8 py-16 text-white">
			{bubbles.map((bubble, index) => (
				<Bubble key={index} {...bubble} />
			))}
			<div className="z-10 mx-auto w-full max-w-3xl">
				<div className="mb-16 flex items-start justify-between">
					<div>
						<motion.h1
							animate={{ opacity: 1, y: 0 }}
							className="mb-4 text-5xl font-bold"
							initial={{ opacity: 0, y: 20 }}
							transition={{ delay: 0.2, duration: 0.8 }}
						>
							<span className="gradient-text">Imran Barbhuiya</span>
						</motion.h1>
						<motion.p
							animate={{ opacity: 1, y: 0 }}
							className="mb-8 text-xl text-gray-400"
							initial={{ opacity: 0, y: 20 }}
							transition={{ delay: 0.4, duration: 0.8 }}
						>
							Full stack web developer & App developer
						</motion.p>
						<motion.div
							animate={{ opacity: 1, y: 0 }}
							className="flex space-x-4"
							initial={{ opacity: 0, y: 20 }}
							transition={{ delay: 0.6, duration: 0.8 }}
						>
							<a
								className="transition-colors hover:text-pink-400"
								href="https://github.com/imranbarbhuiya"
								target="_blank"
							>
								<Github size={24} />
							</a>
							<a
								className="transition-colors hover:text-pink-400"
								href="https://www.linkedin.com/in/imranbarbhuiya/"
								target="_blank"
							>
								<Linkedin size={24} />
							</a>
							<a className="transition-colors hover:text-pink-400" href="https://x.com/notparbez" target="_blank">
								<X size={24} />
							</a>
						</motion.div>
					</div>
					<motion.div transition={{ type: 'spring', stiffness: 300, damping: 10 }} whileHover={{ scale: 1.1 }}>
						<MotionImage
							alt="SukuMeow"
							animate={{ opacity: 1, scale: 1 }}
							className="size-24 rounded-full border-2 border-white shadow-lg"
							initial={{ opacity: 0, scale: 0.8 }}
							src={cat}
							transition={{ delay: 0.2, duration: 0.8 }}
							whileHover={{
								borderColor: ['#fff', '#EC4899', '#F97316', '#fff'],
								transition: { duration: 2, repeat: Infinity },
							}}
						/>
					</motion.div>
				</div>
				<motion.div
					animate={{ opacity: 1, y: 0 }}
					className="mb-16"
					initial={{ opacity: 0, y: 20 }}
					transition={{ delay: 0.8, duration: 0.8 }}
				>
					<h2 className="mb-4 text-2xl font-semibold">About Me</h2>
					<p className="leading-relaxed text-gray-300">
						I'm a passionate Full Stack Developer with a strong drive for innovation and continuous learning. I enjoy
						building and exploring new technologies, contributing to open-source projects, and connecting with others in
						the tech community. My experience spans a wide range of programming languages, including{' '}
						<span className="text-cyan-400">Rust, TypeScript, JavaScript, Python, C, C++, PHP, Dart, and Flutter</span>,
						as well as frameworks and libraries such as{' '}
						<span className="text-teal-300">React, Next.js, Remix, Svelte, React Native, Tauri, and Nest.js</span>. As a
						self-taught developer, I'm a quick learner who thrives on tackling new challenges and expanding my
						expertise.
					</p>
				</motion.div>
				<motion.div
					animate={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 20 }}
					transition={{ delay: 1, duration: 0.8 }}
				>
					<h2 className="mb-4 text-2xl font-semibold">Skills</h2>
					<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
						{skills.map((skill, index) => (
							<motion.div
								animate={{ opacity: 1, scale: 1 }}
								className="flex cursor-pointer items-center space-x-3 rounded-lg bg-gray-800 p-4"
								initial={{ opacity: 0, scale: 0.8 }}
								key={skill.name}
								transition={{ delay: index * 0.1 + 1.2, duration: 0.5 }}
								whileHover={{
									scale: 1.05,
									rotate: [0, 5, -5, 0],
									transition: { duration: 0.3 },
								}}
							>
								<motion.div transition={{ duration: 0.3 }} whileHover={{ rotate: 360 }}>
									{skill.icon}
								</motion.div>
								<span>{skill.name}</span>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
