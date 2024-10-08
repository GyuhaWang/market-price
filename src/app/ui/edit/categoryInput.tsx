'use client';
import { Category } from '@/@types/category';
import Capsule from '../core/regionCapsule';
interface CategoryProps {
	categories: Category[];
	selectedCategory: string | null;
	handleSelect: (selected: string) => void;
}

const CategoryInput = ({
	categories,
	selectedCategory,
	handleSelect,
}: CategoryProps) => {
	return (
		<div className="flex gap-2 ">
			{categories.map((category, index) => (
				<Capsule
					onClick={() => {
						handleSelect(category.name);
					}}
					selected={selectedCategory == category.name}
					key={category.id}
					data={category.name}
					color={'basic'}
				/>
			))}
		</div>
	);
};

export default CategoryInput;
