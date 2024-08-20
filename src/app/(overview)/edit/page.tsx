'use client';
import { categoryData } from '@/@types/category';
import { Nation, nationData } from '@/@types/nation';
import { regionData } from '@/@types/region';
import CapsuleGroup from '@/app/ui/core/capsuleGroup';
import CloseIcon from '@mui/icons-material/Close';
import { useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { sumbmitForm } from './apis';
import { revalidatePath } from 'next/cache';
import revalidate from '@/app/utils/revalidatePath';

type Inputs = {
	title: string | null;
	country: string | null;
	price: number | null;
	userId: String | null;
	detail: string | null;
	hashTag?: string[] | null;
	region: string | null;
	category: string | null;
	locationUrl?: string | null;
	imgUrl?: string | null;
};

const Page = () => {
	const { data: session, status } = useSession();

	const [isKoreaCurrency, setIsKoreaCurrency] = useState(true);
	const [exchangeRatio, setExchangeRatio] = useState(1);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		data['userId'] = session?.user.id;

		if (!isKoreaCurrency) {
			data['price'] = Math.round((data['price'] ?? 1) / exchangeRatio);
		}
		await sumbmitForm(data)
			.then(() => {
				revalidate(`/${data['country']}`);
				router.replace(`/${data['country']}`);
				router.back();
			})
			.catch((res) => alert(res.error));
	};

	const priceInput = useMemo(() => {
		const currency = nationData.find(
			({ value }) => value == watch().country
		)?.currency;
		const korCurrency = '₩';
		return (
			<div className="w-full flex- flex-col gap-2 ">
				<label className="flex flex-col">
					<div className="flex justify-between">
						<p className="flex font-bold text-lg">가격 *</p>
						<label className="flex gap-2 items-center">
							<p>원화 입력</p>
							<input
								type="checkbox"
								checked={isKoreaCurrency}
								onChange={({ target: { checked } }) => {
									setIsKoreaCurrency(checked);
								}}
							/>
						</label>
					</div>
					<div className="flex">
						<p className="flex  font-bold text-2xl break-all">
							{isKoreaCurrency ? korCurrency : currency}
						</p>
						{/* <Controller
							name="price"
							control={control}
							render={({ field }) => (
								<input
									type="text"
									ref={field.ref}
									onBlur={field.onBlur}
									value={field.value?.toLocaleString()}
									onChange={field.onChange}
								/>
							)}
						/> */}

						<input
							type="number"
							aria-label="price input"
							className="outline-none flex pl-2  font-bold text-xl w-full"
							placeholder="ex) 200,000"
							{...register('price', {
								valueAsNumber: true,
								required: '가격을 입력해주세요',
							})}
						/>
					</div>
					{/* <div className="flex flex-wrap justify-between ">
						<div className="flex">
							<p className="flex font-semibold text-base break-all">
								{!currencyState ? korCurrency : currency}
							</p>
						</div>
					</div> */}
				</label>
			</div>
		);
	}, [isKoreaCurrency, watch().country]);

	return (
		<form
			className="flex flex-col "
			onSubmit={handleSubmit(onSubmit)}>
			{/* form header */}
			<div className="sticky flex justify-between top-0 w-full bg-white border-b-2 p-4 z-10">
				<button onClick={() => router.back()}>
					<CloseIcon className=" hover:scale-95 active:scale-90  transition-all" />
				</button>
				<input
					className="hover:text-secondary hover:scale-95 active:scale-90  transition-all"
					type="submit"
				/>
			</div>
			{/* form body */}
			<div className="flex flex-col  gap-4 p-4">
				{/* title */}
				<label>
					<p className="text-lg font-bold">제목 *</p>
					<input
						autoFocus
						className="w-full outline-none font-bold text-2xl"
						placeholder="ex) 빅맥,스타벅스,반팔티..."
						{...register('title', {
							required: '제목을 입력해주세요.',
						})}
					/>
				</label>
				{/* category */}
				<label className="flex flex-col gap-2">
					<p className="text-lg font-bold">카테고리 *</p>

					<CapsuleGroup
						items={categoryData}
						register={register('category', {
							required: '카테고리를 선택해주세요.',
						})}
						color="basic"
						currentItem={watch().category}
					/>
				</label>

				<div className="w-full h-[1px] bg-black" />
				{/* category */}
				<label className="flex flex-col gap-2">
					<p className="text-lg font-bold">국가 / 지역 *</p>
					<CapsuleGroup
						items={nationData}
						onClick={(item: Nation) => setExchangeRatio(item.exchangeRate)}
						color="basic"
						register={register('country', {
							required: '국가를 선택해주세요.',
						})}
						currentItem={watch().country}
					/>
					{/* region */}
					<div className="w-full flex gap-2 overflow-x-auto">
						<CapsuleGroup
							items={regionData.filter(
								({ nationId }) =>
									nationId ==
									nationData.find((n) => n.value == watch().country)?.id
							)}
							register={register('region', {
								required: '지역을 선택해주세요.',
							})}
							color="pink1"
							currentItem={watch().region}
						/>
					</div>
				</label>

				<div className="w-full h-[4px] bg-black" />
				{/* price */}
				{priceInput}
				<div className="w-full h-[2px] bg-black" />
				{/* detail */}
				<label className="w-full grow flex-col gap-2 ">
					<p className="font-semibold text-lg">상세설명 *</p>
					<textarea
						placeholder="ex) 베트남 하노이 시장에서 구매한 반팔티입니다. 계속 흥정을 해서 300,000동에 구매했어요."
						rows={2}
						className="flex grow w-full outline-none  font-medium text-base"
						{...register('detail', {
							required: '상세 설명을 입력해주세요',
						})}
					/>
				</label>
				{/* <div className="w-full h-[1px] bg-black" />
				<div className="w-full flex- flex-col gap-2 ">
					<p className="font-semibold text-lg">이미지</p>
					<input
						type="file"
						accept="image/*"
					/>
				</div>
				이미지 올리기 다음번에 업데이트하기
				*/}
				<div className="w-full h-[1px] bg-black" />
				<div className="w-full flex- flex-col gap-2 ">
					{/* locationUrl */}
					<p className="font-semibold text-lg">상세주소</p>
					<input
						{...register('locationUrl')}
						type="url"
						className="w-full outline-none"
						placeholder="지도에서 위치정보를 복사해 넣어주세요"
					/>
				</div>
				<div className="w-full h-[4px] bg-black" />
				<div className="h-20" />
			</div>
		</form>
	);
};

export default Page;
