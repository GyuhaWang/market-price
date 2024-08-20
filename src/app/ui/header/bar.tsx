import * as React from 'react';
import Box from '@mui/material/Box';
import RegionSelect from '@/app/ui/header/region-form';
import CategorySelect from '@/app/ui/header/category-form';
import HelpIcon from '@mui/icons-material/Help';
import Link from 'next/link';
import Button from '@/app/ui/header/edit-button';
import { Suspense } from 'react';
import Login from './login';
import SearchBar from '../searchbar/searchbar';
import Logo from '../core/logo';
export default function HeaderBar() {
	return (
		<Box
			sx={{
				width: '100%',
				backgroundColor: 'white',
				borderBottom: 'solid 2px gray',
			}}>
			<div className="h-[54px] w-full  flex justify-between items-center pl-4 pr-4">
				<Logo />
				<div className="flex flex-row gap-2">
					<Login />
					{/* <Link
						aria-label="go to customer service"
						href="https://emphasized-albacore-bb4.notion.site/Market-Price-Idea-Center-fef77105528b4d318253c08477fb2118?pvs=74">
						<HelpIcon />
					</Link> */}
				</div>
			</div>
			{/* <div className=" pl-4 pr-4 pb-2 flex justify-between">
				<div className="flex gap-2">
					<Suspense>
						<RegionSelect />
					</Suspense>
					<Suspense>
						<CategorySelect />
					</Suspense>
				</div>
				<div>
					<Button />
				</div>
			</div>
			<div className="px-4 py-2">
				<Suspense>
					<SearchBar />
				</Suspense>
			</div> */}
		</Box>
	);
}
