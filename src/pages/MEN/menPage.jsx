import React from 'react'
import './menPage.css'
import { PRODUCTS } from '../../Products'
import { MensProduct } from './MensProduct'
export const MENPRODUCTS = PRODUCTS.filter((item) => item.category==='men')

export const MenPage = () => {

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
