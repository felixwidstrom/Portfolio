export const debounce = (fn: () => unknown, delay: number) => {
	let timeoutId: number;
	return function (this: unknown, ...args: []) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn.apply(this, args), delay);
	};
};
