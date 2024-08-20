import { PriceTag } from '@/@types/priceTag';

export async function getPriceTagById(id: string): Promise<PriceTag> {
	const data = await (
		await fetch(`${process.env.NEXT_PUBLIC_BASEURL}api/getOne/${id}`)
	).json();

	return data;
}
