import { MenuItemInterface } from '@/app/types/menuItem';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Size } from '@/app/types/size';

const RectangleDropDown = ({
	field,
	options,
	title,
	size,
}: {
	title: string;
	field?: any;
	options: MenuItemInterface[];
	size: Size;
}) => {
	const sizeStyle = `w-${
		size == 'full'
			? 'full'
			: `[${
					size == 's' ? 300 : size == 'm' ? 500 : size == 'l' ? 800 : size
			  }px]`
	}`;

	return (
		<FormControl fullWidth={true}>
			<InputLabel id="rectangle-dropdown-select-label">{title}</InputLabel>
			<Select
				className={`${sizeStyle}`}
				{...field}
				id="rectangle-dropdown-menu"
				label={title}>
				{options.map((item, index) => (
					<MenuItem
						key={index}
						value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default RectangleDropDown;
