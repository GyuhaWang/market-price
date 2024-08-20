import AveragePriceSkeleton from '@/app/ui/average/loading';
import ProductSkeleton from '@/app/ui/core/loading';

const Loading = () => {
	return (
		<div className="w-full h-full flex flex-col gap-4">
			<AveragePriceSkeleton />
			<ProductSkeleton />
		</div>
	);
};

export default Loading;
