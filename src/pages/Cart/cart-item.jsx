import React  from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import './cart.css'

export const CartItem = (props) => {
    const {id,productName,price,productImage} = props.value;
    const { addToCart , cartItems ,removeFromCart,updateCartItemCount} = useContext(ShopContext)
  return (
   <div className="cartItem">
    <img src={productImage} />
    <div className='description'><p><b>{productName}</b></p>
    <p>${price}</p>
   
    </div>
    <div className="countHandler">
        <button onClick={()=>addToCart(id)}> + </button>
        <input  value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value),id)}  />
        <button  onClick={() =>removeFromCart(id)}> - </button>
    </div>
   </div>
  );
}
