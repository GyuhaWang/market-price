import { MenuItemInterface } from "./menuItem";

interface Region extends MenuItemInterface  {
    id:number;
    country: string;
    region: string;
  };
  
  export default Region;