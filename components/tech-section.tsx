export function TechSection() {
	const techCategories = [
		{
			name: 'Frontend',
			icon: '🌐',
			skills: ['Next.js', 'React', 'Nuxt', 'React Router'],
			command: 'frontend',
		},
		{
			name: 'Backend',
			icon: '⚙️',
			skills: ['Node.js', 'NestJS', 'Express', 'Fastify', 'Rocket'],
			command: 'backend',
		},
		{
			name: 'Mobile',
			icon: '📱',
			skills: ['React Native', 'Expo', 'Tauri', 'Flutter'],
			command: 'mobile',
		},
		{
			name: 'Languages',
			icon: '💻',
			skills: ['TypeScript', 'JavaScript', 'Rust', 'Go', 'Python'],
			command: 'languages',
		},
		{
			name: 'Database',
			icon: '🗄️',
			skills: ['PostgreSQL', 'MongoDB', 'DynamoDB'],
			command: 'database',
		},
		{
			name: 'Design',
			icon: '🎨',
			skills: ['Figma'],
			command: 'design',
		},
	];

	return (
		<section className="py-12 border-b border-gray-700">
			<div className="mb-8">
				<span className="text-gray-500">$ tmux new-session -s tech_stack</span>
				<h2 className="text-3xl font-bold mt-2 text-blue-400">Technology Stack</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{techCategories.map((category, index) => (
					<div className="bg-black border-2 border-gray-600 rounded-lg overflow-hidden" key={index}>
						<div className="bg-gray-800 px-3 py-2 flex items-center justify-between border-b border-gray-600">
							<div className="flex items-center space-x-2">
								<div className="flex space-x-1">
									<div className="w-2 h-2 bg-red-500 rounded-full"></div>
									<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								</div>
								<span className="text-xs text-gray-300">pane-{index + 1}</span>
							</div>
							<span className="text-xs text-gray-400">{category.command}</span>
						</div>
						<div className="p-4 bg-black min-h-[160px]">
							<div className="mb-2">
								<span className="text-gray-500">$ cat /tech/{category.command}.txt</span>
							</div>
							<div className="flex items-center space-x-2 mb-3">
								<span className="text-lg">{category.icon}</span>
								<span className="text-yellow-400 font-semibold">{category.name}</span>
							</div>
							<div className="space-y-1">
								{category.skills.map((skill, skillIndex) => (
									<div className="text-sm flex items-center" key={skillIndex}>
										<span className="text-green-500 mr-2">✓</span>
										<span className="text-green-300">{skill}</span>
									</div>
								))}
							</div>
							<div className="mt-3 text-xs text-gray-500">
								[{category.skills.length} {category.skills.length === 1 ? 'technology' : 'technologies'} mastered]
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
