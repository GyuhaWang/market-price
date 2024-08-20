import Link from 'next/link';

const Logo = () => {
	return (
		<Link
			className="uppercase font-bold text-lg flex items-center text-end"
			href="/">
			<p className="text-lg">얼마야</p>
		</Link>
	);
};

export default Logo;
