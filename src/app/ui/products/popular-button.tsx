// 'use client';
// import { putLikeProduct } from '@/app/lib/actions';
// import useDialog from '@/app/lib/hooks/useDialog';
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
// import { useSession } from 'next-auth/react';
// import Error from 'next/error';
// import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';

// const Button = ({ onClick }: { onClick: () => Promise<void> }) => {
// 	const [disabled, setDisabled] = useState(false);
// 	return (
// 		<button
// 			aria-label="thumbsUpButton"
// 			disabled={disabled}
// 			onClick={() => {
// 				setDisabled(true);
// 				onClick().finally(() => setDisabled(false));
// 			}}>
// 			<ThumbUpOffAltIcon />
// 		</button>
// 	);
// };

// const PopularButton = ({ like, id }: { like: number; id: string }) => {
// 	const { data: session, status } = useSession();

// 	const [count, setCount] = useState(like);
// 	useEffect(() => {
// 		// Server_side 데이터와 client_side의 데이터 싱크 맞추기
// 		if (count != like) {
// 			setCount(like);
// 		}
// 	}, [like]);

// 	const onClickHandler = async () => {
// 		if (status == 'authenticated') {
// 			await addLike();
// 		} else {
// 			alert('로그인 이후 이용 가능한 서비스 입니다.');
// 		}
// 	};
// 	async function addLike() {
// 		try {
// 			await putLikeProduct(id);
// 		} catch (e) {
// 			throw Error;
// 		}

// 		setCount(count + 1);
// 	}

// 	return (
// 		<div className="flex flex-col justify-center items-center">
// 			{/* <Suspense fallback={<ThumbUpOffAltIcon />}> */}
// 			<Button onClick={onClickHandler} />
// 			{/* </Suspense> */}

// 			<p>{count < 1000 ? count : '1000+'}</p>
// 		</div>
// 	);
// };

// export default PopularButton;
