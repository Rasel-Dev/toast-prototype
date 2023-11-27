/* eslint-disable no-mixed-spaces-and-tabs */
type ToastType = { id: string; message: string; timeout?: number };
type SType = {
	toasts: ToastType[];
	defaultTimeout?: number;
	total?: number;
};
export type SubsType = React.RefObject<HTMLDivElement>;
const genId = () => (Math.random() + 1).toString(36).substring(7);

const createHTML = () => {
	const els = [];

	for (let i = 0; i < 5; i++) {
		const el = document.createElement('h3');
		el.setAttribute('id', `toast__${genId()}`);

		els.push(el);
	}

	return els;
};
const createToasts = (): ToastType[] => {
	const toasts: ToastType[] = [];

	for (let i = 0; i < 5; i++) {
		const toast = {
			id: genId(),
			message: `dummy message ${i + 1}`,
			timeout: Math.random() * 5000,
		};
		toasts.push(toast);
	}

	return toasts;
};

// const reducer = (state: SType, action: Record<string, unknown>) => {
// 	switch (action.type) {
// 		case 'info':
// 			return {
// 				...state,
// 				toasts: state?.toasts
// 					? [
// 							...state.toasts,
// 							{
// 								id: genId(),
// 								message: action?.message + '',
// 								timeout: 2000,
// 							},
// 					  ]
// 					: [
// 							{
// 								id: genId(),
// 								message: action?.message + '',
// 								timeout: 2000,
// 							},
// 					  ],
// 			};
// 		case 'warn':
// 			return {
// 				...state,
// 				toasts: state?.toasts
// 					? [
// 							...state.toasts,
// 							{
// 								id: genId(),
// 								message: action?.message + '',
// 								timeout: Date.now() + 5 * 1000,
// 							},
// 					  ]
// 					: [
// 							{
// 								id: genId(),
// 								message: action?.message + '',
// 								timeout: Date.now() + 5 * 1000,
// 							},
// 					  ],
// 			};
// 		case 'rem':
// 			return {
// 				...state,
// 				toasts: state?.toasts.filter((t) => t.id !== action.id),
// 			};

// 		default:
// 			return state;
// 	}
// };

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
		// const newState = reducer(this.state, action);
		console.log(action);
		// console.log(
		// 	'newState.toasts.length !== this.state.total :',
		// 	newState.toasts.length !== this.state.total,
		// 	newState.toasts.length,
		// 	this.state.total
		// );

		const newState: SType = {
			toasts: createToasts(),
		};
		if (newState.toasts.length !== this.state.total) {
			this.state = { ...newState, total: newState.toasts.length };
			this.notifySubscribers();

			// eslint-disable-next-line no-debugger
			const r = this.subscribers;
			if (r && r.current) {
				const els = [...Object.values(r.current.childNodes)] as HTMLElement[];
				const testEls: HTMLElement[] = createHTML();
				const toasts = this.state.toasts;

				console.log({ testEls }, 'top');

				els.forEach((ch) => {
					if (!toasts.length || !ch) return;

					const ind = toasts.findIndex((t) => {
						// console.log(`toast__${t?.id}`, ch?.id);

						return `toast__${t?.id}` === ch?.id;
					});

					setTimeout(() => {
						// console.log({ ch }, 'removing');

						// this.state.toasts = toasts.filter((toast) => toast.id !== ch.id);

						console.log({ ind, ch });

						if (ind !== -1) {
							// els = els.filter((c) => c?.id !== toasts[ind].id);
							const elInd = els.findIndex((el) => {
								console.log('elId: ' + el?.id, 'chId: ' + ch?.id);
								return el?.id === ch?.id;
							});
							const tIndex = this.state.toasts.findIndex((t) => {
								// console.log(`toast__${t?.id}`, ch?.id);

								return `toast__${t?.id}` === ch?.id;
							});

							const deletedEl = els.splice(elInd, 1);

							const deletedToast = this.state.toasts.splice(tIndex, 1);

							console.log({ deletedEl, deletedToast });

							ch.remove();
						}
					}, this.state.toasts[ind].timeout);
				});
				console.log(els, toasts, 'bottom');

				/**
				 *
				 *
				 *
				 *
				 *
				 *
				 *
				 *
				 *
				 *
				 *
				 *
				 */

				// const els = Object.values(r.current.childNodes) as HTMLElement[];

				// let ID = '';
				// console.log('obj :', obj);
				// const ids = this.state.toasts.find(t => t.id = );
				// console.log('ids :', ids);
				// const el: Record<string, [HTMLElement, number]> = {};
				// const ids = this.state.toasts.map((item) => item.id);
				// console.log('ids :', ids);

				// els.forEach((item) => {
				// 	const time =
				// 		this.state.toasts.find((t) => `toast__${t.id}` === item.id)
				// 			?.timeout || 0;
				// 	// console.log('time :', time);

				// 	el[item.id] = [item, time];
				// });

				// const keys = Object.keys(el);
				// console.log({ el, els: els.length });

				// keys.forEach(() => {
				// 	setTimeout(() => {
				// 		console.log('first');
				// 	}, 5000);
				// });

				// while (keys.length) {
				// const interval = setInterval(() => {
				// 	// console.log('Rendering out of loop', keys);
				// 	keys.forEach((k) => {
				// 		console.log('Rendering', !!el[k]);

				// 		if (!el[k]) {
				// 			clearInterval(interval);
				// 			return;
				// 		}

				// 		const isRem = el[k][1] < Date.now();

				// 		if (isRem) {
				// 			el[k][0].remove();
				// 			delete el[k];
				// 		}
				// 	});
				// 	// if (!keys.length) {
				// 	// 	clearInterval(interval);
				// 	// }
				// }, 1000);
				// }

				// console.log('el :', el);
			}
		}

		console.log(this.state.toasts, 'from last');
	}

	/**
	 * removeToast
	 */
	public removeToast(toastId: string) {
		this.dispatch({ type: 'rem', id: toastId });
	}

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
		const temp = this.state.toasts
			.map((toast) => `<h3 id="toast__${toast.id}">${toast.message}</h3>`)
			.join('');
		if (r && r.current) {
			r.current.innerHTML = temp;
		}

		// this.subscribers.forEach((cb) => {
		// 	// console.log('cb :', cb);
		// 	cb();
		// });
		// console.log('this.subscribers :', this.subscribers);
	}
}

export const toast = new Toast({});
