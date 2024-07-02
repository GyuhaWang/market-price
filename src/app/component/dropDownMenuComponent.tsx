'use client';
import * as React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MenuItemInterface } from '@/app/types/menuItem';
interface dropDownMenuInterface<T extends MenuItemInterface> {
	handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
	handleClick: (selected?: T) => void;
	itemList: T[];
	anchorEl: HTMLElement | null;
	currentDisplayName: string;
}

export default function DropDownMenu<T extends MenuItemInterface>(
	props: dropDownMenuInterface<T>
) {
	const open = Boolean(props.anchorEl);
	return (
		<div>
			<Button
				className="text-lg font-bold text-black "
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={props.handleOpen}>
				{props.currentDisplayName}
				<ExpandMoreIcon
					className={`${open ? 'rotate-180' : 'rotate-0'} transition-all`}
				/>
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={props.anchorEl}
				open={open}
				onClose={() => props.handleClick()}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}>
				{props.itemList.map((data, index) => (
					<MenuItem
						key={index}
						onClick={() => props.handleClick(data)}>
						{data.displayName}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}
