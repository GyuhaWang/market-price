"use client"
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { Button, Menu, MenuItem } from '@mui/material';
import country from '../../data/country';
import { useCallback, useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
interface areaComponentInterface {
    country?: string;
    region?:string;
}

export default function AreaComponent(data: areaComponentInterface) {
  const router = useRouter();
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (region?: string) => {
    if (region){
      router.push(pathname + '?' + createQueryString('region', region))
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
      className="text-lg font-bold text-black p-0 pt-1 pb-1"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       { searchParams.get('region')??"지역을 골라주세요"}
       <ExpandMoreIcon className={`${anchorEl?"rotate-180":"rotate-0"} transition-all`}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={()=>handleClose()}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {country.map((data, index)=> <MenuItem  key={index} onClick={()=> handleClose(data.region)}>{data.region}</MenuItem>)}
        
      </Menu>
    </div>
  );
  
}
