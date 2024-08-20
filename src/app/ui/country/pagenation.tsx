'use client';
import { Pagination } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

const PageNation = ({ count }: { count: number }) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const params = new URLSearchParams(searchParams.toString());

	const page = useMemo(() => {
		return params.get('page') ? parseInt(params.get('page')!) : 1;
	}, [params.get('page')]);
	const handleChangePage = (page: number) => {
		params.set('page', page.toString());
		replace(`${pathname}?${params.toString()}`);
	};
	useEffect(() => {}, []);
	return (
		<div className="flex p-2 items-center justify-center">
			<Pagination
				onChange={(_, page) => handleChangePage(page)}
				page={page}
				count={count}
			/>
		</div>
	);
};

export default PageNation;
