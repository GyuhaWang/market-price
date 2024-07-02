'use client';
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import country from '../../data/country';
import DropDownMenu from '../dropDownMenuComponent';
import Region from '@/app/types/region';
import { useCallback } from 'react';

export default function RegionMenu({
	handleInputChange,
}: {
	handleInputChange: (value: string) => void;
}) {
	const searchParams = useSearchParams();
	const [value, setValue] = React.useState<string | null>(null);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	React.useEffect(() => {
		const defaultRegion = searchParams.get('region');
		if (defaultRegion) {
			setValue(defaultRegion);
			handleInputChange(defaultRegion);
		}
	}, [searchParams.get('region')]);

	const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClick = (region?: Region) => {
		if (region) {
			setValue(region.region);
			handleInputChange(region.region);
		}
		setAnchorEl(null);
	};

	return (
		<div>
			<DropDownMenu
				currentDisplayName={value ?? '지역을 골라주세요'}
				itemList={country}
				handleOpen={handleOpen}
				handleClick={handleClick}
				anchorEl={anchorEl}
			/>
		</div>
	);
}
