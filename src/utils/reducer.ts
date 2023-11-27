/* eslint-disable no-mixed-spaces-and-tabs */
import { SType } from './Toast';
import { genId } from './util';

export const reducer = (state: SType, action: Record<string, unknown>) => {
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
