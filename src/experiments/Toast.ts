/* eslint-disable no-mixed-spaces-and-tabs */
type ToastType = { id: string; message: string; timeout?: number };
type SType = {
	toasts: ToastType[];
	defaultTimeout?: number;
	total?: number;
};
export type SubsType = React.RefObject<HTMLDivElement>;
const genId = () => (Math.random() + 1).toString(36).substring(7);

const reducer = (state: SType, action: Record<string, unknown>) => {
	switch (action.type) {
		case 'info':
			return {
				...state,
				toasts: state?.toasts
					? [
							...state.toasts,
							{
								id: genId(),
								message: action?.message + '',
								timeout: 2000,
							},
					  ]
					: [
							{
								id: genId(),
								message: action?.message + '',
								timeout: 2000,
							},
					  ],
			};
		case 'warn':
			return {
				...state,
				toasts: state?.toasts
					? [
							...state.toasts,
							{
								id: genId(),
								message: action?.message + '',
								timeout: Date.now() + 5 * 1000,
							},
					  ]
					: [
							{
								id: genId(),
								message: action?.message + '',
								timeout: Date.now() + 5 * 1000,
							},
					  ],
			};
		case 'rem':
			return {
				...state,
				toasts: state?.toasts.filter((t) => t.id !== action.id),
			};

		default:
			return state;
	}
};

// function* gen() {

// }

export default class Toast {
	private state: SType = { toasts: [], defaultTimeout: 5000, total: 0 };
	private subscribers: SubsType | null = null;

	constructor(initState: Record<string, string>) {
		this.state = { ...this.state, ...initState };
		// this.subscribers = ref;
	}

	/**
	 * getState
	 */
	public getState() {
		return this.state;
	}

	/**
	 * dispatch
	 */
	private dispatch(action: Record<string, unknown>) {
		const newState = reducer(this.state, action);
		// console.log(
		// 	'newState.toasts.length !== this.state.total :',
		// 	newState.toasts.length !== this.state.total,
		// 	newState.toasts.length,
		// 	this.state.total
		// );

		if (newState.toasts.length !== this.state.total) {
			this.state = { ...newState, total: newState.toasts.length };
			// this.notifySubscribers();

			const r = this.subscribers;
			if (r && r.current) {
				const els = [...Object.values(r.current.childNodes)] as HTMLElement[];
				const toasts = this.state.toasts;

				const elsIds = els.map((el) => el?.id);
				console.log('elsIds :', elsIds);

				const unmounts = toasts.map((t, ind) => {
					console.log('ind :', ind);
					// if (ind >= 2) return;

					const id = `toast__${t?.id}`;

					if (!elsIds.includes(id)) {
						this.insertToast(t);

						return;
					}

					return t;
				});

				console.log({ unmounts });

				// els.forEach((ch) => {
				// 	if (!toasts.length || !ch) return;

				// 	const ind = toasts.findIndex((t) => {
				// 		console.log(`toast__${t?.id}`, ch?.id);
				// 		return `toast__${t?.id}` === ch?.id;
				// 	});

				// 	setTimeout(() => {
				// 		// console.log({ ch }, 'removing');

				// 		console.log({ ind, ch });

				// 		if (ind !== -1) {
				// 			// els = els.filter((c) => c?.id !== toasts[ind].id);

				// 			// const elInd = els.findIndex((el) => el?.id === ch?.id);
				// 			// const tIndex = this.state.toasts.findIndex(
				// 			// 	(t) => `toast__${t?.id}` === ch?.id
				// 			// );

				// 			// const deletedEl = els.splice(elInd, 1);

				// 			// const deletedToast = this.state.toasts.splice(tIndex, 1);

				// 			// console.log({ deletedEl, deletedToast });

				// 			// console.log(ch.remove(), ch);
				// 		}
				// 	}, this.state.toasts[ind].timeout);
				// });
				// console.log(els, toasts, 'bottom');
			}
		}

		// console.log(this.state.toasts, 'from last');

		// this.notifySubscribers();
	}

