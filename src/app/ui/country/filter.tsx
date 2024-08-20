import { Nation } from '@/@types/nation';
import { regionData } from '@/@types/region';
import Capsule from '../core/regionCapsule';
import CategoryFilter from './category';
import RegionFilter from './region';
import Search from './search';

const Filter = ({ nation }: { nation: Nation }) => {
	return (
		<div className="flex w-full py-2 overflow-x-auto gap-2">
			<Search />
			<RegionFilter nation={nation} />
			<CategoryFilter />
		</div>
	);
};

export default Filter;
