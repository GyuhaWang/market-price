import prisma from '@/app/lib/prismadb';

import { NextResponse, NextRequest } from 'next/server';

import { TSMap } from 'typescript-map';
export async function GET(
	req: NextRequest,
	{ params }: { params: { country: string } }
) {
	try {
		const searchParams = req.nextUrl.searchParams;

		const query: TSMap<string, any> = new TSMap();

		query.set('country', decodeURI(params.country));
		searchParams.forEach((value: string, key: string) => {
			if (key == 'skip') {
			} else if (key == 'take') {
			} else if (key == 'search') {
				query.set('title', {
					contains: value,
					mode: 'insensitive',
				});
			} else {
				query.set(key, value);
			}
		});

		let result = await prisma.priceTag.findMany({
			where: query.toJSON(),
			orderBy: {
				createdAt: 'desc',
			},
			take: searchParams.get('take') ? parseInt(searchParams.get('take')!) : 20,
			skip: searchParams.get('skip') ? parseInt(searchParams.get('skip')!) : 0,
		});

		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(
			{ error: '데이터를 불러오는데 오류가 발생하였습니다.' },
			{ status: 500 }
		);
	}
}

export async function POST(req: Request) {
	try {
		const data = await req.json();

		await prisma.priceTag.create({
			data: data,
		});
		return NextResponse.json(data);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: '글 작성을 저장하는데 오류가 발생하였습니다.' },
			{ status: 500 }
		);
	}
}
