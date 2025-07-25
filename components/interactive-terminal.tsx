/* eslint-disable no-promise-executor-return */
'use client';

import { useState, useEffect, useRef } from 'react';

interface FileSystemItem {
	children?: Record<string, FileSystemItem>;
	content?: string[];
	name: string;
	type: 'file' | 'directory';
}

interface Command {
	command: string;
	output: string[] | string;
	type?: 'info' | 'success' | 'error';
}

const commands: Record<string, Command> = {
	whoami: {
		command: 'whoami',
		output: 'Imran Hussain Barbhuiya',
		type: 'success',
	},
	'echo $ROLE': {
		command: 'echo $ROLE',
		output: 'Full Stack Developer',
		type: 'success',
	},
	'echo "Ready to collaborate?"': {
		command: 'echo "Ready to collaborate?"',
		output: 'Ready to collaborate?',
		type: 'success',
	},
	'contact --method email': {
		command: 'contact --method email',
		output: 'imranbarbhuiya.fsd@gmail.com',
		type: 'success',
	},
	status: {
		command: 'status',
		output: ['Available for collaboration', 'Open to new opportunities'],
		type: 'success',
	},
	'tmux new-session -s tech_stack': {
		command: 'tmux new-session -s tech_stack',
		output: 'Starting new tmux session: tech_stack',
		type: 'success',
	},
	'tmux new-session -s featured_projects': {
		command: 'tmux new-session -s featured_projects',
		output: 'Starting new tmux session: featured_projects',
		type: 'success',
	},
	frontend: {
		command: 'frontend',
		output: ['🌐 Frontend Technologies:', 'Next.js', 'React', 'Nuxt', 'React Router'],
		type: 'success',
	},
	backend: {
		command: 'backend',
		output: ['⚙️ Backend Technologies:', 'Node.js', 'NestJS', 'Express', 'Fastify', 'Rocket'],
		type: 'success',
	},
	mobile: {
		command: 'mobile',
		output: ['📱 Mobile Technologies:', 'React Native', 'Expo', 'Tauri', 'Flutter'],
		type: 'success',
	},
	languages: {
		command: 'languages',
		output: ['💻 Programming Languages:', 'TypeScript', 'JavaScript', 'Rust', 'Go', 'Python'],
		type: 'success',
	},
	database: {
		command: 'database',
		output: ['🗄️ Database Technologies:', 'PostgreSQL', 'MongoDB', 'DynamoDB'],
		type: 'success',
	},
	design: {
		command: 'design',
		output: ['🎨 Design Tools:', 'Figma'],
		type: 'success',
	},
};

