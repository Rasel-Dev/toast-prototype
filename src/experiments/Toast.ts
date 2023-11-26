type ToastType = { id: string; message: string; timeout?: number };
type SType = {
	toasts: ToastType[];
	defaultTimeout?: number;
	total?: number;
};
export type SubsType = () => JSX.Element;

const genId = () => (Math.random() + 1).toString(36).substring(7);

const reducer = (state: SType, action: Record<string, unknown>) => {
	switch (action.type) {
		case 'info':
			return {
				...state,
				toasts: state?.toasts
					? [...state.toasts, { id: genId(), message: action?.message + '' }]
					: [{ id: genId(), message: action?.message + '' }],
			};
		case 'warn':
			return {
				...state,
				toasts: state?.toasts
					? [...state.toasts, { id: genId(), message: action?.message + '' }]
					: [{ id: genId(), message: action?.message + '' }],
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

class State {
	private state: SType = { toasts: [], defaultTimeout: 5000, total: 0 };
	private subscribers: SubsType[] = [];

	constructor(initState: Record<string, string>) {
		this.state = { ...this.state, ...initState };
	}

	/**
	 * getState
	 */
	public getState() {
		return this.state;
	}

	/**
	 * test
	 */
	public test() {
		return this.subscribers;
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
			this.notifySubscribers();
		}
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
	 * subscribe
	 */
	public subscribe(cb: SubsType, callback: (data: SubsType[]) => void) {
		// console.log('cb :', cb());
		this.subscribers.push(cb);
		callback(this.subscribers);

		return () => {
			this.subscribers = this.subscribers.filter((sb) => sb !== cb);
		};
	}

	/**
	 * notifySubscribers
	 */
	public notifySubscribers() {
		// this.subscribers.forEach((cb) => {
		// 	// console.log('cb :', cb);
		// 	cb();
		// });
		// console.log('this.subscribers :', this.subscribers);
	}
}

export const toast = new State({});

// export const info = toast.info;
