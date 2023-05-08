import React from 'react' 
import { PRODUCTS } from '../../Products' 
import {Product} from './Product'
import './shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
        <div className="shopTitle"><h2>WELCOME TO SHOELAND</h2></div>
        <div className="products">
            {PRODUCTS.map((item,index) => <Product value={item} key={index}/>)}</div>
    </div>
  )
} 
