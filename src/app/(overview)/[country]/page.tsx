import { Nation, nationData } from '@/@types/nation';
import CountryIndex from '@/app/ui/country';
import PageNation from '@/app/ui/country/pagenation';
import { getPriceTagsCount } from './actions';
type filters = 'search' | 'region' | 'category' | 'page';

const Page = async ({
	params,
	searchParams,
}: {
	params: { country: string };
	searchParams?: { [key in filters]: string | undefined };
}) => {
	const country = decodeURI(params.country);
	const nation: Nation | undefined = nationData.find(
		({ name }) => name === country
	);

	if (nation == undefined) {
		throw Error;
	}
	const count = await getPriceTagsCount(
		params.country,
		searchParams?.search,
		searchParams?.region,
		searchParams?.category
	);
	return (
		<>
			<div className="flex grow bg-white w-full overflow-y-auto">
				<CountryIndex
					nation={nation}
					search={searchParams?.search}
					region={searchParams?.region}
					category={searchParams?.category}
					page={searchParams?.page ? parseInt(searchParams?.page) : 1}
				/>
			</div>
			<div className="flex p-2 items-center justify-center">
				<PageNation count={count} />
			</div>
		</>
	);
};

export default Page;
