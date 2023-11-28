import { SecondTemplate, SingleLineToast } from '../Toasts';

export const SingleLineWarning = () => {
	return (
		// <div className=''>
		// 	<div className='w-80 bg-orange-400 rounded-md overflow-hidden shadow-md'>
		// 		<div className='flex justify-around items-center bg-slate-100 px-3 py-4 ml-1'>
		// 			<div className='bg-orange-100 p-2 rounded-full overflow-hidden'>
		// 				<AlertOctagon className='w-8 h-8  text-orange-500' />
		// 			</div>

		// 			<div className='text-left'>
		// 				<h1 className='font-medium mb-1 text-orange-500'>Info Message</h1>
		// 				<p>default one line toast</p>
		// 			</div>

		// 			<button type='button'>
		// 				<X />
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>

		<SingleLineToast type='warning' />
	);
};

export const SecondTemplateWarning = () => {
	return (
		// <div className=''>
		// 	<div className='w-80 bg-orange-400 rounded-md overflow-hidden shadow-md'>
		// 		<div className='flex justify-around items-center bg-slate-100 px-3 py-4 ml-1'>
		// 			<div className='bg-orange-100 p-2 rounded-full overflow-hidden'>
		// 				<AlertOctagon className='w-8 h-8  text-orange-500' />
		// 			</div>

		// 			<div className='text-left'>
		// 				<h1 className='font-medium mb-1 text-orange-500'>Info Message</h1>
		// 				<p>default one line toast</p>
		// 			</div>

		// 			<button type='button'>
		// 				<X />
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>

		<SecondTemplate type='warning' />
	);
};
