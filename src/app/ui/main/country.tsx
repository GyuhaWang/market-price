import { PriceTag } from '@/@types/priceTag';
import CircleNation from '../core/circleNation';
import Box from '../core/priceTag';

const CountryBox = ({
	data,
	country,
}: {
	data: PriceTag[];
	country: string;
}) => {
	return (
		<div className=" flex flex-col p-4 gap-8">
			<div className="flex justify-start items-center gap-4">
				<CircleNation />
				<p className="font-bold text-3xl">{country}</p>
			</div>
			<div className=" flex  flex-row overflow-scroll">
				{data.map((d, index) => (
					<Box
						key={index}
						data={d}
					/>
				))}
			</div>
		</div>
	);
};
export default CountryBox;
