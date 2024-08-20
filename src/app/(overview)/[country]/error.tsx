'use client';

import { useRouter } from 'next/navigation';
const ErrorPage = () => {
	const router = useRouter();
	const handleClickBack = () => {
		router.back();
	};
	return (
		<div className="w-full h-full bg-white flex flex-col justify-center items-center px-4 pb-40">
			<div className=" flex  flex-col max-w-80 p-12 rounded-2xl drop-shadow-xl bg-white font-semibold text-center gap-4">
				<div>
					<p>죄송합니다.</p>
					<p>현재 지원하지 않는 국가입니다.</p>
				</div>
				<button
					onClick={handleClickBack}
					className="underline font-normal">
					돌아가기
				</button>
			</div>
		</div>
	);
};

export default ErrorPage;
