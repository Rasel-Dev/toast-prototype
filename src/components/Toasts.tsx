import {
	AlertOctagon,
	BadgeCheck,
	MessageCircle,
	X,
	XCircle,
} from 'lucide-react';

type Type = 'success' | 'info' | 'warning' | 'error';

interface ToastProps {
	type: Type;
	theme?: 'light' | 'dark';
}

const colors = {
	success: {
		bg: 'bg-emerald-400',
		color: 'text-emerald-500',
		icon: 'bg-emerald-100',
	},
	info: {
		bg: 'bg-blue-400',
		color: 'text-blue-500',
		icon: 'bg-blue-100',
	},
	warning: {
		bg: 'bg-orange-400',
		color: 'text-orange-500',
		icon: 'bg-orange-100',
	},
	error: {
		bg: 'bg-red-400',
		color: 'text-red-500',
		icon: 'bg-red-100',
	},
};

const iconComp = {
	success: BadgeCheck,
	info: MessageCircle,
	warning: AlertOctagon,
	error: XCircle,
};

export function SingleLineToast(props: ToastProps) {
	const Icon = iconComp[props.type];

	return (
		<div
			className={`w-80 rounded-md overflow-hidden shadow-md ${
				colors[props.type].bg
			}`}
		>
			<div className='flex justify-around items-center bg-slate-100 px-3 py-4 ml-1'>
				<div
					className={`p-2 rounded-full overflow-hidden ${
						colors[props.type].icon
					}`}
				>
					<Icon className={`w-7 h-7  ${colors[props.type].color}`} />
				</div>

				<div className='text-left'>
					<h1 className={`font-medium mb-1 ${colors[props.type].color}`}>
						Default Toast
					</h1>
					<p>default one line toast</p>
				</div>

				<button type='button'>
					<X />
				</button>
			</div>
		</div>
	);
}

interface SecondTemplateProps {
	type: Type;
	theme?: 'light' | 'dark';
}

export function SecondTemplate(props: SecondTemplateProps) {
	const Icon = iconComp[props.type];

	return (
		// <div className='w-80 bg-blue-400 rounded-md overflow-hidden shadow-md'>
		// 	<div className='flex justify-around items-center bg-slate-100 px-3 py-4 ml-1'>
		// 		<div className='flex items-center gap-2'>
		// 			<div className='bg-blue-100 p-2 rounded-full overflow-hidden'>
		// 				<BadgeCheck className='w-7 h-7  text-blue-500' />
		// 			</div>
		// 			<h1 className='font-medium mb-1 text-blue-500'>Info Message</h1>
		// 		</div>

		// 		<button type='button'>
		// 			<X />
		// 		</button>
		// 	</div>
		// 	<div className='text-left'>
		// 		<p>default one line toast</p>
		// 	</div>
		// </div>

		<div
			className={`w-80 rounded-md overflow-hidden shadow-md ${
				colors[props.type].bg
			}`}
		>
			<div className='bg-slate-100 px-3 py-4 ml-1'>
				<div className='flex justify-between items-center'>
					<div className='flex justify-center items-center gap-2'>
						<div
							className={`p-2 rounded-full overflow-hidden ${
								colors[props.type].icon
							}`}
						>
							<Icon className={`w-5 h-5  ${colors[props.type].color}`} />
						</div>
						<p className={`font-medium ${colors[props.type].color}`}>
							Default Toast{' '}
						</p>
					</div>

					<button type='button'>
						<X className='w-5 h-5' />
					</button>
				</div>

				<p className='px-9 text-justify'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
					eligendi!
				</p>
			</div>
		</div>
	);
}
