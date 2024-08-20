'use client';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useSearch from '@/app/lib/hooks/useSearch';
import { revalidatePath } from 'next/cache';
const Search = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const params = new URLSearchParams(searchParams);
	const { replace } = useRouter();
	const { handleSearch } = useSearch(searchParams, pathname);

	const [isSearching, setIsSearching] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClickSearchButton = (searching: boolean) => {
		if (searching) {
			params.delete('search');
			params.set('page', '1');
			// revalidatePath(`${pathname}`);
			replace(`${pathname}?${params.toString()}`);
		}
		setIsSearching(!searching);
	};
	return (
		<div
			className={`
            flex bg-white border-secondary rounded-3xl border-[1px] p-2 ${
							!isSearching && 'hover:scale-95 active:scale-90'
						} transition-all`}>
			<button onClick={() => handleClickSearchButton(isSearching)}>
				{isSearching ? (
					<CloseIcon
						key={'searchClose'}
						color="primary"
					/>
				) : (
					<SearchIcon
						key={'searchOpen'}
						color="primary"
					/>
				)}
			</button>
			<div
				className={`flex ${
					isSearching ? 'w-[13rem] min-w-[13rem] px-2' : 'w-0 min-w-0 '
				} transition-all`}>
				{isSearching && (
					<input
						onChange={(e: any) => handleSearch(e.target.value)}
						autoFocus
						ref={inputRef}
						className="box-border w-full outline-none"
					/>
				)}
			</div>
		</div>
	);
};

export default Search;
