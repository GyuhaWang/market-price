import Image from "next/image";
import SimpleBottomNavigation from "./footer/bottomNav";
import TopHeader from "./header/topHeader";

import products from "./data/product";
import PriceBoxComponent from "./component/prcieBox/priceBox";
import FilterComponent from "./component/filter/filter";
import ProductComponent from "./component/prcieBox/product";
import EditComponent from "./component/edit/editComponent";

export default function Home() {
  
  return (

    <main className="w-full h-screen  ">
      <header className="flex  flex-col sticky top-0">
        <TopHeader/>
      
      </header>     
      <div className="flex flex-col  pl-4 pr-4">
       
     <ProductComponent/>
        </div>
      {/* <footer className="flex" ><SimpleBottomNavigation/></footer> */}
    </main>
   
  );
}
