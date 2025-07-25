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

	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 1_500);
		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return (
			<div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center">
				<div className="text-center">
					<Terminal className="w-8 h-8 mx-auto mb-4 animate-pulse" />
					<div className="text-sm">Initializing terminal...</div>
					<div className="mt-2 text-xs opacity-60">Loading parbez.me</div>
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
