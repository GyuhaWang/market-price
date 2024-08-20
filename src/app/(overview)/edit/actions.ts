export async function sumbmitForm(data: any) {
	const result = await fetch(
		`${process.env.NEXT_PUBLIC_BASEURL}api/priceTag/edit`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		}
	);
	return result;
}
