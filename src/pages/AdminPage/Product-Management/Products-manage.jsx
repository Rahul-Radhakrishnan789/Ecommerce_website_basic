import React from 'react'
import './proman.css'
import { PRODUCTS } from '../../../Products'
import { ProductManagement } from './ProductManagement'
import { useContext } from 'react'
import { ShopContext } from '../../../context/shop-context'

export const ProductsManage = () => {
  
const data = useContext(ShopContext)
const {products,searchQuery,setSearchQuery} = data

const filteredData = products.filter((item) =>
item.productName.toLowerCase().includes(searchQuery.toLowerCase())
);



  return (
    <div  className='main'>
      <input
  type="text"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  placeholder="Search..."
/>
    <div>

      <div> {filteredData.map((item,index) => <ProductManagement value={item} key={index}/>)}</div>
    </div>
    </div>
   
  )
}
