import { getPriceTags } from '@/app/(overview)/[country]/apis';
import Box from '../core/priceTag';

const CountryPriceTags = async ({
	country,
	search,
	region,
	category,
	page,
}: {
	country: string | undefined;
	search: string | undefined;
	region: string | undefined;
	category: string | undefined;
	page: number;
}) => {
	const data = await getPriceTags(country, search, region, category, page);
	return (
		<>
			{data.length <= 0 ? (
				<div className="h-full w-full flex justify-center items-center font-semibold">
					해당하는 항목이 없어요
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
					{data.map((priceTag, index) => (
						<div
							key={priceTag.id}
							className="w-[20rem] min-w-[20rem] ">
							<Box
								key={priceTag.id}
								data={priceTag}
							/>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default CountryPriceTags;
