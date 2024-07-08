export const currencyFormat = (number: number)=>{


    const result =  number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    return result;
    
    }