const colors = {
	basic: 'text-secondary border-secondary',
	pink1: 'text-accent border-accent',
};
const selectedColors = {
	basic: 'bg-blue-100',
	pink1: 'bg-pink-100',
};
const Capsule = ({
	data,
	onClick,
	selected,
	color,
}: {
	data: any;
	onClick?: any;
	selected?: boolean;
	color: 'basic' | 'pink1';
}) => {
	let colorClasses = colors[color];
	let selectedClorClasses = selectedColors[color];
	return (
		<div
			onClick={onClick}
			className={` ${colorClasses} ${
				selected && `${selectedClorClasses} border-none`
			} text-nowrap border-[1px]   text-sm font-medium h-10 p-4 w-auto  flex items-center justify-center rounded-3xl drop-shadow-sm transition-all hover:underline hover:scale-95   active:scale-90 `}>
			<p>{data}</p>
		</div>
	);
};

export default Capsule;
