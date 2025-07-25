import { Terminal, Globe, Smartphone, Server, Database, Brush } from 'lucide-react';
import { div as MotionDiv, a as MotionA, section as MotionSection, span as MotionSpan } from 'motion/react-client';

import { Github } from '../_icons/github';
import { Linkedin } from '../_icons/linkedin';
import { X } from '../_icons/x';
import { ParticlesBG } from '../particles';

import type { Metadata, Viewport } from 'next';

const techStack = [
	{ title: 'Frontend', icon: Globe, skills: ['Next.js', 'React', 'Nuxt', 'Vue', 'Remix', 'Svelte'] },
	{ title: 'Backend', icon: Server, skills: ['Node.js', 'NestJS', 'Express', 'Fastify', 'Rocket'] },
	{ title: 'Mobile', icon: Smartphone, skills: ['React Native', 'Expo', 'Tauri', 'Flutter'] },
	{ title: 'Languages', icon: Terminal, skills: ['TypeScript', 'JavaScript', 'Rust', 'Go', 'Python'] },
	{ title: 'Database', icon: Database, skills: ['PostgreSQL', 'MongoDB', 'DynamoDB'] },
	{ title: 'Design', icon: Brush, skills: ['Figma', 'CSS3'] },
];

const projects = [
	{
		title: 'Spartans',
		description: 'A mobile app for the TEC Spartans program, helping spartans join campaigns easily.',
		tech: ['React Native', 'Expo', 'Node.js', 'NestJS', 'Kotlin', 'Swift', 'C++'],
		color: 'from-green-400 to-cyan-500',
		link: 'https://www.spartans.theesports.club/',
	},
	{
		title: 'Sofi',
		description: 'A popular anime based card collecting game with a reach of over 27 million users worldwide.',
		tech: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Rust', 'NestJS', 'Stripe', 'Paypal'],
		color: 'from-purple-500 to-pink-500',
		link: 'https://sofi.gg/',
	},
	{
		title: 'Xofi',
		description: 'An e-commerce site for anime merchandise with seamless user experience.',
		tech: ['Rust', 'Next.js', 'NestJS', 'Redis', 'PostgreSQL', 'MongoDB', 'TypeScript', 'Docker', 'Nginx'],
		color: 'from-orange-500 to-red-500',
		link: 'https://xofi.gg/',
	},
	{
		title: 'Quizx',
		description: 'An engaging mobile app designed for quiz enthusiasts.',
		tech: ['React Native', 'Expo', 'Node.js', 'NestJS', 'Kotlin', 'Swift', 'Python', 'TensorFlow', 'OpenAI', 'Rust'],
		color: 'from-blue-500 to-cyan-500',
		link: 'https://quizx.gg/',
	},
	{
		title: 'Languages',
		description:
			'Created my own programming language (Ran) in Go and a template parser/executor (Tagscript) in TypeScript.',
		tech: ['Go', 'TypeScript', 'Parser', 'Interpreter', 'Compiler', 'VM'],
		color: 'from-yellow-500 to-red-500',
		link: 'https://github.com/imranbarbhuiya/ran/',
	},
	{
		title: 'Open Source Enthusiast',
		description: 'Passionate about open source, my projects are used by Remix, Cloudflare, and others.',
		tech: ['Next.js', 'TypeScript', 'Go', 'Expo', 'React Native', 'JavaScript', 'Rust'],
		color: 'from-purple-500 to-blue-500',
		link: 'https://github.com/imranbarbhuiya/',
	},
];

export const metadata: Metadata = {
	openGraph: {
		images: ['/banner-old.png'],
		siteName: 'Parbez',
		url: 'https://parbez.me',
	},
};

export const viewport: Viewport = {
	themeColor: '#235fd3',
};

