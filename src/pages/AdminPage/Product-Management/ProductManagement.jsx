import React from 'react'

import { XCircle, PencilSimple} from 'phosphor-react';

export const ProductManagement = (props) => {
    const {id,productName,price,productImage} = props.value;
  return (
    <div className='display'>
    <img src={productImage}/>
    <div className="values">
      <h3><b>{productName}</b></h3>
      <h3>${price}</h3>
     
      </div>
      <div className='phosphor'>
     <button><XCircle size={32} /></button> 
    <button> <PencilSimple size={32} /></button> 
      </div>
    </div>
  )
}
