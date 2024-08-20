import { ReactElement } from 'react';
import Header from '@/app/ui/header/bar';

const Layout = ({ children }: { children: ReactElement }) => {
	return (
		<div className="flex flex-col grow w-full  h-full bg-white">
			<header className="flex w-full">
				<Header />
			</header>
			{children}
		</div>
	);
};

export default Layout;
