import React from 'react'
import './proman.css'
import { PRODUCTS } from '../../../Products'
import { ProductManagement } from './ProductManagement'

export const ProductsManage = () => {
  return (
    <div className='main'>
     
      <div> {PRODUCTS.map((item,index) => <ProductManagement value={item} key={index}/>)}</div>
    </div>
   
  )
}
