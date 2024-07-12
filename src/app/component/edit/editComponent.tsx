'use client';
import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog, DialogTitle } from '@mui/material';
import { Suspense, useState } from 'react';
import { PostProduct } from '@/app/api/product/productApi';
import EditForm from '../core/form/editForm';
import Product from '@/app/types/product';

export default function EditComponent() {
	const [modalOpen, setModalOpen] = useState(false);

	const handleModalOpen = () => {
		setModalOpen(true);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};
	const handleSubmit = async (product: Product) => {
		await PostProduct(product).then(() => setModalOpen(false));
	};

	return (
		<React.Fragment>
			<button onClick={handleModalOpen}>
				{' '}
				<EditIcon />
			</button>
			<Dialog
				fullWidth={true}
				open={modalOpen}
				onClose={handleModalClose}>
				<DialogTitle>
					{' '}
					상품 가격을 입력해 정확한 데이터를 만들어주세요.
				</DialogTitle>
				<EditForm
					submitFunction={async (data) => {
						await handleSubmit(data);
					}}
				/>
			</Dialog>
		</React.Fragment>
	);
}
