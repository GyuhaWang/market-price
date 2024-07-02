
import * as React from 'react';
import Box from '@mui/material/Box';
import CategoryComponent from './category';
import RegionMenu from './region';

interface categoryComponentInterface {
    category?: string;
}

export default function FilterComponent(data: categoryComponentInterface) {
 

  return (
    <Box sx={{ width: "100%", display:'flex', gap:'1.5rem'}}>
        <RegionMenu/>
        <CategoryComponent/>

    </Box>
  );
}