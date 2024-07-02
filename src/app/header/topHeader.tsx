import * as React from 'react';
import Box from '@mui/material/Box';
import FilterComponent from '../component/filter/filter';
import EditComponent from '../component/edit/editComponent';



export default function TopHeader() {


  return (
    <Box sx={{ width: "100%", backgroundColor:'orange' }}>
    <div className='h-[54px] w-full  flex justify-start items-center pl-4 pr-4'>
        <a className='uppercase font-bold text-lg' href='/'>market price</a>
    </div>
    <div className=" pl-4 pr-4 flex   justify-between">
          <FilterComponent/>
          <EditComponent/>
          {/* <div> average price : 5000</div> */}
        </div>
    </Box>
  );
}