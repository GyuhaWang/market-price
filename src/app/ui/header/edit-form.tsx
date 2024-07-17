// TODO - react-hook-form으로 변경을 하기

import category from '@/app/data/category';
import country from '@/app/data/country';
import Product from '@/app/types/product';
import { TextareaAutosize, TextField } from '@mui/material';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import RectangleDropDown from '@/app/ui/rectangle-drop-down';
import CurrencyFormatInput from '@/app/ui/currency-input';

// 고려사항 - 비즈니스 로직과 뷰를 구분해서 ui, 기능 변경에 대응하기 쉽게 만들어보자!!

//어느정도로 재사용이 가능해야할까? ->
export default function EditForm({
	submitFunction,
}: {
	submitFunction: SubmitHandler<Product>;
}) {
	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm<Product>({
		defaultValues: {
			country: '베트남',
			price: 0,
			name: '',
			region: '',
			category: '',
			description: '',
			like: 0,
		},
	});
	const [submitButtonAvailable, setSubmitButtonAvailable] = useState(true);
	return (
		<form
			className="p-10 flex flex-col gap-2 justify-end"
			onSubmit={handleSubmit(submitFunction)}>
			<div className="flex gap-2">
				{/* 지역 선택*/}
				<Controller
					name="region"
					control={control}
					rules={{ required: '지역을 선택해주세요.' }}
					render={({ field }) => (
						<RectangleDropDown
							size={'full'}
							title="지역"
							field={field}
							options={country}
						/>
					)}
				/>
				{/* 카테고리 선택*/}
				<Controller
					name="category"
					control={control}
					rules={{ required: '카테고리를 선택해주세요.' }}
					render={({ field }) => (
						<RectangleDropDown
							size={'full'}
							title="카테고리"
							field={field}
							options={category}
						/>
					)}
				/>
			</div>
			{/* 가격 선택*/}
			<Controller
				name="price"
				control={control}
				rules={{ required: '현지 화페단위의 가격을 입력해주세요.' }}
				render={({ field: { value, onChange } }) => (
					<CurrencyFormatInput handleInputChange={onChange} />
				)}
			/>
			{errors.price?.type === 'required' && (
				<p role="alert">First name is required</p>
			)}
			{/* 상품명*/}
			<Controller
				name="name"
				control={control}
				rules={{ required: '상품명을 입력해주세요' }}
				render={({ field }) => (
					<TextField
						label="상품명"
						{...field}
					/>
				)}
			/>
			{/* 상품 설명*/}
			<Controller
				name="description"
				control={control}
				rules={{ required: '상품명을 입력해주세요' }}
				render={({ field }) => (
					<TextareaAutosize
						{...field}
						className="p-2 border-2"
						minRows={3}
						maxRows={5}
						aria-label="minimum height"
						placeholder="상세 설명을 적어주세요."
					/>
				)}
			/>
			<div className="flex items-end justify-end">
				<input
					disabled={!submitButtonAvailable}
					className="px-10 py-2 border-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-700 active:scale-90 duration-300"
					type="submit"
				/>
			</div>
		</form>
	);
}
