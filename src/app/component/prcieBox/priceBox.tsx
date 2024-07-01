'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Product from '@/app/types/product';
import Image from 'next/image';
import { useState } from 'react';
import { DEFAULT_PROFILE_IMG_URL } from '@/app/variables';



export default function PriceBoxComponent({data}:{data:Product}) {
  const [isImgError, setIsImgError] = useState<boolean>(false)

  return (
    <Box  sx={{ width: "100%", display:'flex', gap:'2rem', justifyContent:'space-between'}}>
   <Image 
       src={data.photoUrl && !isImgError ? `/${data.photoUrl}` : DEFAULT_PROFILE_IMG_URL}
      alt='item'  
      width={100}
      height={100}
      onError={() => setIsImgError(true)} 
/>
      <div className=' flex flex-col flex-1 justify-between pt-1'>    
      <div className="text-xs">{`${data.country}>${data.region}`}</div>
      <div className="text-lg font-bold">{data.price} 원</div>
      <div className=' flex grow text-md font-normal'>{data.description}</div>
     
      </div>
      <button>
      h
      </button>
    </Box>
  );
}