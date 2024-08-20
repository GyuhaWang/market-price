import { Nation, nationData } from '@/@types/nation';
import NationBox from '@/app/ui/core/nationBox';
import { currencyFormat } from '@/app/utils/numberformat';
import { getPriceTagById } from './actions';
const Page = async ({
	params,
}: {
	params: { country: string; id: string };
}) => {
	const country = decodeURI(params.country);

	const nation: Nation | undefined = nationData.find(
		({ name }) => name === country
	);
	if (nation == undefined) {
		throw Error;
	}
	const data = await getPriceTagById(params.id);

	return (
		<div className="flex w-full h-full flex-col">
			<div className="h-full w-full  bg-white py-4 px-4  overflow-y-scroll ">
				<div className="w-full flex flex-col gap-6">
					<NationBox nation={nation} />

					<div className="w-full flex flex-col gap-3 ">
						<div className="w-full flex- flex-col gap-2">
							<p className="font-bold text-3xl">{data.title}</p>
							<p className="font-medium text-sm">
								{new Date(data.createdAt).toLocaleDateString()}
							</p>
							<p className="font-medium text-sm">{data.category}</p>
						</div>
						<div className="w-full h-[1px] bg-black" />
						<div className="w-full flex- flex-col gap-2 ">
							<p className="font-medium text-base">
								{data.country} / {data.region}
							</p>
						</div>
						<div className="w-full h-[4px] bg-black" />
						<div className="w-full flex- flex-col gap-2 ">
							<div className="flex flex-wrap justify-between">
								<p className="flex  font-bold text-2xl break-all">
									₩ {currencyFormat(data.price)}
								</p>
								<p className="flex font-bold text-2xl">가격</p>
							</div>
							<div className="flex flex-wrap justify-between ">
								<p className="flex font-semibold text-base break-all">
									{nation.currency}{' '}
									{currencyFormat(data.price * nation.exchangeRate)}
								</p>
								<p className="flex font-semibold text-base">price </p>
							</div>
						</div>
						<div className="w-full h-[2px] bg-black" />
						<div className="w-full flex- flex-col gap-2 ">
							<p className="font-semibold text-lg">상세설명</p>
							<p className="font-medium text-base">{data.detail}</p>
						</div>
						<div className="w-full h-[1px] bg-black" />
						<div className="w-full flex- flex-col gap-2 ">
							<p className="font-semibold text-lg">이미지</p>
							<p className="font-medium text-base">
								{data.imgUrl ? '이미지 있음' : '등록된 이미지가 없어요'}
							</p>
						</div>
						<div className="w-full h-[1px] bg-black" />
						<div className="w-full flex- flex-col gap-2 ">
							<p className="font-semibold text-lg">상세주소</p>
							<p className="font-medium text-base">
								{data.locationUrl ? '이미지 있음' : '등록된 이미지가 없어요'}
							</p>
						</div>
						<div className="w-full h-[4px] bg-black" />
						<div className="flex w-full items-end justify-end">
							{/* <CircleUser data={data.editor} /> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
