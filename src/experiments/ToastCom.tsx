// import { toast } from './Toast';

const ToastCom = () => {
	// const toastMessages = toast.test();

	// console.log('toastMessages :', toastMessages);

	// toastMessages.map((tItem) => {
	// 	console.log('tItem :', tItem);
	// });
	return (
		<div className='toast-container'>
			{/* {toastMessages.map((tItem) => (
				<div key={tItem.id} className='toast'>
					<span>{tItem.message}</span>
					<button onClick={() => toast.removeToast(tItem.id)}>Close</button>
				</div>
			))} */}
		</div>
	);
};

export default ToastCom;
