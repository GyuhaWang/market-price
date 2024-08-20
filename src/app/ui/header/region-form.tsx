// 'use client';

// import country from '@/app/data/country';
// import { revalidatePath } from 'next/cache';
// import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export default function RegionSelect() {
// 	const searchParams = useSearchParams();
// 	const pathname = usePathname();
// 	const { replace } = useRouter();
// 	const [value, setValue] = useState('');

// 	useEffect(() => {
// 		setValue(searchParams.get('region') ?? '');
// 	}, [searchParams.get('region')]);

// 	function setQuery(region: string) {
// 		const params = new URLSearchParams(searchParams);
// 		if (region != '') {
// 			params.set('region', region);
// 		} else {
// 			params.delete('region');
// 		}
// 		replace(`${pathname}?${params.toString()}`);
// 	}
// 	return (
// 		<div className="rounded-md w-full  min-w-20 md:min-w-48  ">
// 			<select
// 				aria-label="select-region"
// 				onChange={(e: any) => setQuery(e.target.value)}
// 				id="region"
// 				className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2  text-sm outline-2 placeholder:text-gray-500"
// 				value={value}>
// 				<option
// 					value=""
// 					disabled>
// 					지역 선택
// 				</option>
// 				{country.map((region, index) => (
// 					<option
// 						aria-label="region-item"
// 						aria-labelledby="select-region"
// 						key={region.value}
// 						value={region.value}>
// 						{region.label}
// 					</option>
// 				))}
// 			</select>
// 		</div>
// 	);
// }
