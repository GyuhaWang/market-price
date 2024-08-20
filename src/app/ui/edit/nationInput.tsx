import { Nation } from '@/@types/nation';
import Capsule from '../core/regionCapsule';
interface NationProps {
	nations: Nation[];
	selectedNation: Nation | null;
	handleSelect: (selected: Nation) => void;
}

const NationInput = ({
	nations,
	selectedNation,
	handleSelect,
}: NationProps) => {
	return (
		<div className="flex gap-2 ">
			{nations.map((nation, index) => (
				<>
					<input
						className="hidden"
						key={nation.id}
						name="country"
						value={nation.name}
					/>
					<Capsule
						onClick={() => {
							handleSelect(nation);
						}}
						selected={selectedNation?.id == nation.id}
						key={nation.id}
						data={nation.name}
						color={'basic'}
					/>
				</>
			))}
		</div>
	);
};

export default NationInput;
