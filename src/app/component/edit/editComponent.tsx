'use client';
import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogProps,
	DialogTitle,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Switch,
} from '@mui/material';
import RegionMenu from './region';
import CategoryComponent from './category';
import CurrencyFormatInput from '../currencyInput';
import { useState } from 'react';

export default function EditComponent() {
	const [open, setOpen] = React.useState(false);
	const [productInput, setProductInput] = useState({
		region: null,
		category: null,
		price: null,
		content: null,
		imageURL: null,
	});
	function handleInputChange(field: string, value: any) {
		setProductInput((prevState) => ({
			...prevState,
			[field]: value,
		}));
	}

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		console.log(productInput);
	};

	return (
		<React.Fragment>
			<button onClick={handleClickOpen}>
				{' '}
				<EditIcon />
			</button>

			<Dialog
				fullWidth={true}
				open={open}
				onClose={handleClose}>
				<DialogTitle>
					{' '}
					상품 가격을 입력해 정확한 데이터를 만들어주세요.
				</DialogTitle>
				<DialogContent>
					<Box
						noValidate
						component="form"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							m: 'auto',
							gap: '0.5rem',
						}}
						onSubmit={(e) => console.log('submit')}>
						<div
							id="filter"
							className="flex flex-row">
							<RegionMenu
								handleInputChange={(value: string) =>
									handleInputChange('region', value)
								}
							/>

							<CategoryComponent
								handleInputChange={(value: string) =>
									handleInputChange('category', value)
								}
							/>
						</div>

						<CurrencyFormatInput
							handleInputChange={(value: string) =>
								handleInputChange('price', value)
							}
						/>
						<textarea
							onChange={(e) => handleInputChange('content', e.target.value)}
							placeholder="상품에 대한 상세한 설명을 적으면 보다 유용한 데이터를 완성할 수 있어요."
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<input
						type="submit"
						onClick={(e) => handleSubmit(e)}
					/>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
