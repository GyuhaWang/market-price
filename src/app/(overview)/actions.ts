import { PriceTag } from '@/@types/priceTag';

export async function getCountriesPriceTags(
	country: string,
	limit?: number
): Promise<PriceTag[]> {
	const data = await (
		await fetch(
			`${process.env.NEXT_PUBLIC_BASEURL}api/priceTag/${country}?take=${
				limit ?? 5
			}`,
			{ next: { revalidate: 60 } }
		)
	).json();

	return data;
}
