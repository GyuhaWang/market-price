import { connectDB } from '@/app/utils/database';
import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import prisma from '@/app/lib/prismadb';
const handler = NextAuth({
	providers: [
		// 카카오 Provider
		KakaoProvider({
			clientId: process.env.KAKAO_CLIENT_ID!,
			clientSecret: process.env.KAKAO_SECRET!,
		}),
	],
	pages: { signIn: '/login' },

	callbacks: {
		async signIn({ user, account }) {
			try {
				let result = await prisma.user.findFirst({
					where: {
						id: user.id,
						name: user.name ?? 'unknown',
					},
				});
				if (!result) {
					const user_info = {
						id: user.id,
						name: user.name ?? 'unknown',
					};
					await prisma.user.create({
						data: user_info,
					});
				}

				return true;
			} catch (error) {
				console.log(error);
				return false;
			}
		},
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.name = user.name;
			}

			return token;
		},
		async session({ session, token, user }) {
			session.user.id = token.id as string;
			session.user.name = token.name ?? '';
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
