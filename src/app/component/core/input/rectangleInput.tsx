import { FormControl, TextField } from '@mui/material';

const RectangleInput = ({
	field,

	title,
	size,
}: {
	title: string;
	field?: any;

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
			<TextField
				className={`${sizeStyle}`}
				{...field}></TextField>
		</FormControl>
	);
};

export default RectangleInput;
