import { publishToast } from '../ToastTest';

const FirstComp = () => {
	return (
		<>
			<div>FirstComp</div>
			<button type='button' onClick={() => publishToast(1)}>
				First Toast
			</button>
		</>
	);
};

export default FirstComp;
