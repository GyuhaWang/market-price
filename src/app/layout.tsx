import type { Metadata } from 'next';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import UserSessionProvider from '@/app/prodiver/userSessionProvider';

export const metadata: Metadata = {
	title: '마켓프라이스',
	description: '베트남 현지 물가 공유, 개발자:왕규하, GyuHaWang',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="kr">
			<body>
				<main className="w-full h-screen flex  flex-col overflow-y-clip ">
					<UserSessionProvider>{children}</UserSessionProvider>
				</main>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
