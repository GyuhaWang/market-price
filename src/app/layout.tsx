import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'MarketPriceVietNam',
	description: '베트남 현지 물가 공유, 개발자:왕규하, GyuHaWang',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="kr">
			<body>{children}</body>
		</html>
	);
}
