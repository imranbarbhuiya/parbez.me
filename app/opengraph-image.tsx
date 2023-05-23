/* eslint-disable react/no-unknown-property */
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export const alt = 'Parbez';
export const size = {
	width: 1_200,
	height: 630,
};
export const contentType = 'image/png';

export default function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
					backgroundColor: 'black',
					flexDirection: 'column',
					width: '100%',
					height: '100%',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						justifyContent: 'center',
						color: 'white',
					}}
				>
					<h1
						style={{
							fontSize: 96,
							margin: 0,
							fontWeight: 800,
						}}
					>
						Hi, I'm <span tw="bg-[#5865f2] rounded-lg py-1 px-6 ml-4">Imran Barbhuiya</span>
					</h1>
					<h2
						style={{
							fontSize: 72,
							margin: 0,
							fontWeight: 600,
						}}
					>
						Also known as Parbez
					</h2>
				</div>
			</div>
		),
		{
			...size,
		},
	);
}
