import { PriceTag } from '@/@types/priceTag';
import { Query } from '@/@types/query';
import { createQueryString } from '@/app/utils/createQueryString';
import { skip } from 'node:test';

export async function getPriceTags(
	country: string | undefined,
	search: string | undefined,
	region: string | undefined,
	category: string | undefined,
	page: number,
	cache?: RequestCache
): Promise<PriceTag[]> {
	const query: Query[] = [];
	if (search) {
		const searchQuery: Query = { key: 'search', query: search };
		query.push(searchQuery);
	}
	if (region) {
		const regionQuery: Query = { key: 'region', query: region };
		query.push(regionQuery);
	}
	if (category) {
		const categoryQuery: Query = { key: 'category', query: category };
		query.push(categoryQuery);
	}
	const skip: Query = { key: 'skip', query: ((page - 1) * 20).toString() };
	query.push(skip);
	const queryString = createQueryString(query);

	const data = await (
		await fetch(
			`http://localhost:3000//api/priceTag/${country}${queryString}`,
			{ cache: 'no-cache' }
		)
	).json();

	return data;
}

export async function getPriceTagsCount(
	country: string | undefined,
	search: string | undefined,
	region: string | undefined,
	category: string | undefined,
	cache?: RequestCache
): Promise<number> {
	const query: Query[] = [];
	if (search) {
		const searchQuery: Query = { key: 'search', query: search };
		query.push(searchQuery);
	}
	if (region) {
		const regionQuery: Query = { key: 'region', query: region };
		query.push(regionQuery);
	}
	if (category) {
		const categoryQuery: Query = { key: 'category', query: category };
		query.push(categoryQuery);
	}
	const queryString = createQueryString(query);

	const data = await (
		await fetch(
			`http://localhost:3000//api/priceTag/${country}/count/${queryString}`,
			{ cache: 'no-cache' }
		)
	).json();

	return data;
}
