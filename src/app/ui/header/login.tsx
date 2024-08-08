'use client';
import { signOut, useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';
const Login = () => {
	const { data: session, status } = useSession();
	if (status == 'authenticated') {
		return (
			<button
				aria-label="logout"
				onClick={() => signOut()}>
				로그아웃
			</button>
		);
	} else {
		return (
			<button
				arial-label="login"
				onClick={() => signIn('kakao')}>
				로그인
			</button>
		);
	}
};

export default Login;