export default function Home() {
	return (
		<main className="min-h-screen overflow-hidden text-white">
			<ParticlesBG />
			<div className="relative">
				<div className="flex h-screen items-center justify-center px-4">
					<MotionDiv
						animate={{ opacity: 1, y: 0 }}
						className="z-10 text-center"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8 }}
					>
						<MotionDiv
							animate={{ rotate: 360 }}
							className="mb-8"
							transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
						>
							<Terminal className="mx-auto size-20 text-blue-500" />
						</MotionDiv>
						<h1 className="mb-4 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
							Imran Hussain Barbhuiya
							{/* {'Imran Hussain Barbhuiya'.split('').map((char, index) => (
								<MotionSpan initial="initial" key={index} variants={letterVariants} whileHover="hover">
									{char}
								</MotionSpan>
							))} */}
						</h1>
						<p className="mb-6 text-3xl font-bold text-gray-300 md:text-4xl">Full Stack Developer</p>
						<p className="mb-8 text-xl text-gray-400 md:text-2xl">Crafting digital experiences with code</p>
						<div className="flex justify-center space-x-6">
							{[
								{ title: 'Github', link: 'https://github.com/imranbarbhuiya' },
								{ title: 'Linkedin', link: 'https://www.linkedin.com/in/imranbarbhuiya/' },
								{ title: 'X', link: 'https://x.com/notparbez' },
							].map((platform, idx) => (
								<MotionA
									area-label={platform.title}
									className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
									href={platform.link}
									key={platform.title}
									target="_blank"
									whileHover={{ scale: 1.2, rotate: idx === 0 ? 5 : idx === 2 ? -5 : 0 }}
									whileTap={{ scale: 0.9 }}
								>
									{platform.title === 'Github' && <Github />}
									{platform.title === 'Linkedin' && <Linkedin />}
									{platform.title === 'X' && <X />}
								</MotionA>
							))}
						</div>
					</MotionDiv>
				</div>
			</div>
			<MotionSection
				className="relative py-16"
				initial={{ opacity: 0 }}
				transition={{ duration: 0.8 }}
				whileInView={{ opacity: 1 }}
			>
				<div className="mx-auto max-w-6xl px-4">
					<h2 className="mb-12 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-center text-4xl font-bold text-transparent">
						Tech Universe
					</h2>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{techStack.map(({ title, icon: Icon, skills }) => (
							<MotionDiv
								className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg transition-colors hover:bg-white/10"
								key={title}
								whileHover={{ scale: 1.02 }}
							>
								<div className="mb-2 flex items-center">
									<Icon className="mr-2 size-5 text-blue-500" />
									<h3 className="text-lg font-semibold">{title}</h3>
								</div>
								<div className="flex flex-wrap gap-1">
									{skills.map((skill) => (
										<MotionSpan
											className="cursor-pointer rounded-full bg-white/5 px-2 py-1 text-sm transition-colors hover:bg-white/10"
											key={skill}
											whileHover={{ scale: 1.1 }}
										>
											{skill}
										</MotionSpan>
									))}
								</div>
							</MotionDiv>
						))}
					</div>
				</div>
			</MotionSection>
			<section className="relative py-16">
				<div className="mx-auto max-w-6xl px-4">
					<h2 className="mb-12 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-center text-4xl font-bold text-transparent">
						Featured Projects
					</h2>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{projects.map((project, index) => (
							<MotionA
								className="group relative"
								href={project.link}
								initial={{ opacity: 0, y: 20 }}
								key={project.title}
								target="_blank"
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.02 }}
								whileInView={{ opacity: 1, y: 0 }}
							>
								<div
									className={`rounded-xl bg-linear-to-br p-4 ${project.color} absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20`}
								/>
								<div className="relative rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg transition-colors hover:bg-white/10">
									<h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
									<p className="mb-3 text-sm text-gray-400">{project.description}</p>
									<div className="flex flex-wrap gap-1">
										{project.tech.map((tech) => (
											<MotionSpan
												className="cursor-pointer rounded-full bg-white/5 px-2 py-1 text-xs transition-colors hover:bg-white/10"
												key={tech}
												whileHover={{ scale: 1.1 }}
											>
												{tech}
											</MotionSpan>
										))}
									</div>
								</div>
							</MotionA>
						))}
					</div>
				</div>
			</section>
			<MotionSection
				className="relative py-16"
				initial={{ opacity: 0 }}
				transition={{ duration: 0.8 }}
				whileInView={{ opacity: 1 }}
			>
				<div className="mx-auto max-w-4xl px-4 text-center">
					<h2 className="mb-8 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent">
						Let's Create Something Amazing
					</h2>
					<p className="mb-8 text-lg text-gray-400">Always excited to collaborate on innovative projects</p>
					<MotionA
						className="rounded-lg bg-linear-to-r from-blue-500 to-purple-500 px-8 py-3 font-semibold text-white transition-colors hover:from-blue-600 hover:to-purple-600"
						href="mailto:imranbarbhuiya.fsd@gmail.com"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						Get in Touch
					</MotionA>
				</div>
			</MotionSection>
		</main>
	);
}
