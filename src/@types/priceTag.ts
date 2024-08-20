import { User } from './user';

export type PriceTag = {
	id: string;
	title: string;
	country: string;
	price: number;
	editor: User;
	createdAt: Date;
	detail: string;
	hashTag?: string[];
	region: string;
	category: string;
	locationUrl?: string;
	imgUrl?: string[];
};

export const priceTagData: PriceTag[] = [
	{
		id: '0',
		title: '스타벅스 커피',
		country: '베트남',
		price: 4500,
		editor: { name: '왕규히', id: '1' },
		createdAt: new Date(),
		detail: '아 진짜 스타벅스 개비싼데 그냥 갑니다. 주식이나 올라라',
		region: '하노이',
		category: '음식',
		hashTag: ['하노이', '커피'],
	},
	{
		id: '1',
		title: '콩 커피',
		country: '베트남',
		price: 1500,
		editor: { name: '왕규히', id: '1' },
		createdAt: new Date(),
		detail: '아따 짱짱맨',
		region: '하노이',
		category: '음식',
		hashTag: ['하노이', '커피'],
	},
	{
		id: '2',
		title: '스타벅스 커피',
		country: '일본',
		price: 4500,
		editor: { name: '왕규히', id: '1' },
		createdAt: new Date(),
		detail: '아 진짜 스타벅스 개비싼데 그냥 갑니다. 주식이나 올라라',
		region: '다까마스',
		category: '음식',
		hashTag: ['다카마쓰', '커피'],
	},
];
