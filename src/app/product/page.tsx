import { Suspense } from 'react';
import ProductComponent from '../component/prcieBox/product';

export default function Product() {
	return (
		<>
			<div className="flex flex-col  pl-4 pr-4">
				<Suspense>
					<ProductComponent />
				</Suspense>
			</div>
		</>
	);
}
