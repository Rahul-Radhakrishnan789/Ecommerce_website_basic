import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import {UserCircleGear} from 'phosphor-react'
import "./Navbar.css";
import { ShopContext } from '../../src/context/shop-context'


export const Navbar = () => {

  const data = useContext(ShopContext); 
  const { userName, isLoggedIn } = data;
  return (
    <div className="navbar">
       <div className="navname">shoeland</div>
       <div className="category">
   <Link to="/admin" ><UserCircleGear size={32} /></Link>  
        <Link to="">Men</Link>
      <Link to="">Women</Link>
     
       </div>
      <div className="links">
        <Link to="/"> Home </Link>
        {isLoggedIn ? (
         
        <p className="namedesign">  {userName} </p>
        ) : (
        <Link to="/signup"> Login/Signup </Link>
       
        )};
        <Link to="/cart"><ShoppingCart size={32} /> </Link>
      </div>
    </div>
  );
};