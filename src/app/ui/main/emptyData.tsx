'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const DataEmpty = () => {
	const { data: session, status } = useSession();
	const router = useRouter();
	const handleClickButton = () => {
		if (session?.user) {
			return router.push('/edit');
		} else {
			return alert('로그인후 게시글을 작성할 수 있어요.');
		}
	};
	return (
		<div className="flex    justify-center items-center  ">
			<button
				onClick={handleClickButton}
				className="flex flex-col w-80 h-40  justify-center items-center bg-white rounded-2xl drop-shadow-md text-gray-400 hover:scale-95 hover:bg-gray-50 active:scale-90 active:bg-gray-100 transition-all">
				<p>아직 데이터가 없어요</p>
				<p>먼저 가격 정보를 올려보세요</p>
			</button>
		</div>
	);
};

export default DataEmpty;
