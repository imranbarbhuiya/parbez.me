import { IconWorld } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export const Card = ({
	title,
	position,
	description,
	image,
	url,
}: {
	description: string;
	image: string;
	position: string;
	title: string;
	url: string;
}) => {
	return (
		<div className="gradient-border w-70 flex flex-col items-center justify-center gap-5 rounded-lg bg-dark-400 p-5">
			<Image alt={title} className="h-40 w-40 rounded-full" height={160} src={image} width={160} />
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-2xl font-bold">{title}</h1>
				<h2 className="text-base">{position}</h2>
				<Link className="transform cursor-pointer transition duration-500 hover:scale-110" href={url} target="_blank">
					<IconWorld size={32} />
				</Link>
			</div>
			<p className="text-center text-lg">{description}</p>
		</div>
	);
};
