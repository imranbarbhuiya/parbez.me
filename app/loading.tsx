import './loading.css';

export default function Loading() {
	return (
		<div className="h-full w-full flex items-center justify-center">
			<div className="min-h-screen flex flex-col items-center justify-center overflow-y-hidden">
				<div className="lds-ellipsis">
					<div />
					<div />
					<div />
					<div />
				</div>
			</div>
		</div>
	);
}
