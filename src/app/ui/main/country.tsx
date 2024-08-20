import { Nation } from '@/@types/nation';
import { PriceTag } from '@/@types/priceTag';
import Link from 'next/link';
import NationBox from '../core/nationBox';
import Box from '../core/priceTag';
import DataEmpty from './emptyData';

const CountryBox = ({ data, nation }: { data: PriceTag[]; nation: Nation }) => {
	return (
		<div className=" flex flex-col bg-white rounded-3xl p-4  gap-8">
			<NationBox nation={nation} />
			{data.length <= 0 ? (
				<DataEmpty />
			) : (
				<div className="w-full flex  overflow-x-auto items-center ">
					{data.map((d, index) => (
						<div
							key={d.id}
							className="w-[20rem] min-w-[20rem] ">
							<Box
								key={index}
								data={d}
							/>
						</div>
					))}
					<Link
						aria-label="가격 더보기"
						href={`/${nation.name}?page=1`}
						className={`  w-20 min-w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-inner hover:scale-95 hover:bg-gray-50 active:bg-gray-100 active:scale-90 transition-all`}>
						더보기
					</Link>
				</div>
			)}
		</div>
	);
};
export default CountryBox;
