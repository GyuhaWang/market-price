'use client';
import { putLikeProduct } from '@/app/api/actions';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useState } from 'react';
const PopularButton = ({ like, id }: { like: number; id: string }) => {
	const [count, setCount] = useState(like);
	const [loading, setLoading] = useState(false);
	const onClickHandler = async () => {
		setLoading(true);

		putLikeProduct(id)
			.then((message) => {
				setCount(count + 1);
			})
			.catch((e) => {
				alert('오류');
			});
	};
	return (
		<div className="flex flex-col justify-center items-center">
			<button
				onClick={() => onClickHandler().finally(() => setLoading(false))}
				disabled={loading}>
				{loading ? <p>loading</p> : <ThumbUpOffAltIcon />}
			</button>
			<p>{count < 1000 ? count : '1000+'}</p>
		</div>
	);
};

export default PopularButton;