const fileSystem: Record<string, FileSystemItem> = {
	'/': {
		name: '/',
		type: 'directory',
		children: {
			'description.txt': {
				name: 'description.txt',
				type: 'file',
				content: ['Crafting digital experiences with modern technologies'],
			},
			social: {
				name: 'social',
				type: 'directory',
				children: {
					'github.txt': {
						name: 'github.txt',
						type: 'file',
						content: ['https://github.com/imranbarbhuiya'],
					},
					'linkedin.txt': {
						name: 'linkedin.txt',
						type: 'file',
						content: ['https://www.linkedin.com/in/imranbarbhuiya/'],
					},
					'x.txt': {
						name: 'x.txt',
						type: 'file',
						content: ['https://x.com/notparbez'],
					},
				},
			},
			tech: {
				name: 'tech',
				type: 'directory',
				children: {
					'frontend.txt': {
						name: 'frontend.txt',
						type: 'file',
						content: ['🌐 Frontend', 'Next.js', 'React', 'Nuxt', 'React Router', '[4 technologies mastered]'],
					},
					'backend.txt': {
						name: 'backend.txt',
						type: 'file',
						content: ['⚙️ Backend', 'Node.js', 'NestJS', 'Express', 'Fastify', 'Rocket', '[5 technologies mastered]'],
					},
					'mobile.txt': {
						name: 'mobile.txt',
						type: 'file',
						content: ['📱 Mobile', 'React Native', 'Expo', 'Tauri', 'Flutter', '[4 technologies mastered]'],
					},
					'languages.txt': {
						name: 'languages.txt',
						type: 'file',
						content: ['💻 Languages', 'TypeScript', 'JavaScript', 'Rust', 'Go', 'Python', '[5 technologies mastered]'],
					},
					'database.txt': {
						name: 'database.txt',
						type: 'file',
						content: ['🗄️ Database', 'PostgreSQL', 'MongoDB', 'DynamoDB', '[3 technologies mastered]'],
					},
					'design.txt': {
						name: 'design.txt',
						type: 'file',
						content: ['🎨 Design', 'Figma', '[1 technology mastered]'],
					},
				},
			},
			projects: {
				name: 'projects',
				type: 'directory',
				children: {
					spartans: {
						name: 'spartans',
						type: 'directory',
						children: {
							'README.md': {
								name: 'README.md',
								type: 'file',
								content: [
									'# Spartans',
									'A mobile app for the TEC Spartans program, helping spartans join campaigns easily.',
									'Status: production',
									'Active users: 10k+',
									'Link: https://www.spartans.theesports.club/',
								],
							},
							'package.json': {
								name: 'package.json',
								type: 'file',
								content: ['Dependencies:', 'React Native, Expo, Node.js, NestJS, Kotlin, Swift, C++'],
							},
						},
					},
					sofi: {
						name: 'sofi',
						type: 'directory',
						children: {
							'README.md': {
								name: 'README.md',
								type: 'file',
								content: [
									'# Sofi',
									'A popular anime based card collecting game with a reach of over 24 million users worldwide.',
									'Status: production',
									'Active users: 24M+',
									'Link: https://sofi.gg/',
								],
							},
							'package.json': {
								name: 'package.json',
								type: 'file',
								content: [
									'Dependencies:',
									'TypeScript, Next.js, Node.js, PostgreSQL, MongoDB, Rust, NestJS, Stripe, Paypal',
								],
							},
						},
					},
					xofi: {
						name: 'xofi',
						type: 'directory',
						children: {
							'README.md': {
								name: 'README.md',
								type: 'file',
								content: [
									'# Xofi',
									'An e-commerce site for anime merchandise with seamless user experience.',
									'Status: development',
									'Active users: beta',
									'Link: https://xofi.gg/',
								],
							},
							'package.json': {
								name: 'package.json',
								type: 'file',
								content: [
									'Dependencies:',
									'Rust, Next.js, NestJS, Redis, PostgreSQL, MongoDB, TypeScript, Docker, Nginx',
								],
							},
						},
					},
					quizx: {
						name: 'quizx',
						type: 'directory',
						children: {
							'README.md': {
								name: 'README.md',
								type: 'file',
								content: [
									'# Quizx',
									'An engaging mobile app designed for quiz enthusiasts.',
									'Status: development',
									'Active users: beta',
									'Link: https://quizx.gg/',
								],
							},
							'package.json': {
								name: 'package.json',
								type: 'file',
								content: [
									'Dependencies:',
									'React Native, Expo, Node.js, NestJS, Kotlin, Swift, Python, TensorFlow, OpenAI, Rust',
								],
							},
						},
					},
					languages: {
						name: 'languages',
						type: 'directory',
						children: {
							'README.md': {
								name: 'README.md',
								type: 'file',
								content: [
									'# Programming Languages',
									'Created my own programming language (Ran) in Go and a template parser/executor (Tagscript) in TypeScript.',
									'Status: open-source',
									'Active users: devs',
									'Link: https://github.com/imranbarbhuiya/ran/',
								],
							},
							'package.json': {
								name: 'package.json',
								type: 'file',
								content: ['Dependencies:', 'Go, TypeScript, Parser, Interpreter, Compiler, VM'],
							},
						},
					},
					opensource: {
						name: 'opensource',
						type: 'directory',
						children: {
							'README.md': {
								name: 'README.md',
								type: 'file',
								content: [
									'# Open Source',
									'Passionate about open source, my projects are used by Remix, Cloudflare, and other major companies.',
									'Status: active',
									'Active users: community',
									'Link: https://github.com/imranbarbhuiya/',
								],
							},
							'package.json': {
								name: 'package.json',
								type: 'file',
								content: ['Dependencies:', 'Next.js, TypeScript, Go, Expo, React Native, JavaScript, Rust'],
							},
						},
					},
				},
			},
		},
	},
};

