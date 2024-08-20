'use client';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Nation } from '@/@types/nation';
import { regionData } from '@/@types/region';
import Capsule from '../core/regionCapsule';
import useRegion from '@/app/lib/hooks/useRegion';
const RegionFilter = ({ nation }: { nation: Nation }) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { handleSearch, currentRegion } = useRegion(searchParams, pathname);
	const [isSearching, setIsSearching] = useState(false);

	const handleClickSearchButton = (currentState: boolean) => {
		setIsSearching(!currentState);
	};

	return (
		<div
			className={`
            flex bg-white   ${
							!isSearching && 'hover:scale-95 active:scale-90'
						} transition-all`}>
			<button onClick={() => handleClickSearchButton(isSearching)}>
				{isSearching ? (
					<ArrowBackIosNewIcon
						key="closeReion"
						color="primary"
					/>
				) : (
					<Capsule
						color="basic"
						key="currentRegionButton"
						selected={currentRegion != null}
						data={currentRegion ?? '지역 >'}
					/>
				)}
			</button>
			<div
				className={`flex  gap-2 ${
					isSearching ? 'flex' : 'hidden '
				} transition-all`}>
				{isSearching &&
					regionData.map(
						(region, index) =>
							region.nationId == nation.id && (
								<Capsule
									color="basic"
									selected={currentRegion == region.name}
									key={region.id}
									data={region.name}
									onClick={() => handleSearch(region.name)}
								/>
							)
					)}
			</div>
		</div>
	);
};

export default RegionFilter;
