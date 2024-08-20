import { Nation } from '@/@types/nation';
import { getCountriesPriceTags } from '@/app/(overview)/actions';
import CountryBox from './country';

const MainIndex = async ({ country }: { country: Nation }) => {
	const data = await getCountriesPriceTags(country.name);

	return (
		<CountryBox
			data={data}
			nation={country}
		/>
	);
};

export default MainIndex;
