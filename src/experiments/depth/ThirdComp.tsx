import { publishToast } from '../ToastTest';

const ThirdComp = () => {
	return (
		<>
			<div>ThirdComp</div>
			<button type='button' onClick={() => publishToast(3)}>
				Third Toast
			</button>
		</>
	);
};

export default ThirdComp;
