'use client';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Capsule from '../core/regionCapsule';
import { categoryData } from '@/@types/category';
import useCategory from '@/app/lib/hooks/useCategory';
const CategoryFilter = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const { handleSearch, currentCategory } = useCategory(searchParams, pathname);

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
					<ArrowBackIosNewIcon style={{ color: '#F7B5CA' }} />
				) : (
					<Capsule
						data={currentCategory ?? '카테고리 >'}
						selected={currentCategory != null}
						color="pink1"
					/>
				)}
			</button>
			<div
				className={`flex  gap-2 ${
					isSearching ? 'flex' : 'hidden '
				} transition-all`}>
				{isSearching &&
					categoryData.map((category, index) => (
						<Capsule
							selected={currentCategory == category.name}
							key={category.id}
							data={category.name}
							color="pink1"
							onClick={() => handleSearch(category.name)}
						/>
					))}
			</div>
		</div>
	);
};

export default CategoryFilter;
