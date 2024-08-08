import { Query } from '@/@types/query';

export function createQueryString(queryList: Query[]): string {
	if (queryList.length <= 0) {
		return '';
	} else {
		let queryString = '';
		queryList.forEach((q: Query, index: number) => {
			if (index == 0) {
				queryString = `?${q.key}=${q.query}`;
			} else {
				queryString += `&${q.key}=${q.query}`;
			}
		});
		return queryString;
	}
}
