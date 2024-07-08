import Product from '@/app/types/product';
import Error from 'next/error';

export const getProduct = (region: string | null, category: string | null) => {
	const params: Record<string, string> = {};
	if (region) {
		params['region'] = region;
	}
	if (category) {
		params['category'] = category;
	}
	const baseUrl = 'http://127.0.0.1:3000/product';
	const queryString = new URLSearchParams(params).toString();
	const requrl = `${baseUrl}?${queryString}`;
	return fetch(requrl, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export const getAveragePrice = (
	region: string | null,
	category: string | null
) => {
	const params: Record<string, string> = {};
	if (region) {
		params['region'] = region;
	}
	if (category) {
		params['category'] = category;
	}
	const baseUrl = 'http://127.0.0.1:3000/product/average';
	const queryString = new URLSearchParams(params).toString();
	const requrl = `${baseUrl}?${queryString}`;
	return fetch(requrl, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => res.clone().json());
};
export const PostProduct = async (product: Product) => {
	try {
		await fetch('http://127.0.0.1:3000/product', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(product),
		});
	} catch (e) {
		return Error;
	}
};
