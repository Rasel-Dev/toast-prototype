import { SecondTemplate, SingleLineToast } from '../Toasts';

export const SingleLineSuccess = () => {
	return (
		// <div className=''>
		// 	<div className='w-80 bg-emerald-400 rounded-md overflow-hidden shadow-md'>
		// 		<div className='flex justify-around items-center bg-slate-100 px-3 py-4 ml-1'>
		// 			<div className='bg-emerald-100 p-2 rounded-full overflow-hidden'>
		// 				<BadgeCheck className='w-7 h-7  text-emerald-500' />
		// 			</div>

		// 			<div className='text-left'>
		// 				<h1 className='font-medium mb-1 text-emerald-500'>Info Message</h1>
		// 				<p>default one line toast</p>
		// 			</div>

		// 			<button type='button'>
		// 				<X />
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>

		<SingleLineToast type='success' />
	);
};

export const SecondTemplateSuccess = () => {
	return <SecondTemplate type='success' />;
};
