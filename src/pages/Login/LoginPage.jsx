import React, { useState,useEffect } from 'react'
import './LoginPage.css'
import button from './button.module.css'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {
  const data = useContext(ShopContext)
 const {formValues,setFormValues } = data

 const [loginValues,setLoginValues] = useState([{email:'',pass:''}])
  

 const handleSubmit = (e) =>
 {
    e.preventDefault();
    
   
   
   
  }

  
  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginValues({ ...loginValues, [name]: value });
    const updatedLoginValues=[loginValues]
        console.log(updatedLoginValues)
  };
  const navigate = useNavigate() 
  

  
  return (
    <div className='LoginPage'> <h2>Login</h2>
    <form onSubmit={handleSubmit}>
     
      <label htmlFor="email">Email</label>
      <input value={loginValues.email} onChange={handleLoginChange} type="email"  name="email" placeholder='yourname@gmail.com' />

      <label htmlFor="password">Password</label>
      <input value={loginValues.pass} onChange={handleLoginChange} type="password" name="pass" placeholder='**************'
      
     />
      <button onClick={()=>{
         if (
          formValues.email === loginValues.email &&
          formValues.pass === loginValues.pass
        ) {
         navigate('/')
        } else {
          alert('Values do not match.');
        }
       
        
         setFormValues({email:'',pass:''})
        
       
    
     
    
    }} className={button.Button} type="submit">Login</button>
    </form>
    <div className="signup"><p>Dont have an account?<Link to={'/signup'}> SIGN UP</Link></p></div>
    </div>

  )
}
