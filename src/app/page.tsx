import Image from "next/image";
import SimpleBottomNavigation from "./footer/bottomNav";
import TopHeader from "./header/topHeader";

import products from "./data/product";
import PriceBoxComponent from "./component/prcieBox/priceBox";
import FilterComponent from "./component/filter";

export default function Home() {
  
  return (

    <main className="w-full h-screen  flex flex-col">
      <header className="flex"><TopHeader/></header>     
      <div className="flex flex-col grow pl-4 pr-4">
        <div className="flex flex-col">
          <FilterComponent/>
      
          <div> average price : 5000</div>
        </div>
        <div className="flex flex-col flex-1  gap-4 ">
          {products.map((data, index)=> 
           <div key={index} className="border-b border-solid border-[#ccc]">
           <PriceBoxComponent data={data}/>
         </div>
          )}
        </div>
        </div>
      {/* <footer className="flex" ><SimpleBottomNavigation/></footer> */}
    </main>
   
  );
}
