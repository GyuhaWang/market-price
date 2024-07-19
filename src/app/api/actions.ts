'use server';
import { revalidatePath } from 'next/cache';

import Product from '../types/product';

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export async function getProduct(
	category: string | null,
	region: string | null
) {
	let requrl = `${baseUrl}product`;
	if (category && region) {
		requrl = `${requrl}?category=${category}&region=${region}`;
	} else if (category) {
		requrl = `${requrl}?category=${category}`;
	} else if (region) {
		requrl = `${requrl}?region=${region}`;
	}

	try {
		const data = await fetch(requrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => {
			console.log('api call : getProduct');

			return res.json();
		});
		return data.map((product: any) => Product.fromJson(product));
	} catch (e) {
		return { message: 'API error : getProduct 를 실패하였습니다.' };
	}
}

export async function getAvgPrice(
	category: string | null,
	region: string | null
) {
	let requrl = `${baseUrl}product/average`;
	if (category && region) {
		requrl = `${requrl}?category=${category}&region=${region}`;
	} else if (category) {
		requrl = `${requrl}?category=${category}`;
	} else if (region) {
		requrl = `${requrl}?region=${region}`;
	}

	try {
		const data = await fetch(requrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => {
			console.log('api call : getAvgPrice');
			return res.json();
		});

		return Number(data['averagePrice']);
	} catch (e) {
		return { message: '평균가격 불러오기 실패' };
	}
}

export async function PostProduct(product: Product) {
	try {
		await fetch(`${baseUrl}product`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(product),
		});
		revalidatePath('/');
	} catch (e) {
		return { message: 'API error : getProduct 를 실패하였습니다.' };
	}
}

export async function putLikeProduct(id: string) {
	try {
		await fetch(`${baseUrl}product/${id}`, {
			method: 'PUT',
		});
	} catch (e) {
		return { message: 'API error : putLikeProduct 를 실패하였습니다.' };
	}
}
