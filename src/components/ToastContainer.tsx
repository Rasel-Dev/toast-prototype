import React, { useState } from 'react';

function ToastContainer() {
	const [toastQueue, setToastQueue] = useState([]);
	const [isToastBeingDisplayed, setIsToastBeingDisplayed] = useState(false);

	function showToast(message, type, options) {
		const toast = { message, type, options };
		setToastQueue((prevQueue) => [...prevQueue, toast]);

		if (!isToastBeingDisplayed) {
			displayNextToast();
		}
	}

	function displayNextToast() {
		if (toastQueue.length === 0) {
			setIsToastBeingDisplayed(false);
			return;
		}

		setIsToastBeingDisplayed(true);

		const toast = toastQueue[0];
		setToastQueue((prevQueue) => prevQueue.slice(1));

		// Render the toast notification
		renderToastNotification(toast);

		setTimeout(displayNextToast, toast.options.duration);
	}

	return (
		<div>
			{toastQueue.map((toast) => (
				<div key={toast.message}>{toast.message}</div>
			))}
		</div>
	);
}

export default ToastContainer;
