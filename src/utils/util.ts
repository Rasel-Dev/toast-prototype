export const genId = () => (Math.random() + 1).toString(36).substring(7);

export const promisify = (timeout = 5000) => {
	return new Promise((res) => {
		setTimeout(() => {
			return res(0);
		}, timeout);
	});
};
