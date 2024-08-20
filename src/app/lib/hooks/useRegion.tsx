import { ReadonlyURLSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const useRegion = (searchParams: ReadonlyURLSearchParams, pathname: string) => {
	const { replace } = useRouter();
	const params = new URLSearchParams(searchParams);
	const currentRegion = params.get('region');
	const handleSearch = (term: string) => {
		if (term) {
			if (currentRegion == term) {
				params.delete('region');
			} else {
				params.set('region', term);
			}
		} else {
		}
		params.set('page', '1');
		replace(`${pathname}?${params.toString()}`);
	};

	return {
		handleSearch,
		currentRegion,
	};
};

export default useRegion;
