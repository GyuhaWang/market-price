import * as React from 'react';
import Box from '@mui/material/Box';
import Product from '@/app/types/product';
import { currencyFormat } from '@/app/utils/numberformat';
import Button from '@/app/ui/products/popular-button';
import currency from '@/app/data/currency';
export default function PriceBox({ data }: { data: Product }) {
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
					<span>
						{`${currencyFormat(data.price)} VND `}

						<span className="text-xs font-normal">
							{currencyFormat(
								data.price * (currency.currency / currency.currencyStandard)
							)}
							원
						</span>
					</span>
				</div>
				<div className=" flex grow text-md font-normal">{data.description}</div>
			</div>

			<Button
				key={data._id}
				like={data.like}
				id={data._id}
			/>
		</Box>
	);
}
