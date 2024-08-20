'use client';
import { signOut, useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
const Login = () => {
	const { data: session, status } = useSession();
	if (status == 'authenticated') {
		return (
			<span className=" flex  gap-2">
				{session.user.name}님
				<button
					aria-label="logout"
					className="text-sm font-medium underline"
					onClick={() => signOut()}>
					로그아웃
				</button>
			</span>
		);
	} else {
		return (
			<button
				aria-label="logout"
				className="text-md font-semibold"
				onClick={() => signIn()}>
				로그인
			</button>
			// <Link
			// 	arial-label="login"
			// 	className="text-md font-semibold"
			// 	href="/login">
			// 	로그인
			// </Link>
		);
	}
};

export default Login;
