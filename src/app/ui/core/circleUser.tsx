import { User } from '@/@types/user';

const CircleUser = ({ data }: { data: User }) => {
	return (
		<div
			className={`h-8 w-8 rounded-full flex items-center justify-center bg-white`}>
			<p className="flex font-semibold text-xs overflow-hidden line-clamp-1  ">
				{data.nickName}
			</p>
		</div>
	);
};

export default CircleUser;
