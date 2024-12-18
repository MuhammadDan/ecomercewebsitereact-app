
import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react'

export const Productcontext = createContext();
const Contex = (props) => {
    const [products,setproducts] = useState(null)
    const getProduct = async ()=>{
        try {
            const {data} = await axios('/products');
            setproducts(data);
            
        } catch (error) {
            console.log(error);         
        }
    }
    useEffect(() => {
      getProduct();
    }, [])
    
  return (
    <>
    <Productcontext.Provider value={[products,setproducts]}>{props.children}</Productcontext.Provider>
    </>
  )
}

export default Contex