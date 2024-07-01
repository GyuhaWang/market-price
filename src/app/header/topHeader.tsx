import * as React from 'react';
import Box from '@mui/material/Box';



export default function TopHeader() {


  return (
    <Box sx={{ width: "100%" }}>
    <div className='h-[54px] w-full bg-green-50 flex justify-start items-center pl-4 pr-4'>
        <a className='uppercase font-bold text-lg' href='/'>market price</a>
    </div>
    </Box>
  );
}