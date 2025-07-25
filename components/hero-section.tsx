'use client';

import { createLucideIcon, Github, Linkedin } from 'lucide-react';

import { TypeWriterEffectText } from './typewtiter-text';
// import { InteractiveTerminal } from './interactive-terminal';

const XIcon = createLucideIcon('X', [
	[
		'path',
		{
			// eslint-disable-next-line id-length
			d: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
			stroke: 'none',
			fill: 'currentColor',
			key: 'x-icon-path',
		},
	],
]);

export function HeroSection() {
	return (
		<section className="py-12 border-b border-gray-700">
			{/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<div> */}
			<div className="mb-4">
				<span className="text-gray-500">$ whoami</span>
			</div>
			<div className="mb-8">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">
					<TypeWriterEffectText />
					<span className="animate-pulse">|</span>
				</h1>
				<div className="text-xl text-blue-400 mb-2">
					<span className="text-gray-500">$ echo $ROLE</span>
				</div>
				<div className="text-lg mb-4">Full Stack Developer</div>
				<div className="text-gray-400 mb-6">
					<span className="text-gray-500">$ cat description.txt</span>
					<br />
					Crafting digital experiences with modern technologies
				</div>
				<div className="flex space-x-4">
					<span className="text-gray-500">$ ls social/</span>
				</div>
				<div className="flex space-x-6 mt-2">
					<a
						className="flex items-center space-x-2 hover:text-white transition-colors cursor-text"
						href="https://github.com/imranbarbhuiya"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Github className="w-5 h-5" />
						<span>github</span>
					</a>
					<a
						className="flex items-center space-x-2 hover:text-white transition-colors cursor-text"
						href="https://www.linkedin.com/in/imranbarbhuiya/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Linkedin className="w-5 h-5" />
						<span>linkedin</span>
					</a>
					<a
						className="flex items-center space-x-2 hover:text-white transition-colors cursor-text"
						href="https://x.com/notparbez"
						rel="noopener noreferrer"
						target="_blank"
					>
						<XIcon className="w-5 h-5" />
						<span>x</span>
					</a>
					{/* </div>
					</div>
				</div>
				<div className="lg:pl-8">
					<div className="mb-4 lg:mb-0">
						<span className="text-gray-500">$ interactive-terminal --start</span>
					</div>
					<InteractiveTerminal /> */}
				</div>
			</div>
		</section>
	);
}
