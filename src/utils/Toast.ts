import { reducer } from './reducer';
import { promisify } from './util';

export type ToastType = { id: string; message: string; timeout?: number };
export type SType = {
	toasts: ToastType[];
	defaultTimeout?: number;
	total?: number;
};
export type SubsType = React.RefObject<HTMLDivElement>;

export default class Toast {
	private state: SType = { toasts: [], defaultTimeout: 5000, total: 0 };
	private subscribers: SubsType | null = null;

	constructor(initState: Record<string, string>) {
		this.state = { ...this.state, ...initState };
	}

	private insertToast(toast: ToastType) {
		// console.log('insertToast :', toast);
		const r = this.subscribers;
		if (r && r.current) {
			r.current.appendChild(
				(() => {
					const el = document.createElement('h3');
					el.id = `toast__${toast.id}`;
					el.innerText = `${toast.message}-${toast.id}`;

					return el;
				})()
			);
		}
	}

	private removeToast(toastId: string) {
		// console.log('removeToast :', toastId);
		const r = this.subscribers;

		const newState = reducer(this.state, { type: 'rem', id: toastId });

		if (r && r.current) {
			const els = [...Object.values(r.current.childNodes)] as HTMLElement[];

			const child = els.find((el) => el?.id === `toast__${toastId}`);

			if (!child) return;

			child?.remove();

			this.state = newState;
		}
	}

	/**
	 * dispatch
	 */
	private dispatch(action: Record<string, unknown>) {
		const newState = reducer(this.state, action);
		this.state = { ...newState, total: newState.toasts.length };
		const r = this.subscribers;
		if (r && r.current) {
			const toasts = this.state.toasts;
			const els = [...Object.values(r.current.childNodes)] as HTMLElement[];
			const elsIds = els.map((el) => el?.id);
			// console.log('elsIds :', elsIds);

			toasts.forEach((t) => {
				if (!elsIds.includes(`toast__${t?.id}`)) {
					this.insertToast(t);
					promisify(this.state.defaultTimeout).then(() => {
						this.removeToast(t.id);
					});
				}
			});
		}
	}

	/**
	 * setRef
	 */
	public setRef(ref: SubsType) {
		this.subscribers = ref;
	}

	/**
	 * getState
	 */
	getState() {
		return this.state;
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
}

export const toast = new Toast({});
