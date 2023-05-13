import React from 'react'
import './WomenPage.css'
import { PRODUCTS } from '../../Products'
import { WomensProduct } from './WomensProduct'
export const WOMENPRODUCTS = PRODUCTS.filter((item) => item.category==='women')
export const WomenPage = () => {
   
  return (
 
   
    <div className='womenmain'>
    <div>WOMEN</div>
    <div className='products' >
        {WOMENPRODUCTS.map((item,index) => <WomensProduct value={item} key={index}/>
          
        )}
    </div>
</div>
  )
}
