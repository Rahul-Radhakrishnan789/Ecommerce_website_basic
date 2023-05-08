import React from 'react'
import "./SignUpPage.css"
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const SignUpPage = () => {
  const {formValues,setFormValues ,handleChange,handleSubmit} =useContext(ShopContext)
 const navigate=useNavigate();
  return (
    <div className="signup-form">
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input value={formValues.username} onChange={handleChange} type="text" name="username" placeholder='Enter your name'/>

      <label htmlFor="email">Email</label>
      <input value={formValues.email} onChange={handleChange} type="email" name="email" placeholder='yourname@gmail.com' />

      <label htmlFor="password">Set Password</label>
      <input value={formValues.pass} onChange={handleChange} type="password" name="pass" placeholder='**************'  />

      <button onClick={()=>{
           navigate('/')
    
    }} type="submit">Submit</button>
    </form>

   Already have an account?<Link to={'/LoginPage'}>Login here</Link>
  </div>
  )
}
