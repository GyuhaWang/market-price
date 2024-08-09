import { User } from './user';

export type PriceTag = {
	title: string;
	country: string;
	price: number;
	editor: User;
	dateTime: Date;
	detail: string;
	hashTag?: string[];
};

export const priceTagData: PriceTag[] = [
	{
		title: '스타벅스 커피',
		country: '베트남',
		price: 4500,
		editor: { name: '왕규히', nickName: '규하', id: '1' },
		dateTime: new Date(),
		detail: '아 진짜 스타벅스 개비싼데 그냥 갑니다. 주식이나 올라라',
		hashTag: ['하노이', '커피'],
	},
	{
		title: '콩 커피',
		country: '베트남',
		price: 1500,
		editor: { name: '왕규히', nickName: '규하', id: '1' },
		dateTime: new Date(),
		detail: '아따 짱짱맨',
		hashTag: ['하노이', '커피'],
	},
	{
		title: '스타벅스 커피',
		country: '일본',
		price: 4500,
		editor: { name: '왕규히', nickName: '규하', id: '1' },
		dateTime: new Date(),
		detail: '아 진짜 스타벅스 개비싼데 그냥 갑니다. 주식이나 올라라',
		hashTag: ['다카마쓰', '커피'],
	},
	{
		title: '라멘',
		country: '일본',
		price: 9000,
		editor: { name: '왕규히', nickName: '규하', id: '1' },
		dateTime: new Date(),
		detail:
			'울랄랄 겁나게 길게 써버릴라니까 알아서 텍스트 짤라서 작성하시라요 나도 몰라 아아아앙 길다 길어',
		hashTag: ['도쿄', '음식'],
	},
	{
		title: '스타벅스 커피',
		country: '베트남',
		price: 4500,
		editor: { name: '왕규히', nickName: '규하', id: '1' },
		dateTime: new Date(),
		detail: '아 진짜 스타벅스 개비싼데 그냥 갑니다. 주식이나 올라라',
		hashTag: ['하노이', '커피'],
	},
	{
		title: '스타벅스 커피',
		country: '베트남',
		price: 4500,
		editor: { name: '이건호', nickName: 'jimmy', id: '2' },
		dateTime: new Date(),
		detail: '아 진짜 스타벅스 개비싼데 그냥 갑니다. 주식이나 올라라',
		hashTag: ['하노이', '커피'],
	},
	{
		title: '스타벅스 커피',
		country: '일본',
		price: 4500,
		editor: { name: '이건호', nickName: 'jimmy', id: '2' },
		dateTime: new Date(),
		detail: '아 진짜 스타벅스 개비싼데 그냥 갑니다. 주식이나 올라라',
		hashTag: ['하노이', '커피'],
	},
	{
		title: '스타벅스 커피',
		country: '일본',
		price: 4500,
		editor: { name: '왕규히', nickName: '규하', id: '1' },
		dateTime: new Date(),
		detail: '아 진짜 스타벅스 개비싼데 그냥 갑니다. 주식이나 올라라',
		hashTag: ['하노이', '커피'],
	},
	{
		title: '스타벅스 커피',
		country: '베트남',
		price: 4500,
		editor: { name: '왕규히', nickName: '규하', id: '1' },
		dateTime: new Date(),
		detail: '아 진짜 스타벅스 개비싼데 그냥 갑니다. 주식이나 올라라',
		hashTag: ['하노이', '커피'],
	},
];
