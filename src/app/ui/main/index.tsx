import { priceTagData } from '@/@types/priceTag';
import CountryBox from './country';

const MainIndex = () => {
	return (
		<div className="w-full h-full px-12">
			<CountryBox
				data={priceTagData.slice(0, 3)}
				country="베트남"
			/>
			<CountryBox
				data={priceTagData}
				country="일본"
			/>
		</div>
	);
};

export default MainIndex;
