import { PriceTag } from '@/@types/priceTag';

export async function getCountriesPriceTags(
	country: string,
	limit?: number
): Promise<PriceTag[]> {
	const data = await (
		await fetch(
			`http://localhost:3000//api/priceTag/${country}?take=${limit ?? 5}`,
			{ next: { revalidate: 60 } }
		)
	).json();

	return data;
}