	/**
	 * removeToast
	 */
	// public removeToast(toastId: string) {
	// 	this.dispatch({ type: 'rem', id: toastId });
	// }

	/**
	 * info
	 */
	public info(message: string) {
		this.dispatch({ type: 'info', message });
	}

	/**
	 * warn
	 */
	public warn(message: string) {
		this.dispatch({ type: 'warn', message });
	}

	/**
	 * setRef
	 */
	public setRef(ref: SubsType) {
		this.subscribers = ref;
	}

	/**
	 * subscribe
	 */
	// public subscribe(cb: SubsType) {
	// 	this.subscribers = cb;
	// 	return () => undefined;
	// 	// return () => {
	// 	// 	this.subscribers = this.subscribers.filter((sb) => sb !== cb);
	// 	// };
	// }

	/**
	 * notifySubscribers
	 */
	private notifySubscribers() {
		const r = this.subscribers;
		// const temp = toasts
		// 	.map((toast) => `<h3 id="toast__${toast.id}">${toast.message}</h3>`)
		// 	.join('');
		if (r && r.current) {
			r.current.appendChild(
				(() => {
					const el = document.createElement('h3');
					el.id = `toast__${genId()}`;
					el.innerText = 'Message';

					return el;
				})()
			);

			// r.current.innerHTML = temp;

			// r.current.insertAdjacentElement(
			// 	'afterbegin',
			// 	(() => {
			// 		const el = document.createElement('h3');
			// 		el.id = `toast__${genId()}`;
			// 		el.innerText = 'Message';

			// 		return el;
			// 	})()
			// );
		}
		// this.subscribers.forEach((cb) => {
		// 	// console.log('cb :', cb);
		// 	cb();
		// });
		// console.log('this.subscribers :', this.subscribers);
	}

	private insertToast(toast: ToastType) {
		const r = this.subscribers;
		if (r && r.current) {
			r.current.appendChild(
				(() => {
					const el = document.createElement('h3');
					el.id = `toast__${toast.id}`;
					el.innerText = toast.message;

					return el;
				})()
			);
		}
	}

	private removeToast(toastId: string) {
		const r = this.subscribers;

		const newState = reducer(this.state, { type: 'rem', id: toastId });

		if (r && r.current) {
			const els = [...Object.values(r.current.childNodes)] as HTMLElement[];

			const child = els.find((el) => el?.id === `toast__${toastId}`);

			if (!child) return;

			child?.remove();

			this.state = newState;

			// els.forEach((ch) => {
			// 	if (!toasts.length || !ch) return;

			// 	const ind = toasts.findIndex((t) => {
			// 		console.log(`toast__${t?.id}`, ch?.id);
			// 		return `toast__${t?.id}` === ch?.id;
			// 	});

			// 	setTimeout(() => {
			// 		// console.log({ ch }, 'removing');

			// 		console.log({ ind, ch });

			// 		if (ind !== -1) {
			// 			// els = els.filter((c) => c?.id !== toasts[ind].id);
			// 			const elInd = els.findIndex((el) => el?.id === ch?.id);
			// 			const tIndex = this.state.toasts.findIndex(
			// 				(t) => `toast__${t?.id}` === ch?.id
			// 			);

			// 			const deletedEl = els.splice(elInd, 1);

			// 			const deletedToast = this.state.toasts.splice(tIndex, 1);

			// 			console.log({ deletedEl, deletedToast });

			// 			console.log(ch.remove(), ch);
			// 		}
			// 	}, this.state.toasts[ind].timeout);
			// });
			/** */
			// 1) Find node element index by ID from child’s
			// 2) Remove from DOM
			// 3) remove from State
			// 4) void return
			// r.current.appendChild(
			// 	(() => {
			// 		const el = document.createElement('h3');
			// 		el.id = `toast__${toast.id}`;
			// 		el.innerText = toast.message

			// 		return el;
			// 	})()
			// );
		}
	}
}

export const toast = new Toast({});
