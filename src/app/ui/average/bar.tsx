import { getAvgPrice } from '@/app/lib/actions';
import { currencyFormat } from '@/app/utils/numberformat';
import ReloadButton from '@/app/ui/reload-button';
import currency from '@/app/data/currency';

export default async function AVGPrice({
	category,
	region,
}: {
	category: string | null;
	region: string | null;
}) {
	//get
	const avgPrice = await getAvgPrice(category, region);
	return (
		<div className="flex flex-col ">
			{/* <span className="text-xs font-light">
				{currency.currencyStandard}VND/{currency.currency}원
				<span className="text-xs">({currency.updateTime})</span>
			</span> */}
			<div className="flex grow gap-1 text-lg font-bold">
				{typeof avgPrice == 'number' ? (
					<span>
						{`평균 가격:${currencyFormat(avgPrice)}VND `}
						<span className="text-xs font-normal">
							{`${currencyFormat(
								avgPrice * (currency.currency / currency.currencyStandard)
							)}원`}
						</span>
					</span>
				) : (
					avgPrice.message
				)}
				<ReloadButton />
			</div>
		</div>
	);
}
