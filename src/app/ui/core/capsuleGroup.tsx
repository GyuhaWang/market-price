import { MenuItemInterface } from '@/@types/item';
import { UseFormRegisterReturn } from 'react-hook-form';
import Capsule from './regionCapsule';

const CapsuleGroup = <T1 extends MenuItemInterface, T3 extends unknown>({
	items,
	register,
	currentItem,
	color,
	onClick,
}: {
	items: T1[];
	register: UseFormRegisterReturn;
	currentItem: T3;
	color: 'basic' | 'pink1';
	onClick?: (item: T1) => void;
}) => {
	return (
		<div className="w-full flex gap-2">
			{items.map((c, i) => (
				<label className="flex">
					<input
						key={c.value}
						type="radio"
						value={c.value}
						{...register}
						hidden
					/>
					<Capsule
						onClick={() => {
							onClick ? onClick(c) : null;
						}}
						data={c.label}
						color={color}
						selected={currentItem == c.value}
					/>
				</label>
			))}
		</div>
	);
};

export default CapsuleGroup;
