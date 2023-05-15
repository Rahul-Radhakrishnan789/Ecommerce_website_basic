import React,{useContext} from 'react'
import './WomenPage.css'
import { PRODUCTS } from '../../Products'
import { WomensProduct } from './WomensProduct'
import { ShopContext } from '../../context/shop-context'

export const WomenPage = () => {
  const data = useContext(ShopContext)
  const {products} = data
   const WOMENPRODUCTS = products.filter((item) => item.category==='women')
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
