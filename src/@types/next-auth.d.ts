import NextAuth, { DefaultSession, ISODateString } from 'next-auth';
import { DefaultJWT } from '@auth/core/jwt';
import User from '@/src/@types/user';
declare module 'next-auth' {
	// Extend session to hold the access_token
	interface Session {
		user: User;
	}

	// Extend token to hold the access_token before it gets put into session
	interface JWT {
		access_token: string & DefaultJWT;
	}
}
