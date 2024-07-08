'use client';
import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import {
	Box,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';
import RegionMenu from './region';
import CategoryComponent from './category';
import CurrencyFormatInput from '../currencyInput';
import { Suspense, useState } from 'react';
import { PostProduct } from '@/app/api/product/productApi';
import Product from '@/app/types/product';

export default function EditComponent() {
	const [open, setOpen] = React.useState(false);
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [productInput, setProductInput] = useState({
		region: null,
		category: null,
		name: null,
		price: null,
		content: null,
		imageURL: undefined,
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
	const handleSubmit = async () => {
		setButtonDisabled(true);
		const { region, category, name, price, content, imageURL } = productInput;
		if (!region || !category || !name || !price || !content) {
			return alert('필수 입력사항을 모두 입력해주세요');
		}
		const newProduct = new Product(
			'베트남',
			region,
			category,
			name,
			price,
			imageURL,
			content
		);
		await PostProduct(newProduct).then(() => setOpen(false));
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
						onSubmit={() => console.log('submit')}>
						<div
							id="filter"
							className="flex flex-row">
							<Suspense>
								<RegionMenu
									handleInputChange={(value: string) =>
										handleInputChange('region', value)
									}
								/>
							</Suspense>
							<Suspense>
								<CategoryComponent
									handleInputChange={(value: string) =>
										handleInputChange('category', value)
									}
								/>
							</Suspense>
						</div>
						<input
							placeholder="상품명을 적어주세요"
							onChange={(e) => handleInputChange('name', e.target.value)}
						/>

						<CurrencyFormatInput
							handleInputChange={(value: number) =>
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
						disabled={buttonDisabled}
						onClick={async () =>
							await handleSubmit().finally(() => setButtonDisabled(false))
						}
					/>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
