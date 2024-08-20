import { ReadonlyURLSearchParams, useRouter } from 'next/navigation';

const useCategory = (
	searchParams: ReadonlyURLSearchParams,
	pathname: string
) => {
	const { replace } = useRouter();
	const params = new URLSearchParams(searchParams);
	const currentCategory = params.get('category');
	const handleSearch = (term: string) => {
		if (term) {
			if (currentCategory == term) {
				params.delete('category');
			} else {
				params.set('category', term);
			}
		} else {
			params.delete('category');
		}
		params.set('page', '1');
		replace(`${pathname}?${params.toString()}`);
	};

	return {
		handleSearch,
		currentCategory,
	};
};

export default useCategory;
