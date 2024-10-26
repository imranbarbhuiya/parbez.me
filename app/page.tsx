/* eslint-disable id-length */
'use client';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { motion } from 'framer-motion';
import { Github, Linkedin, X, Terminal, Globe, Smartphone, Server, Database } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';

import type { ISourceOptions } from '@tsparticles/engine';

const techStack = [
	{ title: 'Frontend', icon: Globe, skills: ['Next.js', 'React', 'Nuxt', 'Vue', 'Remix', 'Svelte'] },
	{ title: 'Backend', icon: Server, skills: ['Node.js', 'NestJS', 'Express', 'Fastify', 'Rocket'] },
	{ title: 'Mobile', icon: Smartphone, skills: ['React Native', 'Expo', 'Tauri', 'Flutter'] },
	{ title: 'Languages', icon: Terminal, skills: ['TypeScript', 'JavaScript', 'Rust', 'Go', 'Python'] },
	{ title: 'Database', icon: Database, skills: ['PostgreSQL', 'MongoDB', 'DynamoDB'] },
	{ title: 'Design', icon: Globe, skills: ['Figma', 'CSS3'] },
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
		description: 'A popular anime based card collecting game with a reach of over 24 million users worldwide.',
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

const particlesConfig: ISourceOptions = {
	autoPlay: true,
	background: {
		color: {
			value: '#000',
		},
		image: '',
		position: '',
		repeat: '',
		size: '',
		opacity: 1,
	},
	backgroundMask: {
		composite: 'destination-out',
		cover: {
			color: {
				value: '#fff',
			},
			opacity: 1,
		},
		enable: false,
	},
	clear: true,
	defaultThemes: {},
	delay: 0,
	fullScreen: {
		enable: true,
		zIndex: -1,
	},
	detectRetina: true,
	duration: 0,
	fpsLimit: 120,
	interactivity: {
		detectsOn: 'window',
		events: {
			onClick: {
				enable: false,
				mode: [],
			},
			onDiv: {
				selectors: [],
				enable: false,
				mode: [],
				type: 'circle',
			},
			onHover: {
				enable: false,
				mode: [],
				parallax: {
					enable: false,
					force: 2,
					smooth: 10,
				},
			},
			resize: {
				delay: 0.5,
				enable: true,
			},
		},
		modes: {
			trail: {
				delay: 1,
				pauseOnStop: false,
				quantity: 1,
			},
			attract: {
				distance: 200,
				duration: 0.4,
				easing: 'ease-out-quad',
				factor: 1,
				maxSpeed: 50,
				speed: 1,
			},
			bounce: {
				distance: 200,
			},
			bubble: {
				distance: 200,
				duration: 0.4,
				mix: false,
				divs: {
					distance: 200,
					duration: 0.4,
					mix: false,
					selectors: [],
				},
			},
			connect: {
				distance: 80,
				links: {
					opacity: 0.5,
				},
				radius: 60,
			},
			grab: {
				distance: 100,
				links: {
					blink: false,
					consent: false,
					opacity: 1,
				},
			},
			push: {
				default: true,
				groups: [],
				quantity: 4,
			},
			remove: {
				quantity: 2,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
				factor: 100,
				speed: 1,
				maxSpeed: 50,
				easing: 'ease-out-quad',
				divs: {
					distance: 200,
					duration: 0.4,
					factor: 100,
					speed: 1,
					maxSpeed: 50,
					easing: 'ease-out-quad',
					selectors: [],
				},
			},
			slow: {
				factor: 3,
				radius: 200,
			},
			light: {
				area: {
					gradient: {
						start: {
							value: '#ffffff',
						},
						stop: {
							value: '#000000',
						},
					},
					radius: 1_000,
				},
				shadow: {
					color: {
						value: '#000000',
					},
					length: 2_000,
				},
			},
		},
	},
	manualParticles: [],
	particles: {
		bounce: {
			horizontal: {
				value: 1,
			},
			vertical: {
				value: 1,
			},
		},
		collisions: {
			absorb: {
				speed: 2,
			},
			bounce: {
				horizontal: {
					value: 1,
				},
				vertical: {
					value: 1,
				},
			},
			enable: false,
			maxSpeed: 50,
			mode: 'bounce',
			overlap: {
				enable: true,
				retries: 0,
			},
		},
		color: {
			value: '#FF0000',
			animation: {
				h: {
					count: 0,
					enable: true,
					speed: 10,
					decay: 0,
					delay: 0,
					sync: true,
					offset: 0,
				},
				s: {
					count: 0,
					enable: false,
					speed: 1,
					decay: 0,
					delay: 0,
					sync: true,
					offset: 0,
				},
				l: {
					count: 0,
					enable: false,
					speed: 1,
					decay: 0,
					delay: 0,
					sync: true,
					offset: 0,
				},
			},
		},
		effect: {
			close: true,
			fill: true,
			options: {},
			type: [],
		},
		groups: {},
		move: {
			angle: {
				offset: 0,
				value: 90,
			},
			attract: {
				distance: 200,
				enable: false,
				rotate: {
					x: 3_000,
					y: 3_000,
				},
			},
			center: {
				x: 50,
				y: 50,
				mode: 'percent',
				radius: 0,
			},
			decay: 0,
			distance: {},
			direction: 'none',
			drift: 0,
			enable: true,
			gravity: {
				acceleration: 9.81,
				enable: false,
				inverse: false,
				maxSpeed: 50,
			},
			path: {
				clamp: false,
				delay: {
					value: 0,
				},
				enable: true,
				options: {
					sides: 6,
					turnSteps: 30,
					angle: 30,
				},
				generator: 'polygonPathGenerator',
			},
			outModes: {
				default: 'destroy',
				bottom: 'destroy',
				left: 'destroy',
				right: 'destroy',
				top: 'destroy',
			},
			random: false,
			size: false,
			speed: 3,
			spin: {
				acceleration: 0,
				enable: false,
			},
			straight: false,
			trail: {
				enable: true,
				length: 20,
				fill: {
					color: {
						value: '#000',
					},
				},
			},
			vibrate: false,
			warp: false,
		},
		number: {
			density: {
				enable: true,
				width: 1_920,
				height: 1_080,
			},
			limit: {
				mode: 'delete',
				value: 0,
			},
			value: 0,
		},
		opacity: {
			value: 1,
			animation: {
				count: 0,
				enable: false,
				speed: 2,
				decay: 0,
				delay: 0,
				sync: false,
				mode: 'auto',
				startValue: 'random',
				destroy: 'none',
			},
		},
		reduceDuplicates: false,
		shadow: {
			blur: 0,
			color: {
				value: '#000',
			},
			enable: false,
			offset: {
				x: 0,
				y: 0,
			},
		},
		shape: {
			close: true,
			fill: true,
			options: {},
			type: 'circle',
		},
		size: {
			value: 2,
			animation: {
				count: 0,
				enable: false,
				speed: 5,
				decay: 0,
				delay: 0,
				sync: false,
				mode: 'auto',
				startValue: 'random',
				destroy: 'none',
			},
		},
		stroke: {
			width: 0,
		},
		zIndex: {
			value: 0,
			opacityRate: 1,
			sizeRate: 1,
			velocityRate: 1,
		},
		destroy: {
			bounds: {},
			mode: 'none',
			split: {
				count: 1,
				factor: {
					value: 3,
				},
				rate: {
					value: {
						min: 4,
						max: 9,
					},
				},
				sizeOffset: true,
				particles: {},
			},
		},
		roll: {
			darken: {
				enable: false,
				value: 0,
			},
			enable: false,
			enlighten: {
				enable: false,
				value: 0,
			},
			mode: 'vertical',
			speed: 25,
		},
		tilt: {
			value: 0,
			animation: {
				enable: false,
				speed: 0,
				decay: 0,
				sync: false,
			},
			direction: 'clockwise',
			enable: false,
		},
		twinkle: {
			lines: {
				enable: false,
				frequency: 0.05,
				opacity: 1,
			},
			particles: {
				enable: false,
				frequency: 0.05,
				opacity: 1,
			},
		},
		wobble: {
			distance: 5,
			enable: false,
			speed: {
				angle: 50,
				move: 10,
			},
		},
		life: {
			count: 0,
			delay: {
				value: 0,
				sync: false,
			},
			duration: {
				value: 0,
				sync: false,
			},
		},
		rotate: {
			value: 0,
			animation: {
				enable: false,
				speed: 0,
				decay: 0,
				sync: false,
			},
			direction: 'clockwise',
			path: false,
		},
		orbit: {
			animation: {
				count: 0,
				enable: false,
				speed: 1,
				decay: 0,
				delay: 0,
				sync: false,
			},
			enable: false,
			opacity: 1,
			rotation: {
				value: 45,
			},
			width: 1,
		},
		links: {
			blink: false,
			color: {
				value: '#fff',
			},
			consent: false,
			distance: 100,
			enable: false,
			frequency: 1,
			opacity: 1,
			shadow: {
				blur: 5,
				color: {
					value: '#000',
				},
				enable: false,
			},
			triangles: {
				enable: false,
				frequency: 1,
			},
			width: 1,
			warp: false,
		},
		repulse: {
			value: 0,
			enabled: false,
			distance: 1,
			duration: 1,
			factor: 1,
			speed: 1,
		},
	},
	pauseOnBlur: true,
	pauseOnOutsideViewport: true,
	responsive: [],
	smooth: false,
	style: {},
	themes: [],
	zLayers: 100,
	emitters: {
		autoPlay: true,
		fill: true,
		life: {
			wait: false,
		},
		rate: {
			quantity: 1,
			delay: 0.25,
		},
		shape: {
			options: {},
			replace: {
				color: false,
				opacity: false,
			},
			type: 'square',
		},
		startCount: 0,
		size: {
			mode: 'percent',
			height: 0,
			width: 0,
		},
		direction: 'none',
		particles: {},
		position: {
			x: 50,
			y: 50,
		},
	},
	motion: {
		disable: false,
		reduce: {
			factor: 4,
			value: true,
		},
	},
};

export default function Home() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		void initParticlesEngine(async (engine) => {
			await loadFull(engine);
			// eslint-disable-next-line promise/prefer-await-to-then
		}).then(() => {
			setInit(true);
		});
	}, []);

	return (
		<main className="min-h-screen overflow-hidden bg-black text-white">
			{init && <Particles className="absolute inset-0" id="tsparticles" options={particlesConfig} />}
			{/* Hero Section */}
			<div className="relative">
				<div className="flex h-screen items-center justify-center px-4">
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						className="z-10 text-center"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8 }}
					>
						<motion.div
							animate={{ rotate: 360 }}
							className="mb-8"
							transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
						>
							<Terminal className="mx-auto size-20 text-blue-500" />
						</motion.div>
						<h1 className="mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
							Imran Hussain Barbhuiya
						</h1>
						<p className="mb-6 text-3xl font-bold text-gray-300 md:text-4xl">Full Stack Developer</p>
						<p className="mb-8 text-xl text-gray-400 md:text-2xl">Crafting digital experiences with code</p>
						<div className="flex justify-center space-x-6">
							{[
								{ title: 'Github', link: 'https://github.com/imranbarbhuiya' },
								{ title: 'Linkedin', link: 'https://www.linkedin.com/in/imranbarbhuiya/' },
								{ title: 'X', link: 'https://x.com/notparbez' },
							].map((platform) => (
								<motion.a
									className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
									href={platform.link}
									key={platform.title}
									target="_blank"
									whileHover={{ scale: 1.2, rotate: 5 }}
									whileTap={{ scale: 0.9 }}
								>
									{platform.title === 'Github' && <Github size={24} />}
									{platform.title === 'Linkedin' && <Linkedin size={24} />}
									{platform.title === 'X' && <X size={24} />}
								</motion.a>
							))}
						</div>
					</motion.div>
				</div>
			</div>
			<motion.section
				className="relative py-16"
				initial={{ opacity: 0 }}
				transition={{ duration: 0.8 }}
				whileInView={{ opacity: 1 }}
			>
				<div className="mx-auto max-w-6xl px-4">
					<h2 className="mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-center text-4xl font-bold text-transparent">
						Tech Universe
					</h2>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{techStack.map(({ title, icon: Icon, skills }) => (
							<motion.div
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
										<motion.span
											className="cursor-pointer rounded-full bg-white/5 px-2 py-1 text-sm transition-colors hover:bg-white/10"
											key={skill}
											whileHover={{ scale: 1.1 }}
										>
											{skill}
										</motion.span>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>
			<section className="relative py-16">
				<div className="mx-auto max-w-6xl px-4">
					<h2 className="mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-center text-4xl font-bold text-transparent">
						Featured Projects
					</h2>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{projects.map((project, index) => (
							<motion.a
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
									className={`rounded-xl bg-gradient-to-br p-4 ${project.color} absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20`}
								/>
								<div className="relative rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg transition-colors hover:bg-white/10">
									<h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
									<p className="mb-3 text-sm text-gray-400">{project.description}</p>
									<div className="flex flex-wrap gap-1">
										{project.tech.map((tech) => (
											<motion.span
												className="cursor-pointer rounded-full bg-white/5 px-2 py-1 text-xs transition-colors hover:bg-white/10"
												key={tech}
												whileHover={{ scale: 1.1 }}
											>
												{tech}
											</motion.span>
										))}
									</div>
								</div>
							</motion.a>
						))}
					</div>
				</div>
			</section>
			<motion.section
				className="relative py-16"
				initial={{ opacity: 0 }}
				transition={{ duration: 0.8 }}
				whileInView={{ opacity: 1 }}
			>
				<div className="mx-auto max-w-4xl px-4 text-center">
					<h2 className="mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent">
						Let's Create Something Amazing
					</h2>
					<p className="mb-8 text-lg text-gray-400">Always excited to collaborate on innovative projects</p>
					<motion.a
						className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 font-semibold text-white transition-colors hover:from-blue-600 hover:to-purple-600"
						href="mailto:imranbarbhuiya.fsd@gmail.com"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						Get in Touch
					</motion.a>
				</div>
			</motion.section>
		</main>
	);
}
