'use client';
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import country from '../../data/country';
import DropDownMenu from '../dropDownMenuComponent';
import Region from '@/app/types/region';
import { useCallback } from 'react';

export default function RegionMenu() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
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
	const handleClose = (region?: Region) => {
		if (region) {
			router.push(pathname + '?' + createQueryString('region', region.region));
		}
		setAnchorEl(null);
	};

	return (
		<div>
			<DropDownMenu
				currentDisplayName={
					useSearchParams().get('region') ?? '지역을 골라주세요'
				}
				itemList={country}
				handleOpen={handleClick}
				handleClick={handleClose}
				anchorEl={anchorEl}
			/>
		</div>
	);
}
