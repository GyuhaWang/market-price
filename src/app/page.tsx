import TopHeader from './header/topHeader';
import ProductComponent from './component/prcieBox/product';

export default function Home() {
	return (
		<main className="w-full h-screen  ">
			<header className="flex  flex-col sticky top-0">
				<TopHeader />
			</header>
			<div className="flex flex-col  pl-4 pr-4">
				<ProductComponent />
			</div>
			{/* <footer className="flex" ><SimpleBottomNavigation/></footer> */}
		</main>
	);
}
