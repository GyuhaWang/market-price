import prisma from '@/app/lib/prismadb';
import { NextResponse, NextRequest } from 'next/server';
import { parse } from 'path';
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
		let result = await prisma.priceTag.count({
			where: query.toJSON(),
		});

		return NextResponse.json(Math.ceil(result / 20));
	} catch (error) {
		return NextResponse.json(
			{ error: '데이터를 불러오는데 오류가 발생하였습니다.' },
			{ status: 500 }
		);
	}
}
