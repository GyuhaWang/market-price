export const currencyFormat = (number: number) => {
	const result = number
		.toFixed(0)
		.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

	return result;
};
