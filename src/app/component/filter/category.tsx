'use client';
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import category from '@/app/data/category';
import DropDownMenu from '../dropDownMenuComponent';
import Category from '@/app/types/category';

export default function CategoryComponent() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (category?: Category) => {
		if (category) {
			router.push(
				pathname + '?' + createQueryString('category', category.name)
			);
		}
		setAnchorEl(null);
	};

	return (
		<div>
			<DropDownMenu
				currentDisplayName={searchParams.get('category') ?? '카테고리'}
				itemList={category}
				handleOpen={handleClick}
				handleClick={handleClose}
				anchorEl={anchorEl}
			/>
		</div>
	);
}
