import { Terminal } from 'lucide-react';
import Link from 'next/link';

interface TerminalHeaderProps {
	readonly currentPath: string;
}

export function TerminalHeader({ currentPath }: TerminalHeaderProps) {
	return (
		<div className="bg-gray-800 border-b border-gray-600 px-4 py-2">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<div className="flex space-x-2">
						<div className="w-3 h-3 bg-red-500 rounded-full"></div>
						<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
						<div className="w-3 h-3 bg-green-500 rounded-full"></div>
					</div>
					<Terminal className="w-4 h-4 ml-4" />
					<span className="text-sm text-gray-300">parbez@terminal</span>
					<span className="text-gray-500">:</span>
					<span className="text-blue-400">{currentPath}</span>
				</div>
				<Link href="/resume">
					<button
						className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 text-gray-300 rounded border border-gray-600 transition-colors"
						type="button"
					>
						resume
					</button>
				</Link>
			</div>
		</div>
	);
}
