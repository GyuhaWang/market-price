import { PriceTag } from '@/@types/priceTag';
import CircleUser from './circleUser';

const PriceTag = ({ data }: { data: PriceTag }) => {
	return (
		<div className="w-[20rem] min-w-[20rem] relative p-4 ">
			<div className="absolute left-0 top-0 z-10">
				<CircleUser data={data.editor} />
			</div>
			<div className="flex flex-col items-start justify-start  bg-white drop-shadow-md  l rounded-xl p-2 gap-2">
				<div className="flex flex-col  bg-[#FEDF22]  w-full  rounded-lg p-1">
					<p className="text-md font-semibold">{data.title}</p>
					<p className="text-xs font-light">
						{data.dateTime.toLocaleDateString()}
					</p>
					<span className="text-right">
						<span className="text-xl font-semibold">₩</span>
						<span className="text-3xl font-semibold ">45,000</span>
					</span>
				</div>
				<div className="h-12">
					<p className="overflow-hidden line-clamp-2 font-medium text-md text-ellipsis ">
						{data.detail}
					</p>
				</div>
				<div className="overflowy-y-scroll line-clamp-1 w-full">
					<p className=" font-medium text-xs  ">
						{data.hashTag && data.hashTag.map((h, index) => `#${h}`)}
					</p>
				</div>
			</div>
		</div>
	);
};
export default PriceTag;
