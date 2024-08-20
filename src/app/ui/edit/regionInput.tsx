import { Region } from '@/@types/region';

import Capsule from '../core/regionCapsule';
interface RegionProps {
	regions: Region[];
	selectedRegion: Region | null;
	handleSelect: (selected: Region) => void;
}

const RegionInput = ({
	regions,
	selectedRegion,
	handleSelect,
}: RegionProps) => {
	return (
		<div className="flex gap-2 w-full overflow-x-auto">
			{regions.map((region, index) => (
				<>
					<input
						key={region.id}
						value={region.name}
						name="region"
						className="hidden"
					/>
					<Capsule
						onClick={() => {
							handleSelect(region);
						}}
						selected={selectedRegion?.id == region.id}
						key={region.id}
						data={region.name}
						color={'basic'}
					/>
				</>
			))}
		</div>
	);
};

export default RegionInput;
