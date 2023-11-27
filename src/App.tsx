import './App.css';
import reactLogo from './assets/react.svg';
import { toast } from './utils/Toast';
import viteLogo from '/vite.svg';

function App() {
	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				{/* <button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button> */}
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<button onClick={() => toast.info('Success Message')}>
				Show Success Toast
			</button>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
