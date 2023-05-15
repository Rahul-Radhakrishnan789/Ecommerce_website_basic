import React from 'react' 
import { PRODUCTS } from '../../Products' 
import {Product} from './Product'
import './shop.css'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const Shop = () => {
  const data = useContext(ShopContext)
const {products} = data
  return (
    <div className='shop'>
        <div className="shopTitle"><h2>WELCOME TO SHOELAND</h2></div>
        <div className="products">
            {products.map((item,index) => <Product value={item} key={index}/>)}</div>
    </div>
  )
} 
  
