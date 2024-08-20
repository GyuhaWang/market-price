import { MenuItemInterface } from './item';

export interface Category extends MenuItemInterface {
	id: number;
	name: string;
}

export const categoryData: Category[] = [
	{
		id: 0,
		name: '음식',
		label: '음식',
		value: '음식',
	},
	{
		id: 1,
		name: '쇼핑',
		label: '쇼핑',
		value: '쇼핑',
	},
	{
		id: 2,
		name: '교통',
		label: '교통',
		value: '교통',
	},
	{
		id: 3,
		name: '액티비티',
		label: '액티비티',
		value: '액티비티',
	},
	{
		id: 4,
		name: '기타',
		label: '기타',
		value: '기타',
	},
];
