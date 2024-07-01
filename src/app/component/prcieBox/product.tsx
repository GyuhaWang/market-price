"use client"
import products from '@/app/data/product';
import * as React from 'react';
import PriceBoxComponent from './priceBox';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';



export default function ProductComponent() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    useEffect(()=>{console.log("hi i'm loading")},[searchParams.get('region')])
  return (
    <div className="flex flex-col flex-1  gap-4 overflow-auto ">
    {products.map((data, index)=> 
     <div key={index} className="border-b border-solid border-[#ccc]">
     <PriceBoxComponent data={data}/>
   </div>
    )}
  </div>
  );
}