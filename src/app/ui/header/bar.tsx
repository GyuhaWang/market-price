import * as React from 'react';
import Box from '@mui/material/Box';
import RegionSelect from '@/app/ui/header/region-form';
import CategorySelect from '@/app/ui/header/category-form';
// import FilterComponent from '../component/filter/filter';
// import EditComponent from '../component/edit/editComponent';
import HelpIcon from '@mui/icons-material/Help';
import Link from 'next/link';
import Button from '@/app/ui/header/edit-button';
import { Suspense } from 'react';
import Login from './login';
export default function HeaderBar() {
	return (
		<Box
			sx={{
				width: '100%',
				backgroundColor: 'white',
				borderBottom: 'solid 2px gray',
			}}>
			<div className="h-[54px] w-full  flex justify-between items-center pl-4 pr-4">
				<Link
					className="uppercase font-bold text-lg flex items-center text-end"
					href="/">
					<p className="text-lg">마켓프라이스</p>
					<p className="text-xs">베트남</p>
				</Link>
				<div className="flex flex-row gap-2">
					<Login />
					<Link href="https://emphasized-albacore-bb4.notion.site/Market-Price-Idea-Center-fef77105528b4d318253c08477fb2118?pvs=74">
						<HelpIcon />
					</Link>
				</div>
			</div>
			<div className=" pl-4 pr-4 pb-2 flex justify-between">
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
		</Box>
	);
}
