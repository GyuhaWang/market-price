import { NumberInputInputSlotProps } from '@mui/base';
import { MenuItemInterface } from './item';

export interface Nation extends MenuItemInterface {
	name: string;
	id: number;
	imgUrl: string;
	currency: string;
	exchangeRate: number;
}

export const nationData: Nation[] = [
	{
		name: '베트남',
		id: 0,
		imgUrl: '/vietnam.svg',
		currency: 'đ',
		exchangeRate: 18.56,
		value: '베트남',
		label: '베트남',
	},
	{
		name: '일본',
		id: 1,
		imgUrl: '/japan.svg',
		currency: '¥',
		exchangeRate: 0.11,
		value: '일본',
		label: '일본',
	},
	{
		name: '태국',
		id: 2,
		imgUrl: '/thailand.svg',
		currency: '฿',
		exchangeRate: 0.026,
		value: '태국',
		label: '태국',
	},
];
