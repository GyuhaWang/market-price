// const searchParams = useSearchParams();
// 	const pathname = usePathname();
// 	const { replace } = useRouter();

import { ReadonlyURLSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const useSearch = (searchParams: ReadonlyURLSearchParams, pathname: string) => {
	const { replace } = useRouter();
	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);

		if (term) {
			params.set('search', term);
		} else {
			params.delete('search');
		}
		params.set('page', '1');
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return {
		handleSearch,
	};
};

export default useSearch;
