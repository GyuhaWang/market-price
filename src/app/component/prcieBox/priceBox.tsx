'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Product from '@/app/types/product';
import Image from 'next/image';
import { useState } from 'react';
import { DEFAULT_PROFILE_IMG_URL } from '@/app/variables';
import { currencyFormat } from '@/app/utils/numberformat';

export default function PriceBoxComponent({ data }: { data: Product }) {
	const [isImgError, setIsImgError] = useState<boolean>(false);

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				gap: '2rem',
				justifyContent: 'space-between',
			}}>
			{/* <Image
				src={
					data.photoUrl && !isImgError
						? `/${data.photoUrl}`
						: DEFAULT_PROFILE_IMG_URL
				}
				alt="item"
				width={50}
				height={50}
				onError={() => setIsImgError(true)}
			/> */}
			<div className=" flex flex-col flex-1 justify-between pt-1">
				<div className="text-xs">{data.region}</div>
				<div> {data.name}</div>
				<div className="text-lg font-bold">
					{currencyFormat(data.price)} VND
				</div>
				<div className=" flex grow text-md font-normal">{data.description}</div>
			</div>
			<button>h</button>
		</Box>
	);
}
