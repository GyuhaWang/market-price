const ProductSkeleton = () => (
	<div className=" flex w-full gap-4">
		<div className="flex grow-[7] flex-col  w-full gap-2  ">
			<div className="relative  bg-white">
				<div className="h-4 bg-gray-100 rounded-lg  " />
				<div
					id="overlay"
					className="animate-shimmer absolute  top-0 z-1 w-20  rounded-lg  h-4 bg-slate-200/[0.8] "
				/>
			</div>
			<div className="relative  bg-white">
				<div className="h-4 bg-slate-200/[0.5] rounded-lg animate-shimmerSimple " />
				{/* <div
					id="overlay"
					className="animate-shimmer absolute  top-0 z-1 w-20  rounded-lg  h-4 bg-slate-200/[0.8] "
				/> */}
			</div>
			<div className="relative  bg-white">
				<div className="h-4 bg-slate-200/[0.5] rounded-lg  animate-shimmerSimple " />
				{/* <div
					id="overlay"
					className="animate-shimmer absolute  top-0 z-1 w-20  rounded-lg  h-4 bg-slate-200/[0.8] "
				/> */}
			</div>
		</div>
		<div className="relative flex grow-[3] h-full aspect-square">
			<div className="w-full bg-gray-100 rounded-sm  " />
			<div
				id="overlay"
				className="animate-shimmerSimple absolute  top-0 z-1 h-full  rounded-sm  w-full bg-slate-200/[0.5] "
			/>
		</div>
	</div>
);

const ProductsSkeleton = () => (
	<div className="flex flex-col gap-2 w-full h-full justify-start items-start">
		<ProductSkeleton />
		<ProductSkeleton />
	</div>
);
export default ProductsSkeleton;
