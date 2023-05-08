import React, { createContext, useEffect, useState } from 'react'
import { PRODUCTS } from '../Products';


export const ShopContext = createContext(null);

const getDefaultCart = () =>
{
    let cart = {}
    for(let i=1;i<=PRODUCTS.length + 1;i++)
    {
        cart[i]=0;
    }
    return cart
};

export const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart())

   const initialValues = { username:'',email:"",pass:""}
   

    const [formValues,setFormValues] = useState(initialValues)

   

    const handleChange = (e) =>{

      const { name,value } = e.target;
        setFormValues({...formValues, [name] : value })
     
        
    }

    // useEffect(() => {
    //   console.log(formValues)
    // }, [formValues])
   
    const handleSubmit = (e) =>
    {
       e.preventDefault();
      setFormValues(initialValues)
    }

    const getTotalCartAmount =() => {
      let totalAmount=0
      for(const item in cartItems) {
        if(cartItems[item] > 0){
          let itemInfo= PRODUCTS.find((product) => product.id === Number(item))
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
      return totalAmount;
    }

    const addToCart = (itemId) => {
         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
   };

   const updateCartItemCount = (newAmount , itemId) => {
           setCartItems((prev) =>({...prev, [itemId]: newAmount}))
   }
   const contextValue = {cartItems, addToCart , removeFromCart ,updateCartItemCount,getTotalCartAmount,formValues,setFormValues,handleChange, handleSubmit }

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
