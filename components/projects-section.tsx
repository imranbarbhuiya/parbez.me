export function ProjectsSection() {
	const projects = [
		{
			name: 'Spartans',
			description: 'A mobile app for the TEC Spartans program, helping spartans join campaigns easily.',
			tech: ['React Native', 'Expo', 'Node.js', 'NestJS', 'Kotlin', 'Swift', 'C++'],
			status: 'production',
			users: '10k+',
			link: 'https://www.spartans.theesports.club/',
		},
		{
			name: 'Sofi',
			description: 'A popular anime based card collecting game with a reach of over 27 million users worldwide.',
			tech: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Rust', 'NestJS', 'Stripe', 'Paypal'],
			status: 'production',
			users: '27M+',
			link: 'https://sofi.gg/',
		},
		{
			name: 'Xofi',
			description: 'An e-commerce site for anime merchandise with seamless user experience.',
			tech: ['Rust', 'Next.js', 'NestJS', 'Redis', 'PostgreSQL', 'MongoDB', 'TypeScript', 'Docker', 'Nginx'],
			status: 'development',
			users: 'beta',
			link: 'https://xofi.gg/',
		},
		{
			name: 'Quizx',
			description: 'An engaging mobile app designed for quiz enthusiasts.',
			tech: ['React Native', 'Expo', 'Node.js', 'NestJS', 'Kotlin', 'Swift', 'Python', 'TensorFlow', 'OpenAI', 'Rust'],
			status: 'development',
			users: 'beta',
			link: 'https://quizx.gg/',
		},
		{
			name: 'Languages',
			description:
				'Created my own programming language (Ran) in Go and a template parser/executor (Tagscript) in TypeScript.',
			tech: ['Go', 'TypeScript', 'Parser', 'Interpreter', 'Compiler', 'VM'],
			status: 'open-source',
			users: 'devs',
			link: 'https://github.com/imranbarbhuiya/ran/',
		},
		{
			name: 'Open Source',
			description:
				'Passionate about open source, my projects are used by Remix, Cloudflare, and other major companies.',
			tech: ['Next.js', 'TypeScript', 'Go', 'Expo', 'React Native', 'JavaScript', 'Rust'],
			status: 'active',
			users: 'community',
			link: 'https://github.com/imranbarbhuiya/',
		},
	];

	return (
		<section className="py-12 border-b border-gray-700">
			<div className="mb-8">
				<span className="text-gray-500">$ tmux new-session -s featured_projects</span>
				<h2 className="text-3xl font-bold mt-2 text-blue-400">Featured Projects</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{projects.map((project, index) => (
					<a
						className="bg-black border-2 border-gray-600 rounded-lg overflow-hidden hover:border-green-400 transition-colors block cursor-text"
						href={project.link}
						key={index}
						rel="noopener noreferrer"
						target="_blank"
					>
						<div className="bg-gray-800 px-3 py-2 flex items-center justify-between border-b border-gray-600">
							<div className="flex items-center space-x-2">
								<div className="flex space-x-1">
									<div className="w-2 h-2 bg-red-500 rounded-full"></div>
									<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								</div>
								<span className="text-xs text-gray-300">project-{index + 1}</span>
							</div>
							<div className="flex items-center space-x-2">
								<span
									className={`text-xs px-2 py-1 rounded ${
										project.status === 'production'
											? 'bg-green-900 text-green-300'
											: project.status === 'development'
												? 'bg-yellow-900 text-yellow-300'
												: project.status === 'open-source'
													? 'bg-blue-900 text-blue-300'
													: 'bg-purple-900 text-purple-300'
									}`}
								>
									{project.status}
								</span>
							</div>
						</div>
						<div className="p-4 bg-black min-h-[200px]">
							<div className="mb-2">
								<span className="text-gray-500">$ cd ~/projects/{project.name.toLowerCase()} && cat README.md</span>
							</div>
							<h3 className="text-lg font-bold text-yellow-400 mb-2">{project.name}</h3>
							<p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
							<div className="mb-3">
								<span className="text-gray-500 text-xs">$ npm list --depth=0</span>
								<div className="mt-1 flex flex-wrap gap-1">
									{project.tech.slice(0, 4).map((tech, techIndex) => (
										<span
											className="text-xs bg-gray-900 text-green-300 px-2 py-1 rounded border border-gray-700"
											key={techIndex}
										>
											{tech}
										</span>
									))}
									{project.tech.length > 4 && (
										<span className="text-xs bg-gray-900 text-gray-400 px-2 py-1 rounded border border-gray-700">
											+{project.tech.length - 4} more
										</span>
									)}
								</div>
							</div>
							<div className="text-xs text-gray-500 flex justify-between items-center">
								<span>Active users: {project.users}</span>
								<span>
									<span className="text-green-300">●</span> {project.status === 'production' ? 'Live' : 'Active'}
								</span>
							</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
