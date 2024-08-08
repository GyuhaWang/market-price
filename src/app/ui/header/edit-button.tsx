'use client';
import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog, DialogTitle } from '@mui/material';
import { useState } from 'react';
import EditForm from '@/app/ui/header/edit-form';
import Product from '@/app/types/product';
import { PostProduct } from '@/app/lib/actions';
import { useSession } from 'next-auth/react';

export default function EditButton() {
	const [modalOpen, setModalOpen] = useState(false);
	const { data: session, status } = useSession();
	const handleModalOpen = () => {
		if (status == 'authenticated') {
			setModalOpen(true);
		} else {
			alert('로그인 이후 이용 가능한 서비스 입니다.');
		}
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};
	const handleSubmit = async (product: Product) => {
		await PostProduct(product).then(() => setModalOpen(false));
	};

	return (
		<React.Fragment>
			<button
				aria-label="edit-button"
				onClick={handleModalOpen}>
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
