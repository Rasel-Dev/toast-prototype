import { useRef } from 'react';
import { toast } from '../utils/Toast';

const ToastContainer = () => {
	const toastRef = useRef<HTMLDivElement>(null);
	toast.setRef(toastRef);
	return <div className='toast-container' ref={toastRef} />;
};

export default ToastContainer;
