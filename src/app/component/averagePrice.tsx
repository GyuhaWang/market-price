'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { getAveragePrice } from '../api/product/productApi';
import { currencyFormat } from '../utils/numberformat';
const AveragePrice = ({
	region,
	category,
}: {
	region: string | null;
	category: string | null;
}) => {
	const [avgPrice, setAvgPrice] = useState(0);
	useEffect(() => {
		getAveragePrice(region, category).then((res) =>
			setAvgPrice(res.averagePrice)
		);
	}, []);

	return (
		<div className="flex grow gap-1 text-lg font-bold">{`평균 가격:${currencyFormat(
			avgPrice
		)}VND`}</div>
	);
};

export default AveragePrice;
