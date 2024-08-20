import { PriceTag } from '@/@types/priceTag';
import { currencyFormat } from '@/app/utils/numberformat';
import Link from 'next/link';
import CircleUser from './circleUser';

const PriceTag = ({ data }: { data: PriceTag }) => {
	return (
		<div className="relative p-4  hover:scale-95 active:scale-90 transition-all">
			<div className="absolute left-0 top-0 z-10">
				{/* <CircleUser data={data.editor} /> */}
			</div>
			<Link
				href={`/${data.country}/${data.id}`}
				className="flex flex-col items-start justify-start  bg-white drop-shadow-md  l rounded-xl p-2 gap-2 ">
				<div className="flex flex-col  bg-[#FEDF22]  w-full  rounded-lg p-2">
					<p className="text-md font-semibold">{data.title}</p>
					<p className="text-xs font-light">
						{new Date(data.createdAt).toLocaleDateString('ko-KR')}
					</p>
					<span className="text-right">
						<span className="text-xl font-semibold">₩</span>
						<span className="text-3xl font-semibold ">
							{currencyFormat(data.price)}
						</span>
					</span>
				</div>
				<div className="h-12">
					<p className="overflow-hidden line-clamp-2 font-medium text-md text-ellipsis ">
						{data.detail}
					</p>
				</div>
				<div className="overflowy-y-scroll line-clamp-1 w-full">
					<p className=" font-medium text-xs  ">
						#{data.country}#{data.region}
					</p>
				</div>
			</Link>
		</div>
	);
};
export default PriceTag;
