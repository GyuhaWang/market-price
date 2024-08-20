import { ReactElement } from 'react';

const Layout = ({ children }: { children: ReactElement }) => {
	return <div className=" h-full  w-full bg-white ">{children}</div>;
};

export default Layout;
