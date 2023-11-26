import { publishToast } from '../Toast';

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
