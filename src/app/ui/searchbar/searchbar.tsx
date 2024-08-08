'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const SearchBar = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);
		console.log(term);
		if (term) {
			params.set('search', term);
		} else {
			params.delete('search');
		}
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return (
		<div className="w-full h-8  flex rounded-lg pb-1">
			<input
				onChange={(e: any) => handleSearch(e.target.value)}
				className="rounded-l flex w-full h-full focus:outline-gray-400 px-2 outline-gray-300"
				placeholder="검색어를 입력해주세요"
				aria-label="search-input"></input>
		</div>
	);
};

export default SearchBar;
