'use client';
import * as React from 'react';
import PriceBoxComponent from './priceBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getProduct } from '@/app/api/product/productApi';
import Product from '@/app/types/product';
import AveragePrice from '../averagePrice';

export default function ProductComponent() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<boolean | null>(null);
	const searchParams = useSearchParams();
	const fetchData = async () => {
		setLoading(true);
		setError(null);
		try {
			const res = await getProduct(
				searchParams.get('region'),
				searchParams.get('category')
			);
			console.log('fetch getProduct');
			const body = await res.clone().json();
			const newProducts: Product[] = [];
			body.map((d: any) => newProducts.push(Product.fromJson(d)));
			setProducts(newProducts);
		} catch (e) {
			console.log(e);
			setError(true);
		}
		setLoading(false);
	};
	useEffect(() => {
		fetchData();
	}, [searchParams.get('region'), searchParams.get('category')]);

	if (loading)
		return (
			<div className="flex grow justify-center items-center text-lg font-bold">
				Loading...
			</div>
		);
	if (error)
		return (
			<div className="flex grow justify-center items-center text-lg font-bold">
				죄송합니다. <br />
				현재 서버가 원활하지 않습니다.
				<br /> 잠시후 다시 시도해주세요.
			</div>
		);
	return (
		<div className="flex flex-col flex-1  gap-4 overflow-auto ">
			<AveragePrice
				region={searchParams.get('region')}
				category={searchParams.get('category')}
			/>
			{products.map((data, index) => (
				<div
					key={index}
					className="border-b border-solid border-[#ccc]">
					<PriceBoxComponent data={data} />
				</div>
			))}
		</div>
	);
}
