import Link from 'next/link';

export default function Resume() {
	return (
		<div className="min-h-screen bg-black text-white">
			<div className="max-w-6xl mx-auto px-8 py-16">
				<div className="flex justify-between items-start max-md:flex-col">
					<div className="max-w-3xl">
						<div className="mb-16">
							<h1 className="text-5xl font-light mb-4 tracking-tight">imran</h1>
							<p className="text-xl text-gray-300 font-light">
								full stack developer building the future of web and mobile
							</p>
						</div>
						<section className="mb-16">
							<h2 className="text-3xl font-light mb-12 tracking-tight">work</h2>
							<div className="space-y-12">
								<div className="border-l border-gray-800 pl-6">
									<div className="flex flex-wrap items-center gap-4 mb-3">
										<h3 className="text-xl font-medium">TEC Spartans</h3>
										<span className="text-sm text-gray-500 bg-gray-900 px-2 py-1 rounded">nov 2023 - present</span>
										<Link
											className="text-sm text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white"
											href="https://theesports.club/spartans"
										>
											live ↗
										</Link>
										<Link
											className="text-sm text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white"
											href="https://apps.apple.com/app/tec-spartans/id6479328964"
										>
											ios ↗
										</Link>
										<Link
											className="text-sm text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white"
											href="https://play.google.com/store/apps/details?id=club.theesports.spartans"
										>
											android ↗
										</Link>
									</div>
									<p className="text-gray-300 leading-relaxed mb-3 max-w-2xl">
										Developed the TEC Spartans mobile app, streamlining campaign and event participation. Also
										contributed to backend systems.
									</p>
									<p className="text-sm text-gray-500">Expo React Native, NestJS, Typescript</p>
								</div>
								<div className="border-l border-gray-800 pl-6">
									<div className="flex flex-wrap items-center gap-4 mb-3">
										<h3 className="text-xl font-medium">Sofi</h3>
										<span className="text-sm text-gray-500 bg-gray-900 px-2 py-1 rounded">oct 2021 - present</span>
										<Link
											className="text-sm text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white"
											href="https://sofi.gg"
										>
											live ↗
										</Link>
									</div>
									<p className="text-gray-300 leading-relaxed mb-3 max-w-2xl">
										I work on a leading anime card collecting Discord bot game with over 27 million users worldwide, and
										am also solely responsible for developing and maintaining the entire web frontend and backend.
									</p>
									<p className="text-sm text-gray-500">NextJS, NestJS, Typescript, Rust</p>
								</div>
								<div className="border-l border-gray-800 pl-6">
									<div className="flex flex-wrap items-center gap-4 mb-3">
										<h3 className="text-xl font-medium">OBScoreboard</h3>
										<span className="text-sm text-gray-500 bg-gray-900 px-2 py-1 rounded">jan 2025 - june 2025</span>
										<Link
											className="text-sm text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white"
											href="https://app.obscoreboard.com/"
										>
											live ↗
										</Link>
									</div>
									<p className="text-gray-300 leading-relaxed mb-3 max-w-2xl">
										Built a platform enabling live game overlays and remote controls for OBS streamers
									</p>
									<p className="text-sm text-gray-500">NextJS, Typescript, Firebase</p>
								</div>
								<div className="border-l border-gray-800 pl-6">
									<div className="flex flex-wrap items-center gap-4 mb-3">
										<h3 className="text-xl font-medium">Flatshare</h3>
										<span className="text-sm text-gray-500 bg-gray-900 px-2 py-1 rounded">2023</span>
										<span className="text-xs text-gray-600 bg-gray-900 px-2 py-1 rounded">inactive</span>
										<Link
											className="text-sm text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white"
											href="https://play.google.com/store/apps/details?id=com.joinflatshare.club&hl=en_IN"
										>
											android ↗
										</Link>
									</div>
									<p className="text-gray-300 leading-relaxed mb-3 max-w-2xl">
										Backend developer for Flatshare, a mobile app helps with finding flatmates in India.
									</p>
									<p className="text-sm text-gray-500">Express</p>
								</div>
								<div className="border-l border-gray-800 pl-6">
									<div className="flex flex-wrap items-center gap-4 mb-3">
										<h3 className="text-xl font-medium">Xofi</h3>
										<span className="text-sm text-gray-500 bg-gray-900 px-2 py-1 rounded">2024 - present</span>
										<span className="text-xs text-orange-400 bg-orange-400/10 px-2 py-1 rounded">under dev</span>
										<Link
											className="text-sm text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white"
											href="https://xofi.gg"
										>
											web ↗
										</Link>
									</div>
									<p className="text-gray-300 leading-relaxed mb-3 max-w-2xl">
										CTO & Lead developer for Xofi, an anime merchandise e-commerce site focused on seamless user
										experience. Full-stack role.
									</p>
									<p className="text-sm text-gray-500">NextJS, NestJS (Fastify), PayloadCMS</p>
								</div>
							</div>
						</section>
						<section className="mb-16">
							<h2 className="text-3xl font-light mb-12 tracking-tight">projects</h2>
							<div className="space-y-12">
								<div className="border-l border-gray-800 pl-6">
									<div className="flex flex-wrap items-center gap-4 mb-3">
										<h3 className="text-xl font-medium">Ran Programming Language</h3>
										<Link
											className="text-sm text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white"
											href="https://github.com/imranbarbhuiya/ran/"
										>
											github ↗
										</Link>
									</div>
									<p className="text-gray-300 leading-relaxed mb-3 max-w-2xl">
										A programming language I built in Go, inspired by interpreter and compiler books. Made mostly for
										fun and learning.
									</p>
									<p className="text-sm text-gray-500">Go</p>
								</div>
								<div className="border-l border-gray-800 pl-6">
									<div className="flex flex-wrap items-center gap-4 mb-3">
										<h3 className="text-xl font-medium">Tagscript</h3>
										<Link
											className="text-sm text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white"
											href="https://tagscript.js.org/"
										>
											docs ↗
										</Link>
									</div>
									<p className="text-gray-300 leading-relaxed mb-3 max-w-2xl">
										A string interpreter that lets users add logic to dynamic content, mostly used in Discord bots.
										Originally in Python, I rewrote it in TypeScript.
									</p>
									<p className="text-sm text-gray-500">TypeScript</p>
								</div>
								<div className="border-l border-gray-800 pl-6">
									<div className="flex flex-wrap items-center gap-4 mb-3">
										<h3 className="text-xl font-medium">ESBuild Node Polyfill</h3>
										<Link
											className="text-sm text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white"
											href="https://github.com/imranbarbhuiya/esbuild-plugins-node-modules-polyfill"
										>
											github ↗
										</Link>
									</div>
									<p className="text-gray-300 leading-relaxed mb-3 max-w-2xl">
										A plugin for ESBuild that polyfills Node.js built-in modules and injects globals. Created to replace
										legacy plugins, used by Remix, Cloudflare, and more.
									</p>
									<p className="text-sm text-gray-500">TypeScript</p>
								</div>
								<div className="border-l border-gray-800 pl-6">
									<div className="flex flex-wrap items-center gap-4 mb-3">
										<h3 className="text-xl font-medium">Typedoc Plugin for External Links</h3>
										<Link
											className="text-sm text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white"
											href="https://github.com/imranbarbhuiya/typedoc-plugin-external-link"
										>
											github ↗
										</Link>
									</div>
									<p className="text-gray-300 leading-relaxed mb-3 max-w-2xl">
										A plugin for Typedoc that lets you add custom links for external modules. This feature is now built
										into Typedoc itself.
									</p>
									<p className="text-sm text-gray-500">TypeScript</p>
								</div>
								<div className="border-l border-gray-800 pl-6">
									<div className="flex flex-wrap items-center gap-4 mb-3">
										<h3 className="text-xl font-medium">Figma CSS-Tailwind Plugin</h3>
										<Link
											className="text-sm text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white"
											href="https://www.figma.com/community/plugin/1295012016362159423/css-tailwind-codegen"
										>
											figma ↗
										</Link>
									</div>
									<p className="text-gray-300 leading-relaxed mb-3 max-w-2xl">
										A Figma plugin that generates Tailwind CSS class names from Figma devmode CSS.
									</p>
									<p className="text-sm text-gray-500">TypeScript</p>
								</div>
								<div className="border-l border-gray-800 pl-6">
									<div className="flex flex-wrap items-center gap-4 mb-3">
										<h3 className="text-xl font-medium">React Native Headless Mention Input</h3>
										<Link
											className="text-sm text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white"
											href="https://github.com/imranbarbhuiya/react-native-headless-mention"
										>
											github ↗
										</Link>
									</div>
									<p className="text-gray-300 leading-relaxed mb-3 max-w-2xl">
										A React Native input library supporting mentions, built for chat features in TEC Spartans.
									</p>
									<p className="text-sm text-gray-500">TypeScript, React Native</p>
								</div>
							</div>
						</section>
						<section className="mb-16">
							<h2 className="text-3xl font-light mb-8 tracking-tight">things i believe</h2>
							<ul className="space-y-3 text-gray-300">
								<li>• shipping fast and fix later</li>
								<li>• once you use typescript or tailwind, you can’t go back</li>
								<li>• open source contrition is the best way to learn</li>
								<li>• small teams ship faster</li>
								<li>• reading docs is better than debugging for hours</li>
							</ul>
						</section>
						<section className="mb-16">
							<h2 className="text-3xl font-light mb-8 tracking-tight">tech</h2>
							<div className="grid grid-cols-2 gap-8">
								<div>
									<h3 className="text-lg font-medium mb-3">languages</h3>
									<ul className="space-y-1 text-gray-300">
										<li>typescript</li>
										<li>rust</li>
										<li>python</li>
										<li>go</li>
									</ul>
								</div>
								<div>
									<h3 className="text-lg font-medium mb-3">frameworks</h3>
									<ul className="space-y-1 text-gray-300">
										<li>nextjs</li>
										<li>nestjs</li>
										<li>expo</li>
										<li>tauri</li>
									</ul>
								</div>
							</div>
						</section>
						<section className="mb-16">
							<h2 className="text-3xl font-light mb-8 tracking-tight">about me</h2>
							<ul className="space-y-3 text-gray-300">
								<li>
									I love building things and contributing to open source—check out my work at{' '}
									<a className="underline" href="https://github.com/imranbarbhuiya">
										github
									</a>
									. Find more at{' '}
									<a className="underline" href="https://parbez.me">
										parbez.me
									</a>{' '}
									or email me at{' '}
									<a className="underline" href="mailto:imranbarbhuiya.fsd@gmail.com">
										imranbarbhuiya.fsd@gmail.com
									</a>
									.
								</li>
							</ul>
						</section>
					</div>
					<nav className="md:sticky md:top-16 max-md:mt-12">
						<ul className="flex flex-wrap gap-6 md:gap-4 md:flex-col md:text-right">
							<li>
								<a
									className="text-gray-400 hover:text-white transition-colors"
									href="mailto:imranbarbhuiya.fsd@gmail.com"
								>
									email ↗
								</a>
							</li>
							<li>
								<a
									className="text-gray-400 hover:text-white transition-colors"
									href="https://github.com/imranbarbhuiya"
									target="_blank"
								>
									github ↗
								</a>
							</li>
							<li>
								<a
									className="text-gray-400 hover:text-white transition-colors"
									href="https://parbez.me"
									target="_blank"
								>
									website ↗
								</a>
							</li>
							<li>
								<a
									className="text-gray-400 hover:text-white transition-colors"
									href="https://x.com/notparbez"
									target="_blank"
								>
									x ↗
								</a>
							</li>
							<li>
								<a className="text-gray-400 hover:text-white transition-colors" download href="/resume.pdf">
									resume ↙
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}
