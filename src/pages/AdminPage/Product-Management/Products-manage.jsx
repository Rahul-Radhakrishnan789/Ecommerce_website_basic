import React from 'react'
import './proman.css'
import { PRODUCTS } from '../../../Products'
import { ProductManagement } from './ProductManagement'
import { useContext } from 'react'
import { ShopContext } from '../../../context/shop-context'

export const ProductsManage = () => {
  
const data = useContext(ShopContext)
const {products} = data
  return (
    <div className='main'>

      <div> {products.map((item,index) => <ProductManagement value={item} key={index}/>)}</div>
    </div>
   
  )
}
