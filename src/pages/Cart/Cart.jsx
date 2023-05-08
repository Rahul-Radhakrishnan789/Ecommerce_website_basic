import React,{useContext} from 'react'
import { PRODUCTS } from '../../Products'
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import { useNavigate } from 'react-router-dom';




export const Cart = () => {
  const { getTotalCartAmount , cartItems} = useContext(ShopContext)
   const navigate = useNavigate()
  return (
    <div className='cart'>
      <div><h1>Dont wait... Checkout NOW!!!</h1></div>
      <div className='cartItems'>
        {PRODUCTS.map((product) =>{
           if(cartItems[product.id]!==0){
            return <CartItem value={product}/>
           }
        })}
      </div>
      {getTotalCartAmount() > 0 ?(
      <div className="checkout">
        <h5>total: ${getTotalCartAmount()}</h5>
        <button onClick={() => navigate('/')}>Continue shopping</button>
        <button>Checkout</button>
      </div>) : (<h1>Your cart is empty</h1>)
   }
    </div>
  )
}