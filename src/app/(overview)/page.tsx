import { Suspense } from 'react';
import Table from '@/app/ui/products/table';
import Bar from '@/app/ui/average/bar';
import AveragePriceSkeleton from '@/app/ui/average/loading';
import ProductSkeleton from '@/app/ui/products/loading';
export default async function Home({
	searchParams,
}: {
	searchParams?: {
		category?: string;
		region?: string;
	};
}) {
	const category = searchParams?.category || null;
	const region = searchParams?.region || null;

	return (
		<div className="h-full w-full p-4">
			<Suspense fallback={<AveragePriceSkeleton />}>
				<Bar
					category={category}
					region={region}
				/>
			</Suspense>
			<Suspense fallback={<ProductSkeleton />}>
				<Table
					category={category}
					region={region}
				/>
			</Suspense>
		</div>
	);
}
