import React, { useEffect } from 'react'
import "./SignUpPage.css"
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';
import {  Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SignUpPage = () => {
  const data =useContext(ShopContext)
  const {formValues,setFormValues ,handleChange ,handleSubmit,setIsLoggedIn,setUserName} = data;
 const navigate=useNavigate();

const username = formValues.username;
const password = formValues.password;

 const handleClick = async  () => {
  try{

  await axios.post('http://localhost:3007/api/users/register',{username:username,password:password});

  setFormValues({username:data.username,password:data.password});
 

  navigate('/LoginPage')
  changeName()
  }  
  catch (error) {
    console.error('Error registering user:', error);
   
  }
  
 
}


   const changeName = () =>
   {
     setUserName((formValues.username))
     setIsLoggedIn(true)

   }

 

 
  

 




 
  return (
    <div className="signup-form">
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input value={formValues.username} onChange={handleChange} type="text" name="username" placeholder='Enter your name'/>

       <label htmlFor="email">Email</label>
       <input value={formValues.email} onChange={handleChange} type="email" name="email" placeholder='yourname@gmail.com' />

      <label htmlFor="password">Set Password</label>
      <input value={formValues.password} onChange={handleChange} type="password" name="password" placeholder='**************'  />

      <button onClick={()=>{handleClick()}} type="submit">Submit</button>
    </form>

   Already have an account?<Link to={'/LoginPage'}>Login here</Link>
  </div>
  )

      }

// user.push(formValues)
// navigate('/LoginPage')
// changeName()