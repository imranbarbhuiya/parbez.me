export function ContactSection() {
	return (
		<section className="py-12">
			<div className="text-center">
				<span className="text-gray-500">$ echo "Ready to collaborate?"</span>
				<h2 className="text-3xl font-bold mt-2 mb-4 text-blue-400">Let's Build Something Amazing</h2>
				<p className="text-gray-400 mb-8">Always excited to work on innovative projects and share knowledge</p>
				<div className="space-y-2">
					<div className="text-gray-500">$ contact --method email</div>
					<a
						className="text-blue-400 hover:text-blue-300 transition-colors cursor-text"
						href="mailto:imranbarbhuiya.fsd@gmail.com"
					>
						imranbarbhuiya.fsd@gmail.com
					</a>
					<div className="text-green-400 mt-4">
						<span className="text-gray-500">$ status</span>
						<br />
						Available for collaboration • Open to new opportunities
					</div>
				</div>
			</div>
		</section>
	);
}
