import { connectDB } from '@/app/utils/database';
import prisma from '@/app/lib/prismadb';
import { NextResponse, NextRequest } from 'next/server';
import result from 'postcss/lib/result';
import { ObjectId } from 'bson';
// export type queryKeys = 'category' | 'region' | 'search';
export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		let result = await prisma.priceTag.findUnique({
			where: { id: params.id },
		});

		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(
			{ error: '데이터를 불러오는데 오류가 발생하였습니다.' },
			{ status: 500 }
		);
	}
}
