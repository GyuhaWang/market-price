import * as React from 'react';
import CurrencyInput from 'react-currency-input-field';

export default function CurrencyFormatInput({
	handleInputChange,
}: {
	handleInputChange: (value: number) => void;
}) {
	return (
		<div className="flex grow gap-1 items-center border-2 p-1">
			<span className="input-group-addon">VND</span>
			<CurrencyInput
				// id="priceInput"
				name="input-name"
				className="flex grow px-[14px] py-[16.5px]"
				placeholder="현지 화페 단위로 입력해주세요."
				decimalsLimit={2}
				onValueChange={(value, name, values) =>
					handleInputChange(value ? Number(value) : 0)
				}
			/>
		</div>
	);
}
