import { publishToast } from '../Toast';

const SecondComp = () => {
	return (
		<>
			<div>SecondComp</div>
			<button type='button' onClick={() => publishToast(2)}>
				Second Toast
			</button>
		</>
	);
};

export default SecondComp;
