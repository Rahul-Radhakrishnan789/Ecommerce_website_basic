import React,{useContext} from 'react'
import './menPage.css'
import { PRODUCTS } from '../../Products'
import { MensProduct } from './MensProduct'

import { ShopContext } from '../../context/shop-context'
export const MenPage = () => {
  const data = useContext(ShopContext)
  const {products} = data
  const MENPRODUCTS = products.filter((item) => item.category==='men')

  return (
    <div className='mainmen'>
        <div>MEN</div>
        <div className='productsa' >
            {MENPRODUCTS.map((item,index) => <MensProduct value={item} key={index}/>
              
            )}
        </div>
    </div>
  )
}
