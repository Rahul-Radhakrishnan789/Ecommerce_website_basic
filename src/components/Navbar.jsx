import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
       <div className="navname">shoeland</div>
       <div className="category">
        <Link to="">Men</Link>
      <Link to="">Women</Link>
       </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/LoginPage"> Login/Signup </Link>
        <Link to="/cart"><ShoppingCart size={32} /> </Link>
      </div>
    </div>
  );
};