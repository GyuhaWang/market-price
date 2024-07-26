'use client';
import { signOut, useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';
const Login = () => {
	const { data: session, status } = useSession();
	if (status == 'authenticated') {
		return <button onClick={() => signOut()}>로그아웃</button>;
	} else {
		return <button onClick={() => signIn('kakao')}>로그인</button>;
	}
};

export default Login;
