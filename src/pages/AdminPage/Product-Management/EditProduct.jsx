import { useState,useContext } from 'react'
import { ShopContext } from '../../../context/shop-context'
import React from 'react'
import './EditProduct.css'

export const EditProduct = () => {
    const data = useContext(ShopContext);
    const { products, setProducts } = data;

    const [editProduct, setEditProduct] = useState({
        productName: '',
        price: '',
        productImage: '',
        category: '',
      });

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditProduct((prev) => ({
          ...prev,[name]: value,}));
          console.log(editProduct)
      };



  return (
    <div className='editproducts'> <div className='edits'>
    <h2>Edit Product</h2>
    <form  className='product-forms' onSubmit={handleSubmit}>
      <label htmlFor='product-name'>Product Name:</label>
      <input
        type='text'
        id='product-name'
        name='productName'
        value={editProduct.productName}
        onChange={handleChange}
      />

      <label htmlFor='product-price'>Price:</label>
      <input
        type='text'
        id='product-price'
        name='price'
        value={editProduct.price}
        onChange={handleChange}
      />

      <label htmlFor='product-image'>Product Image:</label>
      <input
        type='text'
        id='product-image'
        name='productImage'
        value={editProduct.productImage}
        onChange={handleChange}
      />

      <label htmlFor='product-category'>Category:</label>
      <select
        id='product-category'
        name='category'
        value={editProduct.category}
        onChange={handleChange}
      >
        <option value=''>Select a category</option>
        <option value='men'>Men</option>
        <option value='women'>Women</option>
      </select>

      <button type='submit'>Update</button>
    </form>
  </div></div>
  )
}
