import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
const handler = NextAuth({
	providers: [
		// 카카오 Provider
		KakaoProvider({
			clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
			clientSecret: process.env.NEXT_PUBLIC_KAKAO_SECRET!,
		}),
	],
});

export { handler as GET, handler as POST };
