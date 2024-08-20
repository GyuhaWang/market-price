import * as React from 'react';
import Box from '@mui/material/Box';
import Login from './login';
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
			\
		</Box>
	);
}
