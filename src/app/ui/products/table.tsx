import { getProduct } from '@/app/lib/actions';
import Product from '@/app/types/product';
import Box from '@/app/ui/products/box';

export default async function ProductTable({
	category,
	region,
}: {
	category: string | null;
	region: string | null;
}) {
	const products = await getProduct(category, region);
	return (
		<div className="flex flex-col flex-1  gap-4 overflow-auto ">
			{products.map((data: Product, index: React.Key | null | undefined) => (
				<div
					key={data._id}
					className="border-b border-solid border-[#ccc]">
					<Box data={data} />
				</div>
			))}
		</div>
	);
}