interface TerminalLine {
	className?: string;
	content: string;
	type: 'command' | 'output' | 'prompt';
}

export function InteractiveTerminal() {
	const [lines, setLines] = useState<TerminalLine[]>([
		{ type: 'output', content: 'Welcome to parbez.me terminal!', className: 'text-blue-400' },
		{ type: 'output', content: 'Type "help" to see available commands.', className: 'text-gray-400' },
		{ type: 'prompt', content: '' },
	]);
	const [currentInput, setCurrentInput] = useState('');
	const [isTyping, setIsTyping] = useState(false);
	const [currentPath, setCurrentPath] = useState('/');
	const terminalRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (terminalRef.current) terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
	}, [lines]);

	useEffect(() => {
		if (inputRef.current && !isTyping) inputRef.current.focus();
	}, [isTyping]);

	const getCurrentDirectory = (): FileSystemItem => {
		const pathParts = currentPath.split('/').filter(Boolean);
		let current = fileSystem['/'];

		for (const part of pathParts) {
			if (current.children?.[part]) current = current.children[part];
			else return fileSystem['/'];
		}

		return current;
	};

	const resolvePath = (path: string): string => {
		if (path.startsWith('/')) return path;

		if (path === '..') {
			const pathParts = currentPath.split('/').filter(Boolean);
			pathParts.pop();
			return '/' + pathParts.join('/');
		}

		if (path === '.') return currentPath;

		const pathParts = currentPath.split('/').filter(Boolean);
		pathParts.push(path);
		return '/' + pathParts.join('/');
	};

	const getItemAtPath = (path: string): FileSystemItem | null => {
		const resolvedPath = resolvePath(path);
		const pathParts = resolvedPath.split('/').filter(Boolean);
		let current = fileSystem['/'];

		for (const part of pathParts) {
			if (current.children?.[part]) current = current.children[part];
			else return null;
		}

		return current;
	};

	const executeCommand = async (input: string) => {
		const trimmedInput = input.trim();
		const parts = trimmedInput.split(' ');
		const command = parts[0].toLowerCase();
		const args = parts.slice(1);

		if (!trimmedInput) return;

		setLines((prev) => [...prev.slice(0, -1), { type: 'command', content: `$ ${input}` }]);

		setIsTyping(true);

		if (command === 'clear') {
			setTimeout(() => {
				setLines([
					{ type: 'output', content: 'Terminal cleared.', className: 'text-blue-400' },
					{ type: 'prompt', content: '' },
				]);
				setIsTyping(false);
			}, 500);
			return;
		}

		if (command === 'help') {
			const helpText = [
				'Available commands:',
				'',
				'File Operations:',
				'  ls [path]       - List directory contents',
				'  cd <path>       - Change directory',
				'  cat <file>      - Display file contents',
				'  pwd             - Show current directory',
				'',
				'Direct Commands:',
				'  whoami          - Display user information',
				'  echo $ROLE      - Show role',
				'  status          - Show availability status',
				'  frontend        - Frontend technologies',
				'  backend         - Backend technologies',
				'  mobile          - Mobile technologies',
				'  languages       - Programming languages',
				'  database        - Database technologies',
				'  design          - Design tools',
				'',
				'Utility:',
				'  clear           - Clear terminal',
				'  help            - Show this help message',
				'',
				'Try: ls social/, cd projects/, cat description.txt',
			];

			for (const element of helpText) {
				await new Promise((resolve) => setTimeout(resolve, 30));
				setLines((prev) => [...prev, { type: 'output', content: element, className: 'text-yellow-400' }]);
			}
		} else if (command === 'pwd') {
			await new Promise((resolve) => setTimeout(resolve, 100));
			setLines((prev) => [
				...prev,
				{ type: 'output', content: currentPath === '/' ? '/' : currentPath, className: 'text-green-400' },
			]);
		} else if (command === 'ls') {
			const targetPath = args.length > 0 ? args[0] : '.';
			const targetItem = getItemAtPath(targetPath);

			if (!targetItem) {
				await new Promise((resolve) => setTimeout(resolve, 200));
				setLines((prev) => [
					...prev,
					{ type: 'output', content: `ls: ${targetPath}: No such file or directory`, className: 'text-red-400' },
				]);
			} else if (targetItem.type === 'file') {
				await new Promise((resolve) => setTimeout(resolve, 200));
				setLines((prev) => [...prev, { type: 'output', content: targetItem.name, className: 'text-green-400' }]);
			} else if (targetItem.children) {
				const items = Object.values(targetItem.children);
				for (const item of items) {
					await new Promise((resolve) => setTimeout(resolve, 50));
					const displayName = item.type === 'directory' ? `${item.name}/` : item.name;
					const color = item.type === 'directory' ? 'text-blue-400' : 'text-green-400';
					setLines((prev) => [...prev, { type: 'output', content: displayName, className: color }]);
				}
			}
		} else if (command === 'cd') {
			if (args.length === 0) {
				setCurrentPath('/');
				await new Promise((resolve) => setTimeout(resolve, 100));
			} else {
				const targetPath = args[0];
				const resolvedPath = resolvePath(targetPath);
				const targetItem = getItemAtPath(targetPath);

				if (!targetItem) {
					await new Promise((resolve) => setTimeout(resolve, 200));
					setLines((prev) => [
						...prev,
						{ type: 'output', content: `cd: ${targetPath}: No such file or directory`, className: 'text-red-400' },
					]);
				} else if (targetItem.type === 'file') {
					await new Promise((resolve) => setTimeout(resolve, 200));
					setLines((prev) => [
						...prev,
						{ type: 'output', content: `cd: ${targetPath}: Not a directory`, className: 'text-red-400' },
					]);
				} else {
					setCurrentPath(resolvedPath === '/' ? '/' : resolvedPath);
					await new Promise((resolve) => setTimeout(resolve, 100));
				}
			}
		} else if (command === 'cat') {
			if (args.length === 0) {
				await new Promise((resolve) => setTimeout(resolve, 200));
				setLines((prev) => [
					...prev,
					{ type: 'output', content: 'cat: missing file operand', className: 'text-red-400' },
				]);
			} else {
				const targetPath = args[0];
				const targetItem = getItemAtPath(targetPath);

				if (!targetItem) {
					await new Promise((resolve) => setTimeout(resolve, 200));
					setLines((prev) => [
						...prev,
						{ type: 'output', content: `cat: ${targetPath}: No such file or directory`, className: 'text-red-400' },
					]);
				} else if (targetItem.type === 'directory') {
					await new Promise((resolve) => setTimeout(resolve, 200));
					setLines((prev) => [
						...prev,
						{ type: 'output', content: `cat: ${targetPath}: Is a directory`, className: 'text-red-400' },
					]);
				} else if (targetItem.content) {
					for (let i = 0; i < targetItem.content.length; i++) {
						await new Promise((resolve) => setTimeout(resolve, 80));
						setLines((prev) => [
							...prev,
							{ type: 'output', content: targetItem.content![i], className: 'text-green-400' },
						]);
					}
				}
			}
		} else if (trimmedInput === 'npm list --depth=0') {
			const currentDir = getCurrentDirectory();
			if (currentDir.name.includes('project') || currentPath.includes('/projects/')) {
				const packageFile = currentDir.children?.['package.json'];
				if (packageFile?.content) {
					for (let i = 0; i < packageFile.content.length; i++) {
						await new Promise((resolve) => setTimeout(resolve, 80));
						setLines((prev) => [
							...prev,
							{ type: 'output', content: packageFile.content![i], className: 'text-green-400' },
						]);
					}
				} else {
					await new Promise((resolve) => setTimeout(resolve, 200));
					setLines((prev) => [
						...prev,
						{ type: 'output', content: 'package.json not found in current directory', className: 'text-red-400' },
					]);
				}
			} else {
				await new Promise((resolve) => setTimeout(resolve, 200));
				setLines((prev) => [
					...prev,
					{
						type: 'output',
						content: 'npm: command not available outside project directories',
						className: 'text-red-400',
					},
				]);
			}
		} else {
			// Check for direct commands
			const directCommand = commands[trimmedInput] as Command | undefined;
			if (directCommand) {
				const output = Array.isArray(directCommand.output) ? directCommand.output : [directCommand.output];

				for (const element of output) {
					await new Promise((resolve) => setTimeout(resolve, 100));
					setLines((prev) => [
						...prev,
						{
							type: 'output',
							content: element,
							className:
								directCommand.type === 'success'
									? 'text-green-400'
									: directCommand.type === 'error'
										? 'text-red-400'
										: 'text-yellow-400',
						},
					]);
				}
			} else {
				await new Promise((resolve) => setTimeout(resolve, 300));
				setLines((prev) => [
					...prev,
					{ type: 'output', content: `Command not found: ${trimmedInput}`, className: 'text-red-400' },
					{ type: 'output', content: 'Type "help" for available commands.', className: 'text-gray-400' },
				]);
			}
		}

		setTimeout(() => {
			setLines((prev) => [...prev, { type: 'prompt', content: '' }]);
			setIsTyping(false);
		}, 200);
	};

	const handleKeyPress = (ev: React.KeyboardEvent) => {
		if (ev.key === 'Enter' && !isTyping) {
			void executeCommand(currentInput);
			setCurrentInput('');
		}
	};

	const handleTerminalClick = () => {
		if (inputRef.current && !isTyping) inputRef.current.focus();
	};

	const getDisplayPath = () => (currentPath === '/' ? '~' : `~${currentPath}`);

	return (
		<div className="bg-black border-2 border-gray-600 rounded-lg overflow-hidden h-full">
			<div className="bg-gray-800 px-3 py-2 flex items-center justify-between border-b border-gray-600">
				<div className="flex items-center space-x-2">
					<div className="flex space-x-1">
						<div className="w-2 h-2 bg-red-500 rounded-full"></div>
						<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
						<div className="w-2 h-2 bg-green-500 rounded-full"></div>
					</div>
					<span className="text-xs text-gray-300">interactive-terminal</span>
				</div>
				<span className="text-xs text-gray-400">{getDisplayPath()}</span>
			</div>
			<div
				className="p-4 bg-black h-80 overflow-y-auto cursor-text font-mono text-sm"
				onClick={handleTerminalClick}
				ref={terminalRef}
			>
				{lines.map((line, index) => (
					<div className="mb-1" key={index}>
						{line.type === 'prompt' ? (
							<div className="flex items-center">
								<span className="text-blue-400 mr-1">{getDisplayPath()}</span>
								<span className="text-green-400 mr-2">$</span>
								<input
									className="bg-transparent border-none outline-none text-green-400 flex-1"
									disabled={isTyping}
									onChange={(ev) => setCurrentInput(ev.target.value)}
									onKeyDown={handleKeyPress}
									placeholder={isTyping ? 'Processing...' : 'Type a command...'}
									ref={inputRef}
									type="text"
									value={currentInput}
								/>
								<span className="animate-pulse text-green-400">|</span>
							</div>
						) : (
							<div className={line.className ?? 'text-green-400'}>{line.content}</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
