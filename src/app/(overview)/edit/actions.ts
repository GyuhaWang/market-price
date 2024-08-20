export async function sumbmitForm(data: any) {
	const result = await fetch('http://localhost:3000/api/priceTag/edit', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});
	return result;
}
