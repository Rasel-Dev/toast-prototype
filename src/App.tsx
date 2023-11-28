import './App.css';
import { SecondTemplateInfo, SingleLineInfo } from './components/toasts/Info';
import {
	SecondTemplateError,
	SingleLineError,
} from './components/toasts/error';
import {
	SecondTemplateSuccess,
	SingleLineSuccess,
} from './components/toasts/success';
import {
	SecondTemplateWarning,
	SingleLineWarning,
} from './components/toasts/warning';

function App() {
	return (
		<div className='flex flex-col gap-8'>
			<h1 className='text-3xl text-left mt-5'>SingleLine Template</h1>

			<SingleLineInfo />
			<SingleLineSuccess />
			<SingleLineWarning />
			<SingleLineError />

			<h1 className='text-3xl text-left mt-5'>Second Template</h1>

			<SecondTemplateInfo />
			<SecondTemplateSuccess />
			<SecondTemplateWarning />
			<SecondTemplateError />
		</div>
	);
}

export default App;
