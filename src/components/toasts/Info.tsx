import { SecondTemplate, SingleLineToast } from '../Toasts';

export const SingleLineInfo = () => {
	return (
		// <div className=''>
		// 	<div className='w-80 bg-blue-400 rounded-md overflow-hidden shadow-md'>
		// 		<div className='flex justify-around items-center bg-slate-100 px-3 py-4 ml-1'>
		// 			<div className='bg-blue-100 p-2 rounded-full overflow-hidden'>
		// 				<MessageCircle className='w-7 h-7  text-blue-500' />
		// 				{/* <MessageSquare className='w-7 h-7  text-blue-500' /> */}
		// 			</div>

		// 			<div className='text-left'>
		// 				<h1 className='font-medium mb-1 text-blue-500'>Info Message</h1>
		// 				<p>default one line toast</p>
		// 			</div>

		// 			<button type='button'>
		// 				<X />
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>

		<SingleLineToast type='info' />
	);
};

export const SecondTemplateInfo = () => {
	return <SecondTemplate type='info' />;
};
