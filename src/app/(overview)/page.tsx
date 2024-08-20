import MainIndex from '../ui/main';
import Header from '@/app/ui/header/bar';
import { nationData } from '@/@types/nation';

import { Suspense } from 'react';
import ProductsSkeleton from '../ui/core/loading';

export default async function Home() {
	return (
		<>
			<header className="flex w-full  ">
				<Header />
			</header>
			<div className="flex grow w-full overflow-y-auto">
				<div className="h-full w-full overflow-y-scroll px-0 py-12 sm:p-12 bg-background">
					<div className="w-full flex flex-col gap-12">
						{nationData.map(async (n, index) => {
							return (
								<div key={n.id}>
									<Suspense fallback={<ProductsSkeleton />}>
										{/* @ts-expect-error Async Server Component */}
										<MainIndex country={n} />
									</Suspense>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
