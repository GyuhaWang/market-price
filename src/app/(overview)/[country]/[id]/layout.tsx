import { ReactElement } from 'react';
import Header from '@/app/ui/header/bar';

const Layout = ({ children }: { children: ReactElement }) => {
	return <div className=" h-full  w-full bg-white ">{children}</div>;
};

export default Layout;
