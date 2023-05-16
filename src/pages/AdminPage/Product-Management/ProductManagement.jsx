import React, { useContext } from 'react'
import { XCircle, PencilSimple} from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

import { ShopContext } from '../../../context/shop-context';
import { PRODUCTS } from '../../../Products';

export const ProductManagement = (props) => {

const  navigate = useNavigate()
    const {id,productName,price,productImage} = props.value;

    const data = useContext(ShopContext)
   const {products,setProducts} = data

    function deleteProduct(id){
      const filteredProducts =products.filter(product => product.id !== id);
      setProducts(filteredProducts);
      
    
      // console.log(filteredProducts)
      // console.log(products)
   
    }
  return (
    <div className='display'>
    <img src={productImage}/>
    <div className="values">
      <h3><b>{productName}</b></h3>
      <h3>${price}</h3>
     
      </div>
      <div className='phosphor'>
     <button onClick={() => deleteProduct(id)}><XCircle size={32} /></button> 
    <button onClick={() => navigate(`/editpage/${id}`)
 
  }> <PencilSimple size={32} /></button> 
      </div>
    </div>
  )
}
