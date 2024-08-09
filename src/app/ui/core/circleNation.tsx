import Image from 'next/image';
const CircleNation = () => {
	return (
		<Image
			className="rounded-full"
			alt="nationImage"
			height={48}
			width={48}
			style={{ objectFit: 'fill' }}
			src={'/vietnam.svg'}
		/>
	);
};
export default CircleNation;
