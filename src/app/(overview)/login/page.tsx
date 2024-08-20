'use client';
import { signIn } from 'next-auth/react';
import Logo from '@/app/ui/core/logo';

const LoginPage = () => {
	const handleLogin = async () => {
		await signIn('kakao', { callbackUrl: '/' })
			.then((result) => {})
			.catch(() => alert('로그인에 일시적 오류가 발생하였습니다'));
	};
	return (
		<div className="flex flex-col w-full h-full items-center justify-center   bg-background p-4">
			<div className=" w-full max-w-96 bg-white flex flex-col items-center justify-center p-4 gap-10 rounded-2xl">
				<Logo />
				<div className="w-full flex flex-col gap-2">
					<p className="font-semibold text-lg">기존 회원 </p>
					<button
						onClick={handleLogin}
						className="bg-[#FEE501] rounded-xl w-full p-2 text-center font-semibold">
						카카오로 로그인하기
					</button>
				</div>
				<div className="w-full h-[1px] bg-black" />
				<div className="w-full flex flex-col gap-2">
					<p className="font-semibold text-lg">신규 회원 </p>
					<button className="bg-[#FEE501] rounded-xl w-full p-2 text-center font-semibold">
						카카오로 회원가입하기
					</button>
				</div>
				{/* <SignIn /> */}
			</div>
		</div>
	);
};

export default LoginPage;
