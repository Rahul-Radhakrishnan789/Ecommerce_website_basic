import React,{useEffect} from 'react'
import './usersectionitems.css'
import { useContext } from 'react'
import { ShopContext } from '../../../context/shop-context'
import { cartValues } from '../../../Products'

export const UserInfo = () => {

    const data = useContext(ShopContext) 

    const {selectedUser ,cartItems,setShowCart,showCart} = data;

  return (


    <div className='user'>
      <div className="titles">
        <p><b>NAME</b></p>
        <p><b>EMAIL</b></p>
        <p><b>PASSWORD</b></p>
      </div>
      <div className='details'>
       <p>{selectedUser.username}</p>
       <p>{selectedUser.email}</p>
       <p>{selectedUser.pass}</p>
       </div>

       <div className="orders"><h2>ORDER DETAILS</h2></div>
    
       {cartValues.map((Items) => {
        return (
       <div className="cartItemas">
    <img src={Items.productImage} />
  <div className='descriptionas'>
    <p><b>{Items.productName}</b></p>
    <p>${Items.price}</p>
 {   console.log(cartValues)}
   
    </div>
    </div>
    )
    })}
    </div>
  )
}
