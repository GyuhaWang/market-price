import Image from 'next/image';
const CircleNation = ({ imgUrl }: { imgUrl: string }) => {
	return (
		<Image
			className="rounded-full"
			alt="nationImage"
			height={48}
			width={48}
			style={{ objectFit: 'fill' }}
			src={imgUrl}
		/>
	);
};
export default CircleNation;
