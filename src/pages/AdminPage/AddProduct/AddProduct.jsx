import React,{useContext, useState} from 'react'
import './AddProduct.css';
import { PRODUCTS } from '../../../Products';
import { ShopContext } from '../../../context/shop-context';
import { useNavigate } from 'react-router-dom';

export const AddProduct = () => {
 const navigate = useNavigate()
  const data = useContext(ShopContext)
  const {products} = data;
    const [newProduct, setNewProduct] = useState({
        productName: '',
        price: '',
        productImage: '',
        category: '',
        id: '',
      });
    
      const handleSubmit = (event) => {
        event.preventDefault();
      
        console.log(newProduct);
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setNewProduct((prev) => ({
          ...prev,[name]: value,}));
      };


  return (
    <div className='add'> <form onSubmit={handleSubmit} className="product-form">
    <label htmlFor="product-name">Product Name:</label>
    <input
      type="text"
      id="product-name"
      name="productName"
      placeholder='Enter Product Name'
      value={newProduct.productName}
      onChange={handleChange}
    />

    <label htmlFor="product-price">Price:</label>
    <input
      type="text"
      id="product-price"
      name="price"
      placeholder='Enter Price'
      value={newProduct.price}
      onChange={handleChange}
    />

    <label htmlFor="product-image">Product Image:</label>
    <input
      type="text"
      id="product-image"
      name="productImage"
      placeholder='Add Image url'
      value={newProduct.productImage}
      onChange={handleChange}
    />

    <label htmlFor="product-category">Category:</label>
    <select
      id="product-category"
      name="category"
    
      value={newProduct.category}
      onChange={handleChange}
    >
      <option value="">Select a category</option>
      <option value="men">Men</option>
      <option value="women">Women</option>
    </select>

    <label htmlFor="product-id">Product ID:</label> 
    <input
      type="text"
      id="product-id"
      name="id"
      placeholder='Please Provide an ID'
      value={newProduct.id}
      onChange={handleChange}
    />

    <button type="submit" onClick={() => {
         products.push(newProduct)
         navigate('/')
         console.log(PRODUCTS)
}} >Submit</button>
  </form></div>
  )
}
