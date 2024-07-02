'use client';
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import category from '@/app/data/category';
import DropDownMenu from '../dropDownMenuComponent';
import Category from '@/app/types/category';

export default function CategoryComponent({
	handleInputChange,
}: {
	handleInputChange: (value: string) => void;
}) {
	const searchParams = useSearchParams();
	const [value, setValue] = React.useState<string | null>(null);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	React.useEffect(() => {
		const defaultRegion = searchParams.get('category');
		if (defaultRegion) {
			setValue(defaultRegion);
			handleInputChange(defaultRegion);
		}
	}, [searchParams.get('category')]);

	const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClick = (category?: Category) => {
		if (category) {
			setValue(category.name);
			handleInputChange(category.name);
		}
		setAnchorEl(null);
	};

	return (
		<div>
			<DropDownMenu
				currentDisplayName={value ?? '카테고리'}
				itemList={category}
				handleOpen={handleOpen}
				handleClick={handleClick}
				anchorEl={anchorEl}
			/>
		</div>
	);
}
