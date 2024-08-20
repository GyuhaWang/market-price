import { Nation } from '@/@types/nation';
import NationBox from '../core/nationBox';
import CountryPriceTags from './priceTags';
import Filter from './filter';
import EditButton from './edit';
import ProductSkeleton from '@/app/ui/core/loading';
import Pagination from '@mui/material/Pagination';
import { Suspense } from 'react';

const CountryIndex = ({
	nation,
	search,
	region,
	category,
	page,
}: {
	nation: Nation;
	search: string | undefined;
	region: string | undefined;
	page: number;
	category?: string | undefined;
}) => {
	return (
		<div className="w-full flex  p-4  flex-col  gap-4 ">
			<div className="flex justify-between">
				<NationBox nation={nation} />
				<EditButton nation={nation} />
			</div>
			<div className=" sticky z-20 top-0 bg-white flex pr-5">
				<Filter nation={nation} />
			</div>

			<div className="flex flex-col justify-between w-full ">
				<Suspense fallback={<ProductSkeleton />}>
					<CountryPriceTags
						country={nation.name}
						category={category}
						region={region}
						search={search}
						page={page}
					/>
				</Suspense>
			</div>
		</div>
	);
};

export default CountryIndex;
