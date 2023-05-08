import React, { useState,useEffect } from 'react'
import './LoginPage.css'
import button from './button.module.css'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {
  const {handleSubmit} =useContext(ShopContext)

  const initialValues = {email: '',Password: ''}

  const [formValues,setFormValues] = useState(initialValues)

  const handleChange = (e) =>{

    const { name,value } = e.target;
      setFormValues({...formValues, [name] : value })
       console.log(formValues)
    
  }
  const navigate = useNavigate() 
  
  return (
    <div className='LoginPage'> <h2>Login</h2>
    <form onSubmit={handleSubmit}>
     
      <label htmlFor="email">Email</label>
      <input value={formValues.email} onChange={handleChange} type="email"  name="email" placeholder='yourname@gmail.com' />

      <label htmlFor="password">Password</label>
      <input value={formValues.Password} onChange={handleChange} type="password" name="Password" placeholder='**************'
      
     />
      <button onClick={()=>{
        navigate('/')
     setFormValues(initialValues);
     
    
    }} className={button.Button} type="submit">Login</button>
    </form>
    <div className="signup"><p>Dont have an account?<Link to={'/signup'}> SIGN UP</Link></p></div>
    </div>

  )
}
