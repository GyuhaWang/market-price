import { Nation } from '@/@types/nation';
import Link from 'next/link';
import CircleNation from './circleNation';

const NationBox = ({ nation }: { nation: Nation }) => {
	return (
		<Link
			href={`/${nation.name}?page=1`}
			className="flex justify-start items-center gap-4">
			<CircleNation imgUrl={nation.imgUrl} />
			<p className="font-bold text-3xl text-nowrap">{nation.name}</p>
		</Link>
	);
};

export default NationBox;
