import { PriceTag } from '@/@types/priceTag';

export async function getPriceTagById(id: string): Promise<PriceTag> {
	const data = await (
		await fetch(`http://localhost:3000//api/getOne/${id}`)
	).json();

	return data;
}
