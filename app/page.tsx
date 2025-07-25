'use client';

import { Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

import { ContactSection } from '@/components/contact-section';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { TechSection } from '@/components/tech-section';
import { TerminalHeader } from '@/components/terminal-header';

export default function TerminalPortfolio() {
	const [isLoading, setIsLoading] = useState(true);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const progressInterval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(progressInterval);
					setTimeout(() => setIsLoading(false), 100);
					return 100;
				}
				return prev + 2;
			});
		}, 10);

		return () => clearInterval(progressInterval);
	}, []);

	if (isLoading) {
		return (
			<div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center">
				<div className="text-center max-w-md w-full px-4">
					<div className="bg-black border-2 border-gray-600 rounded-lg overflow-hidden">
						<div className="bg-gray-800 px-3 py-2 flex items-center justify-between border-b border-gray-600">
							<div className="flex items-center space-x-2">
								<div className="flex space-x-1">
									<div className="w-2 h-2 bg-red-500 rounded-full"></div>
									<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								</div>
								<span className="text-xs text-gray-300">boot.log</span>
							</div>
							<span className="text-xs text-gray-400">initializing</span>
						</div>
						<div className="p-6 space-y-3">
							<div className="text-left space-y-2 text-sm">
								<div className="text-green-400">$ sudo systemctl start parbez.service</div>
								<div className="text-gray-400">Loading kernel modules...</div>
								<div className="text-green-400">✓ Terminal interface loaded</div>
								<div className="text-green-400">✓ Portfolio data initialized</div>
								<div className="text-yellow-400">⟳ Establishing connection...</div>
							</div>
							<div className="flex items-center justify-center mt-6">
								<Terminal className="w-8 h-8 mx-auto mb-4 animate-pulse" />
							</div>
							<div className="text-center space-y-1">
								<div className="text-sm text-green-400">Initializing parbez.me</div>
								<div className="text-xs opacity-60 text-gray-400">Please wait while the system boots...</div>
								<div className="w-full bg-gray-800 rounded-full h-2 mt-3">
									<div
										className="bg-green-400 h-2 rounded-full transition-all duration-300"
										style={{ width: `${progress}%` }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-black text-green-400 font-mono">
			<TerminalHeader currentPath="~" />
			<div className="container mx-auto px-4 py-6 max-w-6xl">
				<HeroSection />
				<TechSection />
				<ProjectsSection />
				<ContactSection />
			</div>
		</div>
	);
}
