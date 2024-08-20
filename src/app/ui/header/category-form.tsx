// 'use client';
// import categories from '@/app/data/category';
// import { revalidatePath } from 'next/cache';
// import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// import { useEffect, useState } from 'react';
// export default function CategorySelect() {
// 	const searchParams = useSearchParams();
// 	const pathname = usePathname();
// 	const { replace } = useRouter();

// 	const [value, setValue] = useState('');

// 	useEffect(() => {
// 		setValue(searchParams.get('category') ?? '');
// 	}, [searchParams.get('category')]);

// 	function setQuery(region: string) {
// 		const params = new URLSearchParams(searchParams);
// 		if (region != '') {
// 			params.set('category', region);
// 		} else {
// 			params.delete('category');
// 		}
// 		replace(`${pathname}?${params.toString()}`);
// 	}
// 	return (
// 		<form>
// 			<div className="rounded-md w-full min-w-20 md:min-w-48   ">
// 				<select
// 					aria-label="select-category"
// 					onChange={(e: any) => setQuery(e.target.value)}
// 					id="category"
// 					className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2  text-sm outline-2 placeholder:text-gray-500"
// 					value={value}>
// 					<option value="">전체</option>
// 					{categories.map((region, index) => (
// 						<option
// 							aria-label="category-item"
// 							aria-labelledby="select-category"
// 							key={region.value}
// 							value={region.value}>
// 							{region.label}
// 						</option>
// 					))}
// 				</select>
// 			</div>
// 		</form>
// 	);
// }
