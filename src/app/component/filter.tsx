"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import AreaComponent from './area';

interface categoryComponentInterface {
    category?: string;
}

export default function FilterComponent(data: categoryComponentInterface) {
  const [category, setCategory] = React.useState(data.category);


  return (
    <Box sx={{ width: "100%" }}>
        <AreaComponent/>

    </Box>
  );
}